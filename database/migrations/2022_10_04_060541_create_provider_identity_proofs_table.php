<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProviderIdentityProofsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provider_identity_proofs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('service_provider_id');
            $table->foreign('service_provider_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('driving_licence_front_img')->nullable();
            $table->string('driving_licence_back_img')->nullable();
            $table->string('national_id_front_img')->nullable();
            $table->string('national_id_back_img')->nullable();
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
        Schema::dropIfExists('provider_identity_proofs');
    }
}
