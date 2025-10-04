import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    DollarSign,
    ShoppingCart,
    Users,
    Package,
    Eye,
    Star,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Filter,
    Download,
    RefreshCw,
    Target,
    Clock,
    Globe,
    Smartphone,
    Monitor,
    Tablet,
    MapPin,
    CreditCard,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Percent,
    ShoppingBag
} from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Analytics',
        href: '/dashboard/analytics',
    },
];

// Mock data for analytics
const overviewStats = [
    {
        title: 'Total Revenue',
        value: '$127,450',
        change: '+12.5%',
        trend: 'up',
        description: 'vs last month',
        icon: DollarSign,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
    },
    {
        title: 'Orders',
        value: '1,429',
        change: '+8.2%',
        trend: 'up',
        description: 'vs last month',
        icon: ShoppingCart,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        title: 'Customers',
        value: '892',
        change: '+15.3%',
        trend: 'up',
        description: 'vs last month',
        icon: Users,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        title: 'Products Sold',
        value: '2,847',
        change: '-2.1%',
        trend: 'down',
        description: 'vs last month',
        icon: Package,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
    },
];

const salesData = [
    { month: 'Jan', revenue: 65000, orders: 820 },
    { month: 'Feb', revenue: 72000, orders: 950 },
    { month: 'Mar', revenue: 68000, orders: 880 },
    { month: 'Apr', revenue: 85000, orders: 1100 },
    { month: 'May', revenue: 92000, orders: 1250 },
    { month: 'Jun', revenue: 88000, orders: 1150 },
];

const topStocks = [
    {
        name: 'Premium Laptop Backpack',
        sku: 'PLB-456',
        currentStock: 324,
        stockValue: '$32,400',
        reorderLevel: 50,
        category: 'Accessories',
        stockStatus: 'optimal',
        daysOfStock: 45,
        monthlyTurnover: 7.2
    },
    {
        name: 'Wireless Gaming Mouse',
        sku: 'WGM-789',
        currentStock: 267,
        stockValue: '$20,025',
        reorderLevel: 40,
        category: 'Electronics',
        stockStatus: 'high',
        daysOfStock: 38,
        monthlyTurnover: 8.5
    },
    {
        name: 'Organic Protein Powder',
        sku: 'OPP-234',
        currentStock: 189,
        stockValue: '$15,120',
        reorderLevel: 30,
        category: 'Health & Fitness',
        stockStatus: 'optimal',
        daysOfStock: 42,
        monthlyTurnover: 6.8
    },
    {
        name: 'Smart Water Bottle',
        sku: 'SWB-567',
        currentStock: 156,
        stockValue: '$7,800',
        reorderLevel: 25,
        category: 'Lifestyle',
        stockStatus: 'low',
        daysOfStock: 18,
        monthlyTurnover: 9.2
    },
    {
        name: 'Bamboo Phone Stand',
        sku: 'BPS-890',
        currentStock: 143,
        stockValue: '$2,860',
        reorderLevel: 20,
        category: 'Eco-Friendly',
        stockStatus: 'optimal',
        daysOfStock: 35,
        monthlyTurnover: 5.4
    },
];

// Low stock alerts - products below reorder levels
const lowStockAlerts = [
    {
        name: 'iPhone 15 Screen Protector',
        sku: 'ISP-123',
        currentStock: 8,
        reorderLevel: 25,
        stockValue: '$320',
        category: 'Electronics',
        urgencyLevel: 'critical',
        daysLeft: 3,
        averageDailySales: 2.5,
        supplier: 'TechGuard Inc.',
        leadTime: '5-7 days'
    },
    {
        name: 'Organic Green Tea',
        sku: 'OGT-456',
        currentStock: 12,
        reorderLevel: 30,
        stockValue: '$180',
        category: 'Food & Beverage',
        urgencyLevel: 'high',
        daysLeft: 5,
        averageDailySales: 2.2,
        supplier: 'Nature\'s Best',
        leadTime: '3-5 days'
    },
    {
        name: 'Wireless Earbuds Case',
        sku: 'WEC-789',
        currentStock: 15,
        reorderLevel: 40,
        stockValue: '$750',
        category: 'Electronics',
        urgencyLevel: 'medium',
        daysLeft: 8,
        averageDailySales: 1.8,
        supplier: 'AudioTech Ltd.',
        leadTime: '7-10 days'
    },
    {
        name: 'Yoga Mat Premium',
        sku: 'YMP-234',
        currentStock: 6,
        reorderLevel: 20,
        stockValue: '$360',
        category: 'Fitness',
        urgencyLevel: 'critical',
        daysLeft: 2,
        averageDailySales: 2.8,
        supplier: 'FitLife Supply',
        leadTime: '4-6 days'
    },
    {
        name: 'Stainless Steel Tumbler',
        sku: 'SST-567',
        currentStock: 18,
        reorderLevel: 35,
        stockValue: '$540',
        category: 'Lifestyle',
        urgencyLevel: 'medium',
        daysLeft: 7,
        averageDailySales: 2.4,
        supplier: 'DrinkWare Pro',
        leadTime: '6-8 days'
    },
];

