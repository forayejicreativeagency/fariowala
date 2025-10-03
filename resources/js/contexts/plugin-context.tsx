import { createContext, useContext, useState, type ReactNode } from 'react';
import {
    BarChart3,
    FileText,
    ShoppingCart,
    Tags,
    Plane,
    Users,
    Percent,
    Shield,
    Package,
    FolderOpen,
    Mail,
    CreditCard,
    Star,
    Search,
    Settings,
    Truck,
    MessageCircle,
    Heart,
    type LucideIcon
} from 'lucide-react';

interface Plugin {
    id: string;
    name: string;
    description: string;
    category: string;
    enabled: boolean;
    essential: boolean;
    icon: LucideIcon;
}

interface PluginContextType {
    plugins: Plugin[];
    togglePlugin: (pluginId: string) => void;
    isPluginEnabled: (pluginId: string) => boolean;
}

const PluginContext = createContext<PluginContextType | undefined>(undefined);

const defaultPlugins: Plugin[] = [
    { id: 'analytics', name: 'Analytics & Reports', description: 'Track sales, customer behavior, and business insights', category: 'Analytics', enabled: true, essential: false, icon: BarChart3 },
    { id: 'orders', name: 'Order Management', description: 'Process orders, manage fulfillment and tracking', category: 'Core', enabled: true, essential: true, icon: ShoppingCart },
    { id: 'products', name: 'Product Catalog', description: 'Manage products, inventory, and categories', category: 'Core', enabled: true, essential: true, icon: Package },
    { id: 'customers', name: 'Customer Management', description: 'Handle customer accounts, profiles, and relationships', category: 'CRM', enabled: true, essential: true, icon: Users },
    { id: 'users', name: 'User Management', description: 'Manage system users and roles', category: 'CRM', enabled: true, essential: true, icon: Users },
    { id: 'categories', name: 'Categories', description: 'Product categorization and taxonomy', category: 'Core', enabled: true, essential: false, icon: Tags },
    { id: 'tags', name: 'Tags', description: 'Product tagging system', category: 'Core', enabled: true, essential: false, icon: Tags },
    { id: 'attributes', name: 'Product Attributes', description: 'Product specifications and variants', category: 'Core', enabled: true, essential: false, icon: Package },
    { id: 'inventory', name: 'Inventory Management', description: 'Stock tracking and management', category: 'Core', enabled: true, essential: false, icon: Package },
    { id: 'cart', name: 'Cart Management', description: 'Shopping cart and session management', category: 'Core', enabled: true, essential: false, icon: ShoppingCart },
    { id: 'wishlist', name: 'Wishlist', description: 'Customer wishlist functionality', category: 'Core', enabled: true, essential: false, icon: Heart },
    { id: 'payments', name: 'Payment Processing', description: 'Handle payments, refunds, and financial transactions', category: 'Finance', enabled: true, essential: true, icon: CreditCard },
    { id: 'shipping', name: 'Shipping & Logistics', description: 'Manage shipping methods, rates, and tracking', category: 'Logistics', enabled: true, essential: false, icon: Truck },
    { id: 'courier', name: 'Courier Services', description: 'Third-party delivery integration', category: 'Logistics', enabled: true, essential: false, icon: Plane },
    { id: 'fraud', name: 'Fraud Protection', description: 'Security monitoring and fraud prevention', category: 'Security', enabled: true, essential: false, icon: Shield },
    { id: 'discounts', name: 'Discounts & Coupons', description: 'Promotional codes and discount management', category: 'Marketing', enabled: true, essential: false, icon: Percent },
    { id: 'blog', name: 'Blog & Content', description: 'Content management and blog publishing', category: 'Content', enabled: false, essential: false, icon: FileText },
    { id: 'newsletter', name: 'Email Marketing', description: 'Newsletter campaigns and email automation', category: 'Marketing', enabled: false, essential: false, icon: Mail },
    { id: 'seo', name: 'SEO Optimization', description: 'Search engine optimization tools and meta management', category: 'Marketing', enabled: false, essential: false, icon: Search },
    { id: 'support', name: 'Customer Support', description: 'Help desk, tickets, and customer service tools', category: 'Support', enabled: true, essential: false, icon: MessageCircle },
    { id: 'reviews', name: 'Reviews & Ratings', description: 'Customer reviews, ratings, and feedback system', category: 'Marketing', enabled: true, essential: false, icon: Star },
];

export function PluginProvider({ children }: { children: ReactNode }) {
    const [plugins, setPlugins] = useState<Plugin[]>(() => {
        // Load from localStorage if available
        const saved = localStorage.getItem('plugins');
        if (saved) {
            try {
                const savedPlugins = JSON.parse(saved);
                // Merge saved state with default plugins (to restore icon references)
                return defaultPlugins.map(defaultPlugin => {
                    const savedPlugin = savedPlugins.find((p: any) => p.id === defaultPlugin.id);
                    return savedPlugin
                        ? { ...defaultPlugin, enabled: savedPlugin.enabled }
                        : defaultPlugin;
                });
            } catch (error) {
                console.warn('Failed to parse saved plugins, using defaults');
                return defaultPlugins;
            }
        }
        return defaultPlugins;
    });

    const togglePlugin = (pluginId: string) => {
        setPlugins(prev => {
            const updated = prev.map(plugin =>
                plugin.id === pluginId && !plugin.essential
                    ? { ...plugin, enabled: !plugin.enabled }
                    : plugin
            );
            // Save only the essential data to localStorage (no icons)
            const saveData = updated.map(plugin => ({
                id: plugin.id,
                enabled: plugin.enabled
            }));
            localStorage.setItem('plugins', JSON.stringify(saveData));
            return updated;
        });
    };

    const isPluginEnabled = (pluginId: string) => {
        const plugin = plugins.find(p => p.id === pluginId);
        return plugin ? plugin.enabled : false;
    };

    return (
        <PluginContext.Provider value={{ plugins, togglePlugin, isPluginEnabled }}>
            {children}
        </PluginContext.Provider>
    );
}

export function usePlugins() {
    const context = useContext(PluginContext);
    if (context === undefined) {
        throw new Error('usePlugins must be used within a PluginProvider');
    }
    return context;
}
