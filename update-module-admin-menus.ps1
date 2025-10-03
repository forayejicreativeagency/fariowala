# Module Admin Menu Generator Script
# This script adds proper admin menu configurations to modules that don't have them

$modulesPath = "d:\fariawala\Modules"

# Define admin menu configurations for each module
$adminMenuConfigs = @{
    "Analytics" = @{
        "title" = "Analytics"
        "icon" = "bar-chart-3"
        "route" = "admin.analytics.dashboard"
        "permission" = "analytics.view"
        "children" = @(
            @{ "title" = "Analytics Dashboard"; "route" = "admin.analytics.dashboard"; "permission" = "analytics.view" },
            @{ "title" = "Sales Reports"; "route" = "admin.analytics.sales"; "permission" = "analytics.reports" },
            @{ "title" = "User Analytics"; "route" = "admin.analytics.users"; "permission" = "analytics.reports" },
            @{ "title" = "Product Analytics"; "route" = "admin.analytics.products"; "permission" = "analytics.reports" }
        )
    }

    "Blog" = @{
        "title" = "Blog Management"
        "icon" = "file-text"
        "route" = "admin.blog.posts.index"
        "permission" = "blog.view"
        "children" = @(
            @{ "title" = "All Posts"; "route" = "admin.blog.posts.index"; "permission" = "blog.view" },
            @{ "title" = "Create Post"; "route" = "admin.blog.posts.create"; "permission" = "blog.create" },
            @{ "title" = "Categories"; "route" = "admin.blog.categories.index"; "permission" = "blog.categories" },
            @{ "title" = "Tags"; "route" = "admin.blog.tags.index"; "permission" = "blog.tags" }
        )
    }

    "Cart" = @{
        "title" = "Shopping Cart"
        "icon" = "shopping-cart"
        "route" = "admin.cart.index"
        "permission" = "cart.view"
        "children" = @(
            @{ "title" = "Active Carts"; "route" = "admin.cart.index"; "permission" = "cart.view" },
            @{ "title" = "Abandoned Carts"; "route" = "admin.cart.abandoned"; "permission" = "cart.view" },
            @{ "title" = "Cart Analytics"; "route" = "admin.cart.analytics"; "permission" = "cart.analytics" }
        )
    }

    "Category" = @{
        "title" = "Categories"
        "icon" = "tags"
        "route" = "admin.categories.index"
        "permission" = "categories.view"
        "children" = @(
            @{ "title" = "All Categories"; "route" = "admin.categories.index"; "permission" = "categories.view" },
            @{ "title" = "Add Category"; "route" = "admin.categories.create"; "permission" = "categories.create" },
            @{ "title" = "Category Tree"; "route" = "admin.categories.tree"; "permission" = "categories.view" }
        )
    }

    "Courier" = @{
        "title" = "Courier Services"
        "icon" = "building-2"
        "route" = "admin.courier.index"
        "permission" = "courier.view"
        "children" = @(
            @{ "title" = "Courier Dashboard"; "route" = "admin.courier.index"; "permission" = "courier.view" },
            @{ "title" = "Courier Partners"; "route" = "admin.courier.partners"; "permission" = "courier.manage" },
            @{ "title" = "Delivery Zones"; "route" = "admin.courier.zones"; "permission" = "courier.zones" }
        )
    }

    "Customer" = @{
        "title" = "Customers"
        "icon" = "user-check"
        "route" = "admin.customers.index"
        "permission" = "customers.view"
        "children" = @(
            @{ "title" = "All Customers"; "route" = "admin.customers.index"; "permission" = "customers.view" },
            @{ "title" = "Customer Groups"; "route" = "admin.customers.groups"; "permission" = "customers.groups" },
            @{ "title" = "Customer Analytics"; "route" = "admin.customers.analytics"; "permission" = "customers.analytics" }
        )
    }

    "Discount" = @{
        "title" = "Discounts & Coupons"
        "icon" = "percent"
        "route" = "admin.discounts.index"
        "permission" = "discounts.view"
        "children" = @(
            @{ "title" = "All Discounts"; "route" = "admin.discounts.index"; "permission" = "discounts.view" },
            @{ "title" = "Create Discount"; "route" = "admin.discounts.create"; "permission" = "discounts.create" },
            @{ "title" = "Coupon Codes"; "route" = "admin.discounts.coupons"; "permission" = "discounts.coupons" }
        )
    }

    "Inventory" = @{
        "title" = "Inventory Management"
        "icon" = "package"
        "route" = "admin.inventory.index"
        "permission" = "inventory.view"
        "children" = @(
            @{ "title" = "Stock Overview"; "route" = "admin.inventory.index"; "permission" = "inventory.view" },
            @{ "title" = "Stock Adjustments"; "route" = "admin.inventory.adjustments"; "permission" = "inventory.adjust" },
            @{ "title" = "Low Stock Alerts"; "route" = "admin.inventory.alerts"; "permission" = "inventory.alerts" }
        )
    }

    "MenuBuilder" = @{
        "title" = "Menu Builder"
        "icon" = "menu"
        "route" = "admin.menu-builder.index"
        "permission" = "menu.manage"
        "children" = @(
            @{ "title" = "Navigation Menus"; "route" = "admin.menu-builder.index"; "permission" = "menu.view" },
            @{ "title" = "Create Menu"; "route" = "admin.menu-builder.create"; "permission" = "menu.create" },
            @{ "title" = "Menu Items"; "route" = "admin.menu-builder.items"; "permission" = "menu.items" }
        )
    }

    "Newsletter" = @{
        "title" = "Newsletter"
        "icon" = "mail"
        "route" = "admin.newsletter.index"
        "permission" = "newsletter.view"
        "children" = @(
            @{ "title" = "Subscribers"; "route" = "admin.newsletter.index"; "permission" = "newsletter.view" },
            @{ "title" = "Campaigns"; "route" = "admin.newsletter.campaigns"; "permission" = "newsletter.campaigns" },
            @{ "title" = "Templates"; "route" = "admin.newsletter.templates"; "permission" = "newsletter.templates" }
        )
    }

    "Order" = @{
        "title" = "Order Management"
        "icon" = "shopping-cart"
        "route" = "admin.orders.index"
        "permission" = "orders.view"
        "children" = @(
            @{ "title" = "All Orders"; "route" = "admin.orders.index"; "permission" = "orders.view" },
            @{ "title" = "Pending Orders"; "route" = "admin.orders.pending"; "permission" = "orders.view" },
            @{ "title" = "Order Analytics"; "route" = "admin.orders.analytics"; "permission" = "orders.analytics" }
        )
    }

    "PageBuilder" = @{
        "title" = "Page Builder"
        "icon" = "layers"
        "route" = "admin.pages.index"
        "permission" = "pages.manage"
        "children" = @(
            @{ "title" = "All Pages"; "route" = "admin.pages.index"; "permission" = "pages.view" },
            @{ "title" = "Create Page"; "route" = "admin.pages.create"; "permission" = "pages.create" },
            @{ "title" = "Page Templates"; "route" = "admin.pages.templates"; "permission" = "pages.templates" }
        )
    }

    "Payment" = @{
        "title" = "Payment Management"
        "icon" = "credit-card"
        "route" = "admin.payments.index"
        "permission" = "payments.view"
        "children" = @(
            @{ "title" = "Payment Dashboard"; "route" = "admin.payments.index"; "permission" = "payments.view" },
            @{ "title" = "Payment Methods"; "route" = "admin.payments.methods"; "permission" = "payments.methods" },
            @{ "title" = "Transaction History"; "route" = "admin.payments.transactions"; "permission" = "payments.transactions" }
        )
    }

    "Review" = @{
        "title" = "Reviews & Ratings"
        "icon" = "star"
        "route" = "admin.reviews.index"
        "permission" = "reviews.view"
        "children" = @(
            @{ "title" = "All Reviews"; "route" = "admin.reviews.index"; "permission" = "reviews.view" },
            @{ "title" = "Pending Reviews"; "route" = "admin.reviews.pending"; "permission" = "reviews.moderate" },
            @{ "title" = "Review Analytics"; "route" = "admin.reviews.analytics"; "permission" = "reviews.analytics" }
        )
    }

    "SEO" = @{
        "title" = "SEO Management"
        "icon" = "search"
        "route" = "admin.seo.index"
        "permission" = "seo.manage"
        "children" = @(
            @{ "title" = "SEO Dashboard"; "route" = "admin.seo.index"; "permission" = "seo.view" },
            @{ "title" = "Meta Tags"; "route" = "admin.seo.meta"; "permission" = "seo.meta" },
            @{ "title" = "Sitemaps"; "route" = "admin.seo.sitemaps"; "permission" = "seo.sitemaps" }
        )
    }

    "Shipping" = @{
        "title" = "Shipping Management"
        "icon" = "truck"
        "route" = "admin.shipping.index"
        "permission" = "shipping.view"
        "children" = @(
            @{ "title" = "Shipping Methods"; "route" = "admin.shipping.index"; "permission" = "shipping.view" },
            @{ "title" = "Shipping Zones"; "route" = "admin.shipping.zones"; "permission" = "shipping.zones" },
            @{ "title" = "Shipping Rates"; "route" = "admin.shipping.rates"; "permission" = "shipping.rates" }
        )
    }

    "Wishlist" = @{
        "title" = "Wishlist Management"
        "icon" = "heart"
        "route" = "admin.wishlist.index"
        "permission" = "wishlist.view"
        "children" = @(
            @{ "title" = "User Wishlists"; "route" = "admin.wishlist.index"; "permission" = "wishlist.view" },
            @{ "title" = "Popular Items"; "route" = "admin.wishlist.popular"; "permission" = "wishlist.analytics" },
            @{ "title" = "Wishlist Analytics"; "route" = "admin.wishlist.analytics"; "permission" = "wishlist.analytics" }
        )
    }
}

