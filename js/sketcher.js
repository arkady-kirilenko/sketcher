$(document).ready(function(){

	//$('.sketcher').append( $('<div></div>') );
	startGrid(16);
});



function startGrid(size){

	for(var i = 0; i < size ; i++)
	{
		for(var j = 0; j < size ; j++)
		{
			var $div = $('<div></div');
			var width = 600/(size - 1);
			var height = 600/(size - 1);

			//$div.css("background-color","black");
			$div.height(height);
			$div.width(width);

			$div.addClas('drawable');
			$('.sketcher').append( $div );
		}
	}
}

/*$('div').hover(
	function(){ $('div').css("background-color","black") },
	function(){}
)*/

