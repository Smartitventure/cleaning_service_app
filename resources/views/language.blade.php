@include('layouts.header')
@include('layouts.sidebar')
<main class="maintop">
  <div class="mainsectionbox">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12">
          @if (Session::get('alert'))
          <div class="alert alert-{{ Session::get('alert') }} alert-dismissible" role="alert">
            <p>{{ Session::get('message') }} </p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          @endif
        </div>
        <div class="col-md-12">
          <div class="tattotsylehed">
            <h4>Enter Languages</h4>
          </div>
        </div>
        <div class="container-fluid">
          @if($type == 1)
            <form data-toggle="validator" action="{{route('store_languages')}}" method="post" enctype="multipart/form-data">
          @else
            <form data-toggle="validator" action="{{route('update_languages',$language->id)}}" method="post" enctype="multipart/form-data">
          @endif
          @csrf
          @if($type == 2)
            {{ method_field('PUT') }}
          @endif
            <div class="row">

              <div class="col-md-12">
                <div class="form-group custom-from">
                  <label for="Name" class="inputlabel">Language</label>
                  <input class="form-control custom-control @error('name') is-invalid @enderror" value="<?php echo $type == 2 ? $language->name : ''; ?>" type="text" id="name" name="name" placeholder="Language" required />
                  @error('name')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group custom-from">
                  <label for="Image" class="inputlabel">Flag</label>
                  <input class="form-control custom-control @error('image') is-invalid @enderror" type="file" id="image" name="image" @if($type == 1) required @endif/>
                  @error('image')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="col-md-12">
                @if($type == 1)
                <button type="submit" class="btn btn-danger custom-innerbutton btn-stylessav">Save</button>
                @else
                <button type="submit" class="btn btn-danger custom-innerbutton btn-stylessav">Update</button>
                @endif
              </div>
            </div>
            </form>
        </div>
      </div>
      <div class="table-title-add">
        <div class="row">
          <div class="col-sm-12">
            <h2 style="text-align:center;">Languages List </h2>
          </div>
        </div>
      </div>
      <div class="customtableinnerbox">

      <div class="main-container-inner">
        @if(count($languages) > 0)
        <div class="table-wrapper p-0">
          <table class=" datatable table table-bordered table-striped table-hover " id="user_data_table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Language</th>
                <th>Flag</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($languages as $language)
              <tr>
                <td>{{$language->id}}</td>
                <td>{{$language->name }}</td>
                <td><img src="{{asset($language->image)}}" /> </td>
                <td class="btn-td">
                  <a href="{{route('edit_language',$language->id)}}" class="edit"><i class="fa fa-pencil"></i></a>
                  <a class="delete" onclick="deleteData('{{route('delete_language',$language->id)}}');"><i class="fa fa-trash"></i></a>
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