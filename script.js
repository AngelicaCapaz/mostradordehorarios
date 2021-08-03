function carregar() {
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= 6 && hora < 12){
        //dia
        img.src='manhã.png'
        document.body.style.background='#F0D0D0'
    }else if(hora >= 12 && hora < 18){
        //tarde
        img.src='tarde.png'
        document.body.style.background='#FDDAD9'
    }else if(hora >= 18 && hora <= 23){
        //noite
        img.src='noite.png'
        document.body.style.background='#000a2c'
    }else if(hora >=0 && hora < 6){
        //madrugada
        img.src='madrugada.png'
        document.body.style.background='#00001c'
    }
    
}
