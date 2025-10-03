# Admin Dashboard Sidebar Menu System

This document describes the comprehensive admin dashboard sidebar menu system that dynamically loads navigation items from all installed modules.

## Overview

The admin sidebar system provides:
- **Dynamic menu generation** from module configurations
- **Proper icon mapping** with Lucide React icons
- **Hierarchical navigation** with collapsible submenus
- **Permission-based access control** (ready for implementation)
- **Modular architecture** that automatically includes new modules

## Features

### 🎯 Module-Based Navigation
All navigation items are automatically generated from module `module.json` files. Each module can define its admin menu structure.

### 🎨 Comprehensive Icon Set
Uses Lucide React icons with proper mapping for:
- User management (Users, UserCheck)
- E-commerce (ShoppingBag, ShoppingCart, Package)
- Content (FileText, Layers, Menu)
- Analytics (BarChart3, TrendingUp)
- Security (Shield, ShieldCheck)
- And many more...

### 📱 Responsive Design
- Collapsible sidebar for mobile devices
- Icon-only mode for compact displays
- Touch-friendly navigation

### 🔐 Permission System Ready
Each menu item can have associated permissions for role-based access control.

## Module Structure

Each module should have an `admin_menu` configuration in its `module.json`:

```json
{
  "name": "ModuleName",
  "admin_menu": {
    "title": "Module Title",
    "icon": "icon-name",
    "route": "admin.module.index",
    "permission": "module.view",
    "children": [
      {
        "title": "Sub Menu Item",
        "route": "admin.module.submenu",
        "permission": "module.submenu"
      }
    ]
  }
}
```

## Available Modules

The system includes comprehensive navigation for all e-commerce modules:

### 📊 Overview
- **Dashboard** - Main admin dashboard with stats and quick actions
- **Analytics** - Sales, user, and product analytics

### 👥 User Management
- **Users** - User management, roles, and permissions
- **Customers** - Customer management and analytics

### 🏪 Catalog Management
- **Products** - Product management with full CRUD operations
- **Categories** - Product category hierarchy
- **Inventory** - Stock management and alerts
- **Reviews** - Customer review moderation

### 💰 Sales & Orders
- **Orders** - Order management and processing
- **Shopping Cart** - Cart analytics and abandoned cart recovery
- **Wishlist** - Wishlist management and analytics

### 📢 Marketing & Promotions
- **Discounts** - Discount codes and promotional campaigns
- **Newsletter** - Email marketing and subscriber management
- **Blog** - Content management system
- **SEO** - Search engine optimization tools

### ⚡ Operations
- **Payments** - Payment gateway management
- **Shipping** - Shipping methods and zones
- **Courier** - Courier service integration

### 📄 Content Management
- **Pages** - Dynamic page builder
- **Menu Builder** - Navigation menu management

### 🔒 Security & Support
- **Fraud Protection** - Advanced fraud detection and prevention
- **Support Center** - Customer support system with tickets and live chat

### ⚙️ System
- **Settings** - Comprehensive system configuration

## Icon Mapping

The system uses Lucide React icons with automatic mapping:

```typescript
const iconMap = {
  'users' => 'Users',
  'shopping-bag' => 'ShoppingBag',
  'shopping-cart' => 'ShoppingCart',
  'package' => 'Package',
  'credit-card' => 'CreditCard',
  // ... and many more
};
```

## File Structure

```
resources/js/
├── components/
│   ├── admin-sidebar.tsx           # Static admin sidebar
│   ├── dynamic-admin-sidebar.tsx   # Dynamic admin sidebar
│   └── ui/                         # UI components
├── layouts/
│   └── admin-layout.tsx           # Admin layout wrapper
├── pages/
│   └── admin/
│       ├── dashboard.tsx          # Main admin dashboard
│       └── products/
│           └── index.tsx          # Product management page
└── types/
    └── index.d.ts                 # TypeScript definitions

app/
├── Http/Controllers/Admin/
│   └── AdminController.php        # Admin controller
└── Services/
    └── AdminMenuService.php       # Menu generation service

routes/
└── admin.php                      # Admin routes

Modules/
├── [ModuleName]/
│   └── module.json               # Module configuration
└── ...
```

## Usage

### Basic Admin Page

```tsx
import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';

export default function AdminPage() {
    return (
        <AdminLayout breadcrumbs={[...]}>
            <Head title="Admin Page" />
            <div className="space-y-6">
                {/* Your admin content */}
            </div>
        </AdminLayout>
    );
}
```

### Adding New Module Navigation

1. Create or update `module.json` in your module:

```json
{
  "name": "NewModule",
  "admin_menu": {
    "title": "New Module",
    "icon": "folder",
    "route": "admin.newmodule.index",
    "permission": "newmodule.view",
    "children": [...]
  }
}
```

2. Add routes in `routes/admin.php`:

```php
Route::get('newmodule', function () {
    return Inertia::render('admin/newmodule/index');
})->name('admin.newmodule.index');
```

3. Create the page component in `resources/js/pages/admin/newmodule/index.tsx`

## Customization

### Adding New Icons

1. Import the icon in `dynamic-admin-sidebar.tsx`:
```tsx
import { NewIcon } from 'lucide-react';
```

2. Add to the iconMap:
```tsx
const iconMap = {
  // ... existing icons
  NewIcon,
};
```

3. Update the icon mapping in `AdminMenuService.php`:
```php
protected function mapIconName(string $iconName): string
{
    $iconMappings = [
        // ... existing mappings
        'new-icon' => 'NewIcon',
    ];
    // ...
}
```

### Custom Menu Grouping

Modify the `categorizeModule` method in `AdminMenuService.php` to change how modules are grouped in the sidebar.

## Development Tools

### Update Module Admin Menus Script

Use the PowerShell script to automatically add admin menu configurations to modules:

```powershell
.\update-module-admin-menus.ps1
```

This script will:
- Scan all modules in the `Modules/` directory
- Add proper `admin_menu` configurations to modules that don't have them
- Use predefined configurations with appropriate icons and routes

## Routes

All admin routes are defined in `routes/admin.php` and are protected by authentication middleware:

- `/admin/dashboard` - Main dashboard
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/users` - User management
- And many more...

## Performance

The menu system is optimized for performance:
- Module configurations are cached
- Icons are loaded only when needed
- Responsive design minimizes layout shifts

## Future Enhancements

- [ ] Real-time permission checking
- [ ] Menu item badges for notifications
- [ ] User preference storage for collapsed/expanded states
- [ ] Advanced search within navigation
- [ ] Keyboard navigation support
- [ ] Menu item analytics and usage tracking

## Support

For issues or questions about the admin sidebar system, please check the module documentation or create an issue in the project repository.
