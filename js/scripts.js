//---------- BACK-END LOGIC ----------

function Order() {
  this.pizza = [];
}

function Pizza (pizzaSize, toppingsList, firstName, lastName, phontNumber) {
  this.pizzaSize = pizzaSize;
  this.toppingsList = toppingsList;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}



//---------- FRONT-END LOGIC ----------
$(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault();

    toppingsList = []
    $("input:checkbox[name=pizzaToppings]:checked").each(function(){
      var workTransportationMode = $(this).val();
      toppingsList.push(workTransportationMode);
    });
    console.log(toppingsList);

  });
});
