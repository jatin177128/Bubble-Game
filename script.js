let timer ;
let hitn ;
let scorev = 0;
function incscore(){
    scorev += 10;
    document.querySelector("#scoreval").textContent = scorev;
} 
function getnewhit(){
    hitn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitn;
}
function makebubble(){
let a = " ";
for(let i=0;i<189 ;i++){
      const b = Math.floor(Math.random()*10)
      a += `<div class="bubble">${b}</div>` 
}
document.querySelector("#ptbm").innerHTML = a;  
}
function countdown(){
     timer = 60;
     let a = setInterval(function (){
        if(timer>0){
         timer--;
         document.querySelector("#timerint").textContent = timer;
        }
        else{
            document.querySelector("#ptbm").innerHTML = `<h1>GAME OVER</h1>`;
            clearInterval(a);
        }
       },1000)
        
}
document.querySelector("#ptbm").addEventListener("click",function (a){
    let count = Number(a.target.textContent);
    if(hitn===count){
        incscore();
        getnewhit();
        makebubble();
    }
});

countdown();
makebubble();
getnewhit();
document.querySelector("#btn").addEventListener("click",function (){
    scorev = 0;
    document.querySelector("#scoreval").textContent = scorev;
     countdown();
     getnewhit();
     makebubble();
     
});