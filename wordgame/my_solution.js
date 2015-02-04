 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description:

//my mission will have a character and another character, that each possess. a purse of coins,  the object of the game is to collect as many coins as possible frlom the other character you start with, by guessing each others name letter by letter.
//the more letters you guess the more money you get from the others purse.  if you fail to guess a letter in the name, then you loose the money you wagered.
//if you guess more than one letter at a time (a series of letters) then you can steal the next turn, but if you guess wrong, then the computer gets the next two turns.
// Overall mission:  to take all of the other characters coins., you take coins based on what you guess, you loose coins if you guess wrong,  you are able to wager a certain amount of coins.
// Goals: take as much coins as possible.  the person with more coins at the end of the game wins.
// Characters: two charactes with a purse and a random name assigned to them.
// Objects:character one, character two
// Functions:guess, takecoins, wager

// Pseudocode
//
//1) two play objects are made, one for you and the name you choose,  one of the computer and a random name assigned to it.  each start with 50 coins.
//2.) playerone is given the first turn

 //LOOP
//1.)one player first must  wager  and guess
//2.)things update
//3.)'thinking...' pops up and animates
//4.)computer wagers and guesses
//5.)everything updates and 'update' dive is updated with what the comput did
 //END LOOP (condition: either all of my name letters are red, or all of the computers letters a guesses)

    //get total number of coins, for each player
    //declare the one with more coins the winner

//class Player
//attributes:   purse - number of coins each has
              //name - an array of the letters in the name
              //counter - keeps track of how many letters in name array were guessed

//methods : wager, guess, takecoins, paycoins

// Initial Code
//names = array of 100 random names





//computer pick random name from names array

// Refactored Code
      var x = document.getElementById("login")
      var b = document.getElementById("na")
var guessedletters=[]

var purse_two = document.getElementById("player_two_purse")
var purse_one = document.getElementById("player_one_purse")

//these are my object rpresenting the player and the computer
var player={name:"",purse:52, count:0};
var computer={name:"",purse:52, count:0};

//displays the players name
function displayplayer()
    {
      player.name=b.value
      x.innerHTML=player.name

    }

