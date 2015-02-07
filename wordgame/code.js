// Refactored Code
      //players name
      var x = document.getElementById("login")
      //computers name
      var y = document.getElementById("comps")

     /// var b = document.getElementById("na")
var guessedletters=[]
var pool=[]
var purse_two = document.getElementById("player_two_purse")
var purse_one = document.getElementById("player_one_purse")
var p1window = document.getElementById("player_one")
var p2window = document.getElementById("player_two")
var play_orig_score=0
var comp_orig_score=0

//these are my object rpresenting the player and the computer
var player={name:"",purse:50, count:0, blankname:""};
var computer={name:"",purse:50, count:0};


//displays the players name
function displayplayer()
    {
      player.name=document.getElementById("na").value.toLowerCase()
      x.innerHTML=player.name
      var blanx=""
      for (var i=0;i<player.name.length;i+=1)
      {
        blanx+="_"
      }
      player.blankname=blanx

    }

//displays the computer name
//var g = document.getElementById("nam")
//var bet = document.getElementById("wag")
var lettarray = document.getElementById("playeroneletters")

function displaycomp()
    {
      compdisplay=""
      for(var i=0;i<computer.name.length;i+=1)
        compdisplay += "_"
      y.innerHTML=compdisplay
    }

//the submit button
function submit()
    {
      player_animation_quake()
      computer_word_quake()
     var name=["former", "swimmer", "stanford", "university", "pleaded", "guilty", "today", "counts", "sexual", "assault", "allegedly", "raping", "drunk", "unconscious", "woman", "outside", "oncampus", "fraternity", "party", "month", "prosecutors", "brock", "allen", "turner", "charged", "felony", "counts", "sexual", "assault", "deputies", "allegedly", "found", "pinned", "samaritans", "encountered", "woman", "outside", "kappa", "alpha", "house", "lomita", "court", "according", "report", "santa", "clara", "county", "sheriffs", "office", "convicted", "charges", "turner", "could", "maximum", "sentence", "years", "prison", "district", "attorneys", "spokesman", "webby", "today", "turner", "resident", "freshman", "stanford", "until", "withdrew", "school", "shortly", "after", "arrest", "allegedly", "found", "turner", "bicycling", "before", "noticed", "lying", "woman", "ground", "dumpster", "according", "sheriffs", "offices", "report", "woman", "appeared", "unconscious", "moving", "looked", "having", "bicyclists", "stopped", "going", "tried", "checked", "woman", "pursued", "caught", "fleeing", "after", "struggle", "pinned", "ground", "woman", "still", "unconscious", "deputies", "arrived", "severely", "intoxicated", "taken", "santa", "clara", "valley", "medical", "center", "where", "remained", "asleep", "until", "later", "morning", "investigators", "memory", "shortly", "after", "midnight", "drinking", "outside", "house", "turner", "investigators", "woman", "party", "ended", "kissing", "ground", "outside", "house", "sexual", "activity", "between", "seemed", "consensual", "perspective", "according", "sheriffs", "offices", "report", "prosecutors", "charged", "turner", "unlawful", "sexual", "intercourse", "someone", "prevented", "resisting", "intoxication", "intercourse", "person", "unconscious", "nature", "assault", "intent", "commit", "sexual", "penetration", "person", "cannot", "resist", "intoxication", "penetration", "person", "unconscious", "nature", "disney", "announced", "thursday", "newest", "princess", "elena", "avalor", "yearold", "character", "inspired", "diverse", "latin", "cultures", "folklore", "shell", "debut", "disney", "juniors", "animated", "sofia", "first", "which", "targeted", "children", "elenas", "eponymous", "spinoff", "series", "premiere", "disney", "junior", "disney", "juniors", "programming", "block", "disney", "channel", "aimee", "carrero", "familys", "young", "hungry", "voice", "excites", "chance", "distinctive", "animation", "visual", "design", "wonderful", "stories", "influenced", "culture", "traditions", "familiar", "worldwide", "population", "hispanic", "latino", "families", "reflect", "interests", "aspirations", "children", "through", "classic", "fairy", "nancy", "kanter", "executive", "president", "general", "manager", "disney", "junior", "worldwide", "announcement", "disney", "faced", "harsh", "criticism", "after", "producer", "sofia", "first", "series", "announced", "title", "character", "latina", "disney", "junior", "executives", "later", "clarified", "princess", "ethnicity", "misrepresented", "adding", "characters", "fantasy", "lands", "reflect", "elements", "various", "cultures", "ethnicities", "meant", "specifically", "represent", "those", "world", "cultures", "santa", "enforcement", "officials", "detonated", "determined", "improvised", "explosive", "device", "santa", "found", "while", "landscaping", "backyard", "today", "santa", "police", "santa", "police", "officers", "responded", "report", "suspicious", "device", "apartments", "block", "guerneville", "santa", "police", "marcus", "sprague", "device", "encased", "cloth", "pouch", "measured", "roughly", "inches", "inches", "material", "covered", "making", "determine", "exactly", "cloth", "inside", "sprague", "pouch", "couple", "canisters", "wicks", "poking", "which", "officers", "suspected", "might", "improvised", "explosive", "sprague", "police", "device", "looked", "buried", "ground", "there", "roots", "wrapped", "around", "casing", "partially", "deteriorated", "sprague", "there", "buried", "sonoma", "county", "sheriffs", "explosive", "ordinance", "disposal", "called", "assist", "disposal", "device", "police", "police", "cordoned", "approximately", "minutes", "while", "squad", "rendered", "device", "using", "water", "ceramic", "rounds", "which", "fired", "devise", "close", "distance", "police", "according", "santa", "police", "sheriffs", "squad", "confirm", "device", "actually", "improvised", "explosive", "sprague", "squad", "destroy", "device", "without", "activating", "whatever", "explosive", "inside", "police", "manner", "which", "device", "destroyed", "further", "information", "available", "about", "devices", "contents", "origin", "representative", "sonoma", "county", "sheriffs", "office", "immediately", "available", "comment"]

    // player.name=document.getElementById("na").value
      displayplayer();
      var compname = name[Math.floor(Math.random()*name.length)];
      computer.name=compname;

      displaycomp();
      computer.purse=50
      player.purse=50
      p1incre=play_orig_score
      p2incre=comp_orig_score
      updatepurses()
      cp.innerHTML="<table id=\"tab\"><tr><td>Make a wager: <input type=\"number\" id=\"wag\"><br>Guess a letter:  <input type=\"text\" id=\"nam\"></td><td width=\"30%\"><button onclick=\"guess()\" id=\"but\">guess</button></td></tr></table>"
    }


