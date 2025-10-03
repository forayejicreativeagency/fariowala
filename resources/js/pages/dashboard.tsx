import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Users,
    ShoppingCart,
    DollarSign,
    TrendingUp,
    Package,
    AlertTriangle,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

// Mock data for demonstration
const stats = [
    {
        title: 'Total Users',
        value: '2,543',
        change: '+12%',
        changeType: 'increase',
        icon: Users,
    },
    {
        title: 'Total Orders',
        value: '1,234',
        change: '+8%',
        changeType: 'increase',
        icon: ShoppingCart,
    },
    {
        title: 'Revenue',
        value: '$45,231',
        change: '+23%',
        changeType: 'increase',
        icon: DollarSign,
    },
    {
        title: 'Products',
        value: '890',
        change: '+5%',
        changeType: 'increase',
        icon: Package,
    },
];

const recentActivity = [
    {
        id: 1,
        action: 'New order received',
        user: 'John Doe',
        time: '2 minutes ago',
        type: 'order',
    },
    {
        id: 2,
        action: 'Product updated',
        user: 'Admin',
        time: '5 minutes ago',
        type: 'product',
    },
    {
        id: 3,
        action: 'User registered',
        user: 'Jane Smith',
        time: '10 minutes ago',
        type: 'user',
    },
    {
        id: 4,
        action: 'Support ticket created',
        user: 'Bob Johnson',
        time: '15 minutes ago',
        type: 'support',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="space-y-6 p-4">
                {/* Welcome Section */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Welcome to Your Dashboard
                    </h1>
                    <p className="text-muted-foreground">
                        Manage your e-commerce platform from here.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>
                                <stat.icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground">
                                    <span className="inline-flex items-center text-green-600">
                                        <TrendingUp className="mr-1 h-3 w-3" />
                                        {stat.change}
                                    </span>{' '}
                                    from last month
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    {/* Recent Activity */}
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>
                                Latest activities across your platform
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {activity.action}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            by {activity.user} • {activity.time}
                                        </p>
                                    </div>
                                    <Badge variant="secondary">
                                        {activity.type}
                                    </Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                            <CardDescription>
                                Common administrative tasks
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-2">
                                <button className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-left hover:bg-accent">
                                    Add New Product
                                </button>
                                <button className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-left hover:bg-accent">
                                    Process Orders
                                </button>
                                <button className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-left hover:bg-accent">
                                    Manage Users
                                </button>
                                <button className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-left hover:bg-accent">
                                    View Reports
                                </button>
                                <button className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-left hover:bg-accent">
                                    Support Tickets
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* System Status */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <span>System Status</span>
                            <Badge variant="default" className="bg-green-100 text-green-800">
                                All Systems Operational
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="text-sm">Database</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="text-sm">API Services</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="text-sm">Payment Gateway</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
