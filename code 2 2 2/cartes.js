class Carte{
    constructor(color,number,xa,ya,code){
        //caractéristiques des carte a jouer
        this.number = number
        this.color = color
        //visuel
        this.taille = [160,250] 
        this.x = xa -80
        this.y = ya -200
        this.visible = false
        this.click = false
        this.numCode = code
        this.place
    }
    //afficher
    afficher(){
        if(this.visible == true){
            fill("#ffffff")
            rect(this.x,this.y,this.taille[0],this.taille[1])
            fill(this.color)
            textAlign(CENTER,CENTER)
            textSize(70)
            text(this.number,this.x + (this.taille[0]/2),this.y + (this.taille[1]/2))
        }
        else{
            fill("#ff0000")
            rect(this.x,this.y,this.taille[0],this.taille[1])
        }
    }
    aaa(){
        if(mouseX > this.x){
            console.log(1)
            if(mouseY > this.y){
                console.log(2)
                if(mouseX < this.x + this.taille[0]){
                    console.log(3)
                    if(mouseY < this.y + this.taille[1]){
                        console.log(4)
                        if(mouseIsPressed == true){
                            console.log(5)
                            if(this.click == false){
                                console.log(5)
                                if(cardsSelect < 5){
                                    this.y = this.y - (this.taille[1]/2)
                                    this.click = true
                                    cardsSelect ++
                                    
                                }
                            }
                            else{
                                if(this.click == true){
                                    this.y = this.y + (this.taille[1]/2)
                                    this.click = false
                                    cardsSelect--
                                    
                                }
                            }
                            console.log(this.click)
                        }
                    }
                }
            }
        }
    }
}