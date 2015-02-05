
var happyplayerarray = ["anim1","anim2","anim3","anim1"]
var sadplayer = function(){}

{
  p1.style.backgroundImage = 'url("'+happyplayerarray[icrem]+'.png")';
  increm+=1
}


     setTimeout(p1.style.backgroundImage = 'url("anim1.png")', 10)
      setTimeout(p1.style.backgroundImage = 'url("anim2.png")', 500)
      setTimeout(p1.style.backgroundImage = 'url("anim3.png")', 1500)
      setTimeout(p1.style.backgroundImage = 'url("anim1.png")', 2500)



var changep1bgImage = function(){
  var i=0
  while(i<9)
  {
    setTimeout(console.log("matt"), i*100)
    i+=1
  }
}


    incre+=1
    //p1.innerHTML="<img src=\""+sadplayerarray[icre]+".png\" width=\"200px\" height=\"200px\">"
    if(incre<sadplayerarray.length)
      {
        p1.innerHTML=sadplayerarray[icre]
        setTimeout(sadplayer,1000)
      }






         if(incre<sadplayerarray.length)
              {
                //p1.innerHTML=sadplayerarray[incre]
                p1.innerHTML='<img src=\"'+sadplayerarray[icre]+'.png\" width=\"200px\" height=\"200px\">'
                incre+=1
                setTimeout(sadplayer, 1000)
              }
