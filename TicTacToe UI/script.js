let boxone=document.getElementById("box1");
let boxtwo=document.getElementById("box2");
let boxthree=document.getElementById("box3");
let boxfour=document.getElementById("box4");
let boxfive=document.getElementById("box5");
let boxsix=document.getElementById("box6");
let boxseven=document.getElementById("box7");
let boxeight=document.getElementById("box8");
let boxnine=document.getElementById("box9");
let resetbtn=document.getElementById("resetgame");

boxone.addEventListener("click",function()
{
    boxone.innerHTML="X";
    boxone.style.color="black";
})
boxone.addEventListener("dblclick",function()
{
    boxone.innerHTML="O";
    boxone.style.color="pink";
})

boxtwo.addEventListener("click",function()
{
    boxtwo.innerHTML="X";
    boxtwo.style.color="black";
})
boxtwo.addEventListener("dblclick",function()
{
    boxtwo.innerHTML="O";
    boxtwo.style.color="pink";
})

boxthree.addEventListener("click",function()
{
    boxthree.innerHTML="X";
    boxthree.style.color="black";
})
boxthree.addEventListener("dblclick",function()
{
    boxthree.innerHTML="O";
    boxthree.style.color="pink";
})

boxfour.addEventListener("click",function()
{
    boxfour.innerHTML="X";
    boxfour.style.color="black";
})
boxfour.addEventListener("dblclick",function()
{
    boxfour.innerHTML="O";
    boxfour.style.color="pink";
})

boxfive.addEventListener("click",function()
{
    boxfive.innerHTML="X";
    boxfive.style.color="black";
})
boxfive.addEventListener("dblclick",function()
{
    boxfive.innerHTML="O";
    boxfive.style.color="pink";
})

boxsix.addEventListener("click",function()
{
    boxsix.innerHTML="X";
    boxsix.style.color="black";
})
boxsix.addEventListener("dblclick",function()
{
    boxsix.innerHTML="O";
    boxsix.style.color="pink";
})

boxseven.addEventListener("click",function()
{
    boxseven.innerHTML="X";
    boxseven.style.color="black";
})
boxseven.addEventListener("dblclick",function()
{
    boxseven.innerHTML="O";
    boxseven.style.color="pink";
})

boxeight.addEventListener("click",function()
{
    boxeight.innerHTML="X";
    boxeight.style.color="black";
})
boxeight.addEventListener("dblclick",function()
{
    boxeight.innerHTML="O";
    boxeight.style.color="pink";
})

boxnine.addEventListener("click",function()
{
    boxnine.innerHTML="X";
    boxnine.style.color="black";
})
boxnine.addEventListener("dblclick",function()
{
    boxnine.innerHTML="O";
    boxnine.style.color="pink";
})
resetbtn.addEventListener("click",function()
{
    boxone.innerHTML=".";
    boxone.style.color="black";
    boxtwo.innerHTML=".";
    boxtwo.style.color="black";
    boxthree.innerHTML=".";
    boxthree.style.color="black";
    boxfour.innerHTML=".";
    boxfour.style.color="black";
    boxfive.innerHTML=".";
    boxfive.style.color="black";
    boxsix.innerHTML=".";
    boxsix.style.color="black";
    boxseven.innerHTML=".";
    boxseven.style.color="black";
    boxeight.innerHTML=".";
    boxeight.style.color="black";
    boxnine.innerHTML=".";  
    boxnine.style.color="black";
})