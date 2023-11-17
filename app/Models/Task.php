<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Task Model
 *
 * @property int $id
 * @property string $title
 * @property int $duration
 * @property string $jira_id
 * @property float $progress
 * @property string $start_date
 * @property int $is_renewed_plan
 * @property int $project_id
 * @property string $created_at
 * @property string $updated_at
 * @method static find($id)
 * @method static \Illuminate\Database\Query\Builder where($column, $operator = null, $value = null, $boolean = 'and')
 * @method static \Illuminate\Database\Query\Builder whereNull($columns, $boolean = 'and', $not = false)
 */
class Task extends Model
{
    use HasFactory;

    const DONE_STATUSES = [
        'Closed',
        'Resolved',
        'Done',
    ];

    protected $casts = [
        'created_at' => 'datetime:F j, Y H:i:s',
        'updated_at' => 'datetime:F j, Y H:i:s',
        'start_date' => 'datetime:Y-m-d',
    ];

    /**
     * Get the assignees for the task.
     */
    public function assignees(): BelongsToMany
    {
        return $this->belongsToMany(Resource::class, 'assignees');
    }

    /**
     * Get project which task assigned
     *
     * @return HasOne
     */
    public function project(): HasOne
    {
        return $this->hasOne(Project::class, 'id', 'project_id');
    }
}
