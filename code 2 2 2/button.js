class Button {
    constructor(x,y,taille,couleur,text){
        this.x = x
        this.y = y
        this.taille = taille
        this.couleur = couleur
        this.text = text
        this.clicks = false
    }
    afficher(){
        fill(this.couleur)
        strokeWeight(0)
        rect(this.x,this.y,this.taille[0],this.taille[1])
        textAlign(CENTER,CENTER)
        textSize(50)
        fill("white")
        text(this.text,this.x + this.taille[0]/2,this.y + this.taille[1]/2)
        
    }
    click(){
        if(mouseX > this.x){
            if(mouseY > this.y){
                if(mouseX < this.x + this.taille[0]){
                    if(mouseY < this.y + this.taille[1]){
                        if(mouseIsPressed == true){
                            if(this.clicks == false){
                                
                                    
                                    
                               
                                    
                               
                            }
                            else{
                                if(this.clicks == true){
                                    
                                   
                                  
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}