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
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    LayoutGrid,
    BarChart3,
    Users,
    ShoppingBag,
    Tags,
    Package,
    Star,
    ShoppingCart,
    Heart,
    Percent,
    Mail,
    FileText,
    Search,
    CreditCard,
    Truck,
    Building2,
    Layers,
    Menu,
    ShieldCheck,
    Headphones,
    Settings,
    BookOpen,
    Folder,
} from 'lucide-react';
import AppLogo from './app-logo';

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

interface SimpleAdminSidebarProps {
    className?: string;
}

// Simple, static admin sidebar to avoid any unpacking errors
export function SimpleAdminSidebar({ className }: SimpleAdminSidebarProps) {
    const menuGroups = [
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
                },
                {
                    title: 'Customers',
                    href: '/admin/customers',
                    icon: Users,
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
                },
                {
                    title: 'Wishlist',
                    href: '/admin/wishlist',
                    icon: Heart,
                },
            ],
        },
        {
            title: 'Marketing',
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
                    href: '/admin/blog/posts',
                    icon: FileText,
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
            title: 'Content',
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
                    href: '/admin/fraud/dashboard',
                    icon: ShieldCheck,
                },
                {
                    title: 'Support Center',
                    href: '/admin/support/dashboard',
                    icon: Headphones,
                },
            ],
        },
        {
            title: 'System',
            items: [
                {
                    title: 'Settings',
                    href: '/admin/settings/general',
                    icon: Settings,
                },
            ],
        },
    ];

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
                {menuGroups.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            tooltip={{ children: item.title }}
                                        >
                                            <Link href={item.href} prefetch>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
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
