$(document).ready(function(){
	startGrid(16);
	
});


function startGrid(tileSize){
	var gridSize = 640;
	var size = 640/tileSize;
	for(var i = 0; i < tileSize; i+=1)
	{
		for(var j = 0; j < tileSize; j++)
		{
			var $div = $('<div></div>');
			$div.addClass('tile');
			$div.width(size);
			$div.height(size);
			$('.sketcher').append($div);
		}
	}
	
	$('.tile').hover(function(){
        $(this).addClass('hover');
    });

}


function getInput(){
	//$('.tile').removeClass('hover');
	var input = prompt("If you want to clear the board, type the new size","64");

	if(input)
	{
		$('.sketcher').empty();
		startGrid(input);
	}

}


