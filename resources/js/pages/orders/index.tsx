import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/admin-layout';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye, Truck } from 'lucide-react';
import AdminLayout from '@/layouts/admin-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Orders',
        href: '/dashboard/orders',
    },
];

// Mock data for demonstration
const orders = [
    {
        id: '#ORD-001',
        customer: 'John Doe',
        total: '$129.99',
        status: 'Processing',
        date: '2025-10-04',
    },
    {
        id: '#ORD-002',
        customer: 'Jane Smith',
        total: '$89.99',
        status: 'Shipped',
        date: '2025-10-03',
    },
    {
        id: '#ORD-003',
        customer: 'Bob Johnson',
        total: '$199.99',
        status: 'Delivered',
        date: '2025-10-02',
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Processing': return 'bg-yellow-100 text-yellow-800';
        case 'Shipped': return 'bg-blue-100 text-blue-800';
        case 'Delivered': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

export default function OrdersIndex() {
    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Orders" />

            <div className="space-y-6 p-4">
                {/* Header */}
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
                    <p className="text-muted-foreground">
                        Manage customer orders and fulfillment
                    </p>
                </div>

                {/* Orders List */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <ShoppingCart className="h-5 w-5" />
                            <span>Recent Orders</span>
                        </CardTitle>
                        <CardDescription>
                            View and manage customer orders
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="flex items-center justify-between border-b pb-4 last:border-b-0"
                                >
                                    <div className="space-y-1">
                                        <h3 className="font-medium">{order.id}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Customer: {order.customer} • {order.date}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Badge className={getStatusColor(order.status)}>
                                            {order.status}
                                        </Badge>
                                        <div className="text-right">
                                            <p className="font-medium">{order.total}</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="p-2 hover:bg-gray-100 rounded">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 rounded">
                                                <Truck className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
