let val = 0;

function initialize()
{
  val = document.getElementById('value').value;
  val = parseInt(val)
  setUp();
}

function setUp()
{
  document.getElementById('main').innerHTML = "<h3>$" + val + "</h3><br>Soda: <input class = 'amounts' type = 'button' value = '$2' onclick = 'calTwo()'><br>Domestics: <input type = 'button' class = 'amounts' value = '$4' onclick = 'calFour()'><br> Wine/Seltzer/Mix: <input type = 'button' class = 'amounts' value = '$5' onclick = 'calFive()'>";
  window.localStorage.setItem('value', val);
}

function calTwo()
{
   val = val - 2;
   setUp();
}
function calFour()
{
     val = val - 4;
     setUp();
}
function calFive()
{
    val = val - 5;
    setUp();
}
function getVal()
{
  val = window.localStorage.getItem('value');
  setUp();
}
