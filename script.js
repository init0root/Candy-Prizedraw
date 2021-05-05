peoples = []
var user_count = 0;

function add_user(){
	get_name = document.getElementById("sort").value;
	peoples.push(get_name);
	user_count += 1;
	default_text = document.getElementById("text1").innerHTML = "PARTICIPANTES: ";
	add_number = document.getElementById("text2").innerHTML = user_count;
	
}


function sort(){
	var peoples_lenght = peoples.length;
	if(peoples_lenght === 0){
		alert("Adicione pessoas para o sorteio!")
	}else{
		var exec = Math.floor(Math.random() * peoples_lenght);
		Text_Winner = document.getElementById("text1").innerHTML="VENCEDOR:";
		Winner = document.getElementById("text2").innerHTML=peoples[exec];
	}
	
}