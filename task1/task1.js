let div1 = document.createElement("div");
let div2 = document.createElement("div");

div1.setAttribute('class','divv1');
div1.setAttribute('style','border:2px solid black');
div1.setAttribute('style','width:550px');
div1.setAttribute('style','display:inline');

document.body.appendChild(div1);

let homeimg = document.createElement("img");
homeimg.src='https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Color.jpg';
document.body.getElementsByClassName('divv1')[0].appendChild(homeimg);
homeimg.setAttribute('style','height:250px');
homeimg.setAttribute('style','width:250px');


div2.setAttribute('id','divv2');
document.body.appendChild(div2);
let btn1=document.createElement('button');
btn1.innerText="All";
document.body.appendChild(btn1);
let btn2=document.createElement('button');
btn2.innerText="RED";
document.body.appendChild(btn2);
let btn3=document.createElement('button');
btn3.innerText="GREEN";
document.body.appendChild(btn3);
let btn4=document.createElement('button');
btn4.innerText="BLUE";
document.body.appendChild(btn4);
