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
            <h2 style="text-align:center;">All Service Providers</h2>
            </div>
            </div>
        </div>
        </div>
        <div class="customtableinnerbox">
        <div class="main-container-inner">
        @if(count($all_service_providers) > 0)
                <div class="table-wrapper p-0">
                    <table class=" datatable table table-bordered table-striped table-hover " id="myTable">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Service Provider Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th colspan="2">Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    @foreach($all_service_providers as $service_providers)
                    <tr>
                        <td>{{$service_providers->id}}</td>
                        <td>{{$service_providers->name}}</td>
                        <td>{{$service_providers->email}}</td>
                        @if($service_providers->status==1)
                            <td> <a href="{{ route('customer_status',['status'=>0,'id'=>$service_providers->id])}}" class="btn btn-success">Unblock</a></td>    
                        @else
                            <td> <a href="{{ route('customer_status',['status'=>1,'id'=>$service_providers->id])}}" class="btn btn-danger">Block</a></td> 
                        
                        @endif
                        <td>
                            <a class="btndeleteicon colred" href="#deleteEmployeeModal"  onclick="deleteData('{{route('service_provider/delete',$service_providers->id)}}');" data-toggle="modal"><i class="fa fa-trash" ></i></a>
                            <a class="btndeleteicon"  href="{{route('view-service-provider',$service_providers->id)}}"   ><i class="fa fa-eye" aria-hidden="true" data-toggle="tooltip" title="Delete"></i></a>
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