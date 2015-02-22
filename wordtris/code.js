
var alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var player_score=0
var noise_array=["crash1","crash2","crash3","crash4","crash5","crash6"]
// var hit_noise = new Audio("sounds/"+noise_array[Math.floor(Math.random()*noise_array.length)]+".wav")
var hit_noise=new Audio("sounds/crash3.wav")
var scamble_noise = new Audio("sounds/bubbles2.wav")
var ID_array=["11","12","13","14","15","16","17","18","21","22","23","24","25","26","27","28","31","32","33","34","35","36","37","38","41","42","43","44","45","46","47","48","51","52","53","54","55","56","57","58","61","62","63","64","65","66","67","68","71","72","73","74","75","76","77","78","81","82","83","84","85","86","87","88"]

var ID_array_ripple=["55","54","44","45","46","56","66","65","64","63","53","43","33","34","35","36","37","47","57","67","77","76","75","74","73","72","62","52","42","32","22","23","24","25","26","27","28","38","48","58","68","78","88","87","86","85","84","83","82","81","71","61","51","41","31","21","11","12","13","14","15","16","17","18"]


var ID_arays_animation=[ID_array, ID_array.reverse(), ID_array_ripple, ID_array_ripple.reverse()]
// var ID_arays_animation=[ID_array, ID_array.reverse()]

var initials=document.getElementsByClassName("letter")

var return_button = function(event){
  if(event.keyCode==13)
  {
    submit()
  }
}
var word=""
var curr=[]
var current=""
var current_color="white";
var colors=["white", "#E6E0F8", "#E0F8F7", "#ECF6CE","#F5F6CE","#CEE3F6","#8FFDEB","#FDBB8F","#E2FD8F","#CD8FFD"]

var scamble_and_preserve = function(){
    scamble_noise.play()
current_color=colors[Math.floor(Math.random()*colors.length)]
        // shock_wave()
        // player_score=0
        // used_words=""
        curr=[]
        current=""
        document.getElementById("score").innerHTML=player_score
        document.getElementById("wordbank").innerHTML=used_words
    var ten=0
    var random_animation=ID_arays_animation[Math.floor(Math.random()*ID_arays_animation.length)]
    assign_and_shake()
    function assign_and_shake(){
          word=""
          document.getElementById("word").innerHTML="Jungle Jumble"
      if(ten<=64)
          {
            document.getElementById(random_animation[ten]).style.color=current_color
            document.getElementById(random_animation[ten]).innerHTML=alpha[Math.floor(Math.random()*alpha.length)]
            shake(random_animation[ten])
            ten+=1
            setTimeout(assign_and_shake,20)
          }
    }
      word=""
      curr=[]
      current=""
      document.getElementById("word").innerHTML=word
      // free_jumbles=""
      jumbles_array.pop()
    document.getElementById('podium').innerHTML="STAMPs <br>"+jumbles_array.join("")+arma_array.join("")

}


var scamble = function(){
  scamble_noise.play()
  current_color=colors[Math.floor(Math.random()*colors.length)]
        // shock_wave()
        player_score=0
        used_words=""
        curr=[]
        current=""
        document.getElementById("score").innerHTML=player_score
        document.getElementById("wordbank").innerHTML=used_words
    var ten=0
    var random_animation=ID_arays_animation[Math.floor(Math.random()*ID_arays_animation.length)]
    assign_and_shake()
    function assign_and_shake(){
          word=""
          document.getElementById("word").innerHTML="Jungle Jumble"
      if(ten<=64)
          {
            document.getElementById(random_animation[ten]).style.color=current_color
            document.getElementById(random_animation[ten]).innerHTML=alpha[Math.floor(Math.random()*alpha.length)]
            shake(random_animation[ten])
            ten+=1
            setTimeout(assign_and_shake,20)
          }
    }
      word=""
      curr=[]
      current=""
      document.getElementById("word").innerHTML=word
    // reset_colors()
}

//shakes all dives in sequence (not used, but still useful)
function shock_wave(){
var f=0
var random_animation=ID_arays_animation[Math.floor(Math.random()*ID_arays_animation.length)]
if(f<random_animation.length)
  {
    shake_this()
     function shake_this(){
      shake(random_animation[f])
      f+=1
      setTimeout(shake_this,10)
    }
  }
}


//shakes a single div
var shake = function(indexID){
  var initial=0
  var incre=0
  quibble()
    function quibble(){
      if(incre<20)
      {
        if(incre%2==0)
          {
            initial+=5
          }
        else
          {
            initial-=5
          }
        document.getElementById(indexID).style.top=initial+"%"
        incre+=1
        setTimeout(quibble,20)
      }
    }
}

var slide_down = function(indexID){
  var initial=0
  var incre=0
  quibble()
    function quibble(){
      if(incre<=3)
      {
        if(incre==3)
          {initial=0}
        else
          {initial+=1}
        document.getElementById(indexID).style.top=initial+"%"
        incre+=1
        setTimeout(quibble,20)
      }
    }
   // document.getElementById(indexID).style.top='0%'
}

var shake_side_ways = function(indexID){
  var initial=0
  var incre=0
  quibble()
    function quibble(){
      if(incre<20)
      {
        if(incre%2==0)
          {
            initial+=5
          }
        else
          {
            initial-=5
          }
        document.getElementById(indexID).style.left=initial+"%"
        incre+=1
        setTimeout(quibble,20)
      }
    }
}

var time_inc=0
var load = function(){
        if(time_inc<=64){
        td=document.getElementById(ID_array[time_inc])
        td.innerHTML=alpha[Math.floor(Math.random()*alpha.length)]
        // td.innerHTML="_"
        // td.innerHTML=ID_array[t]
        // adds event listener
        td.addEventListener("click",function(){
          // this ensures that only adjacent squares may be selected
          if(((current=="")||(parseInt(current)+1==parseInt(this.id))||(parseInt(current)-1==parseInt(this.id))||(parseInt(current)+10==parseInt(this.id))||(parseInt(current)-10==parseInt(this.id))||((parseInt(current)-9==parseInt(this.id)))||((parseInt(current)-11==parseInt(this.id)))||((parseInt(current)+9==parseInt(this.id)))||((parseInt(current)+11==parseInt(this.id))))&&(curr.indexOf(this.id)<0))
              {
                  this.style.color="red"
                  word+=this.innerHTML
                  current=this.id
                  curr.push(this.id)
                  document.getElementById("word").innerHTML=word
                  // document.getElementById("score").innerHTML=curr
                  // document.getElementById("score").innerHTML=current
              }
            })
        shake_side_ways(ID_array[time_inc])
            document.getElementById('podium').innerHTML="STAMPs <br>"+jumbles_array.join("")+arma_array.join("")

        time_inc+=1
        setTimeout(load,20)
        }
      // scamble()
  }

  // var reset_colors = function(){
   function reset_colors(){
      // document.getElementById("score").innerHTML=current
      word=""
      curr=[]
      current=""
      document.getElementById("word").innerHTML=word
      for (var t = 0; t <= 64; t++)
      {
        document.getElementById(ID_array[t]).style.color=current_color
      }

  }
var first_row=["81","82","83","84","85","86","87","88"]
var last_row=["11","12","13","14","15","16","17","18"]
var used_words="";
//this is a double recursive function to drop my letters
function drop_blox(){
    var g=0
    the_loop()
    function the_loop()
      {
        if(g<ID_array.length)
          {
          var t=0
          the_drop()
                function the_drop(){
                  if(t<ID_array.length)
                    {
                        if(document.getElementById(ID_array[t]).innerHTML=="")
                        {
                          if(last_row.indexOf(ID_array[t])>=0)
                          {
                             var temp_letter = alpha[Math.floor(Math.random()*alpha.length)]
                          }
                          else
                          {
                             var temp_letter = document.getElementById(ID_array[t+8]).innerHTML.toString()
                          document.getElementById(ID_array[t+8]).innerHTML=""
                          }
                          document.getElementById(ID_array[t]).innerHTML=temp_letter
                          slide_down(ID_array[t])
                        }
                      t+=1
                      setTimeout(the_drop,20)
                    }
                  }
                  g+=1
                  // document.getElementById("score").innerHTML=g
                  setTimeout(the_loop,300)
                }
        }
}

var jumbles_array=[]
var arma_array=[]
// var free_jumbles=jumbles_array.join("")

var generate_free_jumbles = function(){
  var current_button_color=colors[Math.floor(Math.random()*colors.length)]
  var letter_array=[]
  for(var y=0 ; y<word.length ; y++)
  {
    letter_array.push('c','a')
    // letter_array.push('c')
  }
  while(letter_array.length<=13)
  {
    letter_array.push('b')
  }

  var ran_letter=letter_array[Math.floor(Math.random()*letter_array.length)]

  if(ran_letter=='a')
  {
    jumbles_array.push("<button id=\"free_j\" style=\"color:"+current_button_color+"\" onclick=\"scamble_and_preserve()\">JuMbLe mE!</button>")

    document.getElementById('podium').innerHTML="STAMPs <br>"+jumbles_array.join("")+arma_array.join("")
  }
  if (ran_letter=='c')
  {
        arma_array.push("<button id=\"free_j\" style=\"color:yellow\" onclick=\"armageddon()\">JUMBLEGGEDON!</button>")
    // jumbles_array.push("<button id=\"free_j\" style=\"color:"+yellow+"\" onclick=\"armageddon()\">JUMBLEGGEDON!</button>")
    document.getElementById('podium').innerHTML="STAMPs <br>"+jumbles_array.join("")+arma_array.join("")
  }
}


function armageddon(){
  scamble_noise.play()
  for(var t = 0 ; t<ID_array.length ; t++)
  {
    var jumgot=["J","U","M","B","L","E"]
      if(jumgot.indexOf(document.getElementById(ID_array[t]).innerHTML)>=0)
      {
        document.getElementById(ID_array[t]).innerHTML=""
      }

  }
        arma_array.pop()
    document.getElementById('podium').innerHTML="STAMPs <br>"+jumbles_array.join("")+arma_array.join("")
      drop_blox()

}


