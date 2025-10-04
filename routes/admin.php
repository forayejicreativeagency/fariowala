<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Dashboard\AdminController;

Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('menu-data', [AdminController::class, 'getMenuData'])->name('admin.menu-data');

    // Analytics Module
    Route::get('analytics', function () {
        return Inertia::render('analytics/index');
    })->name('admin.analytics');

    // User Management
    Route::prefix('users')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/users/index');
        })->name('admin.users.index');

        Route::get('/create', function () {
            return Inertia::render('admin/users/create');
        })->name('admin.users.create');
    });

    // Product Management
    Route::prefix('products')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/products/index');
        })->name('admin.products.index');

        Route::get('/create', function () {
            return Inertia::render('admin/products/create');
        })->name('admin.products.create');

        Route::get('/attributes', function () {
            return Inertia::render('admin/products/attributes');
        })->name('admin.products.attributes');
    });

    // Order Management
    Route::prefix('orders')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/orders/index');
        })->name('admin.orders.index');
    });

    // Customer Management
    Route::prefix('customers')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/customers/index');
        })->name('admin.customers.index');
    });

    // Category Management
    Route::prefix('categories')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/categories/index');
        })->name('admin.categories.index');
    });

    // Tags Management
    Route::prefix('tags')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/tags/index');
        })->name('admin.tags.index');
    });

    // Inventory Management
    Route::prefix('inventory')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/inventory/index');
        })->name('admin.inventory.index');
    });

    // Review Management
    Route::prefix('reviews')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/reviews/index');
        })->name('admin.reviews.index');
    });

    // Cart Management
    Route::prefix('cart')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/cart/index');
        })->name('admin.cart.index');
    });

    // Wishlist Management
    Route::prefix('wishlist')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/wishlist/index');
        })->name('admin.wishlist.index');
    });

    // Discount Management
    Route::prefix('discounts')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/discounts/index');
        })->name('admin.discounts.index');
    });

    // Newsletter Management
    Route::prefix('newsletter')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/newsletter/index');
        })->name('admin.newsletter.index');
    });

    // Blog Management
    Route::prefix('blog')->group(function () {
        Route::get('posts', function () {
            return Inertia::render('admin/blog/posts/index');
        })->name('admin.blog.posts.index');

        Route::get('posts/create', function () {
            return Inertia::render('admin/blog/posts/create');
        })->name('admin.blog.posts.create');

        Route::get('categories', function () {
            return Inertia::render('admin/blog/categories/index');
        })->name('admin.blog.categories.index');
    });

    // SEO Management
    Route::prefix('seo')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/seo/index');
        })->name('admin.seo.index');
    });

    // Payment Management
    Route::prefix('payments')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/payments/index');
        })->name('admin.payments.index');
    });

    // Shipping Management
    Route::prefix('shipping')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/shipping/index');
        })->name('admin.shipping.index');
    });

    // Courier Management
    Route::prefix('courier')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/courier/index');
        })->name('admin.courier.index');
    });

    // Page Builder
    Route::prefix('pages')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/pages/index');
        })->name('admin.pages.index');
    });

    // Menu Builder
    Route::prefix('menu-builder')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/menu-builder/index');
        })->name('admin.menu-builder.index');
    });

    // Fraud Protection
    Route::prefix('fraud')->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('admin/fraud/dashboard');
        })->name('admin.fraud.dashboard');

        Route::get('rules', function () {
            return Inertia::render('admin/fraud/rules');
        })->name('admin.fraud.rules');

        Route::get('blocked-ips', function () {
            return Inertia::render('admin/fraud/blocked-ips');
        })->name('admin.fraud.blocked-ips');

        Route::get('reports', function () {
            return Inertia::render('admin/fraud/reports');
        })->name('admin.fraud.reports');
    });

    // Support Center
    Route::prefix('support')->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('admin/support/dashboard');
        })->name('admin.support.dashboard');

        Route::get('tickets', function () {
            return Inertia::render('admin/support/tickets');
        })->name('admin.support.tickets');

        Route::get('chat', function () {
            return Inertia::render('admin/support/chat');
        })->name('admin.support.chat');

        Route::get('kb', function () {
            return Inertia::render('admin/support/kb');
        })->name('admin.support.kb');

        Route::get('faq', function () {
            return Inertia::render('admin/support/faq');
        })->name('admin.support.faq');
    });

    // Settings
    Route::prefix('settings')->group(function () {
        Route::get('general', function () {
            return Inertia::render('admin/settings/general');
        })->name('admin.settings.general');

        Route::get('store', function () {
            return Inertia::render('admin/settings/store');
        })->name('admin.settings.store');

        Route::get('email', function () {
            return Inertia::render('admin/settings/email');
        })->name('admin.settings.email');

        Route::get('payment', function () {
            return Inertia::render('admin/settings/payment');
        })->name('admin.settings.payment');

        Route::get('tax', function () {
            return Inertia::render('admin/settings/tax');
        })->name('admin.settings.tax');

        Route::get('shipping', function () {
            return Inertia::render('admin/settings/shipping');
        })->name('admin.settings.shipping');
    });
});
