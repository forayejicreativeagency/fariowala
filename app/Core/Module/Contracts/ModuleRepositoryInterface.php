<?php

namespace App\Core\Module\Contracts;

use App\Models\Module;
use Illuminate\Database\Eloquent\Collection;

interface ModuleRepositoryInterface
{
    /**
     * Get all modules
     */
    public function all(): Collection;

    /**
     * Get enabled modules
     */
    public function enabled(): Collection;

    /**
     * Get disabled modules
     */
    public function disabled(): Collection;

    /**
     * Find module by name
     */
    public function findByName(string $name): ?Module;

    /**
     * Create or update module
     */
    public function createOrUpdate(array $data): Module;

    /**
     * Enable module
     */
    public function enable(string $name): bool;

    /**
     * Disable module
     */
    public function disable(string $name): bool;

    /**
     * Check if module exists
     */
    public function exists(string $name): bool;

    /**
     * Get module settings
     */
    public function getSettings(string $name): array;

    /**
     * Update module settings
     */
    public function updateSettings(string $name, array $settings): bool;
}
