# Create Proper Module JSON Files
# This script creates properly formatted module.json files with all required fields

$modulesPath = "d:\fariawala\Modules"

# Base module structure that Laravel Modules expects
$baseModuleStructure = @{
    name = ""
    alias = ""
    description = ""
    keywords = @()
    version = "1.0.0"
    author = "E-commerce Platform"
    priority = 0
    core = $false
    providers = @()
    files = @()
    admin_menu = $null
}

# Define proper module configurations
$moduleConfigs = @{
    "Analytics" = @{
        description = "Advanced analytics and reporting system"
        alias = "analytics"
        providers = @("Modules\Analytics\Providers\AnalyticsServiceProvider")
        admin_menu = @{
            title = "Analytics"
            icon = "bar-chart-3"
            route = "admin.analytics.dashboard"
            permission = "analytics.view"
            children = @(
                @{ title = "Analytics Dashboard"; route = "admin.analytics.dashboard"; permission = "analytics.view" },
                @{ title = "Sales Reports"; route = "admin.analytics.sales"; permission = "analytics.reports" },
                @{ title = "User Analytics"; route = "admin.analytics.users"; permission = "analytics.reports" },
                @{ title = "Product Analytics"; route = "admin.analytics.products"; permission = "analytics.reports" }
            )
        }
    }

    "Auth" = @{
        description = "User authentication and authorization system"
        alias = "auth"
        providers = @("Modules\Auth\Providers\AuthServiceProvider")
        admin_menu = @{
            title = "User Management"
            icon = "users"
            route = "admin.users.index"
            permission = "users.view"
            children = @(
                @{ title = "All Users"; route = "admin.users.index"; permission = "users.view" },
                @{ title = "Add User"; route = "admin.users.create"; permission = "users.create" },
                @{ title = "Roles & Permissions"; route = "admin.roles.index"; permission = "roles.view" },
                @{ title = "User Groups"; route = "admin.user-groups.index"; permission = "user-groups.view" }
            )
        }
    }

    "Blog" = @{
        description = "Blog management system with posts, categories, and tags"
        alias = "blog"
        providers = @("Modules\Blog\Providers\BlogServiceProvider")
        admin_menu = @{
            title = "Blog Management"
            icon = "file-text"
            route = "admin.blog.posts.index"
            permission = "blog.view"
            children = @(
                @{ title = "All Posts"; route = "admin.blog.posts.index"; permission = "blog.view" },
                @{ title = "Create Post"; route = "admin.blog.posts.create"; permission = "blog.create" },
                @{ title = "Categories"; route = "admin.blog.categories.index"; permission = "blog.categories" },
                @{ title = "Tags"; route = "admin.blog.tags.index"; permission = "blog.tags" }
            )
        }
    }

    "Cart" = @{
        description = "Shopping cart functionality with session management"
        alias = "cart"
        providers = @("Modules\Cart\Providers\CartServiceProvider")
        admin_menu = @{
            title = "Shopping Cart"
            icon = "shopping-cart"
            route = "admin.cart.index"
            permission = "cart.view"
            children = @(
                @{ title = "Active Carts"; route = "admin.cart.index"; permission = "cart.view" },
                @{ title = "Abandoned Carts"; route = "admin.cart.abandoned"; permission = "cart.view" },
                @{ title = "Cart Analytics"; route = "admin.cart.analytics"; permission = "cart.analytics" }
            )
        }
    }
}

# Default modules without specific config
$defaultModules = @("Category", "Courier", "Customer", "Discount", "FraudChecker", "Inventory", "MenuBuilder", "Newsletter", "Order", "PageBuilder", "Payment", "Product", "Review", "SEO", "Settings", "Shipping", "Support", "Wishlist")

Write-Host "Creating proper module.json files..."
Write-Host "=" * 50

$createdCount = 0

# Process configured modules
foreach ($moduleName in $moduleConfigs.Keys) {
    $moduleDir = Join-Path $modulesPath $moduleName
    $moduleJsonPath = Join-Path $moduleDir "module.json"

    if (Test-Path $moduleDir) {
        try {
            $config = $moduleConfigs[$moduleName]

            $moduleData = $baseModuleStructure.Clone()
            $moduleData.name = $moduleName
            $moduleData.alias = $config.alias
            $moduleData.description = $config.description
            $moduleData.providers = $config.providers
            $moduleData.admin_menu = $config.admin_menu

            $jsonContent = $moduleData | ConvertTo-Json -Depth 10
            Set-Content -Path $moduleJsonPath -Value $jsonContent -Encoding UTF8

            Write-Host "✅ Created $moduleName"
            $createdCount++
        } catch {
            Write-Host "❌ Error creating $moduleName`: $($_.Exception.Message)"
        }
    }
}

# Process default modules
foreach ($moduleName in $defaultModules) {
    $moduleDir = Join-Path $modulesPath $moduleName
    $moduleJsonPath = Join-Path $moduleDir "module.json"

    if (Test-Path $moduleDir) {
        try {
            $moduleData = $baseModuleStructure.Clone()
            $moduleData.name = $moduleName
            $moduleData.alias = $moduleName.ToLower()
            $moduleData.description = "$moduleName module"
            $moduleData.providers = @("Modules\$moduleName\Providers\${moduleName}ServiceProvider")

            $jsonContent = $moduleData | ConvertTo-Json -Depth 10
            Set-Content -Path $moduleJsonPath -Value $jsonContent -Encoding UTF8

            Write-Host "✅ Created $moduleName (default)"
            $createdCount++
        } catch {
            Write-Host "❌ Error creating $moduleName`: $($_.Exception.Message)"
        }
    }
}

Write-Host "`n" + "=" * 50
Write-Host "Summary: Created $createdCount module.json files"
Write-Host "🎉 All module.json files have been recreated with proper structure!"
