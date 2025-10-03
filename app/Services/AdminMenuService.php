<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;

class AdminMenuService
{
    protected $modulesPath;
    protected $moduleCache;

    public function __construct()
    {
        $this->modulesPath = base_path('Modules');
        $this->moduleCache = null;
    }

    /**
     * Get all modules with their configurations
     */
    public function getModules(): Collection
    {
        if ($this->moduleCache === null) {
            $this->moduleCache = $this->loadModules();
        }

        return $this->moduleCache;
    }

    /**
     * Load all module configurations from their module.json files
     */
    protected function loadModules(): Collection
    {
        $modules = collect();

        if (!File::exists($this->modulesPath)) {
            return $modules;
        }

        try {
            $moduleDirectories = File::directories($this->modulesPath);

            foreach ($moduleDirectories as $moduleDir) {
                $moduleJsonPath = $moduleDir . '/module.json';

                if (File::exists($moduleJsonPath)) {
                    try {
                        $moduleContent = File::get($moduleJsonPath);
                        $moduleData = json_decode($moduleContent, true);

                        if ($moduleData && isset($moduleData['name']) && is_array($moduleData)) {
                            $modules->push($moduleData);
                        }
                    } catch (\Exception $e) {
                        // Skip this module if JSON is invalid
                        continue;
                    }
                }
            }
        } catch (\Exception $e) {
            // Return empty collection if there's any file system error
            return collect([]);
        }

        return $modules->sortBy('priority')->values();
    }

    /**
     * Get structured admin menu data for the frontend
     */
    public function getAdminMenuData(): array
    {
        $modules = $this->getModules();
        $menuGroups = [];

        // Group modules by category for better organization
        $categoryGroups = [
            'overview' => [
                'title' => 'Overview',
                'priority' => 1,
                'modules' => []
            ],
            'users' => [
                'title' => 'User Management',
                'priority' => 2,
                'modules' => []
            ],
            'catalog' => [
                'title' => 'Catalog Management',
                'priority' => 3,
                'modules' => []
            ],
            'sales' => [
                'title' => 'Sales & Orders',
                'priority' => 4,
                'modules' => []
            ],
            'marketing' => [
                'title' => 'Marketing & Promotions',
                'priority' => 5,
                'modules' => []
            ],
            'operations' => [
                'title' => 'Operations',
                'priority' => 6,
                'modules' => []
            ],
            'content' => [
                'title' => 'Content Management',
                'priority' => 7,
                'modules' => []
            ],
            'security' => [
                'title' => 'Security & Support',
                'priority' => 8,
                'modules' => []
            ],
            'system' => [
                'title' => 'System',
                'priority' => 9,
                'modules' => []
            ],
        ];

        // Add core dashboard items
        $categoryGroups['overview']['modules'][] = [
            'name' => 'Dashboard',
            'admin_menu' => [
                'title' => 'Dashboard',
                'icon' => 'layout-grid',
                'route' => 'admin.dashboard',
                'permission' => 'admin.view'
            ]
        ];

        // Categorize modules based on their category or name
        foreach ($modules as $module) {
            if (!isset($module['admin_menu']) || !$module['admin_menu']) {
                continue;
            }

            $category = $this->categorizeModule($module);

            if (isset($categoryGroups[$category])) {
                $categoryGroups[$category]['modules'][] = $module;
            }
        }

        // Convert to the format expected by the frontend
        foreach ($categoryGroups as $categoryKey => $categoryData) {
            if (empty($categoryData['modules'])) {
                continue;
            }

            $menuGroup = [
                'title' => $categoryData['title'],
                'items' => []
            ];

            foreach ($categoryData['modules'] as $module) {
                $adminMenu = $module['admin_menu'];

                // Skip if admin_menu is null or invalid
                if (!$adminMenu || !isset($adminMenu['title']) || !isset($adminMenu['route'])) {
                    continue;
                }

                try {
                    $href = route($adminMenu['route'], [], false);
                } catch (\Exception $e) {
                    // If route doesn't exist, use a placeholder href
                    $href = '/admin/dashboard';
                }

                $menuItem = [
                    'title' => $adminMenu['title'],
                    'href' => $href,
                    'icon' => $this->mapIconName($adminMenu['icon'] ?? 'folder'),
                    'permission' => $adminMenu['permission'] ?? null
                ];

                // Add children if they exist
                if (isset($adminMenu['children']) && is_array($adminMenu['children'])) {
                    $menuItem['children'] = array_map(function($child) {
                        try {
                            $childHref = route($child['route'], [], false);
                        } catch (\Exception $e) {
                            $childHref = '/admin/dashboard';
                        }

                        return [
                            'title' => $child['title'],
                            'href' => $childHref,
                            'permission' => $child['permission'] ?? null
                        ];
                    }, $adminMenu['children']);
                }

                $menuGroup['items'][] = $menuItem;
            }

            $menuGroups[] = $menuGroup;
        }

        return $menuGroups;
    }

    /**
     * Categorize a module based on its properties
     */
    protected function categorizeModule(array $module): string
    {
        $name = strtolower($module['name']);
        $category = $module['category'] ?? '';

        // Direct category mappings
        $categoryMappings = [
            'auth' => 'users',
            'customer' => 'users',
            'product' => 'catalog',
            'category' => 'catalog',
            'inventory' => 'catalog',
            'review' => 'catalog',
            'order' => 'sales',
            'cart' => 'sales',
            'wishlist' => 'sales',
            'discount' => 'marketing',
            'newsletter' => 'marketing',
            'blog' => 'marketing',
            'seo' => 'marketing',
            'payment' => 'operations',
            'shipping' => 'operations',
            'courier' => 'operations',
            'pagebuilder' => 'content',
            'menubuilder' => 'content',
            'fraudchecker' => 'security',
            'support' => 'security',
            'settings' => 'system',
            'analytics' => 'overview',
        ];

        return $categoryMappings[$name] ?? 'system';
    }

    /**
     * Map icon names from modules to Lucide React icons
     */
    protected function mapIconName(string $iconName): string
    {
        $iconMappings = [
            'users' => 'Users',
            'user-check' => 'UserCheck',
            'shopping-bag' => 'ShoppingBag',
            'shopping-cart' => 'ShoppingCart',
            'package' => 'Package',
            'tags' => 'Tags',
            'star' => 'Star',
            'heart' => 'Heart',
            'percent' => 'Percent',
            'mail' => 'Mail',
            'file-text' => 'FileText',
            'search' => 'Search',
            'credit-card' => 'CreditCard',
            'truck' => 'Truck',
            'building-2' => 'Building2',
            'layers' => 'Layers',
            'menu' => 'Menu',
            'shield-check' => 'ShieldCheck',
            'headphones' => 'Headphones',
            'cog' => 'Settings',
            'settings' => 'Settings',
            'bar-chart-3' => 'BarChart3',
            'layout-grid' => 'LayoutGrid',
        ];

        return $iconMappings[$iconName] ?? 'Folder';
    }

    /**
     * Get modules by category
     */
    public function getModulesByCategory(string $category): Collection
    {
        return $this->getModules()->filter(function ($module) use ($category) {
            return ($module['category'] ?? '') === $category;
        });
    }

    /**
     * Check if user has permission for a menu item
     */
    public function hasPermission(string $permission): bool
    {
        // TODO: Implement actual permission checking logic
        // This would typically check against user permissions/roles
        return true;
    }

    /**
     * Clear the module cache
     */
    public function clearCache(): void
    {
        $this->moduleCache = null;
    }
}
