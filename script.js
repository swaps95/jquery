
$(document).ready(function($){
	var imageBox = $('.slider ul');
  var imageWidth = $('.slider ul li').first().children('img').width(); 
  var imageQuantity = $('.slider ul').children('li').length;
  var currentImage=1;
	imageBox.css('width', imageWidth*imageQuantity);
	console.log(imageBox.width());
   $('.nav .button').on('click', function(){ 
  var whichButton = $(this).data('nav'); 
	function transition(currentImageInput,ImageWidthInput){
	 var pxValue=-(currentImageInput-1)*ImageWidthInput
			 imageBox.animate({
			 'left':pxValue
		})
		
}
		 
  if(whichButton === 'next'){
		if(currentImage === imageQuantity){
			currentImage=1;
			transition(currentImage,imageWidth);
		}
		else{
			currentImage++;
      transition(currentImage,imageWidth);
		}
		
	}
		 else if(whichButton === 'prev'){
			 if(currentImage === 1){
				 currentImage=imageQuantity;
				 transition(currentImage,imageWidth);
			 }
			 else{
				 currentImage--;
			   transition(currentImage,imageWidth);
			 }
			 
		 }
   });
});