<?php

namespace App\Core\Module;

use Nwidart\Modules\Activators\FileActivator as BaseFileActivator;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Foundation\Application;

class CustomFileActivator extends BaseFileActivator
{
    public function __construct(Application $app, Filesystem $files = null)
    {
        parent::__construct($app, $files);
    }

    /**
     * Override the problematic readJson method
     */
    public function readJson(): array
    {
        $statusFile = base_path('modules_statuses.json');

        if (!file_exists($statusFile)) {
            // Create the file with empty JSON if it doesn't exist
            file_put_contents($statusFile, '{}');
            return [];
        }

        $content = file_get_contents($statusFile);

        // Handle empty or invalid content
        if (empty(trim($content))) {
            file_put_contents($statusFile, '{}');
            return [];
        }

        $decoded = json_decode($content, true);

        // If JSON decoding failed, reset the file
        if (json_last_error() !== JSON_ERROR_NONE || !is_array($decoded)) {
            file_put_contents($statusFile, '{}');
            return [];
        }

        return $decoded;
    }
}
