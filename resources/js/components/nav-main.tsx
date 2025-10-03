import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem, type NavGroup } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: (NavItem | NavGroup)[] }) {
    const page = usePage();

    const isActiveLink = (href: string | object) => {
        const url = typeof href === 'string' ? href : (href as any).url;
        // Exact match for dashboard root
        if (url === '/dashboard' || (typeof href === 'object' && (href as any).url === '/dashboard')) {
            return page.url === '/dashboard';
        }
        // For other routes, check if current URL starts with the menu URL
        return page.url.startsWith(url) && page.url !== '/dashboard';
    };

    return (
        <>
            {items.map((item) => {
                // Check if item is a NavGroup (has items property)
                if ('items' in item && item.items) {
                    return (
                        <SidebarGroup key={item.title} className="px-2 py-0">
                            <SidebarGroupLabel className="text-xs font-medium text-theme-blue/60 uppercase tracking-wide mb-2 px-1">
                                {item.title}
                            </SidebarGroupLabel>
                            <SidebarMenu>
                                {item.items.map((navItem) => {
                                    const isActive = isActiveLink(navItem.href);
                                    return (
                                        <SidebarMenuItem key={navItem.title}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={isActive}
                                                tooltip={{ children: navItem.title }}
                                                className={`
                                                    transition-colors duration-200 ease-in-out
                                                    hover:bg-gray-light-solid/60 hover:text-theme-blue
                                                    ${isActive
                                                        ? 'bg-hero-blue text-theme-blue font-medium'
                                                        : 'text-gray-700 hover:text-theme-blue'
                                                    }
                                                `}
                                            >
                                                <Link href={navItem.href} prefetch className="flex items-center space-x-3 w-full">
                                                    {navItem.icon && (
                                                        <navItem.icon
                                                            className={`
                                                                h-4 w-4 transition-colors duration-200 shrink-0
                                                                ${isActive
                                                                    ? 'text-theme-green'
                                                                    : 'text-gray-500 group-hover:text-theme-green'
                                                                }
                                                            `}
                                                        />
                                                    )}
                                                    <span className={`
                                                        ${isActive ? 'font-medium text-theme-blue' : ''}
                                                    `}>
                                                        {navItem.title}
                                                    </span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroup>
                    );
                } else {
                    // Handle individual NavItem
                    const navItem = item as NavItem;
                    const isActive = isActiveLink(navItem.href);
                    return (
                        <SidebarGroup key={navItem.title} className="px-2 py-0">
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive}
                                        tooltip={{ children: navItem.title }}
                                        className={`
                                            transition-colors duration-200 ease-in-out
                                            hover:bg-gray-light-solid/60 hover:text-theme-blue
                                            ${isActive
                                                ? 'bg-hero-blue text-theme-blue font-medium'
                                                : 'text-gray-700 hover:text-theme-blue'
                                            }
                                        `}
                                    >
                                        <Link href={navItem.href} prefetch className="flex items-center space-x-3 w-full">
                                            {navItem.icon && (
                                                <navItem.icon
                                                    className={`
                                                        h-4 w-4 transition-colors duration-200 shrink-0
                                                        ${isActive
                                                            ? 'text-theme-green'
                                                            : 'text-gray-500 group-hover:text-theme-green'
                                                        }
                                                    `}
                                                />
                                            )}
                                            <span className={`
                                                ${isActive ? 'font-medium text-theme-blue' : ''}
                                            `}>
                                                {navItem.title}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroup>
                    );
                }
            })}
        </>
    );
}
