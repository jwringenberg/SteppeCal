let val = 0;
let soda = 0;
let beer = 0;
let mix = 0;
let total = 0;

function initialize()
{
  val = document.getElementById('value').value;
  val = parseInt(val);
  localStorage.removeItem('v');
  localStorage.removeItem('s');
  localStorage.removeItem('b');
  localStorage.removeItem('m');
  localStorage.removeItem('t');
  setUp();
}

function setUp()
{
  var addition = "L&aposAddition";
  var button1 = "<input class = 'amounts' type = 'button' value = '$2' onclick = 'calTwo()'>";
  var button2 = "<input type = 'button' class = 'amounts' value = '$4' onclick = 'calFour()'>";
  var button3 = "<input type = 'button' class = 'amounts' value = '$5' onclick = 'calFive()'>";
  var button4 = "<br><br><br><hr><br><br><input type = 'button' class = 'bill' value = addition onclick = 'printBill()'>";
  document.getElementById('main').innerHTML = "<h3>$" + val + "</h3><br>" + button1 + button2 + button3 + button4;
  window.localStorage.setItem('v', val);
  window.localStorage.setItem('s', soda);
  window.localStorage.setItem('b', beer);
  window.localStorage.setItem('m', mix);
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
function calFive()
{
    val = val - 5;
    total = total + 5;
    mix = mix + 1;
    setUp();
}
function getVal()
{
   val = parseInt(window.localStorage.getItem('v'));
   soda = parseInt(window.localStorage.getItem('s'));
   beer = parseInt(window.localStorage.getItem('b'));
   mix = parseInt(window.localStorage.getItem('m'));
   total = parseInt(window.localStorage.getItem('t'));
   setUp();
}

function printBill()
{
   let part1 = "<p id = 'addition'>Sodas: " + soda + "<br>"; 
   let part2 = "Beers: " + beer + "<br>"; 
   let part3 = "Wine/Mix/Selzer: " + mix + "</p><hr>; 
   let part4 = "<p id = 'addition'>Total: $" +   total + "</p>"; 
   document.getElementById('main').innerHTML = "<h3>L\'Addition</h3>" + part1 + part2 + part3 + part4;
}
