document.addEventListener("DOMContentLoaded", function(){
    var x=document.getElementsByClassName('carImg');
    var y=document.getElementsByClassName('carImg2');
    var changeCar=x[0];
    var count=0;
    changeCar.onclick= function(){
        count++;
        if (count==1){changeCar.src="Img_05.png";}
        else {changeCar.src="Img_06.png"; count=0;}
    }
}, false)
