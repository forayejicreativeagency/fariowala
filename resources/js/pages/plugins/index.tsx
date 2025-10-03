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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePlugins } from '@/contexts/plugin-context';
import {
    Puzzle,
    BarChart3,
    ShoppingCart,
    Package,
    Users,
    UserCheck,
    CreditCard,
    Truck,
    MessageCircle,
    Star,
    FileText,
    Mail,
    Search,
    Shield,
    ToggleLeft,
    ToggleRight,
    FolderOpen,
    Tags,
    Settings,
    Archive,
    Heart,
    Percent,
    Plane
} from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Plugins',
        href: '/dashboard/plugins',
    },
];



const categories = ['All', 'Core', 'Analytics', 'CRM', 'Finance', 'Logistics', 'Support', 'Marketing', 'Content', 'Security'];

    const { plugins, togglePlugin } = usePlugins();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPlugins = selectedCategory === 'All'
        ? plugins
        : plugins.filter(plugin => plugin.category === selectedCategory);

    const enabledCount = plugins.filter(p => p.enabled).length;
    const totalCount = plugins.length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Plugins" />
            {/* Scoped style for toggle icon size */}
            <style>{`
              [data-slot="button"] svg {
                width: 40px;
                height: 40px;
              }
            `}</style>

            <div className="space-y-6 p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight flex items-center space-x-2">
                            <Puzzle className="h-6 w-6 text-theme-green" />
                            <span>Plugins</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Enable or disable features based on your business needs
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                            {enabledCount} of {totalCount} plugins enabled
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Essential plugins cannot be disabled
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="text-2xl font-bold text-theme-green">{enabledCount}</div>
                            <p className="text-xs text-muted-foreground">Active Plugins</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="text-2xl font-bold text-theme-blue">{totalCount - enabledCount}</div>
                            <p className="text-xs text-muted-foreground">Disabled Plugins</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="text-2xl font-bold text-gray-600">{plugins.filter(p => p.essential).length}</div>
                            <p className="text-xs text-muted-foreground">Essential Plugins</p>
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
                                    className={`${selectedCategory === category
                                        ? "bg-theme-blue hover:bg-theme-blue/90 text-white"
                                        : "hover:bg-hero-blue hover:text-theme-blue"
                                    }`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Plugins List */}
                <Card>
                    <CardHeader>
                        <CardTitle>Available Plugins</CardTitle>
                        <CardDescription>
                            Toggle plugins on/off to customize your platform experience
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredPlugins.map((plugin) => (
                                <div
                                    key={plugin.id}
                                    className={`flex items-center justify-between p-4 border rounded-lg transition-all duration-200 ${
                                        plugin.enabled
                                            ? 'border-theme-green/30 bg-gray-light-solid/30'
                                            : 'border-gray/50 bg-white hover:bg-gray/20'
                                    }`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`
                                            p-3 rounded-lg transition-colors duration-200
                                            ${plugin.enabled ? 'bg-theme-green/10' : 'bg-gray/50'}
                                        `}>
                                            {plugin.icon && (
                                                <plugin.icon className={`
                                                    h-5 w-5
                                                    ${plugin.enabled ? 'text-theme-green' : 'text-gray-400'}
                                                `} />
                                            )}
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center space-x-2">
                                                <h3 className="font-medium text-theme-blue">{plugin.name}</h3>
                                                <Badge
                                                    variant={plugin.essential ? "default" : "secondary"}
                                                    className={plugin.essential
                                                        ? "bg-theme-blue text-white"
                                                        : "bg-gray-light-solid text-theme-blue"
                                                    }
                                                >
                                                    {plugin.essential ? 'Essential' : plugin.category}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {plugin.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Badge
                                            variant={plugin.enabled ? "default" : "secondary"}
                                            className={plugin.enabled
                                                ? "bg-theme-green text-white"
                                                : "bg-gray text-gray-600"
                                            }
                                        >
                                            {plugin.enabled ? 'Enabled' : 'Disabled'}
                                        </Badge>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => togglePlugin(plugin.id)}
                                            disabled={plugin.essential}
                                            className="p-2 hover:bg-transparent"
                                            title={plugin.essential ? "Essential plugin cannot be disabled" : `Toggle ${plugin.name}`}
                                        >
                                            {plugin.enabled ? (
                                                <ToggleRight className={`w-[40px] h-[40px] ${plugin.essential ? 'text-gray-400' : 'text-theme-green'}`} />
                                            ) : (
                                                <ToggleLeft className="w-[40px] h-[40px] text-gray-400 hover:text-theme-blue" />
                                            )}
                                        </Button>
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
