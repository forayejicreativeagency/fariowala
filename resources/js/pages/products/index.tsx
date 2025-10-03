import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Package, Edit, Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Products',
        href: '/dashboard/products',
    },
];

// Mock data for demonstration
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        sku: 'WH-001',
        price: '$99.99',
        stock: 45,
        status: 'Active',
    },
    {
        id: 2,
        name: 'Smartphone Case',
        sku: 'SC-002',
        price: '$24.99',
        stock: 120,
        status: 'Active',
    },
    {
        id: 3,
        name: 'Laptop Stand',
        sku: 'LS-003',
        price: '$79.99',
        stock: 8,
        status: 'Low Stock',
    },
];

export default function ProductsIndex() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />

            <div className="space-y-6 p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
                        <p className="text-muted-foreground">
                            Manage your product catalog
                        </p>
                    </div>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Product
                    </Button>
                </div>

                {/* Products List */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Package className="h-5 w-5" />
                            <span>Product List</span>
                        </CardTitle>
                        <CardDescription>
                            View and manage all your products
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center justify-between border-b pb-4 last:border-b-0"
                                >
                                    <div className="space-y-1">
                                        <h3 className="font-medium">{product.name}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            SKU: {product.sku} • Stock: {product.stock}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="text-right">
                                            <p className="font-medium">{product.price}</p>
                                            <p className={`text-sm ${
                                                product.status === 'Low Stock'
                                                    ? 'text-orange-600'
                                                    : 'text-green-600'
                                            }`}>
                                                {product.status}
                                            </p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
