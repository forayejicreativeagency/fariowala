import { NavFooter } from '@/components/nav-footer';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    // Core Icons
    LayoutGrid,
    BarChart3,
    Users,
    ShoppingBag,
    ShoppingCart,
    Package,
    Truck,
    CreditCard,
    Settings,
    Headphones,

    // E-commerce Icons
    Tags,
    Star,
    Heart,
    Percent,
    UserCheck,
    MessageSquare,
    Mail,
    Search,
    Shield,
    ShieldCheck,
    FileText,
    Layers,
    Menu,
    Building2,

    // Utility Icons
    BookOpen,
    Folder,
    ChevronRight,
    Archive,
} from 'lucide-react';
import AppLogo from './app-logo';

// Admin Navigation Structure with proper icons
const adminNavGroups = [
    {
        title: 'Overview',
        items: [
            {
                title: 'Dashboard',
                href: '/admin/dashboard',
                icon: LayoutGrid,
            },
            {
                title: 'Analytics',
                href: '/admin/analytics',
                icon: BarChart3,
            },
        ],
    },
    {
        title: 'User Management',
        items: [
            {
                title: 'Users',
                href: '/admin/users',
                icon: Users,
                children: [
                    { title: 'All Users', href: '/admin/users' },
                    { title: 'Add User', href: '/admin/users/create' },
                    { title: 'Roles & Permissions', href: '/admin/roles' },
                    { title: 'User Groups', href: '/admin/user-groups' },
                ],
            },
            {
                title: 'Customers',
                href: '/admin/customers',
                icon: UserCheck,
            },
        ],
    },
    {
        title: 'Catalog Management',
        items: [
            {
                title: 'Products',
                href: '/admin/products',
                icon: ShoppingBag,
                children: [
                    { title: 'All Products', href: '/admin/products' },
                    { title: 'Add Product', href: '/admin/products/create' },
                    { title: 'Product Attributes', href: '/admin/products/attributes' },
                    { title: 'Bulk Actions', href: '/admin/products/bulk' },
                ],
            },
            {
                title: 'Categories',
                href: '/admin/categories',
                icon: Tags,
            },
            {
                title: 'Inventory',
                href: '/admin/inventory',
                icon: Package,
            },
            {
                title: 'Reviews',
                href: '/admin/reviews',
                icon: Star,
            },
        ],
    },
    {
        title: 'Sales & Orders',
        items: [
            {
                title: 'Orders',
                href: '/admin/orders',
                icon: ShoppingCart,
                children: [
                    { title: 'All Orders', href: '/admin/orders' },
                    { title: 'Pending Orders', href: '/admin/orders?status=pending' },
                    { title: 'Processing Orders', href: '/admin/orders?status=processing' },
                    { title: 'Completed Orders', href: '/admin/orders?status=completed' },
                ],
            },
            {
                title: 'Shopping Cart',
                href: '/admin/cart',
                icon: ShoppingCart,
            },
            {
                title: 'Wishlist',
                href: '/admin/wishlist',
                icon: Heart,
            },
        ],
    },
    {
        title: 'Marketing & Promotions',
        items: [
            {
                title: 'Discounts',
                href: '/admin/discounts',
                icon: Percent,
            },
            {
                title: 'Newsletter',
                href: '/admin/newsletter',
                icon: Mail,
            },
            {
                title: 'Blog',
                href: '/admin/blog',
                icon: FileText,
                children: [
                    { title: 'All Posts', href: '/admin/blog/posts' },
                    { title: 'Create Post', href: '/admin/blog/posts/create' },
                    { title: 'Categories', href: '/admin/blog/categories' },
                    { title: 'Tags', href: '/admin/blog/tags' },
                ],
            },
            {
                title: 'SEO',
                href: '/admin/seo',
                icon: Search,
            },
        ],
    },
    {
        title: 'Operations',
        items: [
            {
                title: 'Payments',
                href: '/admin/payments',
                icon: CreditCard,
            },
            {
                title: 'Shipping',
                href: '/admin/shipping',
                icon: Truck,
            },
            {
                title: 'Courier',
                href: '/admin/courier',
                icon: Building2,
            },
        ],
    },
    {
        title: 'Content Management',
        items: [
            {
                title: 'Pages',
                href: '/admin/pages',
                icon: Layers,
            },
            {
                title: 'Menu Builder',
                href: '/admin/menu-builder',
                icon: Menu,
            },
        ],
    },
    {
        title: 'Security & Support',
        items: [
            {
                title: 'Fraud Protection',
                href: '/admin/fraud',
                icon: ShieldCheck,
                children: [
                    { title: 'Fraud Dashboard', href: '/admin/fraud/dashboard' },
                    { title: 'Risk Rules', href: '/admin/fraud/rules' },
                    { title: 'Blocked IPs', href: '/admin/fraud/blocked-ips' },
                    { title: 'Fraud Reports', href: '/admin/fraud/reports' },
                ],
            },
            {
                title: 'Support Center',
                href: '/admin/support',
                icon: Headphones,
                children: [
                    { title: 'Support Dashboard', href: '/admin/support/dashboard' },
                    { title: 'Support Tickets', href: '/admin/support/tickets' },
                    { title: 'Live Chat', href: '/admin/support/chat' },
                    { title: 'Knowledge Base', href: '/admin/support/kb' },
                    { title: 'FAQ Management', href: '/admin/support/faq' },
                ],
            },
        ],
    },
    {
        title: 'System',
        items: [
            {
                title: 'Settings',
                href: '/admin/settings',
                icon: Settings,
                children: [
                    { title: 'General Settings', href: '/admin/settings/general' },
                    { title: 'Store Settings', href: '/admin/settings/store' },
                    { title: 'Email Settings', href: '/admin/settings/email' },
                    { title: 'Payment Settings', href: '/admin/settings/payment' },
                    { title: 'Tax Settings', href: '/admin/settings/tax' },
                    { title: 'Shipping Settings', href: '/admin/settings/shipping' },
                ],
            },
        ],
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs',
        icon: BookOpen,
    },
    {
        title: 'Repository',
        href: 'https://github.com/laravel/laravel',
        icon: Folder,
    },
];

interface AdminSidebarProps {
    className?: string;
}

export function AdminSidebar({ className }: AdminSidebarProps) {
    return (
        <Sidebar collapsible="icon" variant="inset" className={className}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                                <span className="font-semibold">Admin Panel</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {adminNavGroups.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        {item.children ? (
                                            <Collapsible asChild>
                                                <>
                                                    <CollapsibleTrigger asChild>
                                                        <SidebarMenuButton
                                                            tooltip={{ children: item.title }}
                                                        >
                                                            {item.icon && <item.icon />}
                                                            <span>{item.title}</span>
                                                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]:rotate-90" />
                                                        </SidebarMenuButton>
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent>
                                                        <SidebarMenuSub>
                                                            {item.children.map((child) => (
                                                                <SidebarMenuSubItem key={child.title}>
                                                                    <SidebarMenuSubButton asChild>
                                                                        <Link href={child.href} prefetch>
                                                                            <span>{child.title}</span>
                                                                        </Link>
                                                                    </SidebarMenuSubButton>
                                                                </SidebarMenuSubItem>
                                                            ))}
                                                        </SidebarMenuSub>
                                                    </CollapsibleContent>
                                                </>
                                            </Collapsible>
                                        ) : (
                                            <SidebarMenuButton
                                                asChild
                                                tooltip={{ children: item.title }}
                                            >
                                                <Link href={item.href} prefetch>
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        )}
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
