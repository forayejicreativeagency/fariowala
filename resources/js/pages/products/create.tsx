import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AdminLayout from '@/layouts/admin-layout';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Products',
        href: '/products',
    },
    {
        title: 'Create Product',
        href: '/products/create',
    },
];

export default function AdminProducts() {
    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Product" />

            <div className="space-y-6 p-[20px]">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
                        <p className="text-muted-foreground">
                            Add New Product
                        </p>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
