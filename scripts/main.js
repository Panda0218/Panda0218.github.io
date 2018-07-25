/*var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt("Enter your name");
    console.log(myName);
    localStorage.setItem("name", myName);
myHeading.textContent="hello "+myName;
}
//初始化
if(!localStorage.getItem("name")){
	setUserName();
}else{
	var storedName=localStorage.getItem("name");
	myHeading.textContent="hello"+storedName;
}
myButton.onclick = function() {
    setUserName();
}*/