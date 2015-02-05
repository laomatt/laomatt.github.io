

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



      if(quak_c<20)
            {
                if(quak_c%2==0)
                  {start1-=2; }
                else
                  {start1+=2; }
                quak_c+=1
                y.style.left = start1+'%'
                setTimeout(computer_word_quake,20)

            }