const customerMetrics = [
    { metric: 'New Customers', value: '152', change: '+18%', color: 'text-green-600' },
    { metric: 'Returning Customers', value: '740', change: '+12%', color: 'text-blue-600' },
    { metric: 'Customer Lifetime Value', value: '$347', change: '+8%', color: 'text-purple-600' },
    { metric: 'Churn Rate', value: '2.3%', change: '-0.5%', color: 'text-green-600' },
];

const trafficSources = [
    { source: 'Organic Search', visitors: 4200, percentage: 42, color: 'bg-blue-500' },
    { source: 'Direct', visitors: 2800, percentage: 28, color: 'bg-green-500' },
    { source: 'Social Media', visitors: 1500, percentage: 15, color: 'bg-purple-500' },
    { source: 'Email Marketing', visitors: 800, percentage: 8, color: 'bg-orange-500' },
    { source: 'Paid Ads', visitors: 700, percentage: 7, color: 'bg-red-500' },
];

const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', amount: '$125.50', status: 'completed', time: '2 hours ago' },
    { id: '#ORD-002', customer: 'Sarah Smith', amount: '$89.99', status: 'processing', time: '4 hours ago' },
    { id: '#ORD-003', customer: 'Mike Johnson', amount: '$234.75', status: 'shipped', time: '6 hours ago' },
    { id: '#ORD-004', customer: 'Emma Wilson', amount: '$67.20', status: 'completed', time: '8 hours ago' },
    { id: '#ORD-005', customer: 'David Brown', amount: '$156.80', status: 'processing', time: '10 hours ago' },
];

// Additional Analytics Data
const conversionFunnel = [
    { stage: 'Page Visits', count: 12500, percentage: 100, color: 'bg-blue-500' },
    { stage: 'Product Views', count: 8750, percentage: 70, color: 'bg-indigo-500' },
    { stage: 'Add to Cart', count: 3500, percentage: 28, color: 'bg-purple-500' },
    { stage: 'Checkout Started', count: 2100, percentage: 16.8, color: 'bg-orange-500' },
    { stage: 'Orders Completed', count: 1429, percentage: 11.4, color: 'bg-green-500' },
];

const deviceAnalytics = [
    { device: 'Desktop', visitors: 5250, percentage: 52.5, icon: Monitor, color: 'text-blue-600' },
    { device: 'Mobile', visitors: 3800, percentage: 38.0, icon: Smartphone, color: 'text-green-600' },
    { device: 'Tablet', visitors: 950, percentage: 9.5, icon: Tablet, color: 'text-purple-600' },
];

const geographicData = [
    { country: 'United States', visitors: 4200, revenue: '$52,500', flag: '🇺🇸' },
    { country: 'United Kingdom', visitors: 1800, revenue: '$22,400', flag: '🇬🇧' },
    { country: 'Canada', visitors: 1200, revenue: '$15,600', flag: '🇨🇦' },
    { country: 'Germany', visitors: 980, revenue: '$12,250', flag: '🇩🇪' },
    { country: 'Australia', visitors: 820, revenue: '$10,890', flag: '🇦🇺' },
];

const paymentMethods = [
    { method: 'Credit Card', transactions: 892, percentage: 62.4, icon: CreditCard, color: 'bg-blue-500' },
    { method: 'PayPal', transactions: 324, percentage: 22.7, icon: DollarSign, color: 'bg-orange-500' },
    { method: 'Apple Pay', transactions: 127, percentage: 8.9, color: 'bg-gray-800' },
    { method: 'Google Pay', transactions: 86, percentage: 6.0, color: 'bg-green-500' },
];