var cp=document.getElementById("controlpanel")
var ud=document.getElementById("update")
var p1=document.getElementById("p1_portrait")
var p2=document.getElementById("p2_portrait")

/*******************  start all my animation arrays  *******************/
/*******************  start all my animation arrays  *******************/
/*******************  start all my animation arrays  *******************/
/*******************  start all my animation arrays  *******************/
//player arrays
var sadplayerarray = ["sad_player1.png","sad_player2.png","sad_player3.png","sad_player1.png"]
var angryplayerarray = ["angry_player1.png","angry_player2.png","angry_player3.png","angry_player1.png"]
var gloatingplayerarray = ["gloating_player1.png","gloating_player2.png","gloating_player3.png","gloating_player1.png"]
var happyplayerarray=["happy_player1.png","happy_player2.png","happy_player3.png","happy_player1.png"]

//comp arrays
var sadcomputerarray = ["sad_computer1.png","sad_computer2.png","sad_computer3.png","sad_computer1.png"]
var angrycomputerarray = ["angry_computer1.png","angry_computer2.png","angry_computer3.png","angry_computer1.png"]
var happycomputerarray= ["happy_computer1.png","happy_computer2.png","happy_computer3.png","happy_computer1.png"]
var gloatingcomputerarray= ["gloating_computer1.png","gloating_computer2.png","gloating_computer3.png","gloating_computer1.png"]

/*******************  end all my animation arrays  *******************/
/*******************  end all my animation arrays  *******************/
/*******************  end all my animation arrays  *******************/
/*******************  end all my animation arrays  *******************/


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


