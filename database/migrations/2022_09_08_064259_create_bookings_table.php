<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('address')->nullable();
            $table->string('address_lat')->nullable();
            $table->string('address_long')->nullable();
            $table->string('landmark')->nullable();
            $table->string('landmark_lat')->nullable();
            $table->string('landmark_long')->nullable();
            $table->dateTime('date_time')->nullable();
            $table->string('service_category');
            $table->string('comment');
            $table->integer('total_pay');
            $table->integer('status')->default(0);
            $table->dateTime('createdAt')->nullable();
            $table->dateTime('updatedAt')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}
