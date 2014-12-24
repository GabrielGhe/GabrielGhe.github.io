var canvas,
	ctx,
	columns,
	ch,
	cw,
	characters = [],
	chinese = "未经授权的访问王劉楊黃陈黄吳周徐孙马朱何林罗冯",
	fontSize = 15;
chinese = chinese.split("");

$(document).ready(function(){
	canvas = $("#canvas");
	ctx = canvas.get(0).getContext("2d");
	

	//----------------------------------------------------------------
	//Fixing canvas size
	$(window).resize(resizeCanvas);
	function resizeCanvas(){
		var h = canvas.parent().height();
		var w = canvas.parent().width();
		canvas.attr("height", h);	//set height
		canvas.attr("width", w);	//set width
		ch = canvas.height();
		cw = canvas.width();
		columns = Math.floor(cw/fontSize);
		characters.length = 0;
		//populate characters
		var x = columns;
		while(x--){
			characters.push(1);
		}
	}
	resizeCanvas();

	//----------------------------------------------------------------
	//tick event
	timer = $.timer(function() {
		//black background
		ctx.fillStyle = "rgba(0,0,0,0.02)";
		ctx.fillRect(0,0,cw,ch);

		//green text
		ctx.fillStyle = "#0F0";
		ctx.font = fontSize + "px arial";

		var x = characters.length;
		while(x--){
			//random character
			var text = chinese[Math.floor(Math.random()*chinese.length)];
			ctx.fillText(text, x*fontSize, characters[x]*fontSize);

			if( (characters[x]*fontSize > ch) && Math.random() > 0.975)
				characters[x] = 0;
			characters[x]++;
		}

	}, 80, true);


	//----------------------------------------------------------------
	//click button to pause
	$("#timerToogle").click(function(){
		//is running
		timer.toggle();
		if(timer.isActive){
			$(this).html("Pause");
		} else {
			$(this).html("Play");
		}
	});
});


