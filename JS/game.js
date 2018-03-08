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
  world.people.push({el: $("#extra2"), top: 40, left:200, directionX: 1, directionY: 1 });// 1 element of array
  world.people.push({el: $("#extra3"), top: 100, left:300, directionX: 1, directionY: 1 })
  world.people.push({el: $("#extra4"), top: 100, left:500, directionX: 1, directionY: 1 })
});

function movePeople(){//creating a function called movePeople to randomize movements
  for (num in world.people){
    var person = world.people[num];//able to create more people
    //giving the key, arrays have keys that start at 0
    person.top = person.top + (parseInt(Math.random() * 10) * person.directionY);
    //math . random gives a number between 0 and 9 and that we are multiplying by directoion y and x
    person.left = person.left + (parseInt(Math.random() * 10) * person.directionX);//math . random gives a number between 0 and 9 and that we are multiplying by directoion y and x

    //randomly change directionXorY FOR the person
    //5 percent chance
    //if you are going up now you are going down
    if (Math.random() > .95){
      person.directionY = - person.directionY;
    }

    if (Math.random() > .95){
      person.directionX = - person.directionX;
    }

    if (person.left < 5) { person.left = 5; }
    if (person.left > 840) { person.left = 840; }
    if (person.top < 5) { person.top = 5; }
    if (person.top > 640) { person.top = 640; }

    person.el.css("top", person.top+"px");
    person.el.css("left", person.left+"px");

  }
  setTimeout(movePeople, 1000);
}
movePeople();
