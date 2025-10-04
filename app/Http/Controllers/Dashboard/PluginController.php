<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class PluginController extends Controller
{
    /**
     * Display the plugins page
     */
    public function index()
    {
        $modules = Module::all()->map(function ($module) {
            return [
                'id' => strtolower($module->name),
                'name' => $module->name,
                'enabled' => $module->enabled,
                'essential' => $module->essential ?? false,
            ];
        });

        return Inertia::render('plugins/index', [
            'modules' => $modules
        ]);
    }

    /**
     * Toggle a plugin's enabled state
     */
    public function toggle(Request $request, string $pluginId)
    {
        $request->validate([
            'enabled' => 'required|boolean'
        ]);

        // Find the module by name (case-insensitive)
        $module = Module::whereRaw('LOWER(name) = ?', [strtolower($pluginId)])->first();

        if (!$module) {
            return response()->json([
                'success' => false,
                'message' => 'Plugin not found'
            ], 404);
        }

        // Check if module is essential
        if ($module->essential && !$request->enabled) {
            return response()->json([
                'success' => false,
                'message' => 'Essential plugins cannot be disabled'
            ], 403);
        }

        // Update the module status
        $module->enabled = $request->enabled;
        $module->save();

        // Clear all relevant caches
        Cache::flush();
        Artisan::call('cache:clear');
        Artisan::call('config:clear');
        Artisan::call('route:clear');

        return response()->json([
            'success' => true,
            'message' => $request->enabled
                ? "Plugin '{$module->name}' has been enabled"
                : "Plugin '{$module->name}' has been disabled",
            'module' => [
                'id' => strtolower($module->name),
                'enabled' => $module->enabled
            ]
        ]);
    }

    /**
     * Get list of enabled plugins
     */
    public function enabled()
    {
        $enabledModules = Module::enabled()->pluck('name')->map(function ($name) {
            return strtolower($name);
        });

        return response()->json([
            'plugins' => $enabledModules
        ]);
    }
}
