function createCards(){
    for (var c = 0; c < 4; c++) {
        for (var v = 0; v < 13; v++) {
        deck[emplacement] = new Carte(couleur[c], valeur[v],(width/100)*94,(height/100)*80,valcode[v]);
        emplacement += 1;
        }
        
    }
    deck = shuffle(deck)
    console.debug(deck)

    buttons[0] = new Button(width/2 + (((width/100)*20)/2) - 260,height-130,[250,100],"blue","play hand")
    buttons[1] = new Button(width/2 + (((width/100)*20)/2)+10,height-130,[250,100],"red","discard")
}

function order(){
    for (var i = 0; i < 7 ;i++){
        if(deck[i].numCode < deck[i + 1].numCode){
            ExchangeOrder[0] = deck[i]
            ExchangeOrder[1] = deck[i + 1]
            deck[i] = ExchangeOrder[1]
            deck[i + 1] = ExchangeOrder[0]
        } 
    }
    for (var i = 0; i < 4 ;i++){
        if(selectCard[i[0]] < selectCard[i[0] + 1]){
            ExchangeOrder[0] = selectCard[i[0]]
            ExchangeOrder[1] = selectCard[i[0] + 1]
            selectCard[i[0]] = ExchangeOrder[1]
            selectCard[i[0] + 1] = ExchangeOrder[0]
        } 
    }

}

function repush(variable,emplacemen){
    deck.push(deck[emplacemen])
    desk[emplacemen] = 0
    for(i = emplacement;i<52;i++){
        deck[i] = deck[i+1]
    }
}


function jetons(){
    selectColor = []
    Numbers = [
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
    for(i = 0; i < 8 ; i++){
        if(deck[i].click == true){
            selectColor.push(deck[i].color)
            for(y = 0;y<14;y++){
                if(deck[i].numCode == y){
                    Numbers[y]++
                }
            }
        }
        if(Numbers[0] == 2
             || Numbers[1] == 2
             || Numbers[2] == 2
             || Numbers[3] == 2
             || Numbers[4] == 2
             || Numbers[5] == 2
             || Numbers[6] == 2 
             || Numbers[7] == 2 
             || Numbers[8] == 2 
             || Numbers[9] == 2 
             || Numbers[10] == 2 
             || Numbers[11] == 2 
             || Numbers[12] == 2
             || Numbers[13] == 2
             || Numbers[14] == 2){
                if(Numbers[0] == 3
                    || Numbers[1] == 3
                    || Numbers[2] == 3
                    || Numbers[3] == 3
                    || Numbers[4] == 3
                    || Numbers[5] == 3
                    || Numbers[6] == 3
                    || Numbers[7] == 3
                    || Numbers[8] == 3
                    || Numbers[9] == 3
                    || Numbers[10] == 3
                    || Numbers[11] == 3
                    || Numbers[12] == 3
                    || Numbers[13] == 3
                    || Numbers[14] == 3){
                        if(selectColor[0] == selectColor[1] == selectColor[2] == selectColor[3] == selectColor[4]){
                            main = "quinte flush"
                        }
                    }
             }
    }
    
    

}

function discard(){

}