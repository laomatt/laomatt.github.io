

/*
1. everything on list starts in the column div, because their incart status is initially false

2. user clicks a 'add' button to switch incart boolean and putt everything with inCart==true in the list, and everything with inCart==false in the shop.




*/


var GroceryItem=function(incart, name, price, picture)
{
 this.inCart=incart
 this.name=name
 this.price=price
 this.image=picture
}


var apple= new GroceryItem(false,"apple", 4, "http://1.bp.blogspot.com/_LgF7ePXTRlA/TTXdqhZLHcI/AAAAAAAAAEg/M2ya6KBz61E/s1600/apple_logo_rainbow.gif")
var soda= new GroceryItem(false,"soda",6, "http://www.freysmiles.com/images/uploads/general/Sodas1.jpeg")
var candy= new GroceryItem(false,"candy",8, "http://www.businessnewsdaily.com/images/i/000/002/553/original/candy-image.jpg?1340725305")
var cookies= new GroceryItem(false,"cookies",2, "http://delfoo.com/image/data/cuisine/cookies.gif")
var iceCream= new GroceryItem(false,"iceCream",10, "http://www-tc.pbs.org/food/files/2012/07/History-of-Ice-Cream-1.jpg")
var milk= new GroceryItem(false,"milk",5, "http://i.huffpost.com/gen/1124795/thumbs/o-MILK-facebook.jpg")
var eggs= new GroceryItem(false,"eggs",12, "http://media.jrn.com/images/b99244621z.1_20140414111226_000_gdk5odal.1-0.jpg")
var steak= new GroceryItem(false,"steak",20, "http://s5.thisnext.com/media/largest_dimension/AC29D0D5.jpg")
var juice= new GroceryItem(false,"juice",10, "http://upload.wikimedia.org/wikipedia/en/thumb/1/14/JuiceOrtiz2.jpg/250px-JuiceOrtiz2.jpg")
var gravy= new GroceryItem(false,"gravy",12, "http://calwatchdog.com/wp-content/uploads/2011/11/gravy-Train.jpg")
var sausage= new GroceryItem(false,"sausage",10, "https://seriouslysingleinsyd.files.wordpress.com/2014/06/6a01053637118a970c012876dab28e970c.jpg")
var bacon= new GroceryItem(false,"bacon",13, "http://www.guysarepigs.com/PIGS/images/meet_icon_cop.gif")
var potato= new GroceryItem(false,"potato",3, "http://img2.wikia.nocookie.net/__cb20121106233947/disney/images/c/ce/Potato_23.gif")

var grocer_item_list = [apple, soda, candy, cookies, iceCream, milk, eggs, steak, juice, gravy, sausage, bacon, potato];



  var mattlao="matt"
  var matt="lao"
function loadup()
{
 var menu_of_items="menu items start"
 var item_list="list items start"
 for(var g in grocer_item_list)
   {
     if (grocer_item_list[g].inCart==false)
    {
      // menu_of_items+="<div class=\"item\"><img src=\""+grocer_item_list[g].image+"\" width=\"200px\" class=\"portrait\">"+grocer_item_list[g].name+"<button class=\"add\" onclick=\"additem("+grocer_item_list[g].name+")>add</button></div>"
      menu_of_items+="<div class=\"item\"><img src=\""+grocer_item_list[g].image+"\" width=\"200px\" class=\"portrait\" height=\"200px\">"+grocer_item_list[g].name+"("+grocer_item_list[g].price+")"+"<button class=\"add\" onclick=\"additem("+grocer_item_list[g].name+")\">add</button></div>"
      // menu_of_items+="<div class=\"item\"><img src=\""+grocer_item_list[g].image+"\" width=\"200px\" class=\"portrait\">"+grocer_item_list[g].name+"<button class=\"add\" onclick=\"additem(\""+grocer_item_list[g].name+"\")\">add</button></div>"
    }
    else
    {
      item_list+="<div class=\"list_item\"><img src=\""+grocer_item_list[g].image+"\" height =\"90px\" width=\"90px\" class=\"portrait\">"+grocer_item_list[g].name+"("+grocer_item_list[g].price+")"+"<button class=\"add\" onclick=\"removeitem("+grocer_item_list[g].name+")\">remove</button></div>"
    }
   }
var total_value=0
for(var r in grocer_item_list)
{
  if (grocer_item_list[r].inCart==true)
  {
    total_value+=grocer_item_list[r].price
  }
}


document.getElementById("shop").innerHTML=menu_of_items
document.getElementById("list").innerHTML=item_list
document.getElementById("total").innerHTML="Total:  "+total_value

}


function additem(e){
  e.inCart=true;
  loadup()
  // document.getElementById("list").innerHTML=e
}

function removeitem(e){
  e.inCart=false;
  loadup()

}



