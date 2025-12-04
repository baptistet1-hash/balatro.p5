var entreTour = true
var valeur = ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2];
var valcode = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
var couleur = [
              "#00c1ff",//trefle
              "#ff5900",//careau
              "#ff0000",//coeur
              "#000000"];//pique
var emplacement = 0
var deck = []
var deckMain = [,]
var click = false
var cardsSelect = 0
//ordre
var finish = false
var cardeMain = 0

var GoodOrder = 0
var ExchangeOrder = [0,0]

var select = 0
var selectCard = [
  [0],
  [0],
  [0],
  [0],
  [0]
]

var Numbers = [
  0,//1
  0,//2
  0,//3
  0,//4
  0,//5
  0,//6
  0,//7
  0,//8
  0,//9
  0,//10
  0,//V/J
  0,//D/Q
  0,//R/k
  0//A
]

var selectColor = []
var selectNum = []
var selectCount = 0
var main 

var buttons = []

var playedDiscard = false
function setup() {
  createCanvas(windowWidth, windowHeight)
  createCards()
}

function draw() {
  
  background("#53af5f");
  fill("#454545")
  strokeWeight(5)
  rect(width/100,-(5/2),(width/100)*20,height+5)
  
  if(entreTour = true){
    for(var i = 0;i<8;i++){
      
      deck[i].x =  i * (deck[i].taille[0]+10) + (width/100*20 + 10) + 20
    }
    for(var i = 0;i<52;i++){
      deck[i].click = false
    }
  }

  for(var i = 0;i<8;i++){
    deck[i].visible = true
  }

  order()

  for (var i = 0;i<deck.length;i++){
    deck[i].afficher()
  }
  buttons[0].afficher()
  buttons[1].afficher()
  if(click == false){
    for(let k = 0;k<8;k++){
      deck[k].aaa()
      console.log(deck[k].click)
    }
  }
  if(mouseIsPressed == true){
    click = true
    select = 0
    for(var i = 0; i < 8;i++){
      if(deck[i].click == true){
        select++
      }
      else{
      }
    }
  }

  else{
    click = false
  }
  jetons()

  textAlign(LEFT,TOP)
  text(main,0,0)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//faire une boucle qui parcour les carte pour prandre les carte selec