//displays the computer name
var y = document.getElementById("comps")
var g = document.getElementById("nam")
var bet = document.getElementById("wag")

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
     // var name=["matt", "jmones","itm","carm","micheal","tyrimon"]
     var name=["former", "swimmer", "stanford", "university", "pleaded", "guilty", "today", "counts", "sexual", "assault", "allegedly", "raping", "drunk", "unconscious", "woman", "outside", "oncampus", "fraternity", "party", "month", "prosecutors", "brock", "allen", "turner", "charged", "felony", "counts", "sexual", "assault", "deputies", "allegedly", "found", "pinned", "samaritans", "encountered", "woman", "outside", "kappa", "alpha", "house", "lomita", "court", "according", "report", "santa", "clara", "county", "sheriffs", "office", "convicted", "charges", "turner", "could", "maximum", "sentence", "years", "prison", "district", "attorneys", "spokesman", "webby", "today", "turner", "resident", "freshman", "stanford", "until", "withdrew", "school", "shortly", "after", "arrest", "allegedly", "found", "turner", "bicycling", "before", "noticed", "lying", "woman", "ground", "dumpster", "according", "sheriffs", "offices", "report", "woman", "appeared", "unconscious", "moving", "looked", "having", "bicyclists", "stopped", "going", "tried", "checked", "woman", "pursued", "caught", "fleeing", "after", "struggle", "pinned", "ground", "woman", "still", "unconscious", "deputies", "arrived", "severely", "intoxicated", "taken", "santa", "clara", "valley", "medical", "center", "where", "remained", "asleep", "until", "later", "morning", "investigators", "memory", "shortly", "after", "midnight", "drinking", "outside", "house", "turner", "investigators", "woman", "party", "ended", "kissing", "ground", "outside", "house", "sexual", "activity", "between", "seemed", "consensual", "perspective", "according", "sheriffs", "offices", "report", "prosecutors", "charged", "turner", "unlawful", "sexual", "intercourse", "someone", "prevented", "resisting", "intoxication", "intercourse", "person", "unconscious", "nature", "assault", "intent", "commit", "sexual", "penetration", "person", "cannot", "resist", "intoxication", "penetration", "person", "unconscious", "nature", "disney", "announced", "thursday", "newest", "princess", "elena", "avalor", "yearold", "character", "inspired", "diverse", "latin", "cultures", "folklore", "shell", "debut", "disney", "juniors", "animated", "sofia", "first", "which", "targeted", "children", "elenas", "eponymous", "spinoff", "series", "premiere", "disney", "junior", "disney", "juniors", "programming", "block", "disney", "channel", "aimee", "carrero", "familys", "young", "hungry", "voice", "excites", "chance", "distinctive", "animation", "visual", "design", "wonderful", "stories", "influenced", "culture", "traditions", "familiar", "worldwide", "population", "hispanic", "latino", "families", "reflect", "interests", "aspirations", "children", "through", "classic", "fairy", "nancy", "kanter", "executive", "president", "general", "manager", "disney", "junior", "worldwide", "announcement", "disney", "faced", "harsh", "criticism", "after", "producer", "sofia", "first", "series", "announced", "title", "character", "latina", "disney", "junior", "executives", "later", "clarified", "princess", "ethnicity", "misrepresented", "adding", "characters", "fantasy", "lands", "reflect", "elements", "various", "cultures", "ethnicities", "meant", "specifically", "represent", "those", "world", "cultures", "santa", "enforcement", "officials", "detonated", "determined", "improvised", "explosive", "device", "santa", "found", "while", "landscaping", "backyard", "today", "santa", "police", "santa", "police", "officers", "responded", "report", "suspicious", "device", "apartments", "block", "guerneville", "santa", "police", "marcus", "sprague", "device", "encased", "cloth", "pouch", "measured", "roughly", "inches", "inches", "material", "covered", "making", "determine", "exactly", "cloth", "inside", "sprague", "pouch", "couple", "canisters", "wicks", "poking", "which", "officers", "suspected", "might", "improvised", "explosive", "sprague", "police", "device", "looked", "buried", "ground", "there", "roots", "wrapped", "around", "casing", "partially", "deteriorated", "sprague", "there", "buried", "sonoma", "county", "sheriffs", "explosive", "ordinance", "disposal", "called", "assist", "disposal", "device", "police", "police", "cordoned", "approximately", "minutes", "while", "squad", "rendered", "device", "using", "water", "ceramic", "rounds", "which", "fired", "devise", "close", "distance", "police", "according", "santa", "police", "sheriffs", "squad", "confirm", "device", "actually", "improvised", "explosive", "sprague", "squad", "destroy", "device", "without", "activating", "whatever", "explosive", "inside", "police", "manner", "which", "device", "destroyed", "further", "information", "available", "about", "devices", "contents", "origin", "representative", "sonoma", "county", "sheriffs", "office", "immediately", "available", "comment"]

      displayplayer();
      var compname = name[Math.floor(Math.random()*name.length)];
      computer.name=compname;
      displaycomp();
      purse_one.innerHTML=player.purse
      purse_two.innerHTML=computer.purse
    }


var cp=document.getElementById("controlpanel")
var ud=document.getElementById("update")

function guess()
{
  var temp= y.innerHTML
    y.innerHTML=updatecompname(g.value.toLowerCase())
   // cp.innerHTML=temp
    g.value=""
    if (y.innerHTML==temp)
    {
      player.purse-=parseInt(bet.value)
      computer.purse+=parseInt(bet.value)
    }
    else
    {
      player.purse+=parseInt(bet.value)
      computer.purse-=parseInt(bet.value)
    }
      purse_one.innerHTML=player.purse
      purse_two.innerHTML=computer.purse
      bet.value=0
      compupdate.innerHTML="<button onclick=\"computer_guess()\">click to end your turn</button>"

end_conditions()
}

var compupdate=document.getElementById("compguess")
var computerGuessed =[]
function computer_guess()
{
  var temp= x.innerHTML

  alpha="abcdefghijklmnopqrstuvwxyz".split('')
  num=Math.floor(Math.random()*(computer.purse/2));
  let=alpha[Math.floor(Math.random()*alpha.length)]
  x.innerHTML = updateplayername(let)

  ud.innerHTML="I wagered "+num+". I guessed the letter "+let

    if (x.innerHTML==temp)
    {
      player.purse+=num
      computer.purse-=num
    }
    else
    {
      player.purse-=num
      computer.purse+=num
    }
      purse_one.innerHTML=player.purse
      purse_two.innerHTML=computer.purse
      compupdate.innerHTML=""

//end_conditions()
}

var endcond = document.getElementById("update2")


function end_conditions()
{
    if ((player.count==player.name.length) || (computer.count==computer.name.length))
    {
        if(player.purse>computer.purse)
        {
          endcond.innerHTML="YOU WON!!!!!"
        }
        else
        {
          endcond.innerHTML="computer won :("
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






// Reflection
//
//
//Java script is VERY frustrating becuase there is not way to see a mistake, or effectivly debug.  Its cool, but I would prefer making these methods in ruby, if we must use a scripting language.
//
//
//
//
//