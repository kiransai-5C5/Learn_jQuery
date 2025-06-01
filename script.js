//Everything that you have to know to learn jQuery.

// To get the current color of h1 element and the font size of p element
console.log($("h1").css("color"));
console.log($("p").css("font-size"));

// To change the color of all h1 elements to blue
$("h1").css("color", "blue");

// To change the background color of the body to light gray
$("body").css("background-color", "lightgray");

$("h1").addClass("highlight"); // 1. To add a class "highlight" to all h1 elements
$("h1").removeClass("highlight"); // 2. To remove the class "highlight" from all h1 elements
$("h1").toggleClass("highlight"); // 3. To toggle the class "highlight" on all h1 elements
$("h1").addClass("highlight hover"); // 4. To add multiple classes "highlight" and "hover" to all h1 elements
console.log($("h1").hasClass("highlight")); //5.  To check if h1 elements have the class "highlight"

$("button").text("Click Me!"); // To change the text of all buttons to "Click Me!"
$("button").html("<em>Click Me!<em>"); // To change the HTML content of all buttons to "<em>Click Me!</em>"

console.log($("img").attr("src")); // To get the value of the "src" attribute of the first image element
$("a").attr("href", "https://www.example.com"); // To change the "href" attribute of all anchor elements to "https://www.example.com"
console.log($("h1").attr("class")); // To get the value of the "class" attribute of all h1 elements

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//click Event Listener

// 1.To add a click event to all buttons
$(document).ready(function(){
    $("button").click(function(){  
        console.log("Button clicked!");
         $("p").css("font-size", "20px");
    });
})

//2. To change the text of all buttons to "true" or "false" based on whether they have the class "highlight"
$("button").click(function(){
    $("button").text ($("button").hasClass("highlight"));
})

//3. To change the text of all buttons to "Click Me!" when double clicked
$("button").click(function(){
    $("button").click(function(){
        $("button").text("Click Me!");
    })
});

//Keypress Event Example

// 4. To change the text of all buttons to the key pressed when a key is pressed
$("button").keypress(function(event){
    $("button").text(`You clicked on ${event.key}`);
});

//5. To log the key pressed in the console when a key is pressed in an input field
$("input").keypress(function(event){
    console.log(`You pressed the key: ${event.key}`);
});

//Mouse Events Example

// 6. To change the background color of the body to light blue when the mouse enters the body
$("body").mouseenter(function(){
    $("body").css("background-color", "lightblue");
});

// 7. To change the background color of the body back to light gray when the mouse leaves the body
$("body").mouseleave(function(){
    $("body").css("background-color", "lightgray");
});

//-------------------------------------------------------------------------------------------------------------------

$("p").before("<p>New paragraph before p1</p>"); // To insert a new paragraph after the first p element
$("p").after("<p>New paragraph after p1</p>"); // To insert a new paragraph before the first p element   
$("h1").prepend("<button>prepend Button</button>"); // To insert a new button at the beginning of the first h1 element
$("h1").append("<button>append Button</button>"); // To insert a new button at the end of the first h1 element

$("h2").remove(); // To remove all h2 elements from the DOM
$("h2").empty(); // To remove all child elements of the first h2 element
$("h2").replaceWith("<h2>Replaced h1 with h2</h2>"); // To replace the first h2 element with a new h2 element


$("h1").hide(); // To hide all h1 elements
$("h1").show(); // To show all h1 elements that were hidden
$("h1").toggle(); // To toggle the visibility of all h1 elements
$("h1").fadeOut(1000); // To fade out all h1 elements over 1 second
$("h1").fadeIn(1000); // To fade in all h1 elements over 1 second

//animations
$("p").animate({fontSize: "25px",opacity: 0.5}, 1000);// To animate the font size and opacity of all p elements over 1 second
$("h1").slideUp(1000); // To slide up all h1 elements over 1 second
$("h1").slideDown(1000); // To slide down all h1 elements over 1 second

