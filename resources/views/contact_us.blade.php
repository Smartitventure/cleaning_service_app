@include('layouts.header')
@include('layouts.sidebar')
<main class="maintop">
    <div class="mainsectionbox">
        <div class="container-fluid">
            @if(Session::get('alert'))
            <div class="alert alert-{{Session::get('alert')}} alert-dismissible" role="alert">
                <p>{{Session::get('message')}} </p>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            @endif
        </div>
        <div class="bank-innersection">
            <div class="table-title-add">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 style="text-align:center;">Contact Us Details </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="customtableinnerbox">

      <div class="main-container-inner">
        @if(count($contact_us) > 0)
            <div class="table-wrapper p-0">
                <table class=" datatable table table-bordered table-striped table-hover " id="user_data_table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach( $contact_us as $data)
                        <tr>
                            <td>{{$data->id}}</td>
                            <td>{{$data->email}}</td>
                            <td>{{$data->message}}</td>
                            <td>
                                <a href="#" class="delete" onclick="deleteData('{{route('contact_us/delete',$data->id)}}');"><i class="fa fa-trash" ></i></a>
                            </td>
                        </tr>  
                        @endforeach
                    </tbody>
                </table>
            </div>
        @else
        <h1 class="nodatafoundheading" >No data found</h1>
        @endif
        </div>
        </div>

    </div>  
</main>
@include('layouts.footer')