# Process each module
Get-ChildItem -Path $modulesPath -Directory | ForEach-Object {
    $moduleName = $_.Name
    $moduleJsonPath = Join-Path $_.FullName "module.json"

    if (Test-Path $moduleJsonPath) {
        Write-Host "Processing module: $moduleName"

        # Read the current module.json
        $moduleContent = Get-Content $moduleJsonPath -Raw | ConvertFrom-Json

        # Check if admin_menu exists and is null or empty
        if (-not $moduleContent.admin_menu -and $adminMenuConfigs.ContainsKey($moduleName)) {
            Write-Host "Adding admin menu configuration to $moduleName"

            # Add the admin menu configuration
            $moduleContent | Add-Member -Type NoteProperty -Name "admin_menu" -Value $adminMenuConfigs[$moduleName] -Force

            # Convert back to JSON and save
            $updatedJson = $moduleContent | ConvertTo-Json -Depth 10
            Set-Content -Path $moduleJsonPath -Value $updatedJson -Encoding UTF8

            Write-Host "✅ Updated $moduleName module.json with admin menu configuration"
        } else {
            Write-Host "⚠️  Skipped $moduleName - admin menu already exists or no configuration defined"
        }
    } else {
        Write-Host "❌ No module.json found for $moduleName"
    }
}

Write-Host "`n🎉 Module admin menu configuration update completed!"
