<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Core\Module\ModuleManager;
use Symfony\Component\HttpFoundation\Response;

class CheckModuleStatus
{
    protected ModuleManager $moduleManager;

    public function __construct(ModuleManager $moduleManager)
    {
        $this->moduleManager = $moduleManager;
    }

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, string $moduleName): Response
    {
        if (!$this->moduleManager->exists($moduleName)) {
            abort(404, "Module '{$moduleName}' not found.");
        }

        if (!$this->moduleManager->isEnabled($moduleName)) {
            abort(403, "Module '{$moduleName}' is disabled.");
        }

        return $next($request);
    }
}
