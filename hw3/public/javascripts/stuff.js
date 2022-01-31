eventHandler = function( ) {
    if($("#note").val().indexOf('vegan') != -1){
        alert('Contain Dairy');
    }
    else{
        $("#cheese").replaceWith("<br> Thank you! Your order has been placed." +"<br>"+ "Toppings: " + $("input[name='toppings']:checked").val() +"<br>"+ "Quantity: " + $('#quantity :selected').text() + "<br>"+"Notes: "+ $("#note").val() + "<br>");
    }
 }
 $(function() {
     $("#order").click(eventHandler);
 });