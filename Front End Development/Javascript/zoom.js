function zoomin(){

    var myImg = document.getElementById("apple");

    var currWidth = myImg.clientWidth;

        myImg.style.width = (currWidth + 50) + "px";

    } 



function zoomout(){

    var myImg = document.getElementById("apple");

    var currWidth = myImg.clientWidth;

    
        myImg.style.width = (currWidth - 50) + "px";

    }

