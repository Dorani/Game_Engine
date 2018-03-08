var world = {};//empty obj called world



$(document).ready(function(){//selecting the document, then running a function called ready, when this is ready - run this funciton
  $(document).click(function(event){//handler click function
    //alert("you clicked me " + event.pageX + " " + event.pageY); when clicked, alert will display coordinates of the event
    $("#hero_div").css("top", event.pageY + "px");
    $("#hero_div").css("left", event.pageX + "px");
  });
  world.people = [];//collection to iterate through
  world.people.push({el: $("#extra1"), top: 0, left:0 });
  //storing value for easy retrieval, to know where everything is, to see if people are hitting each other
  world.people.push({el: $("#extra2"), top: 0, left:0 });

});
