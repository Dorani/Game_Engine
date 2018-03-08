$(document).ready(function(){//selecting the document, then running a function called ready, when this is ready - run this funciton
  $(document).click(function(event){//handler click function
    alert("you clicked me " + event.pageX + " " + event.pageY);
  });
});
