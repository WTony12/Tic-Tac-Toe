//Now that its perfectly functional, I need to deduplicate some of the functions
$(document).ready(function(){
	var matrix = ["N","N","N","N","N","N","N","N","N"];
	var turn = "player";
	var playerChoice;
	var cpuChoice;
	var count = 0;
	var win = 0;
	
	//Click selection
	$("#xButt").on("click", function(){
		playerChoice = "X";
		cpuChoice = "O";
		$("#select").hide();
		$("#board").removeClass("invisible");
	});
	$("#oButt").on("click", function(){
		playerChoice = "O";
		cpuChoice = "X";
		$("#select").hide();
		$("#board").removeClass("invisible");
	});
	//Click boxes
	$("#1box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[0] === "N")
			{
				matrix[0] = playerChoice;
				$("#1").text(playerChoice);
				playerLast = 0;
				$("#1").removeClass("invisible");
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	$("#2box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[1] === "N")
			{
				matrix[1] = playerChoice;
				$("#2").text(playerChoice);
				playerLast = 1;
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	$("#3box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[2] === "N")
			{
				matrix[2] = playerChoice;
				$("#3").text(playerChoice);
				playerLast = 2;
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	$("#4box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[3] === "N")
			{
				matrix[3] = playerChoice;
				$("#4").text(playerChoice);
				playerLast = 3;
				$("#4").removeClass("invisible");
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	$("#5box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[4] === "N")
			{
				matrix[4] = playerChoice;
				$("#5").text(playerChoice);
				playerLast = 4;
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	$("#6box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[5] === "N")
			{
				matrix[5] = playerChoice;
				$("#6").text(playerChoice);
				playerLast = 5;
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	$("#7box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[6] === "N")
			{
				matrix[6] = playerChoice;
				$("#7").text(playerChoice);
				playerLast = 6;
				$("#7").removeClass("invisible");
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	$("#8box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[7] === "N")
			{
				matrix[7] = playerChoice;
				$("#8").text(playerChoice);
				playerLast = 7;
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	$("#9box").on("click", function(){
		if(turn === "player")
		{
			if(matrix[8] === "N")
			{
				matrix[8] = playerChoice;
				$("#9").text(playerChoice);
				playerLast = 8;
				++count;
				turn = "cpu";
				winCheck();
				winAlert(win);
				if(win !== 1 && win !== 3)
				{
					cpuTurn();
					winCheck();
					winAlert(win);
				}
			}
		}
	});
	//CPU AI
	function cpuTurn(){
		var i, loc;
		var emptyArr = [];
		var rand;
		//If no rows found in player, try center, if not, pick random empty
		for(i = 0; i < matrix.length; ++i){
			if(matrix[i] === "N")
			{
				matrix[i] = cpuChoice;
				winCheck();
				if(win == 2)
				{
					matrix[i] = cpuChoice;
					if(i == 0 || i == 3 || i == 6)
					{
						$("#" + (i+1)).removeClass("invisible");
					}
					$("#" + (i+1)).text(cpuChoice);
					turn = "player";
					++count;
					return;
				}
				matrix[i] = "N";
				loc = i;
				emptyArr.push(loc);
			}
		}
		for(i = 0; i < matrix.length; ++i){
			if(matrix[i] === "N")
			{
				matrix[i] = playerChoice;
				winCheck();
				if(win == 1)
				{
					matrix[i] = cpuChoice;
					if(i == 0 || i == 3 || i == 6)
					{
						$("#" + (i+1)).removeClass("invisible");
					}
					$("#" + (i+1)).text(cpuChoice);
					win = 0;
					turn = "player";
					++count;
					return;
				}
				matrix[i] = "N";
				loc = i;
			}
		}
		if(matrix[4] === "N")
		{
			matrix[4] = cpuChoice;
			$("#" + (5)).text(cpuChoice);
		}
		else
		{
			rand = emptyArr[Math.floor(Math.random() * emptyArr.length)];
			matrix[rand] = cpuChoice;
			if(rand == 0 || rand == 3 || rand == 6)
			{
				$("#" + (rand+1)).removeClass("invisible");
			}
			$("#" + (rand+1)).text(cpuChoice);
		}
		++count;
		turn = "player";
	}
	//Winning check
	function winCheck(){
		if(matrix[0] + matrix[1] + matrix[2] === "XXX" || matrix[0] + matrix[1] + matrix[2] === "OOO")
		{
			if(matrix[0] === playerChoice)
				win = 1;
			else
				win = 2;
		}
		else if(matrix[3] + matrix[4] + matrix[5] === "XXX" || matrix[3] + matrix[4] + matrix[5] === "OOO")
		{
			if(matrix[3] === playerChoice)
				win = 1;
			else
				win = 2;
		}
		else if(matrix[6] + matrix[7] + matrix[8] === "XXX" || matrix[6] + matrix[7] + matrix[8] === "OOO")
		{
			if(matrix[6] === playerChoice)
				win = 1;
			else
				win = 2;
		}
		else if(matrix[0] + matrix[3] + matrix[6] === "XXX" || matrix[0] + matrix[3] + matrix[6] === "OOO")
		{
			if(matrix[0] === playerChoice)
				win = 1;
			else
				win = 2;
		}
		else if(matrix[1] + matrix[4] + matrix[7] === "XXX" || matrix[1] + matrix[4] + matrix[7] === "OOO")
		{
			if(matrix[1] === playerChoice)
				win = 1;
			else
				win = 2;
		}
		else if(matrix[2] + matrix[5] + matrix[8] === "XXX" || matrix[2] + matrix[5] + matrix[8] === "OOO")
		{
			if(matrix[2] === playerChoice)
				win = 1;
			else
				win = 2;
		}
		else if(matrix[0] + matrix[4] + matrix[8] === "XXX" || matrix[0] + matrix[4] + matrix[8] === "OOO")
		{
			if(matrix[0] === playerChoice)
				win = 1;
			else
				win = 2;
		}
		else if(matrix[2] + matrix[4] + matrix[6] === "XXX" || matrix[2] + matrix[4] + matrix[6] === "OOO")
		{
			if(matrix[2] === playerChoice)
				win = 1;
			else
				win = 2;
		}
		else if(count == 9)
		{
			win = 3;
		}
	}
	//Winning alert
	function winAlert(w){
		switch(w)
		{
			case 0:
				break;
			case 1:
				alert("YOU WIN!");
				resetBoard();
				break;
			case 2:
				alert("YOU LOSE!");
				resetBoard();
				break;
			case 3:
				alert("DRAW");
				resetBoard();
				break;
		}
	}
	//Reset board
	function resetBoard(){
		win = 0;
		count = 0;
		matrix = ["N","N","N","N","N","N","N","N","N"];
		
		$("#1").text("N");
		$("#1").addClass("invisible");
		$("#2").text("");
		$("#3").text("");
		$("#4").text("N");
		$("#4").addClass("invisible");
		$("#5").text("");
		$("#6").text("");
		$("#7").text("N");
		$("#7").addClass("invisible");
		$("#8").text("");
		$("#9").text("");
	}
});