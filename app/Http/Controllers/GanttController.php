<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Resource;
use App\Models\Task;
use Illuminate\Http\JsonResponse;

class GanttController extends Controller
{
    /**
     * View project action
     *
     * @param $project
     * @return JsonResponse
     */
    public function execute($project): JsonResponse
    {
        $project = Project::where('identifier', $project)
            ->first()
        ;

        $tasks = Task::where('project_id', $project->id)
            ->with(['assignees'])
            ->get()
            ->keyBy('id')
        ;

        $allocatedResources = Resource::leftJoin('allocations', 'resources.id', '=', 'allocations.resource_id')
            ->where('allocations.project_id', $project->id)
            ->get(['resources.*'])
            ->keyBy('id')
        ;

        $allocatedResourceIds = [];
        foreach ($allocatedResources as $resource) {
            $allocatedResourceIds[] = $resource->id;
        }

        $availableResources = Resource::whereNotIn('id', $allocatedResourceIds)
            ->get()
            ->keyBy('id')
        ;

        return response()->json([
            'project' => $project,
            'tasks' => $tasks,
            'allocated_resources' => $allocatedResources,
            'available_resources' => $availableResources,
        ]);
    }
}
