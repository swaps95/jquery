$('document').ready(function(){
	
	var runslidevar;
	var count=0;
	var slidelen=$(".slidepart").length;
	
	
	$('.sliderrunner').css("width",(slidelen*100)+'%')
	

	
	
	function runnslide(){
		
		if(count<(slidelen-1)){
				$('.sliderrunner').stop().animate({left:'-'+((count+1)*100)+"%"},500)
			count=count+1;
	 }
	
	else{
			$('.sliderrunner').stop().animate({left:"0%"},1500)
	count=0
}
		}	
	
	
	
	runslidevar=setInterval(runnslide,2000)

			$( "#Right" ).click(function() {
		clearInterval(runslidevar);		
				runnslide();
runslidevar=setInterval(runnslide,2000);
     });		
		
		
		
		
			$( "#left" ).click(function() {
		clearInterval(runslidevar);	
				if(count>0){
	$('.sliderrunner').stop().animate({left:"-"+((count-1)*100)+"%"},500)
					count=count-1;
}
				else{
							count=slidelen-1;
									

$('.sliderrunner').stop().animate({left:'-'+((count)*100)+"%"},1200)

				}
runslidevar=setInterval(runnslide,2000);
     });		
		
		

	
})