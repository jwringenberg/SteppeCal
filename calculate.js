let val = 0;
let soda = 0;
let beer = 0;
let mix = 0;
let wine = 0;
let sel = 0;
let total = 0;

function initialize()
{
  val = document.getElementById('value').value;
  val = parseInt(val);
  let orgVal = val;
  window.localStorage.setItem('v', 0);
  window.localStorage.setItem('so', 0);
  window.localStorage.setItem('b', 0);
  window.localStorage.setItem('m', 0);
  window.localStorage.setItem('w', 0);
  window.localStorage.setItem('se', 0);
  window.localStorage.setItem('t', 0);
  setUp();
}

function setUp()
{
  var button1 = "<input type = 'button' class = 'amounts' value = 'Soda: $2' onclick = 'calTwo()'>";
  var button2 = "<input type = 'button' class = 'amounts' value = 'Beer: $4' onclick = 'calFour()'>";
  var button3 = "<input type = 'button' class = 'amounts' value = 'Mix: $5' onclick = 'calFive(" + 1 + ")'>";
  var button4 = "<input type = 'button' class = 'amounts' value = 'Wine: $5' onclick = 'calFive(" + 2 + ")'>";
  var button5 = "<input type = 'button' class = 'amounts' value = 'Sel: $5' onclick = 'calFive(" + 3 + ")'>";
  var button6 = "<br><br><br><hr><br><br><input type = 'button' class = 'bill' value = 'L&#39Addition' onclick = 'printBill()'>";
  document.getElementById('main').innerHTML = "<h3>$" + val + "</h3><br>" + button1 + button2 +"<br>"+ button3 + button4 + button5 + button6;
  window.localStorage.setItem('v', val);
  window.localStorage.setItem('so', soda);
  window.localStorage.setItem('b', beer);
  window.localStorage.setItem('m', mix);
  window.localStorage.setItem('w', wine);
  window.localStorage.setItem('se', sel);
  window.localStorage.setItem('t', total);
}

function calTwo()
{
   val = val - 2;
   total = total + 2;
   soda = soda + 1;
   setUp();
}
function calFour()
{
     val = val - 4;
     total = total + 4;
     beer = beer + 1;
     setUp();
}
function calFive(x)
{
    val = val - 5;
    total = total + 5;
  
    if(x == 1)
    {
      mix = mix + 1;
    }
    else if(x==2)
    {
      wine = wine + 1;
    }
    else
    {
      sel = sel + 1;
    }
  
    setUp();
}
function getVal()
{
   val = parseInt(window.localStorage.getItem('v'));
   soda = parseInt(window.localStorage.getItem('so'));
   beer = parseInt(window.localStorage.getItem('b'));
   mix = parseInt(window.localStorage.getItem('m'));
   wine = parseInt(window.localStorage.getItem('w'));
   sel = parseInt(window.localStorage.getItem('se'));
   total = parseInt(window.localStorage.getItem('t'));
   setUp();
}

function printBill()
{
   
   let part1 = "<p id = 'addition'>Sodas: " + soda + "<br>"; 
   let part2 = "Beers: " + beer + "<br>"; 
   let part3 = "Mix: " + mix + "<br>"; 
   let part4 = "Wine: " + wine + "<br>"; 
   let part5 = "Seltzer: " + sel + "</p><hr>"; 
   let part6 = "<p id = 'addition'>Total: $" +  total; 
   let part7 = ""; 
   let part8 =  "<br><br><input type = 'button' class = 'bill' value = 'Retourner' onclick = 'setUp()'>"; 
   
   if(val < 0)
    {
       let x = Math.abs(val); 
       part7 = "<br><span id = 'owe1'>You Owe $" +  x + "</span></p>"; 
    }
   else if (val == 0)
    {
       part7 = "<br>You Owe $ NOTHING </p>"; 
     }
    else
    {
      part7 = "<br><span id = 'owe2'>We Owe You $" + val + "</span></p>"; 
    }
  
    document.getElementById('main').innerHTML = "<h3>L\'Addition</h3>" + part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8;
}
