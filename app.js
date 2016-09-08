function processInput(message)
	{
		console.log (message);
		
		if(message == "hello!")
			
			return("hello world");
				else
					{
						return("you didn't say hello");
					}			
	}




var userinput;
userinput = prompt();
//console.log(userinput);

var response = processInput(userinput);

console.log(response);