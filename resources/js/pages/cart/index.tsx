import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/admin-layout';
import AdminLayout from '@/layouts/admin-layout';

const cartItems = [
    { id: 'CART-001', customer: 'John Doe', items: 3, total: '$125.50', status: 'active', updated: '2 hours ago' },
    { id: 'CART-002', customer: 'Sarah Smith', items: 1, total: '$89.99', status: 'abandoned', updated: '4 hours ago' },
    { id: 'CART-003', customer: 'Mike Johnson', items: 5, total: '$234.75', status: 'active', updated: '6 hours ago' },
    { id: 'CART-004', customer: 'Emma Wilson', items: 2, total: '$67.20', status: 'abandoned', updated: '8 hours ago' },
    { id: 'CART-005', customer: 'David Brown', items: 4, total: '$156.80', status: 'active', updated: '10 hours ago' },
];

function getStatusColor(status) {
    switch (status) {
        case 'active':
            return 'bg-green-100 text-green-800';
        case 'abandoned':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

export default function CartManagement() {
    return (
        <AdminLayout>
            <Head title="Cart Management" />

            <div className="p-5">
                <h1 className="text-2xl font-bold mb-6">Cart Management</h1>
                <div className="mt-8">
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Cart ID</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Items</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Total</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-600">Last Updated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((cart, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="py-3 px-4 font-mono text-sm text-blue-600">{cart.id}</td>
                                            <td className="py-3 px-4 font-medium text-gray-900">{cart.customer}</td>
                                            <td className="py-3 px-4 text-gray-900">{cart.items}</td>
                                            <td className="py-3 px-4 font-bold text-gray-900">{cart.total}</td>
                                            <td className="py-3 px-4">
                                                <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(cart.status)}`}>
                                                    {cart.status}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-600">{cart.updated}</td>
                                            <td className="py-3 px-4">
                                                <button className="text-red-500 hover:underline text-sm">Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
