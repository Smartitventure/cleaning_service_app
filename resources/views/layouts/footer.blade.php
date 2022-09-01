<script src="js/jquery.min.js "></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
	<script src="https://kit.fontawesome.com/9681e38096.js" crossorigin="anonymous"></script>
	<script>
	$('#percent').on('change', function() {
		var val = parseInt($(this).val());
		var $circle = $('#svg #bar');
		if(isNaN(val)) {
			val = 100;
		} else {
			var r = $circle.attr('r');
			var c = Math.PI * (r * 2);
			if(val < 0) {
				val = 0;
			}
			if(val > 100) {
				val = 100;
			}
			var pct = ((100 - val) / 100) * c;
			$circle.css({
				strokeDashoffset: pct
			});
			$('#cont').attr('data-pct', val);
		}
	});
	</script>
	<script>
		let toggle = document.querySelector('.toggle');
		let sidemenubar = document.querySelector('.sidemenubar');
		let maintop = document.querySelector('.maintop');
		let headertop = document.querySelector('.headertop');
 
		toggle.onclick = function(){
			sidemenubar.classList.toggle('active');
			maintop.classList.toggle('active');
			headertop.classList.toggle('active');
		}
	  </script>
	  <script>
		$('#percent').on('change', function() {
			var val = parseInt($(this).val());
			var $circle = $('#svg #bar');
			if(isNaN(val)) {
				val = 100;
			} else {
				var r = $circle.attr('r');
				var c = Math.PI * (r * 2);
				if(val < 0) {
					val = 0;
				}
				if(val > 100) {
					val = 100;
				}
				var pct = ((100 - val) / 100) * c;
				$circle.css({
					strokeDashoffset: pct
				});
				$('#cont').attr('data-pct', val);
			}
		});
		</script>
		<script>
			let toggle = document.querySelector('.toggle');
			let sidemenubar = document.querySelector('.sidemenubar');
			let maintop = document.querySelector('.maintop');
			let headertop = document.querySelector('.headertop');
	 
			toggle.onclick = function(){
				sidemenubar.classList.toggle('active');
				maintop.classList.toggle('active');
				headertop.classList.toggle('active');
			}
		  </script>
		   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
		   integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
		   crossorigin="anonymous"></script>
		 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
		   integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
		   crossorigin="anonymous"></script>
		 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
		   integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
		   crossorigin="anonymous"></script>
		 <script>
		   //Get the button
		   var mybutton = document.getElementById("myBtn");
	   
		   // When the user scrolls down 20px from the top of the document, show the button
		   window.onscroll = function () { scrollFunction() };
	   
		   function scrollFunction() {
			 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			   mybutton.style.display = "block";
			 } else {
			   mybutton.style.display = "none";
			 }
		   }
	   
		   // When the user clicks on the button, scroll to the top of the document
		   function topFunction() {
			 document.body.scrollTop = 0;
			 document.documentElement.scrollTop = 0;
		   }
	   
		 </script>
		 <script>
		   $(window).scroll(function () {
			 if ($(window).scrollTop() >= 300) {
			   $('nav').addClass('fixed-header');
			   $('nav div').addClass('visible-title');
			 }
			 else {
			   $('nav').removeClass('fixed-header');
			   $('nav div').removeClass('visible-title');
			 }
		   });
	   
		 </script>
</body>

</html>