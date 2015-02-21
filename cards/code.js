var cards=[
ace_of_diamonds = {file: "deck/ace_of_diamonds.png", value: 1},
two_of_diamonds = {file: "deck/two_of_diamonds.png", value: 2},
three_of_diamonds = {file: "deck/three_of_diamonds.png", value: 3},
four_of_diamonds = {file: "deck/four_of_diamonds.png", value: 4},
five_of_diamonds = {file: "deck/five_of_diamonds.png", value: 5},
six_of_diamonds = {file: "deck/six_of_diamonds.png", value: 6},
seven_of_diamonds = {file: "deck/seven_of_diamonds.png", value: 7},
eight_of_diamonds = {file: "deck/eight_of_diamonds.png", value: 8},
nine_of_diamonds = {file: "deck/nine_of_diamonds.png", value: 9},
ten_of_diamonds = {file: "deck/ten_of_diamonds.png", value: 10},
jack_of_diamonds = {file: "deck/jack_of_diamonds.png", value: 10},
queen_of_diamonds = {file: "deck/queen_of_diamonds.png", value: 10},
king_of_diamonds = {file: "deck/king_of_diamonds.png", value: 10},
ace_of_clubs = {file: "deck/ace_of_clubs.png", value: 1},
two_of_clubs = {file: "deck/two_of_clubs.png", value: 2},
three_of_clubs = {file: "deck/three_of_clubs.png", value: 3},
four_of_clubs = {file: "deck/four_of_clubs.png", value: 4},
five_of_clubs = {file: "deck/five_of_clubs.png", value: 5},
six_of_clubs = {file: "deck/six_of_clubs.png", value: 6},
seven_of_clubs = {file: "deck/seven_of_clubs.png", value: 7},
eight_of_clubs = {file: "deck/eight_of_clubs.png", value: 8},
nine_of_clubs = {file: "deck/nine_of_clubs.png", value: 9},
ten_of_clubs = {file: "deck/ten_of_clubs.png", value: 10},
jack_of_clubs = {file: "deck/jack_of_clubs.png", value: 10},
queen_of_clubs = {file: "deck/queen_of_clubs.png", value: 10},
king_of_clubs = {file: "deck/king_of_clubs.png", value: 10},
ace_of_hearts = {file: "deck/ace_of_hearts.png", value: 1},
two_of_hearts = {file: "deck/two_of_hearts.png", value: 2},
three_of_hearts = {file: "deck/three_of_hearts.png", value: 3},
four_of_hearts = {file: "deck/four_of_hearts.png", value: 4},
five_of_hearts = {file: "deck/five_of_hearts.png", value: 5},
six_of_hearts = {file: "deck/six_of_hearts.png", value: 6},
seven_of_hearts = {file: "deck/seven_of_hearts.png", value: 7},
eight_of_hearts = {file: "deck/eight_of_hearts.png", value: 8},
nine_of_hearts = {file: "deck/nine_of_hearts.png", value: 9},
ten_of_hearts = {file: "deck/ten_of_hearts.png", value: 10},
jack_of_hearts = {file: "deck/jack_of_hearts.png", value: 10},
queen_of_hearts = {file: "deck/queen_of_hearts.png", value: 10},
king_of_hearts = {file: "deck/king_of_hearts.png", value: 10},
ace_of_spades = {file: "deck/ace_of_spades.png", value: 1},
two_of_spades = {file: "deck/two_of_spades.png", value: 2},
three_of_spades = {file: "deck/three_of_spades.png", value: 3},
four_of_spades = {file: "deck/four_of_spades.png", value: 4},
five_of_spades = {file: "deck/five_of_spades.png", value: 5},
six_of_spades = {file: "deck/six_of_spades.png", value: 6},
seven_of_spades = {file: "deck/seven_of_spades.png", value: 7},
eight_of_spades = {file: "deck/eight_of_spades.png", value: 8},
nine_of_spades = {file: "deck/nine_of_spades.png", value: 9},
ten_of_spades = {file: "deck/ten_of_spades.png", value: 10},
jack_of_spades = {file: "deck/jack_of_spades.png", value: 10},
queen_of_spades = {file: "deck/queen_of_spades.png", value: 10},
king_of_spades = {file: "deck/king_of_spades.png", value: 10}
]
var hand=[]
var total=0
var times_dealt=0
var ypositions=[]
var xpositions=[]
var id_array=["card1","card2","card3","card4","card5"]

