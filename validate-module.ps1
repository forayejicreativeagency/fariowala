# Module Validator and Fixer
# This script validates module.json files and fixes common issues

param(
    [string]$ModulePath
)

function Test-ModuleJson {
    param([string]$JsonPath)

    if (-not (Test-Path $JsonPath)) {
        Write-Host "❌ module.json not found at $JsonPath"
        return $false
    }

    try {
        $content = Get-Content $JsonPath -Raw
        $json = $content | ConvertFrom-Json

        # Check required fields
        $requiredFields = @('name', 'alias', 'description', 'keywords', 'priority', 'providers', 'files')

        foreach ($field in $requiredFields) {
            if (-not $json.PSObject.Properties.Name -contains $field) {
                Write-Host "❌ Missing required field: $field"
                return $false
            }
        }

        # Check data types
        if (-not ($json.keywords -is [array])) {
            Write-Host "❌ keywords must be an array"
            return $false
        }

        if (-not ($json.providers -is [array])) {
            Write-Host "❌ providers must be an array"
            return $false
        }

        if (-not ($json.files -is [array])) {
            Write-Host "❌ files must be an array"
            return $false
        }

        Write-Host "✅ module.json is valid"
        return $true

    } catch {
        Write-Host "❌ Invalid JSON: $($_.Exception.Message)"
        return $false
    }
}

function Fix-ModuleJson {
    param([string]$JsonPath, [string]$ModuleName)

    $fixedModule = @{
        "name" = $ModuleName
        "alias" = $ModuleName.ToLower()
        "description" = "$ModuleName module"
        "keywords" = @()
        "priority" = 0
        "providers" = @("Modules\$ModuleName\Providers\${ModuleName}ServiceProvider")
        "files" = @()
    }

    try {
        $jsonContent = $fixedModule | ConvertTo-Json -Depth 3
        Set-Content -Path $JsonPath -Value $jsonContent -Encoding UTF8
        Write-Host "✅ Fixed module.json for $ModuleName"
        return $true
    } catch {
        Write-Host "❌ Failed to fix module.json: $($_.Exception.Message)"
        return $false
    }
}

# Main logic
if ($ModulePath) {
    $moduleName = Split-Path $ModulePath -Leaf
    $jsonPath = Join-Path $ModulePath "module.json"

    Write-Host "Validating module: $moduleName"

    if (-not (Test-ModuleJson $jsonPath)) {
        Write-Host "Attempting to fix..."
        Fix-ModuleJson $jsonPath $moduleName
    }
} else {
    Write-Host "Usage: .\validate-module.ps1 -ModulePath 'path\to\module'"
}
