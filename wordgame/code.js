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
      var poolofchars="abcdefghijklmnopqrstuvwxyz_".split('')
      var pn=document.getElementById("na").value.toLowerCase().split('')
      var fpn=[]
      for(var i=0;i<pn.length;i+=1)
      {
          if(poolofchars.indexOf(pn[i])>=0)
          {
            fpn.push(pn[i].toString())
          }
          else
          {
            fpn.push('')
          }

      }

      player.name=fpn.join('')
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
     var name=["about", "above", "abuse", "accept", "accident", "accuse", "across", "activist", "actor", "administration", "admit", "adult", "advertise", "advise", "affect", "afraid", "after", "again", "against", "agency", "aggression", "agree", "agriculture", "force", "airplane", "airport", "album", "alcohol", "alive", "almost", "alone", "along", "already", "although", "always", "ambassador", "amend", "ammunition", "among", "amount", "anarchy", "ancestor", "ancient", "anger", "animal", "anniversary", "announce", "another", "answer", "apologize", "appeal", "appear", "appoint", "approve", "archeology", "argue", "around", "arrest", "arrive", "artillery", "assist", "astronaut", "astronomy", "asylum", "atmosphere", "attach", "attack", "attempt", "attend", "attention", "automobile", "autumn", "available", "average", "avoid", "awake", "award", "balance", "balloon", "ballot", "barrier", "battle", "beauty", "because", "become", "before", "begin", "behavior", "behind", "believe", "belong", "below", "betray", "better", "between", "biology", "black", "blame", "bleed", "blind", "block", "blood", "border", "borrow", "bottle", "bottom", "boycott", "brain", "brave", "bread", "break", "breathe", "bridge", "brief", "bright", "bring", "broadcast", "brother", "brown", "budget", "build", "building", "bullet", "burst", "business", "cabinet", "camera", "campaign", "cancel", "cancer", "candidate", "capital", "capture", "career", "careful", "carry", "catch", "cause", "ceasefire", "celebrate", "center", "century", "ceremony", "chairman", "champion", "chance", "change", "charge", "chase", "cheat", "cheer", "chemicals", "chemistry", "chief", "child", "children", "choose", "circle", "citizen", "civilian", "civil", "rights", "claim", "clash", "class", "clean", "clear", "clergy", "climate", "climb", "clock", "close", "cloth", "clothes", "cloud", "coalition", "coast", "coffee", "collapse", "collect", "college", "colony", "color", "combine", "command", "comment", "committee", "common", "communicate", "community", "company", "compare", "compete", "complete", "complex", "compromise", "computer", "concern", "condemn", "condition", "conference", "confirm", "conflict", "congratulate", "congress", "connect", "conservative", "consider", "constitution", "contact", "contain", "container", "continent", "continue", "control", "convention", "cooperate", "correct", "corruption", "cotton", "count", "country", "court", "cover", "crash", "create", "creature", "credit", "crime", "criminal", "crisis", "criticize", "crops", "cross", "crowd", "crush", "culture", "curfew", "current", "custom", "customs", "damage", "dance", "danger", "daughter", "debate", "decide", "declare", "decrease", "defeat", "defend", "deficit", "define", "degree", "delay", "delegate", "demand", "democracy", "demonstrate", "denounce", "depend", "deplore", "deploy", "depression", "describe", "desert", "design", "desire", "destroy", "detail", "detain", "develop", "device", "dictator", "different", "difficult", "dinner", "diplomat", "direct", "direction", "disappear", "disarm", "disaster", "discover", "discrimination", "discuss", "disease", "dismiss", "dispute", "dissident", "distance", "divide", "doctor", "document", "dollar", "donate", "double", "dream", "drink", "drive", "drown", "during", "early", "earth", "earthquake", "ecology", "economy", "education", "effect", "effort", "either", "elect", "electricity", "embassy", "embryo", "emergency", "emotion", "employ", "empty", "enemy", "energy", "enforce", "engine", "engineer", "enjoy", "enough", "enter", "environment", "equal", "equipment", "escape", "especially", "establish", "estimate", "ethnic", "evaporate", "event", "every", "evidence", "exact", "examine", "example", "excellent", "except", "exchange", "excuse", "execute", "exercise", "exile", "exist", "expand", "expect", "expel", "experience", "experiment", "expert", "explain", "explode", "explore", "export", "express", "extend", "extra", "extraordinary", "extreme", "extremist", "factory", "false", "family", "famous", "father", "favorite", "federal", "female", "fence", "fertile", "field", "fierce", "fight", "final", "financial", "finish", "fireworks", "first", "float", "flood", "floor", "flower", "fluid", "follow", "force", "foreign", "forest", "forget", "forgive", "former", "forward", "freedom", "freeze", "fresh", "friend", "frighten", "front", "fruit", "funeral", "future", "gather", "general", "generation", "genocide", "gentle", "glass", "goods", "govern", "government", "grain", "grass", "great", "green", "grind", "ground", "group", "guarantee", "guard", "guerrilla", "guide", "guilty", "happen", "happy", "harvest", "headquarters", "health", "heavy", "helicopter", "hijack", "history", "holiday", "honest", "honor", "horrible", "horse", "hospital", "hostage", "hostile", "hotel", "house", "however", "human", "humor", "hunger", "hurry", "husband", "identify", "ignore", "illegal", "imagine", "immediate", "immigrant", "import", "important", "improve", "incident", "incite", "include", "increase", "independent", "individual", "industry", "infect", "inflation", "influence", "inform", "information", "inject", "injure", "innocent", "insane", "insect", "inspect", "instead", "instrument", "insult", "intelligence", "intelligent", "intense", "interest", "interfere", "international", "internet", "intervene", "invade", "invent", "invest", "investigate", "invite", "involve", "island", "issue", "jewel", "joint", "judge", "justice", "kidnap", "knife", "knowledge", "labor", "laboratory", "language", "large", "laugh", "launch", "learn", "leave", "legal", "legislature", "letter", "level", "liberal", "light", "lightning", "limit", "liquid", "listen", "literature", "little", "local", "lonely", "loyal", "machine", "magazine", "major", "majority", "manufacture", "march", "market", "marry", "material", "mathematics", "matter", "mayor", "measure", "media", "medicine", "member", "memorial", "memory", "mental", "message", "metal", "method", "microscope", "middle", "militant", "military", "militia", "mineral", "minister", "minor", "minority", "minute", "missile", "missing", "mistake", "model", "moderate", "modern", "money", "month", "moral", "morning", "mother", "motion", "mountain", "mourn", "movement", "movie", "murder", "music", "mystery", "narrow", "nation", "native", "natural", "nature", "necessary", "negotiate", "neighbor", "neither", "neutral", "never", "night", "noise", "nominate", "normal", "north", "nothing", "nowhere", "nuclear", "number", "object", "observe", "occupy", "ocean", "offensive", "offer", "office", "officer", "official", "often", "operate", "opinion", "oppose", "opposite", "oppress", "orbit", "order", "organize", "other", "overthrow", "paint", "paper", "parachute", "parade", "pardon", "parent", "parliament", "partner", "party", "passenger", "passport", "patient", "peace", "people", "percent", "perfect", "perform", "period", "permanent", "permit", "person", "persuade", "physical", "physics", "picture", "piece", "pilot", "place", "planet", "plant", "plastic", "please", "plenty", "point", "poison", "police", "policy", "politics", "pollute", "popular", "population", "position", "possess", "possible", "postpone", "poverty", "power", "praise", "predict", "pregnant", "present", "president", "press", "pressure", "prevent", "price", "prison", "private", "prize", "probably", "problem", "process", "produce", "profession", "professor", "profit", "program", "progress", "project", "promise", "propaganda", "property", "propose", "protect", "protest", "prove", "provide", "public", "publication", "publish", "punish", "purchase", "purpose", "quality", "question", "quick", "quiet", "radar", "radiation", "radio", "railroad", "raise", "reach", "react", "ready", "realistic", "reason", "reasonable", "rebel", "receive", "recent", "recession", "recognize", "record", "recover", "reduce", "reform", "refugee", "refuse", "register", "regret", "reject", "relations", "release", "religion", "remain", "remains", "remember", "remove", "repair", "repeat", "report", "represent", "repress", "request", "require", "rescue", "research", "resign", "resist", "resolution", "resource", "respect", "responsible", "restaurant", "restrain", "restrict", "result", "retire", "return", "revolt", "right", "river", "rocket", "rough", "round", "rubber", "rural", "sabotage", "sacrifice", "sailor", "satellite", "satisfy", "school", "science", "search", "season", "second", "secret", "security", "seeking", "seize", "senate", "sense", "sentence", "separate", "series", "serious", "serve", "service", "settle", "several", "severe", "shake", "shape", "share", "sharp", "sheep", "shell", "shelter", "shine", "shock", "shoot", "short", "should", "shout", "shrink", "sickness", "signal", "silence", "silver", "similar", "simple", "since", "single", "sister", "situation", "skeleton", "skill", "slave", "sleep", "slide", "small", "smash", "smell", "smoke", "smooth", "social", "soldier", "solid", "solve", "sound", "south", "space", "speak", "special", "speech", "speed", "spend", "spill", "spirit", "split", "sport", "spread", "spring", "square", "stand", "start", "starve", "state", "station", "statue", "steal", "steam", "steel", "stick", "still", "stone", "store", "storm", "story", "stove", "straight", "strange", "street", "stretch", "strike", "strong", "structure", "struggle", "study", "stupid", "subject", "submarine", "substance", "substitute", "subversion", "succeed", "sudden", "suffer", "sugar", "suggest", "suicide", "summer", "supervise", "supply", "support", "suppose", "suppress", "surface", "surplus", "surprise", "surrender", "surround", "survive", "suspect", "suspend", "swallow", "swear", "sweet", "sympathy", "system", "target", "taste", "teach", "technical", "technology", "telephone", "telescope", "television", "temperature", "temporary", "tense", "terrible", "territory", "terror", "terrorist", "thank", "theater", "theory", "there", "these", "thick", "thing", "think", "third", "threaten", "through", "throw", "tired", "today", "together", "tomorrow", "tonight", "torture", "total", "touch", "toward", "trade", "tradition", "traffic", "tragic", "train", "transport", "transportation", "travel", "treason", "treasure", "treat", "treatment", "treaty", "trial", "tribe", "trick", "troops", "trouble", "truce", "truck", "trust", "under", "understand", "unite", "universe", "university", "unless", "until", "urgent", "usual", "vacation", "vaccine", "valley", "value", "vegetable", "vehicle", "version", "victim", "victory", "video", "village", "violate", "violence", "visit", "voice", "volcano", "volunteer", "wages", "waste", "watch", "water", "wealth", "weapon", "weather", "weigh", "welcome", "wheat", "wheel", "where", "whether", "which", "while", "white", "whole", "willing", "window", "winter", "withdraw", "without", "witness", "woman", "wonder", "wonderful", "world", "worry", "worse", "worth", "wound", "wreck", "wreckage", "write", "wrong", "yellow", "yesterday", "young"]

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



