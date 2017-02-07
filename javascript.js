<!-- Muhammad Ajij - P13230501 -->


// Home
var images = ["./images/supportimage1.jpg"];
// var caption = ["caption for slide1", "caption for slide2"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
	imageNumber += x;
	//restarts array
	if (imageNumber > imageLength){
		imageNumber = 0;
	}

	if (imageNumber < 0){
		imageNumber = imageLength;
	}

	document.getElementById("slideshow").src = images[imageNumber];
	// document.getElementById("caption").innetHTML = caption[imageNumber];

	return false;
}

function autoRun() {
	setInterval("changeImage(1)", 5000);

}

        var nrImg = 3;  //the number of img , I only have 3 
        var IntSeconds = 4;     //the seconds between the imgs

// Portfolio
function Load()
        {
            nrShown = 0;    //the img visible
            Vect = new Array(nrImg + 10);
            Vect[0] = document.getElementById("Img1");
            Vect[0].style.visibility = "visible";

            document.getElementById("S" + 0).style.visibility = "visible";

            for (var i = 1; i < nrImg; i++)
            {
                Vect[i] = document.getElementById("Img" + (i + 1));
                document.getElementById("S" + i).style.visibility = "visible";
            }

            document.getElementById("S" + 0).style.backgroundColor = "rgba(255, 255, 255, 0.90)";
            document.getElementById("SP" + nrShown).style.visibility = "visible";

            mytime = setInterval(Timer, IntSeconds * 1000);
        }
function Timer()
        {
            nrShown++;
            if (nrShown == nrImg)
                nrShown = 0;
            Effect();
        }
        //next img
function next()
        {
            nrShown++;
            if (nrShown == nrImg)
                nrShown = 0;
            Effect();

            clearInterval(mytime);
            mytime = setInterval(Timer, IntSeconds * 1000);
        }
function prev()
        {
            nrShown--;
            if (nrShown == -1)
                nrShown = nrImg -1;
            Effect();

            clearInterval(mytime);
            mytime = setInterval(Timer, IntSeconds * 1000);
        }
        //here changes the img + effect
function Effect()
        {
            for (var i = 0; i < nrImg; i++)
            {
                Vect[i].style.opacity = "0";   //to add the fade effect
                Vect[i].style.visibility = "hidden";

                document.getElementById("S" + i).style.backgroundColor = "rgba(0, 0, 0, 0.70)";
                document.getElementById("SP" + i).style.visibility = "hidden";
            }
            Vect[nrShown].style.opacity = "1";
            Vect[nrShown].style.visibility = "visible";
            document.getElementById("S" + nrShown).style.backgroundColor = "rgba(255, 255, 255, 0.90)";
            document.getElementById("SP" + nrShown).style.visibility = "visible";
        }


// $('#link').click(function(event) {
//      event.preventDefault();
//    $.scrollTo($('.title'), 1000);
// });

   //slideshow home button
function home(){
    window.location.href='Home.html';

}

// function landing(){
//     window.location.href='Landing.html';

// }

$(document).ready(function()

            {   $(".detail").hide()
                $(".arrowup").hide()

            $(".arrow").click(function()
            {
                $(".detail").show(500);
                $(".arrowup").show(500);
                $(".arrow").hide();

                if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

            })

            $(".arrowup").click(function()
            {
                $(".detail").hide(500);
                 $(".arrow").show(500);
                 $(".arrowup").hide();

            }

            );

               $(".detail2").hide()
               $(".arrowup2").hide()

            $(".arrow2").click(function()
            {
           if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
                $(".detail2").show(500);
                $(".arrowup2").show(500);
                $(".arrow2").hide();

       
            })

            $(".arrowup2").click(function()
            {
                $(".detail2").hide(500);
                $(".arrow2").show(500);
                 $(".arrowup2").hide();
            }

            );

               $(".detail3").hide()
               $(".arrowup3").hide()

            $(".arrow3").click(function()
            {

            	      if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
                $(".detail3").show(500);
                $(".arrowup3").show(500);
                $(".arrow3").hide();

            })

            $(".arrowup3").click(function()
            {
                $(".detail3").hide(500);
                $(".arrow3").show(500);
                 $(".arrowup3").hide();
            }

            );

                $(".mainHeader").hide();
                 $(".mainContent").hide();
                $(".sidebars").hide();
                 $(".title").hide();
                 $(".searchbar").hide();
                $("#slideshow").hide();
                $(".lheader").show();



            $(".link").click(function()
            {
                $(".mainHeader").show(300);
                $(".mainContent").show(500);
                 $(".title").show(300);
                 $(".searchbar").show(300);
                $("#slideshow").show(300);

                $(".sidebars").show(500);
                $(".lheader").hide(1000);


            }
            );

            $("#land").click(function()
            {

                $(".mainHeader").hide();
                $(".mainContent").hide();
                 $(".title").hide();
                 $(".searchbar").hide();
                $("#slideshow").hide();

                $(".sidebars").hide();
                $(".lheader").show(800);


            }
            );


            // $(".port").click(function()
            // {

            //     $(".mainHeader").hide(700);
            //     $(".mainContent").hide(700);
            //      $(".title").hide(700);
            //      $(".searchbar").hide(700);
            //     $("#slideshow").hide(700);
            //     $("#slider").hide();

            //     $(".sidebars").hide();
            //     $("#slider").show(800);


            // }
            // );

            $("#home").click(function()
            {

                $(".mainHeader").show(200);
                $(".mainContent").show(1500);
                 $(".title").show(900);
                 $(".searchbar").show(100);
                $("#slideshow").show(1100);

                $(".sidebars").show(2000);
                $(".lheader").hide();


            }
            );
        });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".scrollbackup").on('click', function() {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


});

