document.body.innerHTML='<div class="cont2"><button>btn1</button> <button>btn2</button> <button>btn3</button> </div><div class="cont1"> <img src="html.png" class= "foto"></div>';


const botones = document.querySelectorAll("button");

  botones[0].addEventListener("click",()=>{
    
  document.getElementsByTagName("div")[1].style.backgroundColor="blue";
  document.getElementsByTagName("div")[1].style.borderRadius="50%";
  document.getElementsByTagName("button")[0].style.visibility="hidden";
  document.getElementsByClassName("foto").style.transform = 'rotate(90 deg)';
  
 })

 botones[1].addEventListener("click",()=>{
    document.getElementsByTagName("div")[1].style.visibility="hidden";
   
 })

 botones[2].addEventListener("click",()=>{
    document.getElementsByTagName("div")[1].style = null;
    document.getElementsByTagName("button")[0].style=null;
 })




