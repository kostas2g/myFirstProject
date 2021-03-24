let imgPetra = document.querySelector('#img-petra');
let imgPsalidi = document.querySelector('#img-psalidi');
let imgXarti = document.querySelector('#img-xarti');

let myScore = document.querySelector('#my-score');
let pcScore = document.querySelector('#pc-score');


let myChoose = document.querySelector('#my-choose');
let pcChoose = document.querySelector('#pc-choose');
let winLose = document.querySelector('#winLose');

choices = ["Πέτρα","Ψαλίδι","Χαρτί"];
let myScoreNum=1;
let PcScoreNum =1;

myScore.innerText = 0;
pcScore.innerText = 0;


function clickImages(){
imgPetra.addEventListener("click", mainFunc);
imgPsalidi.addEventListener("click", mainFunc);
imgXarti.addEventListener("click", mainFunc);
}


function stopCount(){
	myScoreNum=0;
	PcScoreNum =0;
	myScore.innerText = myScoreNum;
	pcScore.innerText = PcScoreNum;
	winLose.innerText = "";
}

function mainFunc(){ 

imgPetra.value=0;
imgPsalidi.value=1;
imgXarti.value=2;

let randomNumber = Math.floor(Math.random() * 3); 

myChoose.innerText = choices[this.value];
pcChoose.innerText = choices[randomNumber];

if(this.value-randomNumber == -1 || this.value-randomNumber == 2){

	winLose.innerText = "ΝΙΚΗΣΕΣ!";
	myScore.innerText = myScoreNum++;
	if(myScore.innerText==5){
		alert("ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΕΣ ΤΟ ΠΑΙΧΝΙΔΙ!");
		return  stopCount();
	}
	
}
else if(this.value == randomNumber){
	
	winLose.innerText = "ΙΣΟΠΑΛΙΑ!";
	
}else{

	winLose.innerText = "ΕΧΑΣΕΣ!";	
	pcScore.innerText = PcScoreNum++;
	if(pcScore.innerText==5){
		alert("ΕΧΑΣΕΣ ΤΟ ΠΑΙΧΝΙΔΙ! ΠΡΟΣΠΑΘΗΣΕ ΞΑΝΑ... ");
		return stopCount();	
	}
}  

};

clickImages();