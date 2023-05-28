function transition(){

    var SetTR = Math.floor(Math.random() * 5 + 1);

    if (SetTR == 1) {

        document.getElementById("BG").src = "./RESOURCE/tr01.gif";
        var tr01 = setTimeout(function(){changeBG(); clearTimeout(tr01);}, 600);
        
    } else if(SetTR == 2) {

        document.getElementById("BG").src = "./RESOURCE/tr02.gif";
        var tr02 = setTimeout(function(){changeBG(); clearTimeout(tr02);}, 800);

    } else if(SetTR == 3){

        document.getElementById("BG").src = "./RESOURCE/tr03.gif";
        var tr03 = setTimeout(function(){changeBG(); clearTimeout(tr03);}, 1200);

    } else if(SetTR == 4){

        document.getElementById("BG").src = "./RESOURCE/tr04.gif";
        var tr04 = setTimeout(function(){changeBG(); clearTimeout(tr04);}, 1000);

    } else {

        document.getElementById("BG").src = "./RESOURCE/tr05.gif";
        var tr05 = setTimeout(function(){changeBG(); clearTimeout(tr05);}, 700);

    }

}

function changeBG(){

    var SetBG = Math.floor(Math.random() * 2 + 1);

    if (SetBG == 1) {

        document.getElementById("BG").src = "./RESOURCE/Default.gif";

    } else {

        document.getElementById("BG").src = "./RESOURCE/Blue.gif";

    }
    
} 