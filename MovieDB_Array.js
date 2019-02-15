var movies = [
	//each index will have it's own object(disctionary)
	{
		title: "Black Panther",
		hasWatched: true,
		rating: 10
	},
	
	{
		title: "Captain America, The Winter Solider",
		hasWatched: true,
		rating: 8
	},
	
	{
		title: "White Chicks",
		hasWatched: true,
		rating: 9
	}

]

for(var a = 0; a < movies.length; a++){
	var result = "You have ";
	
	//if you watched the movie then the string above changes in the following way
	if(movies[a].hasWatched){ 
		result += "watched ";
	}
	else{
		result += "not watched ";
	}
	
	
	result += "\"" + movies[a].title + "\" -" + movies[a].rating + " stars";
	console.log(result);
}
