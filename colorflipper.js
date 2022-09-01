const colors=["red","green","blue"];
const button=document.getElementById("button");
const color=document.querySelector(".color");
const body=document.querySelector("body");

button.addEventListener("click",function(){
    const randomnumber= getrandomnumber();
body.style.backgroundColor=colors[randomnumber];
})
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}


//js for the other page hex html


const button=document.getElementById("button");
const color=document.querySelector(".color");
const body=document.querySelector("body");
const colors=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

button.addEventListener("click", function(){
    let ba= '#';
    for(let i=0; i<6 ;i++){
       ba+=colors[getrandomnumber()];
       
    }
    console.log(ba);
    body.style.backgroundColor=ba;
});
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}
