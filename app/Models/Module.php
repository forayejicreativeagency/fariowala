<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'version',
        'enabled',
        'installed',
        'settings',
        'installed_at',
    ];

    protected $casts = [
        'enabled' => 'boolean',
        'installed' => 'boolean',
        'settings' => 'array',
        'installed_at' => 'datetime',
    ];

    /**
     * Scope enabled modules
     */
    public function scopeEnabled($query)
    {
        return $query->where('enabled', true);
    }

    /**
     * Scope disabled modules
     */
    public function scopeDisabled($query)
    {
        return $query->where('enabled', false);
    }

    /**
     * Scope installed modules
     */
    public function scopeInstalled($query)
    {
        return $query->where('installed', true);
    }

    /**
     * Get module setting by key
     */
    public function getSetting(string $key, $default = null)
    {
        return data_get($this->settings, $key, $default);
    }

    /**
     * Set module setting
     */
    public function setSetting(string $key, $value): void
    {
        $settings = $this->settings ?? [];
        data_set($settings, $key, $value);
        $this->settings = $settings;
    }

    /**
     * Check if module has specific setting
     */
    public function hasSetting(string $key): bool
    {
        return data_get($this->settings, $key) !== null;
    }
}
