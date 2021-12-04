<?php

namespace App\Models;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * @property string id
 * @property string user_id
 * @property string category_id
 * @property string record_name
 * @property string record_user
 * @property string record_email
 * @property string record_password
 * @property string record_phone
 * @property string record_url
 * @property string record_notes
 * @property mixed created_at
 * @property mixed updated_at
 */
class Record extends Model
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
        'user_id',
        'category_id',
        'record_name',
        'record_user',
        'record_email',
        'record_password',
        'record_phone',
        'record_url',
        'record_notes',
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
     * Set relationship with the category.
     *
     * @return BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Set relationship with the user.
     *
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