function guess()
{
  incre=0
  var g = document.getElementById("nam")
  var bet = document.getElementById("wag")

  if((typeof g.value != 'string')||(g.value.toString().length>1))
  {
    alert("Must enter one letter in the Guess box")
    g.value=""
  }
  else if((typeof parseInt(bet.value) != 'number')||(bet.value<=0)||(bet.value>10))
  {
    alert("You must wager a number greater between 1 and 10")
    bet.value=1
  }
  else
  {
  var temp= y.innerHTML
  var temporary=g.value.toLowerCase()
    y.innerHTML=updatecompname(temporary)
   // cp.innerHTML=temp
    g.value=""
   //actions for if a letter is guessed
    if (y.innerHTML.toString()==temp.toString())
      {
     //actions for a miss....
        //sad player animation
        incre=0
        sadplayer()

        //gloating computer animation

        ud.innerHTML="MISS....."
        document.getElementById("player_update").innerHTML=""
        play_orig_score=player.purse
        comp_orig_score=computer.purse
        player.purse-=parseInt(bet.value)
        computer.purse+=parseInt(bet.value)
      }
      else
      {
        //happy player animation
        happyplayer()
        //document.getElementById("p1_portrait").innerHTML="<img src=\"player_start.png\" width=\"100%\" height=\"100%\">"
        //angry computer animation

        //computer window shakes
           quake_p=0
           startp9=20
          comp_window_quake()
        //computer word shakes
           start1=0
           quak_c=20
           quak_done_c=50
          computer_word_quake()


        ud.innerHTML="HIT!!!"
        document.getElementById("player_update").innerHTML=""
        play_orig_score=player.purse
        comp_orig_score=computer.purse
        player.purse+=parseInt(bet.value)*(computer.count)
        computer.purse-=parseInt(bet.value)*(computer.count)
        if(computer.count>1)
            {
              document.getElementById("p1_bonus").innerHTML="bonus x"+computer.count+"!"
            }
      }
        p1incre=play_orig_score
        p2incre=comp_orig_score
      updatepurses()
      bet.value=0
      lettarray.innerHTML="You just guessed "+temporary+"<br>Guessed letters: "+guessedletters

      cp.innerHTML="<button onclick=\"computer_guess()\" id=\"but\">click to end your turn</button>"
      end_conditions()
    }
}

var compupdate=document.getElementById("compguess")
var computerGuessed =[]
var alpha="abcdefghijklmnopqrstuvwxyz".split('')


function computer_guess()
{
  incre=0
  //resets the pool array
  var pool1=player.name.split('')
  pool=[]
  for(var i=0;i<pool1.length;i+=1)
    {
      if (computerGuessed.indexOf(pool1[i])<0)
        {pool.push(pool1[i])}
    }

  //adds letters to the pool of letters the computer may choose from
  for(var i=0;i<player.name.length;i+=1)
    {
      var tempalpha=alpha[Math.floor(Math.random()*alpha.length)]
      if (computerGuessed.indexOf(tempalpha)<0)
        {pool.push(tempalpha)}
    }

  var temp= x.innerHTML

  num=Math.floor(Math.random()*(10));

  //selects randomly from pool, then removes that element from pool
    let=pool[Math.floor(Math.random()*pool.length)];
  x.innerHTML = updateplayername(let);
  //delete alpha[]

  ud.innerHTML="I wagered "+num+".<br> I guessed the letter "+let

    if (x.innerHTML==temp)
      {
        document.getElementById("player_update").innerHTML="Miss...."
        //sad computer animation

        //gloating player animation
        sadcomputer()
        play_orig_score=player.purse
        comp_orig_score=computer.purse
        player.purse+=num
        computer.purse-=num
      }
    else
      {
        document.getElementById("player_update").innerHTML="HIT!!!!"
        //happy computer animation
        happycomputer()
        //document.getElementById("p2_portrait").innerHTML="<img src=\"computer_start.png\" width=\"100%\" height=\"100%\">"
        //angry player animation

        //player window shakes
           quake_i=0
           startp1=20
           player_quake()

        //player word shakes
           start0=0
           quak_f=20
           quak_done_f=50
          player_animation_quake()

        play_orig_score=player.purse
        comp_orig_score=computer.purse

        player.purse-=num*player.count
        computer.purse+=num*player.count
        if(player.count>1)
              {
                document.getElementById("p2_bonus").innerHTML="bonus x"+player.count+"!"
              }


      }
      p1incre=play_orig_score
      p2incre=comp_orig_score
      updatepurses()
      compupdate.innerHTML=""
      cp.innerHTML="<table id=\"tab\"><tr><td>Make a wager: <input type=\"number\" id=\"wag\"><br>Guess a letter:  <input type=\"text\" id=\"nam\"></td><td width=\"30%\"><button onclick=\"guess()\" id=\"but\">guess</button></td></tr></table>"
      end_conditions()
}

var endcond = document.getElementById("update2")

