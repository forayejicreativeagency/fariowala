import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { SimpleAdminSidebar } from '@/components/simple-admin-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AdminLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <SimpleAdminSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                <div className="flex-1 space-y-4 p-4 md:p-8">
                    {children}
                </div>
            </AppContent>
        </AppShell>
    );
}
