<?php

namespace App\Models;

use App\Models\Record;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
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

    /**
     * Indicates if the IDs are auto-incrementing.
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'category_name',
        'category_description',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'updated_at' => 'datetime',
    ];

    /**
     * The 'booting' method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function (User $user) {
            $user->setAttribute($user->getKeyName(), Str::uuid()->toString());
        });
    }

    /**
     * Set relationship with the records.
     *
     * @return HasMany
     */
    public function records()
    {
        return $this->hasMany(Record::class);
    }
}
