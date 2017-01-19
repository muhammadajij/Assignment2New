<!-- Muhammad Ajij - P13230501 -->


// Home
var images = ["./images/supportimage1.jpg", "./images/supportimage2.jpg"];
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


$('#link').click(function(event) {
     event.preventDefault();
   $.scrollTo($('.title'), 1000);
});

$(document).ready(function()

            {   $(".detail").hide()
                $(".arrowup").hide()

            $(".arrow").click(function()
            {
                $(".detail").show(500);
                $(".arrowup").show(500);
                $(".arrow").hide();


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
                $(".mainHeader").show(200);
                $(".mainContent").show(1500);
                 $(".title").show(900);
                 $(".searchbar").show(100);
                $("#slideshow").show(1100);

                $(".sidebars").show(1500);
                $(".lheader").hide();


            }
            );

            $("#home").click(function()
            {

                window.location.href='Home.html';
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

// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
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



// $(document).ready(function(){
//     $("#H").click(function(){
//         $("#animation").fadeTo("slow", 0);
//     });
// });



