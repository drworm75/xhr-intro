function exectueThisCodeAfterFileLoaded(){
	console.log("It Worked!!!")
}

function exectueThisCodeAfterFileFails() {
	console.log("Boo-urns!");

}





var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", exectueThisCodeAfterFileLoaded);
myRequest.addEventListener("error", exectueThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);