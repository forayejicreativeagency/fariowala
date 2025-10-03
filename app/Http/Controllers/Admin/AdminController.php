<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\AdminMenuService;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    protected AdminMenuService $adminMenuService;

    public function __construct(AdminMenuService $adminMenuService)
    {
        $this->adminMenuService = $adminMenuService;
    }

    /**
     * Show the admin dashboard
     */
    public function dashboard(): Response
    {
        return Inertia::render('admin/dashboard');
    }

    /**
     * Get admin menu data as JSON
     */
    public function getMenuData()
    {
        return response()->json([
            'menuGroups' => $this->adminMenuService->getAdminMenuData(),
            'modules' => $this->adminMenuService->getModules()
        ]);
    }
}
