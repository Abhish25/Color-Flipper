
const color = [0,1,2,3,4,5,7,8,9,"A","B","C", "D", "E", "F"];

const button = document.getElementById("btn");
const Cname = document.getElementById("color");

button.addEventListener("click" ,changeColor);

function changeColor(){

let hexcolor ="#";
for(let i=0; i<6 ; i++)
{
    hexcolor += color[getnumber()];
}
    document.body.style.background = hexcolor;
    Cname.textContent = hexcolor;
}

function getnumber(){
    return Math.floor((Math.random()*color.length) )
}
