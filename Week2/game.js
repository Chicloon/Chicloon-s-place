var listData = ["Aqua" , "Aquamarine" , "Beige" , "Bisque" , "Black" , "BlanchedAlmond" , "Blue" , "BlueViolet" , "Brown" , "BurlyWood" , "CadetBlue" , "Chartreuse" , "Chocolate" , "Coral" ,  "Cornsilk" , "Crimson" , "Cyan" , "DarkBlue" , "DarkCyan" , "DarkGoldenRod" , "DarkGray" , "DarkGreen" , "DarkKhaki" , "DarkMagenta" , "DarkOrange" , "DarkOrchid" , "DarkRed" , "DarkSalmon" , "DarkSeaGreen" , "DarkViolet" , "DeepPink" , "DeepSkyBlue" , "DimGray" , "DodgerBlue" , "FireBrick" , "FloralWhite" , "ForestGreen" , "Fuchsia" , "Gainsboro" , "Gold" , "GoldenRod" , "Gray" , "Green" , "GreenYellow" , "HoneyDew" , "HotPink" , "IndianRed" , "Indigo" , "Khaki" , "Lavender" , "LawnGreen" , "LightBlue" , "LightCyan" ,  "LightGray" , "LightGreen" , "LightPink" , "LightSalmon" , "Lime" , "LimeGreen" , "Linen" , "Magenta" , "Maroon" , "MediumBlue" , "MediumOrchid" , "MediumPurple" , "MediumSlateBlue" , "MediumSpringGreen" , "MediumTurquoise" , "MediumVioletRed" , "MidnightBlue" , "MintCream" , "MistyRose" , "Moccasin" , "NavajoWhite" , "Navy" , "OldLace" , "Olive" , "OliveDrab" , "Orange" , "OrangeRed" , "Orchid" ,  "PaleGreen" ,  "PaleVioletRed" , "PapayaWhip" , "PeachPuff" , "Peru" , "Pink" , "Plum" , "PowderBlue" , "Purple" , "RebeccaPurple" , "Red" , "RosyBrown" , "RoyalBlue" , "SaddleBrown" , "Salmon" , "SandyBrown" , "SeaGreen" , "Sienna" , "Silver" , "SkyBlue" , "SlateBlue" , "SlateGray" , "SpringGreen" , "SteelBlue" , "Tan" , "Teal" , "Thistle" , "Tomato" , "Turquoise" , "Violet" , "Wheat" , "Yellow" , "YellowGreen"];

  var listDataLength=listData.length;

                    function makelist(){
                        /* basis of this function was taken at
                        http://www.javascript-examples.net/item/an-html-list-from-a-javascript-array
                        */

                            // Make a container element for the list - which is a <div>
                            // You don't actually need this container to make it work
                            var listContainer = document.createElement("div");

                            // add it to the page
                            document.getElementsByTagName("body")[0].appendChild(listContainer);

                            // Make the list itself which is a <ul>
                            var listElement = document.createElement("ul");
                            // Adding some style
                            listElement.setAttribute("style", "list-style: none;");
                                                            // add it to the page
                            listContainer.appendChild(listElement);

                            // Set up a loop that goes through the items in listItems one at a time

                            for( var i =  0 ; i < listDataLength ; ++i){
                                    // create a <li> for each one.
                                  var listItem = document.createElement("li");
                                  // Adding ID to each teg, to add style
                                  listItem.id="li";
                                  // Adding unique background-color to each li
                                  Itemstyle='background-color:' + listData[i] + ';';
                                  listItem.setAttribute("style", Itemstyle);
                                  // add the item text
                                  listItem.innerHTML = '<span>' + listData[i] + '</span>';
                                  // add listItem to the listElement
                                  listElement.appendChild(listItem);

                            }

                    }


function game () {

  var userNumber;
  var compNumber;
  var tryNumber=0;
  var result = false;

 compNumber = Math.floor(Math.random()*listDataLength);
 compNumber = listData[compNumber];
  console.log (compNumber);




 while (!result) {
   if (tryNumber>3) userNumber = prompt ("I picked one of those colors:\n\n" + listData.join(", ") + "\n\nWhat is my color?\n hint: try 'rainbow'");
   else userNumber = prompt ("I picked one of those colors:\n\n" + listData.join(", ") + "\n\nWhat is my color?");
   result=check();
   tryNumber++;
}


myBody=document.getElementsByTagName("body")[0];
myBody.setAttribute("style","background-color:"+compNumber);
alert ("You've guessed rigt\n\n Number of your guesses are " + tryNumber);


function check(){
    if (userNumber=='rainbow') return true;
    var colorCheck = false;
    for( var i =  0 ; i < listDataLength ; ++i)
      {
        if (userNumber == listData[i]) colorCheck = true;
      }
    if (colorCheck===false){
       alert ("I dont know this color");
       return false;
     }

    if (userNumber > compNumber)
      {
        alert ("Your color is alphabetically higher");
        return false;

      }
    if (userNumber < compNumber)
    {
      alert ("Your color is alphabetically lower");
      return false;
    }
    if (userNumber == compNumber) return true;

  }
}
