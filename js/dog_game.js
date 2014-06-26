
var x = 2;
var y = 2;



function fill(x, y, text) {
    var rows=document.querySelectorAll("tr");
    var row = rows[y];
    var cells=row.querySelectorAll("td");
    var cell = cells[x];
    cell.innerHTML = text;

}

function read(x, y) {
    var rows=document.querySelectorAll("tr");
    var row = rows[y];
    var cells=row.querySelectorAll("td");
    var cell = cells[x];
    return cell.innerHTML;

}

window.addEventListener("load",function(event){
  var matches=document.querySelectorAll("td");




var imgArray = new Array;

imgArray[0] = new Image();
imgArray[0].src = 'img/1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'img/2.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'img/3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'img/4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'img/5.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'img/6.jpg';

imgArray[6] = new Image();
imgArray[6].src = 'img/7.jpg';

imgArray[7] = new Image();
imgArray[7].src = 'img/8.jpg';

imgArray[8] = new Image();
imgArray[8].src = 'img/9.jpg';



/*function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src)
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
       }
    }
}*/


var array = _.shuffle(_.range(1,8));
  for (var i=0; i < array.length; i++) {
      matches[i].innerHTML = "<img src='img/" + array[i] + ".jpg'>";

}



});

window.addEventListener("keydown",function(event){
  var old_x = x;
  var old_y = y;

  console.log(event);
  if (event.keyIdentifier == "Up") {
    y-=1;
    if (y<0)

      {y=0}
  }
else if (event.keyIdentifier == "Down") {
  y+=1;
  if (y>2) {y=2}
}
else if (event.keyIdentifier == "Left") {
  x-=1;
  if (x<0) {x=0}
}
else if (event.keyIdentifier == "Right") {
  x+=1;
  if (x>2) {x=2}
}

if(x != old_x || y != old_y){
  var text = read(x,y);
  fill(old_x, old_y, text);
  fill(x, y, "");
   console.log("zmiana pozycji")

} else {
  console.log("Pozycja nie zmieniła się");

}

console.log(" x: " + x + " y: " + y);
})


function isWon(){
  for (var i=0; i<=2; i++){
    for (var j=0; j<=2; j++){
      var number = 3*i+j+1;
      if (number < 9){
       if(number != parseInt(read(j, i),10)) { //zmienia zapis na liczbę dziesiętną
        return false; //funkcja przerwana
       }
      }
    }
  }
  return true;
}

window.addEventListener('keydown', function(){
  if(isWon()) {
    console.log("Yeah, wygrana!")

  }
  else {
      console.log("Próbuj dalej")

  }

})
