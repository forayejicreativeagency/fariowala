import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavGroup, type NavItem } from '@/types';
import { usePlugins } from '@/contexts/plugin-context';
import { Link } from '@inertiajs/react';
import {
    LayoutGrid,
    BarChart3,
    Users,
    UserCheck,
    Package,
    FolderOpen,
    Archive,
    ShoppingCart,
    Heart,
    FileText,
    Mail,
    Search,
    Percent,
    Truck,
    CreditCard,
    Plane,
    MessageCircle,
    Star,
    Settings,
    Menu,
    Layout,
    Tags,
    Shield,
    Puzzle
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavGroup[] = [
    {
        title: 'Overview',
        items: [
            {
                title: 'Dashboard',
                href: dashboard(),
                icon: LayoutGrid,
            },
            {
                title: 'Analytics',
                href: '/dashboard/analytics',
                icon: BarChart3,
            },
        ],
    },
    {
        title: 'Order Management',
        items: [
            {
                title: 'Orders',
                href: '/dashboard/orders',
                icon: ShoppingCart,
            },
            {
                title: 'Cart Management',
                href: '/dashboard/cart',
                icon: ShoppingCart,
            },
            {
                title: 'Wishlist',
                href: '/dashboard/wishlist',
                icon: Heart,
            },
        ],
    },
    {
        title: 'Product Management',
        items: [
            {
                title: 'Products',
                href: '/dashboard/products',
                icon: Package,
            },
            {
                title: 'Inventory',
                href: '/dashboard/inventory',
                icon: Archive,
            },
        ],
    },
    {
        title: 'Taxonomies',
        items: [
            {
                title: 'Categories',
                href: '/dashboard/categories',
                icon: FolderOpen,
            },
            {
                title: 'Tags',
                href: '/dashboard/tags',
                icon: Tags,
            },
            {
                title: 'Attributes',
                href: '/dashboard/products/attributes',
                icon: Settings,
            },
        ],
    },
    {
        title: 'Customer Management',
        items: [
            {
                title: 'Customers',
                href: '/dashboard/customers',
                icon: UserCheck,
            },
            {
                title: 'Users',
                href: '/dashboard/users',
                icon: Users,
            },
        ],
    },
    {
        title: 'Operations',
        items: [
            {
                title: 'Shipping',
                href: '/dashboard/shipping',
                icon: Truck,
            },
            {
                title: 'Payments',
                href: '/dashboard/payments',
                icon: CreditCard,
            },
            {
                title: 'Courier',
                href: '/dashboard/courier',
                icon: Plane,
            },
        ],
    },
    {
        title: 'Security',
        items: [
            {
                title: 'Fraud Protection',
                href: '/dashboard/fraud/dashboard',
                icon: Shield,
            },
        ],
    },
    {
        title: 'Marketing & SEO',
        items: [
            {
                title: 'Discounts',
                href: '/dashboard/discounts',
                icon: Percent,
            },
            {
                title: 'Blog Management',
                href: '/dashboard/blog/posts',
                icon: FileText,
            },
            {
                title: 'Newsletter',
                href: '/dashboard/newsletter',
                icon: Mail,
            },
            {
                title: 'SEO',
                href: '/dashboard/seo',
                icon: Search,
            },
        ],
    },
    {
        title: 'Support & Reviews',
        items: [
            {
                title: 'Support Center',
                href: '/dashboard/support/dashboard',
                icon: MessageCircle,
            },
            {
                title: 'Reviews',
                href: '/dashboard/reviews',
                icon: Star,
            },
        ],
    },
    {
        title: 'System',
        items: [
            {
                title: 'Plugins',
                href: '/dashboard/plugins',
                icon: Puzzle,
            },
            {
                title: 'System Settings',
                href: '/dashboard/settings/general',
                icon: Settings,
            },
            {
                title: 'Menu Builder',
                href: '/dashboard/menu-builder',
                icon: Menu,
            },
            {
                title: 'Page Builder',
                href: '/dashboard/pages',
                icon: Layout,
            },
        ],
    },
    {
        title: 'Account',
        items: [
            {
                title: 'Profile Settings',
                href: '/settings/profile',
                icon: Users,
            },
            {
                title: 'Password',
                href: '/settings/password',
                icon: Settings,
            },
            {
                title: 'Appearance',
                href: '/settings/appearance',
                icon: Settings,
            },
        ],
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
