$(document).ready(function() {
 //Каруселька
  //Документация: http://owlgraphic.com/owlcarousel/
  var owl = $(".owl-carousel");
  owl.owlCarousel ({
    items : 1,
    margin: 10,
    loop: true,
       nav: true,
       responsive: {
      320: {
        items: 1
      },
      480: {
        items: 2
      },
      760: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  owl.on("mousewheel", ".owl-wrapper", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("owl.prev");
    } else {
      owl.trigger("owl.next");
    }
    e.preventDefault();
  });
  $(".next_button").click(function(){
      owl.trigger("next.owl.carousel");
  });
   
  $(".prev_button").click(function(){
      owl.trigger("prev.owl.carousel");
  });
	
	$(".main_menu_button").click(function() {
		$(".main_menu ul").slideToggle();
	});	

});  //функция показа
	function show(state)
	{
	document.getElementById('window').style.display = state;	
	document.getElementById('gray').style.display = state; 		
	}