const abandonmentReasons = [
    { reason: 'High Shipping Cost', percentage: 28.5, count: 342 },
    { reason: 'Complicated Checkout', percentage: 24.2, count: 290 },
    { reason: 'Security Concerns', percentage: 18.7, count: 224 },
    { reason: 'Price Comparison', percentage: 15.3, count: 183 },
    { reason: 'Technical Issues', percentage: 13.3, count: 159 },
];

const performanceMetrics = [
    { metric: 'Avg. Order Value', value: '$89.25', change: '+5.2%', trend: 'up', icon: ShoppingBag },
    { metric: 'Conversion Rate', value: '2.8%', change: '+0.3%', trend: 'up', icon: Target },
    { metric: 'Page Load Time', value: '1.4s', change: '-0.2s', trend: 'up', icon: Clock },
    { metric: 'Bounce Rate', value: '34.2%', change: '-2.1%', trend: 'up', icon: TrendingDown },
];

// Slow-moving products with stock but no recent sales
const slowMovingProducts = [
    {
        name: 'Vintage Leather Wallet',
        sku: 'VLW-001',
        stock: 45,
        lastSale: '3 months ago',
        value: '$2,025',
        category: 'Accessories',
        daysWithoutSale: 89,
        riskLevel: 'high'
    },
    {
        name: 'Bluetooth Keyboard Pro',
        sku: 'BKP-032',
        stock: 28,
        lastSale: '2 months ago',
        value: '$1,680',
        category: 'Electronics',
        daysWithoutSale: 67,
        riskLevel: 'medium'
    },
    {
        name: 'Ceramic Coffee Mug Set',
        sku: 'CCM-015',
        stock: 67,
        lastSale: '4 months ago',
        value: '$1,340',
        category: 'Home & Kitchen',
        daysWithoutSale: 124,
        riskLevel: 'high'
    },
    {
        name: 'Fitness Tracking Band',
        sku: 'FTB-089',
        stock: 19,
        lastSale: '2 months ago',
        value: '$950',
        category: 'Fitness',
        daysWithoutSale: 58,
        riskLevel: 'medium'
    },
    {
        name: 'Wooden Desk Organizer',
        sku: 'WDO-023',
        stock: 34,
        lastSale: '5 months ago',
        value: '$850',
        category: 'Office',
        daysWithoutSale: 142,
        riskLevel: 'high'
    },
];

// Best selling products with recent sales performance
const bestSellingProducts = [
    {
        name: 'iPhone 15 Pro Case',
        sku: 'IPC-001',
        salesThisMonth: 347,
        totalRevenue: '$17,350',
        avgDailySales: 11.6,
        category: 'Electronics',
        trend: 'up',
        trendPercentage: '+23%',
        ratingCount: 1247,
        rating: 4.8,
        stockLevel: 'high'
    },
    {
        name: 'Wireless Charging Pad',
        sku: 'WCP-045',
        salesThisMonth: 289,
        totalRevenue: '$14,450',
        avgDailySales: 9.6,
        category: 'Electronics',
        trend: 'up',
        trendPercentage: '+18%',
        ratingCount: 892,
        rating: 4.6,
        stockLevel: 'medium'
    },
    {
        name: 'Organic Coffee Beans',
        sku: 'OCB-078',
        salesThisMonth: 256,
        totalRevenue: '$7,680',
        avgDailySales: 8.5,
        category: 'Food & Beverage',
        trend: 'up',
        trendPercentage: '+12%',
        ratingCount: 634,
        rating: 4.9,
        stockLevel: 'low'
    },
    {
        name: 'Fitness Tracker Band',
        sku: 'FTB-234',
        salesThisMonth: 234,
        totalRevenue: '$23,400',
        avgDailySales: 7.8,
        category: 'Fitness',
        trend: 'up',
        trendPercentage: '+15%',
        ratingCount: 1056,
        rating: 4.7,
        stockLevel: 'high'
    },
    {
        name: 'Premium Notebook Set',
        sku: 'PNS-156',
        salesThisMonth: 198,
        totalRevenue: '$5,940',
        avgDailySales: 6.6,
        category: 'Office',
        trend: 'up',
        trendPercentage: '+8%',
        ratingCount: 423,
        rating: 4.5,
        stockLevel: 'medium'
    },
];

