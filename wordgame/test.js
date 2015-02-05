

 var p1=document.getElementById("p1_portraittest")
var colors=["red","green","blue","yellow","white"]
var i=1
var start=10
var f = function()
  {
    if(i<20)
          {
            if(i%2==0)
                {start+=1; }
            else
                {start-=1; }
            i+=1
                p1.style.left = start+'%';
                setTimeout(f,20)
          }

  }

   var computer_word_quake = function()
    {
          if(quak_f<20)
            {
                if(quak_f%2==0)
                  {start0-=2; }
                else
                  {start0+=2; }
                quak_f+=1
                x.style.left = start0+'%'
                setTimeout(computer_word_quake,20)

            }

    }

if(quak_f<20)
            {
                if(quak_f%2==0)
                  {start0-=2; }
                else
                  {start0+=2; }
                quak_f+=1
                x.style.left = start0+'%'
                setTimeout(player_animation_quake,20)

            }

sadplayerarray

var incre=0
//sad player
var moving_animation = function(input_array)
  {
     if(incre<input_array.length)
     {
        p1.innerHTML="<img src=\""+input_array[incre]+"\" width=\"100%\" height=\"100%\">"
        incre+=1
        setTimeout(moving_animation, 1000)
      }
  }



  var sadplayer = function(sadplayerarray)
  {
     if(incre<sadplayerarray.length)
     {
        p1.innerHTML="<img src=\""+sadplayerarray[incre]+"\" width=\"100%\" height=\"100%\">"
        incre+=1
        setTimeout(sadplayer, 1000)
      }
  }