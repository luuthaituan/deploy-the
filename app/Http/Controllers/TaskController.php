<?php

namespace App\Http\Controllers;

use App\Models\Task;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class TaskController extends Controller
{
    /**
     * Save task action
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $task = new Task();
        $task->title = $request->title;
        $task->jira_id = $request->jira_id;
        $task->start_date = $request->start_date;
        $task->duration = $request->duration;
        $task->progress = $request->progress;
        $task->project_id = $request->project_id;
        $task->save();

        foreach ($request->assignees as $resourceId) {
            $task->assignees()->attach($resourceId);
        }

        return response()->json($task->with(['assignees'])->find($task->id));
    }

    /**
     * Update task action
     *
     * @param $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update($id, Request $request): JsonResponse
    {
        $task = Task::find($id);
        $task->title = $request->title;
        $task->jira_id = $request->jira_id;
        $task->start_date = $request->start_date;
        $task->duration = $request->duration;
        $task->progress = $request->progress;
        $task->save();

        $task->assignees()->detach();
        foreach ($request->assignees as $resource) {
            $resourceId = $resource;
            if (is_array($resource)) {
                $resourceId = $resource['id'];
            }

            $task->assignees()->attach($resourceId);
        }

        return response()->json($task->with(['assignees'])->find($task->id));
    }

    /**
     * Delete task action
     *
     * @param $id
     * @return JsonResponse
     */
    public function delete($id): JsonResponse
    {
        $task = Task::find($id);
        $task->delete();

        return response()->json([
            "success" => true,
            "message" => "Delete task successfully"
        ]);
    }

    /**
     * Sync from jira action
     *
     * @throws GuzzleException
     */
    public function syncFromJira($projectId): JsonResponse
    {
        $data = [];
        $client = new Client();
        $tasks = Task::where('project_id', $projectId)
            ->whereNotNull('jira_id')
            ->whereNull('status')
            ->orWhereNotIn('status', Task::DONE_STATUSES)
            ->get()
        ;

        foreach ($tasks as &$task) {
            try {
                $request = $client->request(
                    'GET',
                    $this->getSyncUrl($task->jira_id),
                    [
                        'headers' => [
                            'Authorization' => "Bearer " . env('JIRA_TOKEN')
                        ]
                    ]
                );

                $response = $request->getBody()->getContents();
                $status = Arr::get(json_decode($response, true), 'fields.status.name');
//                $progress = Arr::get(json_decode($response, true), 'fields.progress.percent');
                $task->status = $status;
//                $task->progress = $progress;
                $task->save();
                $data[$task->id] = $task->with(['assignees'])->find($task->id);
            } catch (\Exception) {
                continue;
            }
        }

        return response()->json($data);
    }

    /**
     * Get sync api url by jira_id
     *
     * @param $jiraId
     * @return string
     */
    private function getSyncUrl($jiraId): string
    {
        return env('JIRA_URL') . '/rest/api/latest/issue/' . $jiraId;
    }
}