export default function AnalyticsIndex() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'processing':
                return 'bg-blue-100 text-blue-800';
            case 'shipped':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Analytics Dashboard" />

            <div className="p-5 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                        <p className="text-gray-600 mt-1">Monitor your ecommerce performance and insights</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            Last 30 days
                        </Button>
                        <Button variant="outline" size="sm">
                            <Filter className="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                        <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </Button>
                        <Button size="sm">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Refresh
                        </Button>
                    </div>
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {overviewStats.map((stat, index) => (
                        <Card key={index} className="relative overflow-hidden">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                        <div className="flex items-center space-x-1">
                                            {stat.trend === 'up' ? (
                                                <ArrowUpRight className="w-4 h-4 text-green-600" />
                                            ) : (
                                                <ArrowDownRight className="w-4 h-4 text-red-600" />
                                            )}
                                            <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {stat.change}
                                            </span>
                                            <span className="text-sm text-gray-500">{stat.description}</span>
                                        </div>
                                    </div>
                                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {performanceMetrics.map((metric, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-gray-600">{metric.metric}</p>
                                        <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                                        <div className="flex items-center space-x-1">
                                            {metric.trend === 'up' ? (
                                                <ArrowUpRight className="w-4 h-4 text-green-600" />
                                            ) : (
                                                <ArrowDownRight className="w-4 h-4 text-red-600" />
                                            )}
                                            <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {metric.change}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-full bg-gray-50">
                                        <metric.icon className="w-6 h-6 text-gray-600" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Product Performance Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Slow-Moving Products */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Package className="w-5 h-5 text-red-600" />
                                Slow-Moving Inventory
                            </CardTitle>
                            <CardDescription>Products with stock but no sales in recent months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm text-gray-600 pb-2 border-b">
                                    <span>Products: <strong className="text-gray-900">{slowMovingProducts.length}</strong></span>
                                    <span>Value: <strong className="text-red-600">$7,845</strong></span>
                                </div>
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                    {slowMovingProducts.map((product, index) => (
                                        <div key={index} className="p-3 bg-gray-50 rounded-lg border-l-4 border-l-red-500">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-grow">
                                                    <div className="flex items-center space-x-2">
                                                        <div className={`w-2 h-2 rounded-full ${product.riskLevel === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                                                            }`}></div>
                                                        <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                                                    </div>
                                                    <div className="mt-1 text-xs text-gray-600 space-y-1">
                                                        <div>SKU: <code className="bg-gray-200 px-1 rounded">{product.sku}</code></div>
                                                        <div>Stock: <strong className="text-orange-600">{product.stock}</strong> | Last sale: <strong className="text-red-600">{product.lastSale}</strong></div>
                                                    </div>
                                                </div>
                                                <div className="text-right ml-2">
                                                    <p className="text-sm font-bold text-gray-900">{product.value}</p>
                                                    <p className="text-xs text-red-600">{product.daysWithoutSale}d</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                        <p className="text-xs font-medium text-yellow-800">Optimization needed - consider promotions</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Best Selling Products */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                                Best Selling Products
                            </CardTitle>
                            <CardDescription>Top performing products driving revenue growth</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm text-gray-600 pb-2 border-b">
                                    <span>Units: <strong className="text-gray-900">1,324</strong></span>
                                    <span>Revenue: <strong className="text-green-600">$68,820</strong></span>
                                </div>
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                    {bestSellingProducts.map((product, index) => (
                                        <div key={index} className="p-3 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-grow">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                            <span className="text-xs font-bold text-green-600">#{index + 1}</span>
                                                        </div>
                                                        <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                                                        <div className="flex items-center space-x-1">
                                                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                                            <span className="text-xs text-gray-600">{product.rating}</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 text-xs text-gray-600 space-y-1">
                                                        <div>SKU: <code className="bg-gray-200 px-1 rounded">{product.sku}</code></div>
                                                        <div>Sold: <strong className="text-green-600">{product.salesThisMonth}</strong> | Daily: <strong className="text-blue-600">{product.avgDailySales}</strong></div>
                                                    </div>
                                                </div>
                                                <div className="text-right ml-2">
                                                    <p className="text-sm font-bold text-gray-900">{product.totalRevenue}</p>
                                                    <p className="text-xs text-green-600 font-medium">{product.trendPercentage}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <p className="text-xs font-medium text-green-800">Strong performance - analyze success factors</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Optimization Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Cart Abandonment Analysis */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                Cart Abandonment Analysis
                            </CardTitle>
                            <CardDescription>Why customers leave without purchasing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    {abandonmentReasons.map((reason, index) => (
                                        <div key={index} className="p-3 border rounded-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-sm font-medium text-gray-700">{reason.reason}</p>
                                                <span className="text-lg font-bold text-red-600">{reason.percentage}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="h-2 bg-red-500 rounded-full transition-all duration-500"
                                                    style={{ width: `${reason.percentage}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1">{reason.count} customers affected</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Low Stock Alerts */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Low Stock Alerts
                            </CardTitle>
                            <CardDescription>Products below reorder levels requiring attention</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm text-gray-600 pb-2 border-b">
                                    <span>Critical: <strong className="text-red-600">2</strong></span>
                                    <span>At-risk: <strong className="text-red-600">$2,150</strong></span>
                                </div>
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                    {lowStockAlerts.map((product, index) => (
                                        <div key={index} className={`p-3 rounded-lg border-l-4 ${product.urgencyLevel === 'critical' ? 'bg-red-50 border-l-red-500' :
                                            product.urgencyLevel === 'high' ? 'bg-orange-50 border-l-orange-500' :
                                                'bg-yellow-50 border-l-yellow-500'
                                            }`}>
                                            <div className="flex items-start justify-between">
                                                <div className="flex-grow">
                                                    <div className="flex items-center space-x-2">
                                                        <div className={`w-2 h-2 rounded-full ${product.urgencyLevel === 'critical' ? 'bg-red-500' :
                                                            product.urgencyLevel === 'high' ? 'bg-orange-500' :
                                                                'bg-yellow-500'
                                                            } animate-pulse`}></div>
                                                        <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                                                        <span className={`text-xs px-1 py-0.5 rounded ${product.urgencyLevel === 'critical' ? 'bg-red-100 text-red-700' :
                                                            product.urgencyLevel === 'high' ? 'bg-orange-100 text-orange-700' :
                                                                'bg-yellow-100 text-yellow-700'
                                                            }`}>
                                                            {product.urgencyLevel}
                                                        </span>
                                                    </div>
                                                    <div className="mt-1 text-xs text-gray-600 space-y-1">
                                                        <div>SKU: <code className="bg-gray-200 px-1 rounded">{product.sku}</code></div>
                                                        <div>Stock: <strong className="text-red-600">{product.currentStock}</strong> | Days left: <strong className="text-red-600">{product.daysLeft}</strong></div>
                                                        <div>Supplier: <strong className="text-blue-600">{product.supplier}</strong></div>
                                                    </div>
                                                </div>
                                                <div className="text-right ml-2">
                                                    <p className="text-sm font-bold text-gray-900">{product.stockValue}</p>
                                                    <p className="text-xs text-gray-600">{product.leadTime}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <AlertTriangle className="w-4 h-4 text-red-600" />
                                        <p className="text-xs font-medium text-red-800">Contact suppliers immediately</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Orders */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5 text-indigo-600" />
                            Recent Orders
                        </CardTitle>
                        <CardDescription>Latest customer orders and transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Order ID</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrders.map((order, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="py-3 px-4 font-mono text-sm text-blue-600">{order.id}</td>
                                            <td className="py-3 px-4 font-medium text-gray-900">{order.customer}</td>
                                            <td className="py-3 px-4 font-bold text-gray-900">{order.amount}</td>
                                            <td className="py-3 px-4">
                                                <Badge className={getStatusColor(order.status)}>
                                                    {order.status}
                                                </Badge>
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-600">{order.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Revenue Chart and Conversion Funnel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Revenue Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-blue-600" />
                                Revenue Trend
                            </CardTitle>
                            <CardDescription>Monthly revenue and order volume</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 flex items-end justify-between space-x-2 pt-4">
                                {salesData.map((data, index) => (
                                    <div key={index} className="flex flex-col items-center flex-1">
                                        <div
                                            className="w-full bg-blue-500 rounded-t-md relative group cursor-pointer hover:bg-blue-600 transition-colors"
                                            style={{ height: `${(data.revenue / 100000) * 200}px` }}
                                        >
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${data.revenue.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-600 mt-2 font-medium">{data.month}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Conversion Funnel */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-green-600" />
                                Conversion Funnel
                            </CardTitle>
                            <CardDescription>Customer journey from visit to purchase</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {conversionFunnel.map((stage, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                                            <div className="text-right">
                                                <span className="text-sm font-bold text-gray-900">{stage.count.toLocaleString()}</span>
                                                <span className="text-xs text-gray-500 ml-2">({stage.percentage}%)</span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full ${stage.color} transition-all duration-500`}
                                                style={{ width: `${stage.percentage}%` }}
                                            ></div>
                                        </div>
                                        {index < conversionFunnel.length - 1 && (
                                            <div className="text-right text-red-500 text-xs font-medium mt-1">
                                                -{((conversionFunnel[index].count - conversionFunnel[index + 1].count) / conversionFunnel[index].count * 100).toFixed(1)}% drop-off
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Top Products and Customer Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Stocks */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Package className="w-5 h-5 text-blue-600" />
                                Top Stocks
                            </CardTitle>
                            <CardDescription>Highest inventory levels and stock management</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm text-gray-600 pb-2 border-b">
                                    <span>Total inventory items: <strong className="text-gray-900">{topStocks.length}</strong></span>
                                    <span>Total stock value: <strong className="text-blue-600">$78,205</strong></span>
                                </div>
                                {topStocks.map((stock, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-l-blue-500">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                                            </div>
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-medium text-gray-900">{stock.name}</p>
                                                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                                                        {stock.category}
                                                    </span>
                                                    <span className={`text-xs px-2 py-1 rounded ${stock.stockStatus === 'optimal' ? 'bg-green-100 text-green-700' :
                                                        stock.stockStatus === 'high' ? 'bg-blue-100 text-blue-700' :
                                                            'bg-red-100 text-red-700'
                                                        }`}>
                                                        {stock.stockStatus}
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                                                    <span>SKU: <code className="bg-gray-200 px-1 rounded text-xs">{stock.sku}</code></span>
                                                    <span>Stock: <strong className="text-blue-600">{stock.currentStock} units</strong></span>
                                                    <span>Reorder: <strong className="text-orange-600">{stock.reorderLevel}</strong></span>
                                                    <span>Days left: <strong className="text-purple-600">{stock.daysOfStock}</strong></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">{stock.stockValue}</p>
                                            <p className="text-xs text-gray-600">Turnover: {stock.monthlyTurnover}x/month</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Customer Metrics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-green-600" />
                                Customer Metrics
                            </CardTitle>
                            <CardDescription>Customer behavior and retention</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 gap-4">
                                {customerMetrics.map((metric, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">{metric.metric}</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                                        </div>
                                        <div className="text-right">
                                            <Badge className={`${metric.color} bg-transparent border-current`}>
                                                {metric.change}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Traffic Sources and Device Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Traffic Sources */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Eye className="w-5 h-5 text-purple-600" />
                                Traffic Sources
                            </CardTitle>
                            <CardDescription>Where your visitors come from</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {trafficSources.map((source, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                                            <span className="text-sm font-medium text-gray-700">{source.source}</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-sm text-gray-600">{source.visitors.toLocaleString()}</span>
                                            <span className="text-sm font-bold text-gray-900">{source.percentage}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Device Analytics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Monitor className="w-5 h-5 text-blue-600" />
                                Device Analytics
                            </CardTitle>
                            <CardDescription>Traffic breakdown by device type</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {deviceAnalytics.map((device, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <device.icon className={`w-5 h-5 ${device.color}`} />
                                            <div>
                                                <p className="font-medium text-gray-900">{device.device}</p>
                                                <p className="text-sm text-gray-600">{device.visitors.toLocaleString()} visitors</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-gray-900">{device.percentage}%</p>
                                            <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                                                <div
                                                    className={`h-2 rounded-full bg-current ${device.color}`}
                                                    style={{ width: `${device.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Geographic Analytics and Payment Methods */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Geographic Analytics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-red-600" />
                                Geographic Analytics
                            </CardTitle>
                            <CardDescription>Revenue and visitors by country</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {geographicData.map((country, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{country.flag}</span>
                                            <div>
                                                <p className="font-medium text-gray-900">{country.country}</p>
                                                <p className="text-sm text-gray-600">{country.visitors.toLocaleString()} visitors</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">{country.revenue}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Payment Methods */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-indigo-600" />
                                Payment Methods
                            </CardTitle>
                            <CardDescription>Transaction breakdown by payment type</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {paymentMethods.map((payment, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-full ${payment.color}`}>
                                                {payment.icon ? (
                                                    <payment.icon className="w-4 h-4 text-white" />
                                                ) : (
                                                    <div className="w-4 h-4 bg-white rounded"></div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{payment.method}</p>
                                                <p className="text-sm text-gray-600">{payment.transactions} transactions</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-gray-900">{payment.percentage}%</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