function validateForm() {
    var w = document.forms["form"]["name"].value;
    
    var x = document.forms["form"]["sname"].value;
    

    var y = document.forms["form"]["email"].value;
    

    var z = document.forms["form"]["message"].value;
   
    if (x == "" || w == "" || y == "" || Z == "") {
        alert("All Fields Must Be Filled Out");
        return false;
    }

}

// Validating Empty Field
// function check_empty() {
// if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
// alert("Fill All Fields !");
// } 
// else {
// document.getElementById('form').submit();
// alert("Form Submitted Successfully...");
//}
//}

//Function To Display Popup
function div_show() {
//window.location.href='Home.html'
document.getElementById('popupdiv').style.display = "block";
}

// function home_show() {
// //window.location.href='Home.html'
// document.getElementById('lheader').style.display = "none";
// document.getElementById('homepage').style.display = "block";

// }

//Function to Hide Popup
function div_hide(){
document.getElementById('popupdiv').style.display = "none";
}



// var info = [
//   {
//     "message": document.getElementById('message').placeholder
//   }
// ];

// function addJSON() {
//     var nameval = document.getElementById('name').value;
//     var messageval = document.getElementById('message').placeholder;
//     var newmessage = messageval + " " + nameval;
//     var newObject = {
//         "message": newmessage
//     };
//     info.push(newObject);
// }

// $(document).ready(function(){
//     $("#H").click(function(){
//         $("#animation").fadeTo("slow", 0);
//     });
// });

// var nameval = document.getElementById('name').value;

// var obj = JSON.parse({ "name": document.getElementById('name').value });
// document.getElementById("demo").innerHTML = "Hello " + obj.name;


// function myFunction() {

//     var nameval = document.getElementById("name").innerHTML;

//     document.getElementById("demo").innerHTML = ;
// }


//USE OF JSON
function myFunction() {

var nameval = document.getElementById("name").value;
var snameval = document.getElementById("sname").value;

// var obj{};
// obj['name'] = nameval;
// obj['surname'] = surname;

// var x = obj.name;
// var y = obj.surname;

document.getElementById("demo").innerHTML =  alert("Thank You " + nameval + " " + snameval + " For Your Message Please Close The Contact Form");

}

// var f = document.getElementById("name").value;
// var s = document.getElementById("sname").value;

// var myObj, x, y;

// myObj = { "name": f, "sname": s};

// x = myObj.name;
// y = myObj.sname;

// document.getElementById("htwo2").innerHTML = "Contact Us " + x + " " + y;


// function time() {
//     var date = new Date();
//     var time= date.toLocaleTimeString();
//     document.getElementById("time").innerHTML = time;
// }

//timestamp
function time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('livetimes').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(time, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


// function checkToggle (){

//   if(document.getElementById("val").value=="ON"){
//     swapStyleSheet("./light.css")
//     }

//   else if(document.getElementById("val").value=="OFF"){
//     swapStyleSheet("stylesheet.css")
//   }
// }

function swapStyleSheet(sheet){
   
    document.getElementById("dark").setAttribute("href", sheet);

   }


