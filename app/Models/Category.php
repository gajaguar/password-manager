<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * @property string id
 * @property string category_name
 * @property string category_description
 * @property mixed created_at
 * @property mixed updated_at
 */
class Category extends Model
{
    use HasFactory;

    /**
     * Chanhe the default primary key type to a string.
     */
    protected $keyType = 'string';

    public $incrementing = false;

    protected static function boot()
    {
        parent::boot();

        static::creating(function (User $user) {
            $user->setAttribute($user->getKeyName(), Str::uuid()->toString());
        });
    }
}
