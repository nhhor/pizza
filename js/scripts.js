//---------- BACK-END LOGIC ----------

function Order() {
  this.pizzas = [],
  this.currentId = 0
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


function Pizza (pizzaSize, toppingsList, firstName, lastName, phoneNumber) {
  this.pizzaSize = pizzaSize;
  this.toppingsList = toppingsList;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Pizza.prototype.pizzaCost = function() {
  return this.firstName + " " + this.lastName;
}
console.log(pizzaCost());

//---------- FRONT-END LOGIC ----------

var order = new Order();

function displayPizzas(order) {
  var pizzaDisplay = $("div.pizzaDisplay");
  var htmlForPizzaDisplay = "";
  order.pizzas.forEach(function(pizza) {
    htmlForPizzaDisplay += '<div class="card"><div class="card-header bg-info">Pizza # '+ pizza.id +'</div><ul class="list-group list-group-flush"><li class="list-group-item bg-secondary">topping 1</li></ul></div>';
  });
  pizzaDisplay.html(htmlForPizzaDisplay);
};




$(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var toppingsList = []
    $("input:checkbox[name=pizzaToppings]:checked").each(function(){
      var workTransportationMode = $(this).val();
      toppingsList.push(workTransportationMode);
    });
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phoneNumber = $("#phoneNumber").val();

    var newPizza = new Pizza(pizzaSize, toppingsList, firstName, lastName, phoneNumber);

    order.addPizza(newPizza);

    console.log(order.pizzas);
    displayPizzas(order)
  });
});
