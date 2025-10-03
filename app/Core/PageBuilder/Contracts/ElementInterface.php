<?php

namespace App\Core\PageBuilder\Contracts;

interface ElementInterface
{
    /**
     * Get element name
     */
    public function getName(): string;

    /**
     * Get element category
     */
    public function getCategory(): string;

    /**
     * Get element icon
     */
    public function getIcon(): string;

    /**
     * Get element settings schema
     */
    public function getSettingsSchema(): array;

    /**
     * Get default settings
     */
    public function getDefaultSettings(): array;

    /**
     * Render element
     */
    public function render(array $settings = [], array $content = []): string;

    /**
     * Get element preview
     */
    public function getPreview(): string;

    /**
     * Validate settings
     */
    public function validateSettings(array $settings): bool;
}
