$('document').ready(function(){
	
	var runslidevar;
	var count=0;
	var slidelen=$(".slidepart").length;
	
	
	$('.sliderrunner').css("width",(slidelen*100)+'%')
//	$( "#Right" ).click(function() {
//				$('.sliderrunner').animate({left:"-=100%"})
//  });
	function runnslide(){
		
		if(count<(slidelen-1)){
				$('.sliderrunner').animate({left:"-=100%"},500)
			count=count+1;
	 }
	
	else{
			$('.sliderrunner').animate({left:"0%"},1500)
	count=0
}
		
	}
runslidevar=setInterval(runnslide,2000)
	
})