<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('records', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('user_id', 36);
            $table->string('category_id', 36);
            $table->string('record_name', 50);
            $table->string('record_user', 50)->nullable()->default(null);
            $table->string('record_email', 50)->nullable()->default(null);
            $table->string('record_password', 50);
            $table->string('record_url', 100)->nullable()->default(null);
            $table->string('record_phone', 20)->nullable()->default(null);
            $table->string('record_notes')->nullable()->default(null);
            $table->timestamps();

            $table->unique('record_name');
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('records');
        Schema::enableForeignKeyConstraints();
    }
}
