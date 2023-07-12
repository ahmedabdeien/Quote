var prodetarOne=[
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at”",
  "“Two things are infinite: the universe and human stupidity; and I'm”",
  "“A room without books is like a body without a soul.”"
]
var prodetartwo=[
  "― Marilyn Monroe",
  "― Albert Einstein",
  "― Marcus Tullius Cicero"
]
function test(){
  var box=Math.floor(Math.random()*prodetarOne.length)
  document.getElementById('demoOne').innerHTML=prodetarOne[box]
  document.getElementById('demotwo').innerHTML=prodetartwo[box]
}




