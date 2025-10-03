<?php

namespace App\Core\Module\Contracts;

interface ModuleInterface
{
    /**
     * Get module name
     */
    public function getName(): string;

    /**
     * Get module version
     */
    public function getVersion(): string;

    /**
     * Get module description
     */
    public function getDescription(): string;

    /**
     * Get module dependencies
     */
    public function getDependencies(): array;

    /**
     * Install module
     */
    public function install(): bool;

    /**
     * Uninstall module
     */
    public function uninstall(): bool;

    /**
     * Enable module
     */
    public function enable(): bool;

    /**
     * Disable module
     */
    public function disable(): bool;

    /**
     * Check if module is enabled
     */
    public function isEnabled(): bool;

    /**
     * Boot module
     */
    public function boot(): void;

    /**
     * Register module services
     */
    public function register(): void;

    /**
     * Check if module is core
     */
    public function isCore(): bool;

    /**
     * Get module display name
     */
    public function getDisplayName(): string;

    /**
     * Get module author
     */
    public function getAuthor(): string;

    /**
     * Get module category
     */
    public function getCategory(): string;
}
