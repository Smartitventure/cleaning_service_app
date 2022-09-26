<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('lat')->nullable();
            $table->string('long')->nullable();
            $table->string('gender');
            $table->string('role');
            $table->string('company')->nullable();
            $table->string('email')->unique()->nullable();
            $table->unsignedBigInteger('mobile_number')->unique();
            $table->string('country');
            $table->string('language');
            $table->integer('status');
            $table->date('dob');
            $table->date('join_date');
            $table->dateTime('last_seen')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('image')->nullable();
            $table->string('password')->nullable();
            $table->dateTime('createdAt')->nullable();
            $table->dateTime('updatedAt')->nullable();
            $table->rememberToken();
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