//this function deals out cards increasingly
 function deal()
 {
  times_dealt+=1
    // var num_of_cards=1+Math.floor(Math.random()*10)
    // var num_of_cards=times_dealt
    var num_of_cards=5
    // var num_of_cards=10
    var pool=[]
     ypositions=[]
     xpositions=[]
    // while(pool.length<num_of_cards)
    while(pool.length<num_of_cards)
    {
      var x=Math.floor(Math.random()*cards.length)
      if (pool.indexOf(x)<0)
        {
          pool.push(x)
        }
    }
    //now we have to create a loop that deals out cards for every number in pool
   hand=[]
    for(var r in pool)
    {
      hand.push(cards[pool[r]])
    }
    quak_c=0
    startp1=10
    hand_shake()
    total=0
    var hand_accum=""
      var width_random=100
    for(var g in hand)
    {
    // var width_random=Math.floor(Math.random()*100)

    var x_random=Math.floor(Math.random()*100)
    xpositions.push(x_random)
    var y_random=Math.floor(Math.random()*100)
    ypositions.push(y_random)
      hand_accum+="<div id=\""+id_array[g]+"\" class=\"card\" style=\"left:"+x_random+"%;top:"+y_random+"%\"><img src=\""+hand[g].file+"\" width=\""+width_random+"%\"></div>"
      total+=hand[g].value
    }

  document.getElementById("table").innerHTML=hand_accum
  // document.getElementById("output").innerHTML=total+" on turn "+times_dealt
  document.getElementById("input").value=""
   setInterval(shuffle,5000);
 }


function inputKeyUp(e) {
  if(e.keyCode == 13)
  {
    submit()
  }
  else if(e.keyCode == 16)
  {
    shuffle()
  }
}


/*This function shuffles the current cards on the table*/
function shuffle()
{
  var vurr_cards=document.getElementsByClassName("card")
      quak_c=0
    startp1=10
   // hand_shake()
  for(var t in vurr_cards)
  {
    var mod_by=100
    var mult=Math.floor(Math.random()*10)
    var rule=[-5,-4,-3,3,4,5]
    var x_random=rule[Math.floor(Math.random()*rule.length)]
    var y_random=rule[Math.floor(Math.random()*rule.length)]
    slide(id_array[t], xpositions[t], (xpositions[t]+x_random*mult)%mod_by, ypositions[t], (ypositions[t]+y_random*mult)%mod_by);

    ypositions[t]=(ypositions[t]+y_random*mult)%mod_by
    xpositions[t]=(xpositions[t]+x_random*mult)%mod_by
      // document.getElementById("output").innerHTML=total+" on turn "+times_dealt+" x:"+x_random+ "y: "+y_random
  }
}


 function submit()
 {
  var answer=document.getElementById("input").value
    if(answer==total)
      {
        document.getElementById("input").value=""
        deal()
      }
    else
      {
        quake_i=0
        startp1=10
        windowQuake()
        document.getElementById("input").value=""
      }
 }

/*animation functions*/

//window shake
var quake_i=0
var startp1=10
var windowQuake = function()
      {
        if(quake_i<20)
              {
                if(quake_i%2==0)
                    {startp1+=2; }
                else
                    {startp1-=2; }
                quake_i+=1
                    document.getElementById("main_window").style.left = startp1+'%';
                    setTimeout(windowQuake,20)
              }
      }

//card one sweep in

    var quak_c=0
    var quak_done_c=50
    var start1=10
    var hand_shake = function()
        {
          if(quak_c<28)
                {
                    if(quak_c%2==0)
                      {start1-=5; }
                    else
                      {start1+=5; }
                    quak_c+=1

                  if(quak_c<=6)
                    {document.getElementById("card1").style.top = start1+'%'}
                  if((quak_c>=4) && (quak_c<=10))
                    {document.getElementById("card2").style.top = start1+'%'}
                  if((quak_c>=8) && (quak_c<=16))
                    {document.getElementById("card3").style.top = start1+'%'}
                  if((quak_c>=14) && (quak_c<=22))
                    {document.getElementById("card4").style.top = start1+'%'}
                  if((quak_c>=20) && (quak_c<=28))
                    {document.getElementById("card5").style.top = start1+'%'}

                    setTimeout(hand_shake,20)


                }

        }

/*slides cards during the shuffle*/
    var quak_d=0
    function slide(card_name, xstart_value, xend_value, ystart_value, yend_value)
//
     // var slide = function()
        {
          var startx=xstart_value
          var endx=xend_value
          var starty=ystart_value
          var endy=yend_value
    // document.getElementById(card_name).innerHTML=xstart_value
    var card_of_context=document.getElementById(card_name)
     // card_of_context.innerHTML= " "+xend_value+" "+xend_value+" "+ystart_value+" "+yend_value

          var slider = function()
              {
                if((startx!=endx)||(starty!=endy))
                  {
                    if(startx<endx)
                      {startx+=1}
                    else if(startx>endx)
                      {startx-=1}
                    else
                      {startx+=0}
    // document.getElementById("output").innerHTML="sdafas"

                    if(starty<endy)
                      {starty+=1}
                    else if(starty>endy)
                      {starty-=1}
                    else
                      {starty+=0}
                    card_of_context.style.left=startx+"%"
                    card_of_context.style.top=starty+"%"
                  }
                      setTimeout(slider,2)
              }

               slider()

        }

