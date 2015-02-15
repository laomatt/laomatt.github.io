

 var p1=document.getElementById("p1_portraittest")
var colors=["red","green","blue","yellow","white"]
var i=1
var start=10

var incre=0
var sadplayerarray = ["sad_player1.png","sad_player2.png","sad_player3.png"]


  var sadplayer = function()
  {
     if(incre<sadplayerarray.length)
     {
        p1.innerHTML="<img src=\""+sadplayerarray[incre]+"\" width=\"100%\" height=\"100%\">"
        incre+=1
        setTimeout(sadplayer(incre),200)
      }
  }