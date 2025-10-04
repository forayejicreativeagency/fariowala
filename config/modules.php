<?php

return [
    'namespace' => 'Modules',
    'paths' => [
        'modules' => base_path('modules'),
        'assets' => public_path('modules'),
        'migration' => base_path('database/migrations'),
        'generator' => [
            'config' => ['path' => 'config', 'generate' => true],
            'command' => ['path' => 'App/Console', 'generate' => true],
            'channels' => ['path' => 'App/Broadcasting', 'generate' => false],
            'controller' => ['path' => 'App/Http/Controllers', 'generate' => true],
            'filter' => ['path' => 'App/Http/Middleware', 'generate' => true],
            'request' => ['path' => 'App/Http/Requests', 'generate' => true],
            'provider' => ['path' => 'App/Providers', 'generate' => true],
            'assets' => ['path' => 'Resources/assets', 'generate' => true],
            'lang' => ['path' => 'Resources/lang', 'generate' => true],
            'views' => ['path' => 'Resources/views', 'generate' => true],
            'test' => ['path' => 'Tests/Unit', 'generate' => true],
            'test-feature' => ['path' => 'Tests/Feature', 'generate' => true],
            'repository' => ['path' => 'App/Repositories', 'generate' => false],
            'event' => ['path' => 'App/Events', 'generate' => false],
            'listener' => ['path' => 'App/Listeners', 'generate' => false],
            'policies' => ['path' => 'App/Policies', 'generate' => false],
            'rules' => ['path' => 'App/Rules', 'generate' => false],
            'jobs' => ['path' => 'App/Jobs', 'generate' => false],
            'emails' => ['path' => 'App/Mail', 'generate' => false],
            'notifications' => ['path' => 'App/Notifications', 'generate' => false],
            'resource' => ['path' => 'App/Transformers', 'generate' => false],
            'model' => ['path' => 'App/Models', 'generate' => true],
            'routes' => ['path' => 'Routes', 'generate' => true],
        ],
    ],
    'composer' => [
        'vendor' => 'nwidart',
        'author' => [
            'name' => 'Your Name',
            'email' => 'your@email.com',
        ],
    ],
    'composer-output' => false,
    'cache' => [
        'enabled' => false,
        'key' => 'laravel-modules',
        'lifetime' => 60,
    ],
    'register' => [
        'translations' => true,
        'files' => 'register',
    ],
    'scan' => [
        'enabled' => false,
        'paths' => [],
    ],
    'activators' => [
        'file' => [
            'class' => \Nwidart\Modules\Activators\FileActivator::class,
            'statuses-file' => base_path('modules_statuses.json'),
            'cache-key' => 'activator.installed',
            'cache-lifetime' => 604800,
        ],
    ],
    'activator' => 'file',
];
