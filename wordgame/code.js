// Refactored Code
      //players name
      var x = document.getElementById("login")
      //computers name
      var y = document.getElementById("comps")

      var b = document.getElementById("na")
var guessedletters=[]
var pool=[]
var purse_two = document.getElementById("player_two_purse")
var purse_one = document.getElementById("player_one_purse")
var p1window = document.getElementById("player_one")
var p2window = document.getElementById("player_two")

//these are my object rpresenting the player and the computer
var player={name:"",purse:50, count:0, blankname:""};
var computer={name:"",purse:50, count:0};

//displays the players name
function displayplayer()
    {
      player.name=b.value.toLowerCase()
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
      displayplayer();
      var compname = name[Math.floor(Math.random()*name.length)];
      computer.name=compname;

      displaycomp();
      purse_one.innerHTML=player.purse
      purse_two.innerHTML=computer.purse
      cp.innerHTML="<table id=\"tab\"><tr><td>Make a wager: <input type=\"number\" id=\"wag\"><br>Guess a letter:  <input type=\"text\" id=\"nam\"></td><td width=\"30%\"><button onclick=\"guess()\" id=\"but\">guess</button></td></tr></table>"
    }


var cp=document.getElementById("controlpanel")
var ud=document.getElementById("update")
var p1=document.getElementById("p1_portrait")
var p2=document.getElementById("p2_portrait")

/*start all my animation functions*/

var sadplayerarray = ["sad_player1.png","sad_player2.png","sad_player3.png","sad_player1.png"]
var sadcomputerarray = ["sad_computer1.png","sad_computer2.png","sad_computer3.png","sad_computer1.png"]
var incre=0
//sad player
var sadplayer = function()
  {
     if(incre<sadplayerarray.length)
     {
        p1.innerHTML="<img src=\""+sadplayerarray[incre]+"\" width=\"100%\" height=\"100%\">"
        incre+=1
        setTimeout(sadplayer, 1000)
      }
  }
//angry player

//gloating player

//happy player

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
    var player_animation_quake = function()
      {
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
      }

//comp word quaking
      var quak_c=0
      var start1=0
    var computer_word_quake = function()
        {
          if(quak_c<40)
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



    var sadcomputer = function()
      {
         if(incre<sadplayerarray.length)
         {
            p2.innerHTML="<img src=\""+sadcomputerarray[incre]+"\" width=\"100%\" height=\"100%\">"
            incre+=1
            setTimeout(sadcomputer, 1000)
          }
      }

  //angry computer

  //happy computer

  //gloating computer

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



  /*end all my animation functions*/


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
  else if((typeof parseInt(bet.value) != 'number')||(bet.value<=0))
  {
    alert("You must wager a number greater than 0")
    bet.value=0
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
      //sad player animation
      sadplayer()

      //gloating computer animation

      ud.innerHTML="MISS....."
      player.purse-=parseInt(bet.value)
      computer.purse+=parseInt(bet.value)
    }
   //actions for a miss....
    else
    {
      //happy player animation

      //angry computer animation

      //computer window shakes
         quake_p=0
         startp9=20
        comp_window_quake()

      ud.innerHTML="HIT!!!"
      player.purse+=parseInt(bet.value)
      computer.purse-=parseInt(bet.value)
    }
      purse_one.innerHTML=player.purse
      purse_two.innerHTML=computer.purse
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

  num=Math.floor(Math.random()*(20));

  //selects randomly from pool, then removes that element from pool
    let=pool[Math.floor(Math.random()*pool.length)];
  x.innerHTML = updateplayername(let);
  //delete alpha[]

  ud.innerHTML="I wagered "+num+".<br> I guessed the letter "+let

    if (x.innerHTML==temp)
    {
      //sad computer animation

      //gloating player animation
      sadcomputer()

      player.purse+=num
      computer.purse-=num
    }
    else
    {
      //happy computer animation

      //sad player animation

      //player window shakes
         quake_i=0
         startp1=20
         player_quake()


      player.purse-=num
      computer.purse+=num
    }
      purse_one.innerHTML=player.purse
      purse_two.innerHTML=computer.purse
      compupdate.innerHTML=""
      cp.innerHTML="<table id=\"tab\"><tr><td>Make a wager: <input type=\"number\" id=\"wag\"><br>Guess a letter:  <input type=\"text\" id=\"nam\"></td><td><button onclick=\"guess()\" id=\"but\">guess</button></td></tr></table>"
    end_conditions()
}

var endcond = document.getElementById("update2")


function end_conditions()
{
    if ((x.innerHTML.toString()==player.blankname) || (y.innerHTML.toString()==computer.name))
    {
        if(player.purse>computer.purse)
        {
          cp.innerHTML="YOU WON!!!!!"
        }
        else
        {
          cp.innerHTML="computer won :("
        }
    }

}

function updateplayername(letter)
    {
      computerGuessed.push(letter)
      compdisplay=""
      for(var h in player.name.split(''))
      {
        if (computerGuessed.indexOf(player.name.charAt(h))>=0)
         {
          compdisplay+="_"
          player.count+=1
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
          computer.count+=1
        }
        else
        {
          compdisplay+="_"
        }
      }
     return compdisplay

    }



