function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }


  var picPrompts = [
    "Today's Prompt: Share a photo of the place you spend most of your time.",
    "Today's Prompt: Share a photo of your favorite meal you’ve eaten this week.",
    "Today's Prompt: Share a photo of something that reminds you of home.",
    "Today's Prompt: Share a photo of the sunset where you are.",
    "Today's Prompt: Share a photo of the nature around you.",
    "Today's Prompt: Share a photo of your current obsession.",
    "Today's Prompt: Share a photo of a significant landmark in your area.",
    "Today's Prompt: Share a photo of the view from your window.",
    "Today's Prompt: Share a photo of any animal you’ve come across.",
    "Today's Prompt: Share a photo of something that provides you comfort when stressed.",
    "Today's Prompt: Share a photo capturing the weather conditions in your area.",
    "Today's Prompt: Share a photo that reminds you of an inside joke or family memory.",
    "Today's Prompt: Share a photo of you doing a hobby you enjoy.",
    "Today's Prompt: Share a photo of something you’ve accomplished recently.",
    "Today's Prompt: Share a photo of your living space and how you’ve decorated it to feel like home.",
    "Today's Prompt: Share a photo of the people you like to spend time with now.",
    "Today's Prompt: Share a photo of a heartfelt note you want to share.",
    "Today's Prompt: Share a photo of something pretty in your surroundings.",
    "Today's Prompt: Share a photo of your favorite restaurant.",
    "Today's Prompt: Share a photo of a place you’ve always wanted to visit with family.",
    "Today's Prompt: Share a photo of something you are grateful for.",
    "Today's Prompt: Share a photo of where you like to have fun.",
    "Today's Prompt: Share a photo of you participating in your community.",
    "Today's Prompt: Share a photo of a moment that caused you joy or laughter.",
    "Today's Prompt: Share a photo of you making a silly face.",
    "Today's Prompt: Share a photo of the last outfit you wore.",
    "Today's Prompt: Share a photo of a location that looks different at night.",
    "Today's Prompt: Share a photo of trying something for the first time.",
    "Today's Prompt: Share a photo from the past that holds special memories.",
    "Today's Prompt: Share a photo of your surroundings as soon as you read this prompt."
  ];
  
  function submit(){
    var ranNum = Math.floor(Math.random()*(picPrompts.length));
    document.getElementById("promptsDisplay").innerHTML = picPrompts[ranNum];
    document.getElementById("moment-pic").src="images/blank.jpeg";
  }



  let pic = document.getElementById("moment-pic");
  let inputFile = document.getElementById("input-file");

  inputFile.onchange=function(){
    pic.src=URL.createObjectURL(inputFile.files[0]);
  }