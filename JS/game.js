var world = {};//empty obj called world



$(document).ready(function(){//selecting the document, then running a function called ready, when this is ready - run this funciton
  $(document).click(function(event){//handler click function
    //alert("you clicked me " + event.pageX + " " + event.pageY); when clicked, alert will display coordinates of the event
    $("#hero_div").css("top", event.pageY + "px");
    $("#hero_div").css("left", event.pageX + "px");
  });
  world.people = [];//collection to iterate through
  world.people.push({el: $("#extra1"), top: 0, left:0, directionX: 1, directionY: 1 });//0 element of the array, random direction
  //storing value for easy retrieval, to know where everything is, to see if people are hitting each other
  world.people.push({el: $("#extra2"), top: 0, left:0, directionX: 1, directionY: 1 });// 1 element of array
});

function movePeople(){//creating a function called movePeople to randomize movements
  for (num in world.people){
    var person = world.people[num];//able to create more people
    //giving the key, arrays have keys that start at 0
    person.top = person.top + (parseInt(Math.random() * 10) * person.directionY);
    //math . random gives a number between 0 and 9 and that we are multiplying by directoion y and x
    person.left = person.left + (parseInt(Math.random() * 10) * person.directionX);//math . random gives a number between 0 and 9 and that we are multiplying by directoion y and x

  }
}