function reset()
{

  cp.innerHTML=" <table id=\"tab\"><tr height=\"100%\"><td align=\"right\">what's your word?: <br><input type=\"text\" id=\"na\"></td><td width=\"40%\"><button onclick=\"submit()\" id=\"but\">play!!!</button></td></tr></table>"
  document.getElementById("p1_portrait").innerHTML="<img src=\"player_start.png\" width=\"100%\" height=\"100%\">"
  document.getElementById("p2_portrait").innerHTML="<img src=\"computer_start.png\" width=\"100%\" height=\"100%\">"
  document.getElementById("p1_bonus").innerHTML=""
  document.getElementById("p2_bonus").innerHTML=""
  document.getElementById("player_update").innerHTML=""
  document.getElementById("update").innerHTML=""
  document.getElementById("update2").innerHTML=""
  document.getElementById("compguess").innerHTML=""
  document.getElementById("playeroneletters").innerHTML=""
  document.getElementById("compguess").innerHTML=""
  document.getElementById("comps").innerHTML=""
  document.getElementById("login").innerHTML=""
      guessedletters=[]
      computerGuessed=[]
      play_orig_score=0
      comp_orig_score=0
      player.purse=50
      computer.purse=50
      p1incre=play_orig_score
      p2incre=comp_orig_score
      updatepurses()
}



function end_conditions()
{
    if ((x.innerHTML.toString()==player.blankname) || (y.innerHTML.toString()==computer.name))
    {

      if(y.innerHTML.toString()==computer.name)
        {
          document.getElementById("p1_bonus").innerHTML="Word solve bonus: 20pts"
          player.purse+=20
        }
      else
        {
          document.getElementById("p2_bonus").innerHTML="Word solve bonus: 20pts"
          computer.purse+=20
        }
 p1incre=play_orig_score
 p2incre=comp_orig_score
  updatepurses()

        if(player.purse>computer.purse)
        {
          if(y.innerHTML.toString()==computer.name)
          {
            cp.innerHTML="YOU WON!!!!!<br><button onclick=\"reset()\">Play again?</button>"
          }
          else
          {
            cp.innerHTML="YOU WON!!!!!<br> the word was <b>\""+computer.name+"\" </b><button onclick=\"reset()\">Play again?</button>"
          }
        }
        else
        {
          cp.innerHTML="computer won :(<br> the word was <b>\""+computer.name+"\" </b><button onclick=\"reset()\">Play again?</button>"
        }
    }

}
var p1incre=play_orig_score
var p2incre=comp_orig_score
function updatepurses()
{

 //   purse_one.innerHTML=player.purse
 //   purse_two.innerHTML=computer.purse



  if((player.purse != p1incre) || (computer.purse != p2incre))
  {
    if(player.purse>p1incre)
      {
        p1incre+=1
        purse_one.innerHTML=p1incre
      }
    else
      {
        p1incre-=1
        purse_one.innerHTML=p1incre
      }

    if(computer.purse>p2incre)
      {
        p2incre+=1
        purse_two.innerHTML=p2incre
      }
    else
      {
        p2incre-=1
        purse_two.innerHTML=p2incre
      }

      setTimeout(updatepurses, 20)
  }


}

function updateplayername(letter)
    {
      computerGuessed.push(letter)
      compdisplay=""
      player.count=0
      for(var h in player.name.split(''))
      {
        if (computerGuessed.indexOf(player.name.charAt(h))>=0)
         {
          compdisplay+="_"
          if(player.name.charAt(h)==letter)
              {player.count+=1}
        }
        else
          {
            compdisplay+=player.name.charAt(h)
          }
      }
     return compdisplay
    }




 function updatecompname(letter)
    {
        guessedletters.push(letter)
        compdisplay=""
        //g.value=""
        computer.count=0
      for(var h in computer.name.split(''))
      {
        if (guessedletters.indexOf(computer.name.charAt(h))>=0)
        {
          compdisplay+=computer.name.charAt(h)
          if(computer.name.charAt(h)==letter)
            {computer.count+=1}
        }
        else
        {
          compdisplay+="_"
        }
      }
     return compdisplay

    }




function loadup()
    {
      //document.getElementById("p2_portrait").innerHTML="fgfdsg"
    sadplayer()
    sadcomputer()
    happyplayer()
    happycomputer()
    document.getElementById("p2_portrait").innerHTML="<img src=\"computer_start.png\" width=\"100%\" height=\"100%\">"
    document.getElementById("p1_portrait").innerHTML="<img src=\"player_start.png\" width=\"100%\" height=\"100%\">"


    }



