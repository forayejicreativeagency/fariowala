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
import { Button } from '@/components/ui/button';
import {
    Puzzle,
    BarChart3,
    ShoppingCart,
    Package,
    Users,
    CreditCard,
    Truck,
    MessageCircle,
    Star,
    FileText,
    Mail,
    Search,
    Shield,
    Settings,
    ToggleLeft,
    ToggleRight
} from 'lucide-react';
import { useState } from 'react';
import AdminLayout from '@/layouts/admin-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Module Manager',
        href: '/dashboard/modules',
    },
];

// Module definitions with enable/disable functionality
const initialModules = [
    {
        id: 'analytics',
        name: 'Analytics & Reports',
        description: 'Track sales, customer behavior, and business insights',
        icon: BarChart3,
        category: 'Analytics',
        enabled: true,
        essential: false,
    },
    {
        id: 'orders',
        name: 'Order Management',
        description: 'Process orders, manage fulfillment and tracking',
        icon: ShoppingCart,
        category: 'Core',
        enabled: true,
        essential: true,
    },
    {
        id: 'products',
        name: 'Product Catalog',
        description: 'Manage products, inventory, and categories',
        icon: Package,
        category: 'Core',
        enabled: true,
        essential: true,
    },
    {
        id: 'customers',
        name: 'Customer Management',
        description: 'Handle customer accounts, profiles, and relationships',
        icon: Users,
        category: 'CRM',
        enabled: true,
        essential: true,
    },
    {
        id: 'payments',
        name: 'Payment Processing',
        description: 'Handle payments, refunds, and financial transactions',
        icon: CreditCard,
        category: 'Finance',
        enabled: true,
        essential: true,
    },
    {
        id: 'shipping',
        name: 'Shipping & Logistics',
        description: 'Manage shipping methods, rates, and tracking',
        icon: Truck,
        category: 'Logistics',
        enabled: true,
        essential: false,
    },
    {
        id: 'support',
        name: 'Customer Support',
        description: 'Help desk, tickets, and customer service tools',
        icon: MessageCircle,
        category: 'Support',
        enabled: true,
        essential: false,
    },
    {
        id: 'reviews',
        name: 'Reviews & Ratings',
        description: 'Customer reviews, ratings, and feedback system',
        icon: Star,
        category: 'Marketing',
        enabled: true,
        essential: false,
    },
    {
        id: 'blog',
        name: 'Blog & Content',
        description: 'Content management and blog publishing',
        icon: FileText,
        category: 'Content',
        enabled: false,
        essential: false,
    },
    {
        id: 'newsletter',
        name: 'Email Marketing',
        description: 'Newsletter campaigns and email automation',
        icon: Mail,
        category: 'Marketing',
        enabled: false,
        essential: false,
    },
    {
        id: 'seo',
        name: 'SEO Optimization',
        description: 'Search engine optimization tools and meta management',
        icon: Search,
        category: 'Marketing',
        enabled: false,
        essential: false,
    },
    {
        id: 'fraud',
        name: 'Fraud Protection',
        description: 'Security monitoring and fraud prevention',
        icon: Shield,
        category: 'Security',
        enabled: true,
        essential: false,
    },
];

const categories = ['All', 'Core', 'Analytics', 'CRM', 'Finance', 'Logistics', 'Support', 'Marketing', 'Content', 'Security'];

export default function ModulesIndex() {
    const [modules, setModules] = useState(initialModules);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const toggleModule = (moduleId: string) => {
        setModules(prev =>
            prev.map(module =>
                module.id === moduleId
                    ? { ...module, enabled: !module.enabled }
                    : module
            )
        );
    };

    const filteredModules = selectedCategory === 'All'
        ? modules
        : modules.filter(module => module.category === selectedCategory);

    const enabledCount = modules.filter(m => m.enabled).length;
    const totalCount = modules.length;

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Module Manager" />

            <div className="space-y-6 p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight flex items-center space-x-2">
                            <Puzzle className="h-6 w-6 text-theme-green" />
                            <span>Module Manager</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Enable or disable features based on your business needs
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                            {enabledCount} of {totalCount} modules enabled
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Essential modules cannot be disabled
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="text-2xl font-bold text-theme-green">{enabledCount}</div>
                            <p className="text-xs text-muted-foreground">Active Modules</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="text-2xl font-bold text-theme-blue">{totalCount - enabledCount}</div>
                            <p className="text-xs text-muted-foreground">Disabled Modules</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="text-2xl font-bold text-gray-600">{modules.filter(m => m.essential).length}</div>
                            <p className="text-xs text-muted-foreground">Essential Modules</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="text-2xl font-bold text-gray-600">{categories.length - 1}</div>
                            <p className="text-xs text-muted-foreground">Categories</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Category Filter */}
                <Card>
                    <CardHeader>
                        <CardTitle>Filter by Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className={selectedCategory === category ? "bg-theme-blue text-white" : ""}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Modules List */}
                <Card>
                    <CardHeader>
                        <CardTitle>Available Modules</CardTitle>
                        <CardDescription>
                            Toggle modules on/off to customize your platform experience
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredModules.map((module) => (
                                <div
                                    key={module.id}
                                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`
                                            p-2 rounded-lg
                                            ${module.enabled ? 'bg-theme-green/10' : 'bg-gray/50'}
                                        `}>
                                            <module.icon className={`
                                                h-5 w-5
                                                ${module.enabled ? 'text-theme-green' : 'text-gray-400'}
                                            `} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center space-x-2">
                                                <h3 className="font-medium">{module.name}</h3>
                                                <Badge
                                                    variant={module.essential ? "default" : "secondary"}
                                                    className={module.essential ? "bg-theme-blue text-white" : ""}
                                                >
                                                    {module.essential ? 'Essential' : module.category}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {module.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Badge variant={module.enabled ? "default" : "secondary"}>
                                            {module.enabled ? 'Enabled' : 'Disabled'}
                                        </Badge>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => toggleModule(module.id)}
                                            disabled={module.essential}
                                            className="p-1"
                                        >
                                            {module.enabled ? (
                                                <ToggleRight className="h-6 w-6 text-theme-green" />
                                            ) : (
                                                <ToggleLeft className="h-6 w-6 text-gray-400" />
                                            )}
                                        </Button>
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
