<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->string('jira_id')->nullable(true);
            $table->integer('duration');
            $table->integer('progress');
            $table->dateTime('start_date')->nullable()->default(null);
            $table->tinyInteger('is_renewed_plan')->default(0);
            $table->integer('project_id')->unsigned();
            $table->foreign('project_id')->references('id')->on('projects')
                ->onDelete('cascade')
                ->onUpdate('cascade')
            ;
            $table->string('status')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