var new_score=0;
var submit = function(){
    if((dictionary.indexOf(word)>=0)&&(word.length>1))
    {
     // var hit_noise = new Audio("sounds/"+noise_array[Math.floor(Math.random()*noise_array.length)]+".wav")
      hit_noise.play()
      used_words+=" "+word+" "
      new_score = player_score+word.length
      document.getElementById("wordbank").innerHTML=used_words
      document.getElementById("word").innerHTML="Score! +"+word.length+"pts"
      slide_score()
      generate_free_jumbles()
      for (var t = 0; t < curr.length; t++)
        {
          // document.getElementById(curr[t]).innerHTML=alpha[Math.floor(Math.random()*alpha.length)]
          document.getElementById(curr[t]).innerHTML=""
          document.getElementById(curr[t]).style.color=current_color;
          // shake(curr[t])
        }
      word=""
      curr=[]
      current=""

      drop_blox()
      // reset_colors()
    }
    else if((word.length==1)&&(dictionary.indexOf(word)>=0))
    {
      word=""
      current=""

      for (var t = 0; t < curr.length; t++)
        {
          document.getElementById(curr[t]).innerHTML=alpha[Math.floor(Math.random()*alpha.length)]
          document.getElementById(curr[t]).style.color=current_color;
          shake(curr[t])
        }
      curr=[]
        // reset_colors()
    }
    else
    {
    reset_colors()
    for (var tea = 0; tea <= 64; tea++)
      {
    document.getElementById("word").innerHTML="not a word :("
        document.getElementById(ID_array[tea]).style.color=current_color
      }
    }
    // reset_colors()
  }

  var slide_score = function(){
    //start with player_score, and new_score
      if(player_score!=new_score)
      {
        player_score+=1
        document.getElementById("score").innerHTML=player_score
        setTimeout(slide_score,50)
      }
      else
      {
        document.getElementById("score").innerHTML=player_score
      }

    //end with player_score=new_score

  }

