
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
#game_window{
background-color: #F5F6CE;
top: 0%;
color: black;
font-family:"Lucida Console", Monaco, monospace;
font-size: 22px;
padding: 3% 3% 3% 3%;
margin-left: 10%;
width: 60%;
text-align: center;
position: relative;
}


function updatepurses()
{

     purse_one.innerHTML=player.purse
      purse_two.innerHTML=computer.purse

}


    var gloatingcomputer = function()
      {
         if(incre<gloatingcomputerarray.length)
         {
            p2.innerHTML="<img src=\""+gloatingcomputerarray[incre]+"\" width=\"100%\" height=\"100%\">"
            incre+=1
            setTimeout(gloatingcomputer, 200)
          }
      }







var p1incre=play_orig_score
var p2incre=comp_orig_score

  if((player.purse != p1incre) || (computer.purse != p2incre))
  {
    if(player.purse>p1incre)
      {
        purse_one.innerHTML=p1incre
        p1incre+=1
      }
    else
      {
        purse_one.innerHTML=p1incre
        p1incre-=1
      }

    if(computer.purse>p2incre)
      {
        purse_two.innerHTML=p2incre
        p2incre+=1
      }
    else
      {
        purse_two.innerHTML=p2incre
        p2incre-=1
      }

      setTimeout(updatepurses, 20)
  }






/******************  start all my animation functions *******************/
/******************  start all my animation functions *******************/
/******************  start all my animation functions *******************/
/******************  start all my animation functions *******************/
/******************  start all my animation functions *******************/
/******************  start all my animation functions *******************/
    var incre=0

/********************** player emotions **********************/
//sad player
  var sadplayer = function()
  {
     if(incre<sadplayerarray.length)
     {
        p1.innerHTML="<img src=\""+sadplayerarray[incre]+"\" width=\"100%\" height=\"100%\">"
        incre+=1
        setTimeout(sadplayer, 200)
      }
  }

//angry player
  var angryplayer = function()
  {
     if(incre<angryplayerarray.length)
     {
        p1.innerHTML="<img src=\""+angryplayerarray[incre]+"\" width=\"100%\" height=\"100%\">"
        incre+=1
        setTimeout(angryplayer, 200)
      }
  }

//gloating player
  var gloatingplayer = function()
  {
     if(incre<gloatingplayerarray.length)
     {
        p1.innerHTML="<img src=\""+gloatingplayerarray[incre]+"\" width=\"100%\" height=\"100%\">"
        incre+=1
        setTimeout(gloatingplayer, 200)
      }
  }

//happy player
    var happyplayer = function()
      {
         if(incre<happyplayerarray.length)
         {
            p1.innerHTML="<img src=\""+happyplayerarray[incre]+"\" width=\"100%\" height=\"100%\">"
            incre+=1
            setTimeout(happyplayer, 200)
          }
      }

/*********** computer emotions ***********/
//sad computer
    var sadcomputer = function()
      {
         if(incre<sadcomputerarray.length)
         {
            p2.innerHTML="<img src=\""+sadcomputerarray[incre]+"\" width=\"100%\" height=\"100%\">"
            incre+=1
            setTimeout(sadcomputer, 200)
          }
      }

  //angry computer
      var angrycomputer = function()
      {
         if(incre<angrycomputerarray.length)
         {
            p2.innerHTML="<img src=\""+angrycomputerarray[incre]+"\" width=\"100%\" height=\"100%\">"
            incre+=1
            setTimeout(angrycomputer, 200)
          }
      }

  //happy computer
  var happycomputer = function()
      {
         if(incre<happycomputerarray.length)
         {
            p2.innerHTML="<img src=\""+happycomputerarray[incre]+"\" width=\"100%\" height=\"100%\">"
            incre+=1
            setTimeout(happycomputer, 200)
          }
      }

  //gloating computer
    var gloatingcomputer = function()
      {
         if(incre<gloatingcomputerarray.length)
         {
            p2.innerHTML="<img src=\""+gloatingcomputerarray[incre]+"\" width=\"100%\" height=\"100%\">"
            incre+=1
            setTimeout(gloatingcomputer, 200)
          }
      }



  /*******************************   quake functions   *******************************/
//player window shaking
        var quake_i=0
        var startp1=20
    var player_quake = function()
      {
        if(quake_i<20)
              {
                if(quake_i%2==0)
                    {startp1+=2; }
                else
                    {startp1-=2; }
                quake_i+=1
                    p1window.style.left = startp1+'%';
                    setTimeout(player_quake,20)
              }
      }
//play word shaking
       var start0=0
       var quak_f=0
       var quak_done_f=20
    var player_animation_quake = function()
      {
            if(quak_f<quak_done_f)
            {
                if(quak_f%2==0)
                  {start0-=2; }
                else
                  {start0+=2; }
                quak_f+=1
                x.style.left = start0+'%'
                setTimeout(player_animation_quake,20)

            }
      }
//comp word quaking
      var quak_c=0
      var quak_done_c=40
      var start1=0
    var computer_word_quake = function()
        {
          if(quak_c<quak_done_c)
                {
                    if(quak_c%2==0)
                      {start1-=2; }
                    else
                      {start1+=2; }
                    quak_c+=1
                    y.style.left = start1+'%'
                    setTimeout(computer_word_quake,20)

                }
        }
  //computer window shaking
        var quake_p=0
        var startp9=20
    var comp_window_quake = function()
      {
        if(quake_p<20)
              {
                if(quake_p%2==0)
                    {startp9+=2; }
                else
                    {startp9-=2; }
                quake_p+=1
                    p2window.style.left = startp9+'%';
                    setTimeout(comp_window_quake,20)
              }
      }



//rule book slider
        var quake_r=0
        var startp9=0
    var hide_rules = function()
      {
        if(quake_r<800)
              {
                startp9-=30;
                quake_r+=1
                    document.getElementById("rules").style.left = startp9+'px';
                    setTimeout(hide_rules,3)
              }
      }

  /****************end all my animation functions*********************/
  /****************end all my animation functions*********************/
  /****************end all my animation functions*********************/
  /****************end all my animation functions*********************/



document.getElementById("p2_portrait").innerHTML="<img src=\"computer_start.png\" width=\"100%\" height=\"100%\">"

document.getElementById("p1_portrait").innerHTML="<img src=\"player_start.png\" width=\"100%\" height=\"100%\">"
