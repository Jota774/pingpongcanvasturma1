class VerifyWinner{ 
    constructor(c,placar)

    {
        this.c = c; 
        this.placar = placar;     
    }


    draw(){
     if(pontoJogador1 == 5 || pontoJogador2 == 5)
     {
        if (pontoJogador1 > pontoJogador2)
        {
            setTimeout(() => {
                textWinner= "Parabéns, você venceu!";
                this.placar.resetScore();
            },1000);

        }
        else
        {
            setTimeout(() => {
                textWinner= "Essa não, você perdeu!!";
                this.placar.resetScore();
            },1000);
        }
     }


        this.c.font = "70px arial";
        this.c.fillStyle = "black";
        this.c.fillText(textWinner, 100, this.c.canvas.height - 100,this.c.canvas.width);       
    }  
}
