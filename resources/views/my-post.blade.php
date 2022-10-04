<!DOCTYPE html>
<html>
<head>
	<title>Laravel infinite scroll pagination</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  	<style type="text/css">
  		.ajax-load{
  			background: #e1e1e1;
		    padding: 10px 0px;
		    width: 100%;
  		}
  	</style>
</head>
<body>


<div class="container">
	<h2 class="text-center">Laravel infinite scroll pagination</h2>
	<br/>
	<div class="col-md-12" id="post-data">
		@include('data')
	</div>
</div>


<div class="ajax-load text-center" >
	<p><img src="{{asset('images/loader.gif')}}">Loading More post</p>
</div>


<script>
    function sleep(miliseconds) {
        var currentTime = new Date().getTime();
        while (currentTime + miliseconds >= new Date().getTime()) {
        }
    }
   function loadMoreData(page)
   {
      $.ajax({
         url:'?page=' + page,
         type:'get',
         beforeSend: function()
         {
            $(".ajax-load").show();
            sleep(1000);
         }
      })
      .done(function(data){
         if(data.html == ""){
            $('.ajax-load').html("No more Posts Found!");
            return;
         }
         $('.ajax-load').hide();
         $("#post-data").append(data.html);
      })
      // Call back function
      .fail(function(jqXHR,ajaxOptions,thrownError){
         alert("Server not responding.....");
      });
 
   }
   //function for Scroll Event
   var page =1;
   $(window).scroll(function(){   
      if($(window).scrollTop() + $(window).height() > $(document).height() - 50){  
         page++;
         loadMoreData(page);
      }
   });
   </script>


</body>
</html>