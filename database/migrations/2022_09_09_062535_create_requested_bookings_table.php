<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestedBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requested_bookings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('service_provider_id');
            $table->foreign('service_provider_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('booking_id');
            $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('cascade');
            $table->string('provider_image')->nullable();
            $table->char('provider_comment')->nullable();
            $table->string('provider_name')->nullable();
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
        Schema::dropIfExists('requested_bookings');
    }
}