var dictionary=["BEG","ARMAGEDDON","GUT","TUG","MUT","BRA","BULLY","BRIDGE","RIDGE","HOGS","HOG","MARS","CHAR","CHAMP","CHAMPS","AMP","JAR","PALS","PAL","LAP","SLAP","GEM","LOFT","SLUR","PAD","DAPPER","GLOW","ROT","JOY","DICE","JOT","BLUNT","TOYED","TOY","WART","WARSAW","GUN","CON","CITADEL","PANCAKE","PAN","BUN","EGO","JOG","BONG","GAG","JUNGLE","RAP","WAG","LUG","SLAM","CHALK","BULB","BLT","WOK","SPY","HOP","USUAL","GRIP","MUG","GUM","CAVE","MOB","BOMB","SOB","SUM","LEAK","LEAF","PEET","GONG","SACK","TAG","I","A","E","O","U","NBC","BAY","AREA","SEND","PICS","TIPS","GO","HOME","NEWS","WEATHER","UNIT","SPORTS","TRAFFIC","CONTACT","US","WATCH","LIVE","TV","NOW","HERETHE","COVE","VIDEO","AT","SHARE","LOCAL","WORRY","ABOUT","DUST","AS","PARK","ETERIOR","TORN","DOWN","BY","CHRISTIE","SMITH","VIEW","COMMENTS","EMAIL","PRINT","TRENDING","STORIES","DETAIL","STADIUM","PROPOSAL","BLOW","IF","RAIDERS","MOVE","TO","LA","CROW","LEVIS","CAMERA","VIDEOIS","OAKLAND","REALLY","CAS","MOST","CITY","FORECAST","SAN","CA","CLOUDS","FEELS","LIKE","RADAR","MAPS","RECEIVE","THE","LATEST","UPDATES","IN","YOUR","INBO","PRIVACY","POLICY","MORE","WALLS","CRASHING","ARE","RAISING","HEALTH","CONCERNS","REPORTS","THURSDAY","FEB","UPDATED","PM","PST","ON","ICONIC","FORMER","OF","ERS","AND","GIANTS","IS","ALMOST","ENTIRELY","GUTTED","CREWS","BEGAN","TEARING","UNDERWAY","BUILDING","HOTEL","SHOPPING","CENTER","REPLACE","RESIDENT","SHIRLEY","MOORE","CAN","SEE","WORK","FROM","HER","HOUSE","WITH","ASBESTOS","ILLNESS","FRIDAY","WILL","TEAR","STADIUMS","MY","CONCERN","IT","HAS","ALWAYS","BEEN","SAID","WE","JUST","SITTING","DUCKS","FAR","THIS","THAT","COME","THROUGH","OUR","WINDOW","ALSO","SHE","THEY","CLAIM","HAVE","PUT","MONITORS","OUT","HERE","MONITOR","THERE","WERE","SUPPOSED","BE","SI","ONLY","TWO","LENNAR","URBAN","EIGHT","POINT","FOUR","BEING","USED","FOR","FOLLOW","PLAN","APPROVED","PUBLIC","AN","LAST","REPORT","FOUND","NO","VISIBLE","TRUCKS","CLEANED","BEFORE","LEAVING","SITE","SIGN","BUSINESS","AE","FOOD","LIVING","TRAVEL","REAL","ESTATE","CARS","JOBS","FINDSAVE","KING","TIDES","OFFER","GLIMPSE","PLANETS","FUTURE","KURTIS","ALEANDER","FEBRUARY","ISAAC","DE","CRUZ","YEAR","OLD","STUDENT","DOWNTOWN","HIGH","SCHOOL","USES","PICK","PREPARE","SOIL","YOSEMITE","SLOUGH","STATE","HE","PART","ARTS","LITERACY","RESTORE","PHOTO","LIZ","HAFALIA","IMAGE","WEEKS","WASHED","OVER","SMALL","BEACH","BECAME","UNLIKELY","TEACHING","GRIM","REALITY","SEALEVEL","RISE","HANDFUL","POINTED","WATER","WHAT","LOOK","RISING","SEAS","ALL","WHERE","CLIMATE","CHANGE","MAY","NOT","BIGGEST","THING","PEOPLES","MINDS","BUT","ITS","RELEVANT","BAYVIEW","EDGE","MUCH","BUILT","LOWLYING","FILL","STANDS","LOSE","ANYWHERE","COMING","DECADES","END","CENTURY","EPERTS","EPECT","OCEANS","REGION","FEET","TIME","DIDNT","EVEN","REALIZE","TIDE","WAS","SO","DEBORAH","POWELL","AFTER","PAUSING","MORNING","WALK","SPEAK","WHOLE","COVERED","WHILE","WEEK","PRODUCT","STRONG","PULL","SUN","MOON","AMONG","OTHERS","SUCH","ETREME","GET","BETTER","IDEA","LEVELS","YEARS","POSTED","NOTING","AVERAGE","COULD","THAN","MARKER","STOOD","SEVERAL","DOZEN","PAST","PAIR","PICNIC","TABLES","ABOVE","COASTAL","WALKING","TRAIL","BEYOND","GROUP","GATHERED","COFFEE","DONT","KNOW","WOULD","DO","WASNT","SEA","STEADILY","SINCE","STUDIES","SHOW","HIGHER","CAUSED","POLAR","ICE","GLACIERS","MELT","ADDING","VOLUME","SAME","WARMING","OCEAN","EPANDED","HEATED","UP","PER","LAWS","NATURE","RISEN","LESS","FOOT","NORM","HOWEVER","RATE","INCREASE","EPECTED","SPEED","BECOME","AREAS","BETWEEN","TUESDAY","LOW","SOME","SPOTS","HAPPENS","FEW","TIMES","FINAL","OFTEN","DUBBED","OCCUR","LATE","EARLY","NATIONAL","SERVICE","ISSUED","FLOOD","ADVISORY","ANTHONY","KHALIL","PROGRAMS","MANAGER","LITERARY","JUSTICE","HIS","HOPE","EDUCATE","EMPOWER","FAIR","PROBLEMS","OR","POVERTY","HISTORY","SHOWS","ONE","RESPONSE","SLOWEST","FLOODING","ALREADY","COMMON","STREETS","WHEN","RAIN","HEAVY","BIG","START","HELPING","WETLANDS","AROUND","SERVE","BUFFER","AGAINST","EPECTS","REGIONAL","WORKING","HOW","DEAL","PEOPLE","TOOK","NOTE","COOL","ALONG","EPLAINED","PROBABLY","DEALING","GOING","GETTING","THEIR","KIDS","ANOTHER","LAYER","TOP","FACING","HEIDI","NUTTERS","WHO","HELPS","RUN","STATES","RESEARCH","RESERVE","NOTED","KICKING","OFF","CAMPAIGN","JOIN","EFFORT","ADDRESS","STAFF","WRITER","TWITTER","VIDEOS","SHOULD","BOYCOTT","WORLD","CUP","QATAR","KANYE","WESTS","RANT","BIGOTED","FASHION","INDUSTRY","ITN","WRONG","TA","INFO","AP","AWAY","ISIS","SKY","MOVIE","PROP","HITS","BRIDGE","FREEWAY","FONTANA","LANES","CLOSED","KTLA","LOS","ANGELES","APB","QUEEN","ELSA","WANTED","WINTER","STORM","WYMT","LEINGTON","KY","STRIKE","TOKYO","CAME","INTO","IWO","JIMA","LANDING","PLOWED","MUSTANG","FIGHTERS","BURST","FLAMES","MEMBERS","CREW","BURNS","MEN","CROUCH","BESIDE","JEEP","AVOID","EPLODING","AGO","BATTLE","YOU","MIGHT","WHATS","THINGS","WINDOWS","SERVER","MD","ANDERSON","MEMORIAL","HERMANN","DELIVER","NEW","BREAST","HOUSTON","WONT","HEAR","ABOUTTHE","VOCATIV","BABY","GIRL","NAMES","POPULAR","ANCESTRY","POLICE","SAY","YEAROLD","SUSPECT","VEGAS","KILLING","GUNMAN","OBAMA","PASS","BILL","ILL","RIP","CHARGERS","PONDER","SHARED","NEAR","TOURIST","FAU","PAS","DA","CAL","SEUALLY","BROTHER","SFGATE","LOGO","STAIRS","PRAGUE","STREET","LEAD","CROCKER","AMAZON","SFS","ECELSIOR","STAIRWAY","FI","WALMART","WAGE","BUMP","NICE","EARN","STORES","MUST","MISSY","FRANKLIN","LEAVE","SWIM","TEAM","FOCUS","OLYMPICS","ACCESS","KELSEY","GRAMMARS","EWIFE","CAMILLE","DROPS","JAWS","BIKINI","ONLINE","PARTY","HOSTED","EVERYONE","AMAZING","FOOTAGE","CAPTURES","SPACE","ROCKETS","SONS","FRIENDS","THINK","IM","HOT","NICK","MOM","WEB","RUNNING","LEGACY","CELEBS","BARELY","BIKINIS","SHOTS","SHARPEST","PICTURES","CNET","LEARN","COLLECT","SUPPORT","AMAL","CLOONEY","SHUTS","REPORTER","RUDE","QUESTION","STIRRING","DAILY","FEMALE","WEIGH","TOPI","STARS","BANKRUPT","BUDGETS","DROUGHT","THREATS","FORCE","TROUT","RELEASE","TRUCKEE","RIVER","RETAIL","TITANS","GIFT","UCSF","MILLION","AMERICAS","SF","WIELDS","PROMOTE","AGENDA","MASSIVE","SFMOMA","HOWARD","PHOTOS","RELEASED","ALLEGED","MILL","VALLEY","BANK","ROBBER","STABBED","BEATEN","TEENS","SELECTED","POWERED","GUEST","RECORD","SIMPLY","DEFINE","PARENT","CHILD","ELEMENTS","DIV","UL","OL","ET","CETERA","BIGTET","SERIES","TYPE","SIZE","CHANGES","FIGURE","WHICH","DOES","FIT","ELEMENT","CHECK","DEMO","WORKS","USING","WEBFONTS","NEED","MAKE","SURE","SCRIPT","DOESNT","FULLY","LOADED","SCALING","BASED","SYSTEM","FONT","INSTEAD","LAYOUT","LOOKS","BROKEN","LOAD","FIRST","FONTS","VERSION","FOUTTHIS","FLASH","UNSCALED","TET","WANT","USE","GOOGLE","WEBFONT","LOADER","HIDE","UNTIL","SCALED","PROPERLY","CREATED","PLUTO","SANS","TYPEFACE","HVDFONTS","NONE","THESE","LINES","ANY","FONTSIZE","SETTINGS","HANDLED","TRY","RESIZING","PAGE","ADAPT","INDRA","AM","YES","UM","ADAPTS","SEPP","WIDTH","MICHAEL","THANKS","SHARING","FOINNI","PRETTY","SWEET","YURI","MORINI","READING","CSS","GUESSED","MAYBE","SVG","INLINE","WITHOUT","JS","TESTED","CORY","INCLUDE","ME","RALF","HERRMANN","SOURCE","CODE","BLOG","GOT","COUPLE","HOURS","NEEDED","CALL","PHP","FILE","CLASSIC","GAL","PLUGIN","AUTHOR","WEBLOG","GERMAN","DESIGNER","TOPICS","SIGNAGE","SPATIAL","READ","RIGHTS","RESERVED","DESIGN","ARTICLES","GRAUBLAU","CLOSE","TIGER","MATCH","PLAY","HARDING","RON","TH","HOLE","PAR","DOGLEG","LEFT","PLAYED","MACOR","BRAND","OFFERING","STRIKING","CONTRAST","TIRED","BODE","WELL","EVENT","COMES","COURSE","DOVE","MOUNTAIN","OUTSIDE","TUCSON","DATES","APRIL","FORMAT","ASSURING","GOLFERS","COMPETE","LEAST","THREE","DAYS","HERALD","WOODS","ERA","PGA","TOUR","THATS","SIZABLE","PROBLEM","TUMBLED","RANKING","RESIDES","THOSE","QUALIFY","RETURN","HARDINGS","PREVIOUS","TURNS","WON","AMERICAN","EPRESS","TEAMED","STEVE","STRICKER","VICTORY","REMAINS","GAMES","MARQUEE","SPENT","STILL","ENDED","ISSUE","WED","LOVE","EECUTIVE","DIRECTOR","TOM","CLARK","THERES","CHANGING","GUARD","LITTLE","BIT","HAPPENED","JACK","NICKLAUS","ARNOLD","PALMER","PHIL","BACK","TIGERS","GOOD","NEEDS","FIND","GAME","SOON","FALL","TOURS","NET","RORY","MCILROY","JASON","DAY","JORDAN","SPIETH","RICKIE","FOWLER","STIR","INTEREST","FANS","OTHER","NOTES","WAKE","MONDAYS","PUMPING","LIFE","TOO","MANY","PLAYERS","GONE","HARD","SELL","MARKET","FIELD","DIVIDED","GROUPS","WINNER","EACH","ADVANCES","ROUND","SATURDAY","SINGLE","GIVES","CHANCE","BOUNCE","BAD","YOURE","KEEPS","GUYS","LOST","EARLIER","ROUNDS","THEM","LATER","NEAT","REROUTED","ENSURE","MATCHES","REACH","PLAYS","LAKE","MERCED","THEN","HOLES","NOS","USUALLY","MATTER","PLENTY","OPENING","NEARLY","GREENS","CHEWED","MONDAY","SENSE","REMOVING","ENORMOUS","POWER","HITTERS","ENJOYED","WIDEOPEN","DESERT","LOVED","MOSTLY","BECAUSE","DRIVER","WORD","CASE","CYPRESS","TREES","STIFF","PENALTY","WAYWARD","TOUGH","HAVENT","SEEN","CUT","CORNERS","SAVOR","WORLDS","BEST","SPOT","RISKY","HOLD","RAINED","JANUARY","LUCY","LI","HELD","USUAL","MENS","STARTING","MARCH","BOTH","WOMEN","SET","PLAYER","REDWOOD","SHORES","WOMENS","OPEN","YOUNGEST","EVER","ENTERED","FAMOUS","BODY","PARTS","AGING","BUZZLIE","TVNEWS","DID","HEINOUS","GORGEOUS","JEWISH","GALSTHE","GALS","NFL","FOOTBALL","PROPOSED","OWNERS","DIEGO","LOCATED","CARSON","MOMS","BARE","BLURRED","BABE","SPEAKS","MADEMAN","JENNIFER","ANISTONS","BOD","AGES","WEEKLY","KIM","DRESS","LEAVES","NOTHING","CELEB","SWIMSUIT","YOUVE","NEVER","DECADE","GOOFY","LOOKING","TODAYS","BANNED","TALK","CRAZY","AARP","AMY","ADAMS","PULLED","TODAY","WOULDNT","BLAZERS","JEROME","KERSEY","DIES","DRAGIC","DONE","SUNS","TRUST","ANYMORE","BRUCE","JENKINS","ANALYSIS","CHARLES","BARKLEY","MIGUEL","CABRERAS","RECOVER","TRACK","PATTY","HEARST","WIN","UNC","MISSES","CHANCES","OT","LOSS","DUKE","SERGIO","ROMO","SLIGHT","SHOULDER","SORENESS","SKIP","CONTENT","MOTHER","JONES","POLITICS","CULTURE","ESSAYS","BLOGS","DONATE","READS","INSIDE","MOVEMENT","DRINK","MEET","INCOME","TRAGIC","TALES","HOMELESS","ROBERT","OKIN","CITYS","HES","CANON","TUE","EST","TWEET","MARY","TOLD","HAD","ONCE","VERY","LONG","COVERAGE","SIMPLE","WAY","COUNT","TAGGED","PROJECT","GREAT","VETS","HERES","TECHIE","SILICON","HANGING","TECH","HAVENOTS","JEFF","RARELY","SMILES","SLEEPING","STEALING","SURVIVE","SCORE","HEROIN","ROBBED","HIM","TEETH","NOSE","BLAME","SAYS","BORN","PROOF","FUCKED","BADTHAT","FUCKUP","FEARING","KILL","SUFFERED","SHUFFLED","MENTAL","VIOLENT","HURLING","INSULTS","FAMILY","KNIVES","JEFFS","FATHER","THOUGH","HERO","GARBAGE","CITYAND","FOLLOWED","WORKED","PAID","TAES","CAUGHT","TINY","POT","URINE","FIRED","FELL","DEEP","STARTED","CRACK","BURNED","MONEY","FIANC","MAN","SOCIAL","WORKER","HELPED","DRUGS","STABLE","HOUSING","TIL","OKINS","BOOK","SILENT","VOICES","SERVED","VERMONT","EMERITUS","MEDICINE","CHIEF","GENERAL","PATIENTS","CAREER","PASSED","LIVED","WONDER","COPE","STRESSES","COLD","FOGGY","NIGHTS","LIVES","CLINICAL","DETAILS","ASKING","BROACH","PASTS","SURVIVAL","INNER","BEHIND","RAGS","CARTS","STRANGE","STIGMA","HUMAN","BEINGS","LOT","HOPES","FEELINGS","JOYS","REST","HELP","READERS","SOMEONE","REMEMBER","PERSON","STORY","DANIEL","DISTRICT","SLEEPS","DOORWAYS","NIGHT","DANIELS","PAIRS","ETENDED","QUOTES","SUBJECTS","CONTET","HED","RATHER","LET","FULL","HARDSHIP","GRIEF","REGRET","BELIEVED","FAULT","OWN","HEARD","ENGAGE","SAT","HOUR","SEEMED","UNAWARE","PRESENCE","INTENTLY","EAMINING","SOCK","DRUG","THEME","VARIETY","REASONS","NEGLECT","ABUSE","LANDED","CYCLE","BREAK","ROOF","HEAD","SUBJECT","PUTS","EITHER","STONED","BEAR","DAVID","SHOOTING","BRAIN","ANGELS","DAVIDS","ROOM","HOTELS","LINDA","NAMED","HIMSELF","WHOM","FOSTER","CARE","AGE","FIVE","RAISED","HOMES","LONELY","LISTEN","MUSIC","CANT","TRAUMA","MENTALLY","ABUSED","EPLOITED","CHILDREN","HEARING","TOLL","FEELING","SAD","LUMP","THROAT","TOUCHED","DEEPLY","FELT","COULDNT","KEPT","THOUGHT","INSPIRE","TAKE","GIVEN","RIGHT","KNEW","ABYSS","LIKELY","JOB","WAYS","TOGETHER","ABLE","FUNCTION","FIGHT","BARBARA","HUSBAND","ODD","SON","FACE","WANTING","CANCER","DIED","INDEED","ACROSS","COUNTRY","LONGTERM","INHOUSE","SERVICES","STRATEGY","PROVED","REBUILD","SOUNDS","EPENSIVE","FACT","CHEAPER","BANDAID","LACED","COSTS","HOSPITAL","STAYS","GOD","TALKING","SOFTLY","LOUDLY","BELL","CLANGED","TOWER","FERRY","UTAHS","HIGHLY","PROGRAM","COVER","EDITION","ENDING","CHRONIC","SOLVED","UTAH","REMOVE","ARGUMENT","GIVE","CHARGE","COMFORT","NEEDBUT","DEMAND","ELECTED","LUCKY","ONES","SAVED","HEAL","STRESS","EPOSURE","PLACED","ASSIGNED","SAW","EVERY","CLEAN","PARTTIME","ASSISTED","ANIMAL","SHELTER","ADOPTED","KITTEN","SHES","FRIEND","IVE","ELSE","FACEBOOK","FELLOW","WRITTEN","POST","RSS","LIKED","SOCCER","TEAMS","UNITED","TRAVELED","CHILE","TENT","BACKYARD","NOWHERE","OBVIOUS","CITIES","FREE","MOJO","TROLL","PATROL","YAHOO","DISQUS","OPENID","COMMENT","PLEASE","POSTING","MANAGED","PRIVATE","FIRMS","JOHN","JAN","ANTONIO","MAYOR","JULIAN","CASTRO","BARACK","OBAMAS","LAW","FAMILIES","USAS","ANNUAL","ACTION","ANTONIOS","FAMILIAR","PROCESS","SPOKE","WERENT","DISCUSS","NAME","SUCCEED","SHAUN","DONOVAN","MEMBER","ORIGINAL","CABINET","DHARAPAK","PRESS","ED","LEE","WAITS","SPEECH","PRODUCE","CALIF","BUY","PUTTING","UNITS","JULIN","FEDERAL","CLEARS","REPAIRS","UPGRADES","CALLS","TENANTS","AGREE","ISNT","CROWD","TURK","AGAIN","TAKING","ALLOW","MI","COMPLETE","TAKEN","UNDER","CURRENT","RULES","ALLOWING","RENTAL","PAYMENTS","SPUR","MILLIONS","OVERDUE","CAPITAL","LAND","SITES","CONTINUE","LOWCOST","PROJECTS","UPGRADE","REDUCE","NUMBER","TENANT","WELCOME","LONDON","BREED","GREW","TALKED","HAVING","DELAYS","TOILET","REPAIRED","REHAB","BEGIN","OCTOBER","ARENT","REPAIR","BILLED","FINANCE","FUNDS","VARIOUS","FUND","LINKED","PROVIDES","STEADY","STREAM","MAKING","MANAGERS","LEASE","MANAGE","MAINTAIN","STEWART","CO","MANAGING","HUNTERS","ALICE","GRIFFITH","REBUILT","VALENCIA","GARDENS","NORTH","HAYES","ALTHOUGH","OWNER","WORST","RANKED","AGENCIES","OUSTED","ENTIRE","OVERSEES","HENRY","ALVAREZ","NUMEROUS","STYLE","KEEP","THEYRE","HEAT","PEST","CONTROL","QUICK","DOING","RIDING","SPREAD","FAILS","BLACK","EYE","TRIAL","RISKS","PLACE","PHASES","SECOND","PHASE","JULY","DECEMBER","REACHED","UNIONS","LAYOFFS","PROPERTY","RENOVATE","ISISSKY","PIPPA","RIPPED","BUM","SHAME","PROVE","RUSSIA","WEIRDEST","NASTY","THROW","RULE","MUTUAL","WHY","SENIORS","REVERSE","MORTGAGE","GUIDES","INSANE","PRICES","MARILYN","MONROE","FLAWLESS","RANTCHIC","PERFECT","CARISSA","ROSARIOS","EPLOSIVE","LOSSIP","EASY","EERCISES","CURE","PAIN","DEBUTS","EAT","CHIPOTLE","HEALTHY","FIRES","LAWMAKER","CRITICS","BUILD","REQUIRED","BURGLARS","RAM","VAN","PALO","ALTO","STORE","GRANTED","ARTICLE","IPAD","HEARTS","CAUSE","BIGELOW","SPECIAL","HEROES","DR","DIANE","HAVLIR","HONOREES","EDGAR","RN","MAYA","VASQUEZ","ATT","BALLPARK","VERDANT","DURING","LUNCH","ANDRE","CAMPBELL","ECITING","SURGEON","DASH","WHOPPING","DONATION","PLEDGED","FOUNDER","MARK","WIFE","CHAN","RENOWNED","FACILITY","UCSFLED","LARGEST","REBRAND","FOUNDED","SAFETY","CITIZENS","YET","BEATING","HEART","LUNCHEON","SFGH","TRUSTEES","JUDY","PAM","BAER","COCHAIRS","EZRA","GARRETT","SCHUYLER","HUDAK","BELONGED","ARTISTS","MIL","GRANTS","PATIENT","TURN","OLDER","REMARKED","BROKAW","ER","DOCTOR","GENERALS","ACE","ACUTE","ELDERS","PODIUM","MANAGES","HIVAIDS","DIVISION","AIDS","WARD","CLINIC","DARK","COUNTRYS","CHEERING","JOINED","MAYORS","FRANK","WILLIE","BROWN","GAVIN","NEWSOM","ELLEN","MAGNIN","NEWMAN","NANCY","BECHTLE","SFFD","JOANNE","SFPD","GREG","SUHR","TINA","KEKER","CEO","SUE","CURRAN","CONNIE","SHANAHAN","JOHNSON","EDITOR","AUDREY","COOPER","KATHLEEN","LARRY","NIBBI","WILKES","BASHFORD","KICKOFF","DRIVE","RAISE","EQUIP","CENTERS","SAFE","OPENS","VISIT","GUNSHOT","VICTIMS","ANITA","CAR","ACCIDENT","SAVES","ANYBODY","STALWART","DONATED","QUIET","LED","RICH","DONORS","BARBRO","BERNARD","OSHER","ARTHUR","TONI","REMBE","ROCK","HELEN","SCHWAB","FISHER","LISA","DOUG","GOLDMAN","PRITZKER","HELLMAN","WELLS","FARGO","DOUBLE","DUTY","SELLING","GOODS","EFFORTS","GOODNESS","SAKE","TRAILER","ZACH","EPERT","RECEIVED","CHANGED","GOAL","YOUNG","WHETHER","LETS","LEADERS","SOCIETY","SUBMIT","TIP","SUGGEST","TIM","LINCECUM","RETURNED","ROOTS","CHRIS","RIGOROUS","THROWING","REFINE","PITCHING","SEEKING","ADMITS","KNOWS","DATEBOOK","SAM","ZAROFF","DRUM","MAJOR","SACRED","IRISH","BAND","PERFORMS","WAR","GYM","PREPS","MARCHING","COURTS","SUCCESS","BIZ","MILES","ELENA","BENNETT","HONDA","INSIGHT","CARLYPSO","USEDCAR","BUYERS","CARLOS","BEEPI","AIM","EASE","SALES","COMPANY","AD","CHOICES","CUSTOMER","ASKED","NEWLYWED","LESBIAN","TEAS","DEFYING","BAN","GAY","MARRIAGE","ATTORNEY","TELL","COURT","NUPTIALS","INVALID","LICENSE","AUSTIN","SEIZING","RULING","SQUABBLE","THRUST","SAMESE","COUPLES","RUSHING","SUPREME","ACTED","QUICKLY","APPEAL","KEN","PATON","BLOCK","SOMEWHAT","SUZANNE","BRYANT","SARAH","FEEL","DOOR","TEANS","OUTLAWED","RELATED","DAWN","TING","HIGHLAND","LOUNGE","BECOMING","LEGALLY","MARRIED","JAY","JANNER","TOASTED","TEENAGE","BAR","COUNTY","OBEYED","JUDICIAL","ORDER","OVARIAN","JUDGE","SEVERITY","GRANTING","MARRY","SENDING","TRAVIS","CLERK","WIND","WITHIN","BLOCKED","SIMILAR","VOID","DISPUTE","CYNTHIA","MEYER","OFFICE","ARGUE","ACTIVIST","JUDGES","DEFEND","GOV","ABBOTT","VOTERS","ONETIME","PROBATE","RULED","SENSING","POUNCED","LAWYER","PETITION","WAHLBERG","DEMOCRAT","SIDED","DIRECTED","STOP","RELYING","BASIS","ISSUING","MEDICAL","INDIANA","MADE","ECEPTION","DYING","PARTNERS","DEATH","APPEALS","INDIANAS","CIRCUIT","WAITING","DECISION","EQUALITY","DANA","WHOSE","OUTCOME","PERSONS","REP","CELIA","ISRAEL","MONTHS","ADDED","GROWS","HAIR","GROWING","BELIEVE","VALID","PHARISS","PARTNER","LEADING","LAWSUIT","THRILLED","IMPACT","BIGGER","EVIDENCE","HARM","SHORTLY","INQUIRED","LICENSES","PATONS","FILING","AG","WANTS","STEVEN","SUPERBUG","OUTBREAK","DEATHS","HALF","SEVEN","INFECTED","LETHAL","STRAIN","BACTERIA","RONALD","REAGAN","UCLA","EPOSED","DIAGNOSE","TREAT","BILEDUCT","EMBEDDED","CHERRY","QUALITY","OFFICER","SCOPES","CLEARED","REMOVED","DEVICES","SOUGHT","REASSURE","BROAD","DANGER","THREAT","BENJAMIN","SCHWARTZ","DEPUTY","DISEASE","CRE","REPORTED","THIN","FLEIBLE","TUBE","INSERTED","ENABLE","EAMINE","ORGAN","LIGHT","DOCTORS","TREATED","LAUNCHED","EMPLOYED","HIGHTECH","CASES","ZACHARY","RUBIN","OCT","NOTIFIED","LETTERS","PHONE","TESTING","OPTIONS","KEVIN","BOYLE","CLIENTS","INVOLVED","PANCREAS","STUDIED","NOTICED","DECLINED","ATTENDS","RECENTLY","RELAPSED","SUING","VISITED","BREAKS","BREACHES","EASILY","DEVERICK","FINDING","SOLUTION","WARNING","CLEANING","GERMS","LINGER","COMPLE","ETREMELY","FDA","TAINTED","TRYING","PULLING","DEVICE","DEPRIVE","HUNDREDS","BELIEVES","AGENCY","OLYMPUS","CORP","ARM","JAPANS","MANUAL","GIVING","USERS","POSSIBLE","FALSE","CLAIMS","IMPROPER","RESOLVE","MATTERS","WEST","ISLAMIC","SHOWING","COPTIC","EDUCATED","ERICK","THOMAS","DIALECTS","CAROLINA","UNCLEAR","SHROUDED","SUNDAY","CLEARLY","AMOUNT","GRETCHEN","CARLSON","ARABIC","CITED","MANS","CHOPPING","FIGHTING","LETTER","ROME","CLUE","LANGUAGE","ORANGE","BEHEADED","MILITANT","DRESSED","WISHES","HIDDEN","SHEIKH","USAMA","BIN","LADENS","SWEAR","ALLAH","BLOOD","IRAQI","DIPLOMAT","ORGANS","LIST","INCLUDES","MASS","BURNING","ALIVE","SHOCKING","NATIONS","BODIES","TURNED","GRAVES","BEARING","SURGICAL","MISSING","KIDNEYS","MOHAMED","ALHAKIM","LEVELED","SECURITY","COUNCIL","EECUTES","CAPTURED","ANBAR","PROVINCE","TOWN","ROUNDED","CLEAR","CERTAIN","EECUTED","MOSUL","REFUSING","BRIEFED","OVERALL","IRAQ","ACCUSED","CRIMES","GENOCIDE","ETHNIC","OUTGOING","UN","ENVOY","NIKOLAY","MLADENOV","KILLED","ALONE","ARMED","CONFLICT","METHOD","TACTICS","ISIL","EPAND","ACRONYM","IRAQS","PRESSING","VAST","SEIZED","SUNNI","THIRD","SYRIA","IMPOSED","STRICT","SHARIA","WORRYING","REVENGE","ATTACKS","BBC","NAVY","REAR","ADM","KIRBY","PENTAGON","AWARE","VERIFIED","FO","MARTHA","MCCALLUM","OREILLY","FACTOR","RAMADI","AIN","ALASAD","AIR","BASE","MILITARY","TRAINING","SOLDIERS","RAIDED","PROBE","ATTACK","TARGET","SPORADIC","MORTAR","FIRE","JIHADIST","ARMY","MOVING","FORCES","POSSIBLY","SETTING","STAGE","CLASH","SOLE","BULWARK","BAGHDAD","TROOPS","BASES","CONDUCT","FOURTH","NORTHERN","IRBIL","REQUIRE","PRESENT","RETIRED","COL","LYNCH","DEFENSE","DOZENS","KURDISH","ATROCITY","WHITE","SUMMIT","ETREMISM","PLANS","SOUTHERN","EUROPE","MIGRANTS","GAINING","LIBYA","FRANCE","TRACKING","TERROR","SLEEPER","CELLS","CONDEMNS","EGYPTIAN","ITALY","BOOSTS","AMID","MEDIA","HANDLE","VIOLENCE","WEDDING","ENDS","BRAWL","BRIDE","MARRIES","GROOM","TIES","COSSACK","DESCRIBE","RETREAT","CARACAS","OPPOSED","ARRESTED","SEEK","FUEL","ABNORMAL","SEUAL","TRENDS","SALUTES","APPEARS","MAKES","PERSONAL","MESSAGES","SPOUSES","SENATOR","MUM","PAYOUT","STAFFER","VA","SCANDAL","II","VETERAN","FINALLY","RECEIVES","DIPLOMA","RUMORS","LEAKS","APPLES","ELECTRIC","VEHICLE","POURING","APPLE","KNOWN","PRESUMED","SYSTEMS","INSIDER","SOURCES","PUSH","SAYING","IPHONE","MAKER","EYING","DEADLINE","RUMORED","TITAN","EV","OVERCOME","HURDLES","RECENT","LEGAL","DEEPER","FORAY","MONTH","ROAMING","DEBATE","MAPPING","SEEM","TESLA","ATTEST","BATTERY","LLC","ALLEGES","TARGETED","POACH","RESULTED","NDAS","FACES","BOSTONS","FOIL","DELAY","SCHEDULE","SPENDS","TEN","SCRATCH","SEEMS","COMPANYS","TASK","POINTS","GRAB","DESPITE","FOCUSED","ATTEMPT","SCRAPPED","INSTANT","PROGRESS","TRUE","PRESSURE","COOK","PRODUCTS","RESHAPE","IPOD","HUT","CAM","SOY","BULL","NUN","COY","GEL","PEG","CAFE","CEASE","HUG","PEAR","PEER","ADULTERY","APP","BOG","BEE","BULK","BEAN","BUTT","BRACKET","CUM","DETER","DULL","DOLL","DONKEY","DOLLY","EARIE","FORT","FAULTY","FROG","FROGGY","FAGGOT","FAG","GASOLINE","GALL","BLADDER","UW","LEARNING","ANSWERS","COPY","TEMPLATE","HTML","ANSWER","HELPFUL","REVIEW","CONSIDER","ENOUGH","ASK","SKILL","DBC","RESOURCE","WRITING","INTERNET","ARCHIVE","ANALYZE","STACK","OVERFLOW","ANSWERED","MIND","HUGE","STUDENTS","YOULL","PUBLISH","LINK","INDE","SPECIFIC","KIND","FEEDBACK","REPO","SOW","RUM","VODKA","WEED","VICE","BOT","ROB","COP","BOW","POD","LAD","RAY","SUB","FURL","NIL","HAG","FOX","VET","PEA","ACCEPT","ACCUSE","ACTOR","ADMINISTRATION","ADMIT","ADULT","ADVERTISE","ADVISE","AFFECT","AFRAID","AGGRESSION","AGRICULTURE","AIRPLANE","AIRPORT","ALBUM","ALCOHOL","AMBASSADOR","AMEND","AMMUNITION","ANARCHY","ANCESTOR","ANCIENT","ANGER","ANNIVERSARY","ANNOUNCE","APOLOGIZE","APPEAR","APPOINT","APPROVE","ARCHEOLOGY","ARREST","ARRIVE","ARTILLERY","ASSIST","ASTRONAUT","ASTRONOMY","ASYLUM","ATMOSPHERE","ATTACH","ATTEND","ATTENTION","AUTOMOBILE","AUTUMN","AVAILABLE","AWAKE","AWARD","BALANCE","BALLOON","BALLOT","BARRIER","BEAUTY","BEHAVIOR","BELONG","BELOW","BETRAY","BIOLOGY","BLEED","BLIND","BORDER","BORROW","BOTTLE","BOTTOM","BRAVE","BREAD","BREATHE","BRIEF","BRIGHT","BRING","BROADCAST","BUDGET","BULLET","CANCEL","CANDIDATE","CAPTURE","CAREFUL","CARRY","CATCH","CEASEFIRE","CELEBRATE","CEREMONY","CHAIRMAN","CHAMPION","CHASE","CHEAT","CHEER","CHEMICALS","CHEMISTRY","CHOOSE","CIRCLE","CITIZEN","CIVILIAN","CIVIL","CLASS","CLERGY","CLIMB","CLOCK","CLOTH","CLOTHES","CLOUD","COALITION","COAST","COLLAPSE","COLLEGE","COLONY","COLOR","COMBINE","COMMAND","COMMITTEE","COMMUNICATE","COMMUNITY","COMPARE","COMPLEX","COMPROMISE","COMPUTER","CONDEMN","CONDITION","CONFERENCE","CONFIRM","CONGRATULATE","CONGRESS","CONNECT","CONSERVATIVE","CONSTITUTION","CONTAIN","CONTAINER","CONTINENT","CONVENTION","COOPERATE","CORRECT","CORRUPTION","COTTON","CRASH","CREATE","CREATURE","CREDIT","CRIME","CRIMINAL","CRISIS","CRITICIZE","CROPS","CROSS","CRUSH","CURFEW","CUSTOM","CUSTOMS","DAMAGE","DANCE","DAUGHTER","DECIDE","DECLARE","DECREASE","DEFEAT","DEFICIT","DEGREE","DELEGATE","DEMOCRACY","DEMONSTRATE","DENOUNCE","DEPEND","DEPLORE","DEPLOY","DEPRESSION","DESIRE","DESTROY","DETAIN","DEVELOP","DICTATOR","DIFFERENT","DIFFICULT","DINNER","DIRECT","DIRECTION","DISAPPEAR","DISARM","DISASTER","DISCOVER","DISCRIMINATION","DISMISS","DISSIDENT","DISTANCE","DIVIDE","DOCUMENT","DOLLAR","DREAM","DROWN","EARTH","EARTHQUAKE","ECOLOGY","ECONOMY","EDUCATION","EFFECT","ELECT","ELECTRICITY","EMBASSY","EMBRYO","EMERGENCY","EMOTION","EMPLOY","EMPTY","ENEMY","ENERGY","ENFORCE","ENGINE","ENGINEER","ENJOY","ENTER","ENVIRONMENT","EQUAL","EQUIPMENT","ESCAPE","ESPECIALLY","ESTABLISH","ESTIMATE","EVAPORATE","EXACT","EXAMINE","EXAMPLE","EXCELLENT","EXCEPT","EXCHANGE","EXCUSE","EXECUTE","EXERCISE","EXILE","EXIST","EXPAND","EXPECT","EXPEL","EXPERIENCE","EXPERIMENT","EXPERT","EXPLAIN","EXPLODE","EXPLORE","EXPORT","EXPRESS","EXTEND","EXTRA","EXTRAORDINARY","EXTREME","EXTREMIST","FACTORY","FAVORITE","FENCE","FERTILE","FIERCE","FINANCIAL","FINISH","FIREWORKS","FLOAT","FLOOR","FLOWER","FLUID","FOREIGN","FOREST","FORGET","FORGIVE","FORWARD","FREEDOM","FREEZE","FRESH","FRIGHTEN","FRONT","FRUIT","FUNERAL","GATHER","GENERATION","GENTLE","GLASS","GOVERN","GOVERNMENT","GRAIN","GRASS","GREEN","GRIND","GROUND","GUARANTEE","GUERRILLA","GUIDE","GUILTY","HAPPEN","HAPPY","HARVEST","HEADQUARTERS","HELICOPTER","HIJACK","HOLIDAY","HONEST","HONOR","HORRIBLE","HORSE","HOSTAGE","HOSTILE","HUMOR","HUNGER","HURRY","IDENTIFY","IGNORE","ILLEGAL","IMAGINE","IMMEDIATE","IMMIGRANT","IMPORT","IMPORTANT","IMPROVE","INCIDENT","INCITE","INDEPENDENT","INDIVIDUAL","INFECT","INFLATION","INFLUENCE","INFORM","INFORMATION","INJECT","INJURE","INNOCENT","INSECT","INSPECT","INSTRUMENT","INSULT","INTELLIGENCE","INTELLIGENT","INTENSE","INTERFERE","INTERNATIONAL","INTERVENE","INVADE","INVENT","INVEST","INVESTIGATE","INVITE","INVOLVE","ISLAND","JEWEL","JOINT","KIDNAP","KNIFE","KNOWLEDGE","LABOR","LABORATORY","LARGE","LAUGH","LAUNCH","LEGISLATURE","LEVEL","LIBERAL","LIGHTNING","LIMIT","LIQUID","LITERATURE","LOYAL","MACHINE","MAGAZINE","MAJORITY","MANUFACTURE","MATERIAL","MATHEMATICS","MEASURE","MEMORY","MESSAGE","METAL","MICROSCOPE","MIDDLE","MILITIA","MINERAL","MINISTER","MINOR","MINORITY","MINUTE","MISSILE","MISTAKE","MODEL","MODERATE","MODERN","MORAL","MOTION","MOURN","MURDER","MYSTERY","NARROW","NATION","NATIVE","NATURAL","NECESSARY","NEGOTIATE","NEIGHBOR","NEITHER","NEUTRAL","NOISE","NOMINATE","NORMAL","NUCLEAR","OBJECT","OBSERVE","OCCUPY","OFFENSIVE","OFFICIAL","OPERATE","OPINION","OPPOSE","OPPOSITE","OPPRESS","ORBIT","ORGANIZE","OVERTHROW","PAINT","PAPER","PARACHUTE","PARADE","PARDON","PARLIAMENT","PASSENGER","PASSPORT","PEACE","PERCENT","PERFORM","PERIOD","PERMANENT","PERMIT","PERSUADE","PHYSICAL","PHYSICS","PICTURE","PIECE","PILOT","PLANET","PLANT","PLASTIC","POISON","POLLUTE","POPULATION","POSITION","POSSESS","POSTPONE","PRAISE","PREDICT","PREGNANT","PRESIDENT","PREVENT","PRICE","PRISON","PRIZE","PROFESSION","PROFESSOR","PROFIT","PROMISE","PROPAGANDA","PROPOSE","PROTECT","PROTEST","PROVIDE","PUBLICATION","PUNISH","PURCHASE","PURPOSE","RADIATION","RADIO","RAILROAD","REACT","READY","REALISTIC","REASON","REASONABLE","REBEL","RECESSION","RECOGNIZE","REFORM","REFUGEE","REFUSE","REGISTER","REJECT","RELATIONS","RELIGION","REMAIN","REPEAT","REPRESENT","REPRESS","REQUEST","RESCUE","RESIGN","RESIST","RESOLUTION","RESPECT","RESPONSIBLE","RESTAURANT","RESTRAIN","RESTRICT","RESULT","RETIRE","REVOLT","ROCKET","ROUGH","RUBBER","RURAL","SABOTAGE","SACRIFICE","SAILOR","SATELLITE","SATISFY","SCIENCE","SEARCH","SEASON","SECRET","SEIZE","SENATE","SENTENCE","SEPARATE","SERIOUS","SETTLE","SEVERE","SHAKE","SHAPE","SHARP","SHEEP","SHELL","SHINE","SHOCK","SHOOT","SHORT","SHOUT","SHRINK","SICKNESS","SIGNAL","SILENCE","SILVER","SISTER","SITUATION","SKELETON","SLAVE","SLEEP","SLIDE","SMASH","SMELL","SMOKE","SMOOTH","SOLDIER","SOLID","SOLVE","SOUND","SOUTH","SPEND","SPILL","SPIRIT","SPLIT","SPORT","SPRING","SQUARE","STAND","STARVE","STATION","STATUE","STEAL","STEAM","STEEL","STICK","STONE","STOVE","STRAIGHT","STRETCH","STRUCTURE","STRUGGLE","STUDY","STUPID","SUBMARINE","SUBSTANCE","SUBSTITUTE","SUBVERSION","SUDDEN","SUFFER","SUGAR","SUICIDE","SUMMER","SUPERVISE","SUPPLY","SUPPOSE","SUPPRESS","SURFACE","SURPLUS","SURPRISE","SURRENDER","SURROUND","SUSPEND","SWALLOW","SYMPATHY","TASTE","TEACH","TECHNICAL","TECHNOLOGY","TELEPHONE","TELESCOPE","TELEVISION","TEMPERATURE","TEMPORARY","TENSE","TERRIBLE","TERRITORY","TERRORIST","THANK","THEATER","THEORY","THICK","THREATEN","TOMORROW","TONIGHT","TORTURE","TOTAL","TOUCH","TOWARD","TRADE","TRADITION","TRAIN","TRANSPORT","TRANSPORTATION","TREASON","TREASURE","TREATMENT","TREATY","TRIBE","TRICK","TROUBLE","TRUCE","TRUCK","UNDERSTAND","UNITE","UNIVERSE","UNIVERSITY","UNLESS","URGENT","VACATION","VACCINE","VALUE","VEGETABLE","VICTIM","VILLAGE","VIOLATE","VOICE","VOLCANO","VOLUNTEER","WAGES","WASTE","WEALTH","WEAPON","WHEAT","WHEEL","WILLING","WITHDRAW","WITNESS","WOMAN","WONDERFUL","WORSE","WORTH","WOUND","WRECK","WRECKAGE","WRITE","YELLOW","YESTERDAY","MOP","BUTCH","ART","MAP","MEAT","DATA","UNDERSTANDING","BIRD","SOFTWARE","ABILITY","ECONOMICS","LIBRARY","INVESTMENT","ACTIVITY","OVEN","DEFINITION","DEVELOPMENT","MANAGEMENT","EXAM","ORGANIZATION","BOYFRIEND","INSTANCE","TRUTH","MARKETING","DEPARTMENT","DIFFERENCE","AUDIENCE","FISHING","GROWTH","USER","COMBINATION","FAILURE","MEANING","PHILOSOPHY","TEACHER","COMMUNICATION","DISK","ROAD","ROLE","SOUP","ADVERTISING","LOCATION","ADDITION","APARTMENT","MATH","MOMENT","PAINTING","WOOD","COMPETITION","DISTRIBUTION","ENTERTAINMENT","CATEGORY","CIGARETTE","CONTEXT","INTRODUCTION","OPPORTUNITY","PERFORMANCE","FLIGHT","LENGTH","NEWSPAPER","RELATIONSHIP","CELL","DEALER","SCENE","APPEARANCE","ASSOCIATION","CONCEPT","DISCUSSION","INSURANCE","MOOD","ADVICE","EXPRESSION","IMPORTANCE","PAYMENT","RESPONSIBILITY","STATEMENT","APPLICATION","DEPTH","FOUNDATION","GRANDMOTHER","PERSPECTIVE","RECIPE","STUDIO","TOPIC","COLLECTION","IMAGINATION","PASSION","PERCENTAGE","CONNECTION","CRITICISM","DEBT","DESCRIPTION","PATIENCE","SECRETARY","ASPECT","ATTITUDE","PERSONALITY","PSYCHOLOGY","RECOMMENDATION","SELECTION","STORAGE","COMPLAINT","CONTRACT","EMPHASIS","HIGHWAY","MEMBERSHIP","POSSESSION","PREPARATION","STEAK","UNION","AGREEMENT","CURRENCY","EMPLOYMENT","ENGINEERING","ENTRY","INTERACTION","MIXTURE","PREFERENCE","REPUBLIC","VIRUS","CLASSROOM","DELIVERY","DIFFICULTY","DRAMA","ELECTION","GUIDANCE","PRIORITY","PROTECTION","SUGGESTION","TENSION","VARIATION","ANXIETY","AWARENESS","BATH","COMPARISON","CONFUSION","CONSTRUCTION","ELEVATOR","EMPLOYEE","EMPLOYER","HEIGHT","LEADERSHIP","MALL","OPERATION","RECORDING","SAMPLE","CHARITY","COUSIN","EFFICIENCY","EXCITEMENT","EXTENT","GUITAR","HOMEWORK","LEADER","PERMISSION","PRESENTATION","PROMOTION","REFLECTION","REFRIGERATOR","REVENUE","SESSION","SINGER","TENNIS","BASKET","BONUS","CHILDHOOD","CHURCH","DRAWING","INITIATIVE","JUDGMENT","LAB","MEASUREMENT","MODE","MUD","POETRY","POSSIBILITY","PROCEDURE","RATIO","RELATION","SATISFACTION","SECTOR","SIGNATURE","SIGNIFICANCE","SONG","TOOTH","APPOINTMENT","ARRIVAL","ASSUMPTION","BASEBALL","CHAPTER","CONVERSATION","DATABASE","ENTHUSIASM","ERROR","EXPLANATION","FARMER","GATE","HALL","HISTORIAN","INJURY","INSTRUCTION","MAINTENANCE","MANUFACTURER","MEAL","PERCEPTION","PIE","POEM","RECEPTION","REPLACEMENT","REVOLUTION","TEA","ASSISTANCE","BREATH","BUYER","CHEST","CHOCOLATE","CONCLUSION","CONTRIBUTION","COOKIE","COURAGE","DAD","DESK","DRAWER","ESTABLISHMENT","EXAMINATION","GROCERY","HONEY","IMPRESSION","IMPROVEMENT","INDEPENDENCE","INSPECTION","INSPECTOR","LADDER","MENU","PIANO","POTATO","QUANTITY","REACTION","REQUIREMENT","SALAD","SUPERMARKET","TONGUE","WEAKNESS","AFFAIR","AMBITION","ANALYST","ASSIGNMENT","ASSISTANT","BATHROOM","BEDROOM","BEER","BIRTHDAY","CELEBRATION","CHAMPIONSHIP","CHEEK","CLIENT","CONSEQUENCE","DEPARTURE","DIAMOND","DIRT","EAR","FORTUNE","FRIENDSHIP","GENE","GIRLFRIEND","HAT","INDICATION","INTENTION","LADY","MIDNIGHT","NEGOTIATION","OBLIGATION","PIZZA","PLATFORM","POET","POLLUTION","RECOGNITION","REPUTATION","SHIRT","SIR","SPEAKER","STRANGER","SURGERY","TALE","TRAINER","UNCLE","YOUTH","FILM","FORM","FISH","HAND","CARD","LINE","RISK","FAT","KEY","PRACTICE","BOSS","FUN","TERM","TEST","BOARD","OIL","GARDEN","RANGE","BOAT","SECTION","MOUSE","CASH","TAX","SIDE","STOCK","BEGINNING","CHICKEN","FEATURE","SALT","ACT","BIRTH","DOG","SCALE","RENT","CRAFT","STANDARD","BUS","ADVANTAGE","BENEFIT","BOX","FRAME","STEP","ITEM","SCREEN","ACCOUNT","BALL","DISCIPLINE","MEDIUM","CHOICE","TOOL","TABLE","EGG","NETWORK","DATE","STAR","CHALLENGE","SELF","SHOT","BRUSH","EXIT","LACK","WING","BUTTON","CLICK","GAS","NOTICE","WALL","SAVINGS","TEXT","DISCOUNT","LESSON","REFERENCE","TITLE","BOWL","CHARACTER","CLUB","FAN","LOCK","MAXIMUM","NOVEL","OPTION","PACK","QUARTER","SKIN","SORT","WEIGHT","BACKGROUND","DISH","MASTER","MUSCLE","RED","STRENGTH","TRIP","CHART","GEAR","IDEAL","KITCHEN","LOG","PRINCIPLE","RELATIVE","SALE","TREE","WAVE","BELT","BENCH","COMMISSION","DROP","MINIMUM","PATH","STATUS","STUFF","TICKET","ANGLE","BLUE","BREAKFAST","CONFIDENCE","DOT","ESSAY","FEE","JUICE","LUCK","MILK","MOUTH","PIPE","SEAT","AFTERNOON","BAT","BLANK","CHAIN","CONSIDERATION","CREAM","GOLD","INTERVIEW","KID","MISSION","PLEASURE","SCREW","SEX","SHOP","SHOWER","SUIT","TONE","AGENT","BONE","CALENDAR","CAP","COAT","CONTEST","CORNER","EAST","FINGER","GARAGE","HOOK","IMPLEMENT","LECTURE","LIE","MANNER","MEETING","PARKING","PROFILE","RICE","ROUTINE","SWIMMING","AIRLINE","BAG","BED","BOTHER","CAKE","CURVE","DIMENSION","EVENING","EXTENSION","FARM","GAP","GRADE","HORROR","HOST","LOAN","NAIL","OCCASION","PACKAGE","PAUSE","PHRASE","RACE","RELIEF","SAND","STOMACH","STRING","TOWEL","WINE","ASIDE","ASSOCIATE","BET","BRANCH","BUDDY","BUNCH","CHIP","COACH","DRAFT","GOLF","HABIT","IRON","LANDSCAPE","LEAGUE","MAIL","MESS","PATTERN","PIN","POOL","POUND","SALARY","SHOE","TACKLE","TANK","BAKE","BIKE","BOY","BRICK","CHAIR","CLOSET","COLLAR","DEVIL","DIET","FEAR","GLOVE","JACKET","NURSE","PACE","PANIC","PEAK","PLANE","REWARD","ROW","SANDWICH","SPITE","SPRAY","TILL","TRANSITION","WEEKEND","YARD","ALARM","BEND","BICYCLE","BITE","CABLE","CANDLE","CONCERT","COUNTER","GRANDFATHER","KNEE","LEATHER","MIRROR","NECK","PENSION","PLATE","PURPLE","RUIN","SHIP","SKIRT","SLICE","SNOW","SPECIALIST","STROKE","SWITCH","TRASH","TUNE","ZONE","BID","BITTER","BOOT","BUG","CAMP","CANDY","CARPET","CAT","CHANNEL","COW","ENTRANCE","GUY","HELL","HIGHLIGHT","JOKE","JURY","LEG","LIP","MATE","MOTOR","NERVE","PASSAGE","PEN","PRIDE","PRIEST","RESORT","RING","ROPE","SAIL","SCHEME","TOE","PARTICULAR","PAY","MAIN","POTENTIAL","PROFESSIONAL","ALTERNATIVE","FOLLOWING","COMMERCIAL","PRIMARY","POSITIVE","CREATIVE","COST","GLAD","DUE","EFFECTIVE","REGULAR","BEAUTIFUL","ACTIVE","NEGATIVE","STAY","VISUAL","JUNIOR","UNIQUE","ANYTHING","LIFT","MIX","WESTERN","FLY","COMFORTABLE","GAIN","SAVE","FAIL","HELLO","VALUABLE","RIDE","WAIT","DISPLAY","FLOW","HIT","OBJECTIVE","CHEMICAL","CRY","DUMP","FORMAL","JUMP","KICK","PITCH","REMOTE","BEAT","BURN","DEPOSIT","SOMEWHERE","ADVANCE","CONSIST","DRAW","FIX","HIRE","INTERNAL","SENSITIVE","TAP","CONSTANT","DRAG","GUESS","RAW","SOFT","WEAR","WEIRD","DEAD","DOUBT","FEED","FOREVER","IMPRESS","NOBODY","SING","STRIP","WHEREAS","WISH","DIG","EQUIVALENT","HANG","HUNT","INITIAL","MENTION","SPIRITUAL","SURVEY","TIE","HATE","PRIOR","SICK","EXTERNAL","HURT","LAY","MOBILE","ORDINARY","RESPOND","ROYAL","SENIOR","UPPER","WASH","CONVERT","DEPENDENT","FOLD","FUNNY","MISS","QUOTE","ROLL","SINK","SLIP","SPARE","SWING","TWIST","UPSTAIRS","ABROAD","CALM","CONCENTRATE","GRAND","MALE","MINE","PROMPT","REVEAL","RUSH","SHIFT","SUCK","BRILLIANT","DARE","DEAR","DRUNK","INEVITABLE","KISS","POP","PUNCH","QUIT","REPLY","REPRESENTATIVE","RUB","SILLY","SMILE","SPELL","WRAP","ADD","DETERMINE","GROW","TEND","APPROACH","ACHIEVE","REFER","PREFER","AFFORD","APPLY","RECOMMEND","RELY","VARY","GENERATE","OBTAIN","COMPLAIN","INDICATE","APPRECIATE","DIFFER","ENCOURAGE","RELAX","EMPHASIZE","REFLECT","ANTICIPATE","ASSUME","ENHANCE","INSTALL","PARTICIPATE","INTEND","INTRODUCE","RELATE","ASSURE","ATTRACT","DISTRIBUTE","OWE","ACQUIRE","ADJUST","ARISE","ENCOURAGING","INCORPORATE","JUSTIFY","OUGHT","RELIEVE","RETAIN","SHUT","CALCULATE","CONSULT","RID","BEHAVE","CONVINCE","DISAGREE","IMPLY","INSIST","PURSUE","REMAINING","SPECIFY","WARN","ADMIRE","ADOPT","COMMIT","DESERVE","HESITATE","ILLUSTRATE","MANUFACTURING","POUR","REMIND","SHALL","TRANSLATE","MEAN","UPSET","APPROPRIATE","SELECT","DIE","CONTRIBUTE","SIT","EXPOSE","PRAY","PRETEND","ACCORDING","DRY","LIMITED","INTERESTED","CONCERNED","WARM","EXPERIENCED","FIXED","COMPLICATED","SECURE","ADVANCED","ORGANIZED","FIRM","FREQUENT","MIXED","BUSY","DETAILED","WISE","SURPRISED","PROVIDED","DIRTY","LOOSE","PLEASED","WORRIED","DISAPPOINTED","SMART","BASIC","HISTORICAL","USEFUL","SCARED","ADDITIONAL","EMOTIONAL","POLITICAL","TRADITIONAL","ACTUAL","SIGNIFICANT","SUCCESSFUL","ELECTRICAL","EXPENSIVE","INTERESTING","POOR","CUTE","IMPOSSIBLE","RARE","TYPICAL","COMPETITIVE","CRITICAL","ELECTRONIC","EDUCATIONAL","ENVIRONMENTAL","GLOBAL","ACCURATE","CAPABLE","DANGEROUS","DRAMATIC","EFFICIENT","POWERFUL","HUNGRY","PRACTICAL","PSYCHOLOGICAL","SUITABLE","SUFFICIENT","UNUSUAL","CONSISTENT","CULTURAL","EXISTING","PURE","LATTER","OBVIOUSLY","UNHAPPY","ACCEPTABLE","AGGRESSIVE","BORING","DISTINCT","EASTERN","LOGICAL","SUCCESSFULLY","ADMINISTRATIVE","AUTOMATIC","UNFAIR","ANGRY","DESPERATE","EXCITING","FRIENDLY","SORRY","UGLY","ANXIOUS","COMPREHENSIVE","CURIOUS","IMPRESSIVE","INFORMAL","PLEASANT","SEXUAL","UNABLE","WEAK","WOODEN","ASLEEP","CONFIDENT","CONSCIOUS","DECENT","EMBARRASSED","MAD","NERVOUS","REMARKABLE","SUBSTANTIAL","SUSPICIOUS","TALL","NEXT","LOWER","PROPER","FAST","WIDE","FLAT","SLOW","CHEAP","FINE","NEARBY","PROUD","WILD","APART","LOUD","SUPER","TIGHT","GROSS","OK","OTHERWISE","PLUS","HI","SOMETHING","SOMETIMES","YOURSELF","INCLUDING","GENERALLY","ACTUALLY","QUITE","EVERYTHING","DIRECTLY","ITSELF","THEREFORE","THEMSELVES","THUS","THROUGHOUT","EVENTUALLY","EXACTLY","ANYONE","CERTAINLY","NORMALLY","CURRENTLY","EXTREMELY","CONSTANTLY","SPECIFICALLY","AHEAD","IMMEDIATELY","RELATIVELY","SLOWLY","TOWARDS","WHATEVER","FAIRLY","PRIMARILY","UPON","COMPLETELY","ULTIMATELY","WHENEVER","WIDELY","SERIOUSLY","FREQUENTLY","MYSELF","NATURALLY","OCCASIONALLY","CAREFULLY","ESSENTIALLY","SLIGHTLY","EQUALLY","GREATLY","NECESSARILY","PERSONALLY","REGULARLY","SIMILARLY","BASICALLY","CLOSELY","EFFECTIVELY","EVERYBODY","INITIALLY","LITERALLY","MAINLY","MERELY","GENTLY","HOPEFULLY","NOR","ORIGINALLY","ROUGHLY","SIGNIFICANTLY","OURSELVES","TOTALLY","TWICE","ELSEWHERE","EVERYWHERE","PERFECTLY","PHYSICALLY","SOMEHOW","ABSOLUTELY","SUDDENLY","TRULY","VIRTUALLY","ALTOGETHER","ANYWAY","AUTOMATICALLY","DEFINITELY","DELIBERATELY","HARDLY","READILY","SOMEBODY","TERRIBLY","UNFORTUNATELY","YOURS","CONCERNING","FORTH","HERSELF","BRIEFLY","MOREOVER","STRONGLY","YEAH","HONESTLY","PREVIOUSLY","WHOEVER","ESSENTIAL","ABSOLUTE","PHOTOGRAPH","MERE","EXPENSE","INTERACT","LOGIC","COMMERCE","VIRTUAL","ASSIGN","CONSTRUCT","DEFINITE","EDIT","CONFUSE","DISC","INSURE","LITERAL","SCARE","ULTIMATE","APOLOGY","CRITIC","ELEVATE","ENTERTAIN","EXCITE","OKAY","PROCEED","TIRE","AMAZE","CLOSES","COMPLAINTS","COMPUTE","DELIBERATE","EMBARRASS","EVENTUAL","INITIATE","INTENT","LOCATE","LONE","PROBABLE","REMARK","CLOTHE","COMPLICATE","CONFER","CONVERSE","DEPRESS","DISAPPOINT","IGNORANT","INFLATE","INSTRUCT","OBLIGE","POLITIC","REFRIGERATE","RESIDE","SITUATE","WOKE","A","GASP","KNOWING","NOSTRILS","NIGHTMARE","LINGERING","DREAMED","WOLVES","PINE","HELLS","SCENT","PREY","FILLED","GREY","GLOOMY","SHIVERING","RAN","SCALP","STUBBLE","BRISTLED","PALM","I","SHAVE","IZEMBARO","SEES","MERCY","RAPED","MURDERED","MERCEDENE","CALLED","ECEPT","DREAMS","HOWLING","SHED","DREAMT","OVERHEAD","WATCHED","FASTENED","SHUTTERS","MERCYS","SHIFTING","FOG","GROWN","CHILLY","SLEPT","RAPE","GOOSEPRICKLES","LEGS","COVERLET","TWISTED","SNAKE","UNWOUND","THREW","BLANKET","PLANK","PADDED","NAKED","BRAAVOS","CANAL","COBBLED","BENEATH","ARCHES","MOSSY","VANISHED","GREYNESS","BUILDINGS","VAGUE","LIGHTS","REMAINED","SPLASH","SERPENT","EMERGED","BRIDGES","CENTRAL","ARCH","SNAKES","UPLIFTED","TAIL","PUSHING","ONWARD","POLE","WATERMAN","GAZED","SEARCHING","ROAR","WORDS","ECHOED","HOLLOWLY","SWIRLING","WATERS","UNSEEN","DAWDLE","SOUL","SELDOM","TIMELY","WESTEROS","ECUSES","BASIN","WENT","PREFERRING","BRACKISH","SLIMY","RAINWATER","STEWING","CISTERN","DIPPING","HEEL","STANDING","SCRUB","CALLOUSED","RAZOR","WIGS","CLAIMED","SHAVED","DONNED","SMALLCLOTHES","SLIPPED","SHAPELESS","WOOL","STOCKINGS","MENDING","SNAPPER","SEWING","WRETCHED","WARDROBE","MISTRESS","PITY","FILTCH","NICER","HATED","MUMMERS","WORE","COSTUMES","WENDEYNE","IZEMBAROS","COCK","COSTUME","FOOLISH","DAENA","WARNED","GIRLS","PIT","PURSE","PLUMP","BOOTS","LUMPS","MOTTLED","SALTSTAINS","CRACKED","HEMPEN","DYED","KNOTTED","WAIST","HUNG","HIP","COIN","POUCH","CLOAK","SHOULDERS","LINED","SILK","HOOD","POCKETS","HID","COINS","BLADE","TREASURES","EATING","SMILING","JOKING","SANG","DESCENDED","STAIR","HANDRAIL","SPLINTERY","STEPS","STEEP","FLIGHTS","GOTTEN","BALD","SKINNY","GRACE","AGREED","GRACEFUL","CROWS","FLIES","WINGS","LONGER","CROOKED","ALLEYS","CROOKEDER","CANALS","CROOKEDEST","PREFERRED","RAGMANS","OUTER","HARBOR","LAGOON","ARSENAL","PINEY","SLOPES","SELLAGOROS","SHIELD","SAILORS","HAIL","DOCKS","CALLING","DECKS","TARRY","IBBENESE","WHALERS","BIGBELLIED","WESTEROSI","COGS","EYES","CARVED","SPAN","COPPER","DOMES","MASTS","TOWERS","MIGHTY","GOLDEN","THUNDERBOLT","TURNING","SPIRE","ATOP","SEALORDS","PALACE","BRONZE","SHINING","CHOSE","SHORTER","ROUTE","MISTS","COBBLESTONES","WET","SLICK","YOWL","PLAINTIVELY","CATS","ROAMED","KILLERS","THICKER","LARGER","WATERMEN","BOATS","DIM","LANTERN","ENVIED","SCARCELY","STEPPING","HUMBLER","HOUSES","SHOPS","WAREHOUSES","CROWDED","LEANING","DRUNKEN","LOVERS","BALCONY","TUNNELS","FOOTFALL","HAZARDOUS","PRIVIES","JUTTING","MERCHANTS","MELANCHOLY","ASTRIDE","STONY","BROTHERS","MERCHANT","SHAT","UNDERNEATH","GOLDANDPURPLE","BARGE","SEALORD","ALIKE","HOWL","LAUGHTER","DROWNED","WAREHOUSE","BURNT","SINKING","FLOODED","CAVERNOUS","PLAYHALL","DOME","FASHIONABLE","ENVIRONS","HARBORS","WHORES","HANDSOME","CROWDS","QUAY","MOORED","TWENTY","FLOURISH","GATES","DEVELOPED","TILT","SETTLED","PRONE","MILDEW","NESTED","CELLAR","TROUBLED","PLANKS","DISSOLVE","NOTHINGNESS","SCAMPERED","HEELS","RINGING","OPENED","TATTERED","CURTAIN","PLAYHOUSE","BUTTERY","SPILLED","DOORS","BRUSCO","PAINTED","BLOODY","STOPPED","THUMBS","DABBED","O","WICKED","SAVORING","OUTRAGE","RIVALS","BEGUN","KINGS","MARRO","ROLLING","SOONER","OFFERED","SPLENDID","DEMONIC","BOAR","PHARIO","FOREL","BLOODIEST","QUILL","ASSEMBLED","HOPING","UNNOTICED","TELLING","PACKED","RAFTERS","HOMAGE","TROUPE","MONARCH","WHISPERED","BOBONO","DWARF","THEIRS","GAVE","LEER","OHO","SMACKED","LIPS","IGNORED","COMMOTION","MAGNIFICENT","BESIDES","KEYHOLDERS","COURTESANS","PROMISED","BORROWED","PRINCE","GARIN","EVE","WROTH","DRAGONLORDS","FORELS","FINISHED","SPEAKING","FRANTIC","FRETFUL","RANG","IMPLORED","STORK","STEPPED","HEM","GOWN","SEW","PASTE","HORN","BOOMED","CROWN","CANNOT","SQUEAKED","SOMETHINGS","AMISS","LACES","FLOPPING","FETCHED","STICKY","STRANGERS","ONTO","FOREHEAD","PRIVY","WIG","NEEDLE","THREAD","LACE","CLOTHOFGOLD","BOBONOS","FLOP","HIDEOUS","KNELT","HIGHEST","DYER","PINK","BULBOUS","PLUM","PUSHED","BREECHES","TIED","EUNUCH","UNLACING","FIDDLE","CROTCH","MEANT","INSISTED","KNEES","FORTNIGHT","LURCHED","CUPS","ANGUISH","ARCHON","GRUMPKINS","LUSTY","BLUNDER","PLAYING","INNOCENTLY","TEASING","PHARIOS","KINGDOMS","RECALL","LOWERED","SINISTER","CROAK","SEVENFACED","CHEATED","NOBLE","SIRE","PUREST","SIBLINGS","FORMED","DARKER","BONES","CLAY","GRABBED","FUMBLING","NIPPLE","TITTIES","THUMB","FOREFINGER","HANDS","OWWWWW","SQUEALED","RELEASING","ROSE","RUBBED","TENDER","SHY","RAPING","WENDEYNES","SQUEEZE","COMPLAINED","LIKES","WISDOMS","DWARFS","REPLIED","ANNOUNCED","SPEAR","DON","CHECKED","DAGGERS","REPLACED","MUMMER","POURED","NIP","CRIES","STOLE","PEEK","ENJOYING","JOSTLING","DRINKING","PEDDLER","CHUNKS","CHEESE","RIPPING","FINGERS","WRINKLED","SKINS","KISSES","PIPES","SADEYED","COSSOMO","CONJURER","YNA","ONEEYED","WHORE","PORT","RECOGNIZED","REGULARS","DELLONO","PINCHED","GALEO","SAUSAGEMAKER","GREASY","APRON","TOMARRO","PET","RAT","SAUSAGES","LAUGHED","BALCONIES","FILLING","CAPTAINS","RESPECTABLE","FOLK","BRAVOS","SEATS","CHEAPEST","RIOT","SOMBER","SHADES","SWAY","BOES","COMPORT","SAFELY","VULGARITY","SERVANTS","CUSHIONS","RELISHED","MUMMERY","INCLINED","OFFERINGS","CONSIDERED","SUBTLER","POETIC","BO","SCIONS","OTHARYS","ACCOMPANIED","COURTESAN","PRESTAYN","WONDERED","TORONE","PRANELIS","UNCOMFORTABLE","ALLIANCE","SWORD","HOSTING","HALFDOZEN","BESSARO","GIGGLING","BELLY","COMPARED","LITHE","WILLOW","KEYHOLDER","THRICE","REYAANS","BELLIES","SHIPS","SUMMONED","VOTE","SANK","CLUTCHED","ELBOW","OPULENT","BROUGHT","PEARL","BALDING","WISP","BEARD","CHIN","VELVET","DOUBLET","EMBROIDERED","ROOSTER","PICKED","LAPIS","LAZULI","GUARDS","LOVELY","LAMPS","BRIGHTER","LOWCUT","PALE","STARTLING","BOUND","SPUN","JETANDGOLD","NECKLACE","BRUSHED","BREASTS","LEANED","INK","PIRATE","FATHERED","PRINCESS","ISLES","DRAGON","LOVER","WISTFULLY","HOWLED","SIGGLE","SUNSET","LORDS","SIGGLES","FLOWERS","BEARS","ELKS","ENVOYS","WEARING","LIONS","HARDLOOKING","RINGMAIL","LONGSWORDS","SHEATHED","HIPS","CRIMSON","CLOAKS","BORDERED","WHORLS","GARNET","CLASPED","GLANCED","GILDED","LIONCRESTED","HELM","QUIVER","GODS","DAENAS","BRED","ROUGHHEWN","SHRUGGED","THIRTY","SAVAGES","GIGGLED","GIGGLY","CLOSER","OH","MLORD","MAIDEN","DISTURBED","QUIETLY","SILENTLY","DARKENED","DAMP","CHILLED","LEMONS","LIMES","POMEGRANATES","PEPPERS","BAREBELLIED","LYS","MYR","VOLANTIS","GRIZZLED","LORD","TYWIN","AERYS","FOOL","YOUD","GOES","CASTERLY","STUCK","WHOD","SOOTY","GUARDSMAN","GRINNED","AFTERWARD","NOTICES","BUGGER","CLEGANE","SER","FANCY","FEARED","LICHYARD","APPEARED","TOMBSTONE","HISS","CURSE","WADDLED","LEERED","SNARLING","","GAUNT","ROBES","SHINY","IVORY","HORNS","JUTTED","UPWARDS","BROW","DEATHLY","MOVED","ABSENCE","SHADOW","GUARDSMEN","ALCOVE","PLAIN","HOPED","WITS","AINT","IMP","CLEVER","FIGURES","TWEAK","AH","HILT","MA","BARK","BARGAINING","MARROS","TASTES","MONSTER","MOUTHED","HERS","APT","PRAYER","FLOUNCED","BRAAVOSI","ECHANGED","SMILED","SWEETLING","GIBBLEGABBLE","FUSS","FEATHERS","LIED","SWEETEST","AYE","LOOKED","DISGUSTING","HOSPITABLE","FABRIC","FIING","COMELY","RAFFORD","HIKE","SKIRTS","LEAN","BRUSHING","SCOWLING","SCAMPER","KNIGHTLINESS","SHOULDNT","PRESSED","SNORTED","ADMITTED","EASIER","WRIST","KISSED","FORCING","EEL","LICKED","BROKE","BREATHLESS","ROOMS","RACING","PANTING","LIT","TALLOW","DANCED","FORGOT","NAP","IMPS","RAFF","URGED","UNDO","SLID","THIGH","GRUNT","DAMN","CONFUSED","FRIGHTENED","BLEEDING","WHA","CUNT","STAIN","SOAKING","SCARING","SHOOK","DAZED","SQUIRTED","GASPED","RAG","DIZZY","DRENCHED","TRIED","BUCKLED","PLEADED","REDDENED","HEALER","PIG","ARYA","SWEETLY","SHARPLY","SLIDING","SLEEVE","SIDEWAYS","SLASH","VALAR","MORGHULIS","SNIFFED","EELS","SADLY","GIDDY","HEARTED","RIB"]

