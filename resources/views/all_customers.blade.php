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
            <h2 style="text-align:center;">All Customers </h2>
            </div>
            </div>
        </div>
        </div>
        <div class="customtableinnerbox">
        <div class="main-container-inner">
        @if(count($all_customers) > 0)
                <div class="table-wrapper p-0">
                    <table class=" datatable table table-bordered table-striped table-hover " id="myTable">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th colspan="2">Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    @foreach($all_customers as $data)
                    <tr>
                        <td>{{$data->id}}</td>
                        <td>{{$data->name}}</td>
                        <td>{{$data->email}}</td>
                        @if($data->status==1)
                            <td> <a href="{{ route('customer_status',['status'=>0,'id'=>$data->id])}}" class="btn btn-success">Unblock</a></td>    
                        @else
                            <td> <a href="{{ route('customer_status',['status'=>1,'id'=>$data->id])}}" class="btn btn-danger">Block</a></td> 
                        
                        @endif
                        <td>
                            <a href="#deleteEmployeeModal"  onclick="deleteData('{{route('customer/delete',$data->id)}}');" data-toggle="modal"><i class="fa fa-trash" ></a>
                            <a href="{{route('view-customer',$data->id)}}" ><i class="fa fa-eye" aria-hidden="true" data-toggle="tooltip" title="View"></a>
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