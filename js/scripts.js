//---------- BACK-END LOGIC ----------

function Order() {
  this.pizzas = [],
  this.currentId = 0
};

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
  pizza.price = this.assignPrice(pizza);
};

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.assignPrice = function(pizza) {
  if (pizza.pizzaSize === "Small") {
    toppingCount = 0
    pizza.toppingsList.forEach(function(topping){
      toppingCount += 1;
      return toppingCount
    });
    return toppingCount + 8;
  }
  else if (pizza.pizzaSize === "Large") {
    toppingCount = 0
    pizza.toppingsList.forEach(function(topping){
      toppingCount += 2;
      return toppingCount
    });
    return toppingCount + 14;  }
  else {
    return "Problem!";
  }
};

function Pizza (pizzaSize, toppingsList, firstName, lastName, phoneNumber) {
  this.pizzaSize = pizzaSize,
  this.toppingsList = toppingsList,
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
};

// Order.prototype.toppingsListPrint = function(order){
//   var pizzaDisplay2 = "";
//   var htmlForToppingDisplay = "";
//   order.pizzas.forEach(function(pizza){
//     pizza.toppingsList.forEach(function(topping){
//       console.log(topping);
//       htmlForToppingDisplay += '<li class="list-group-item">'+topping+'</li>';
//       })
//   });
//   pizzaDisplay2.html(htmlForPizzaDisplay);
// };




//---------- FRONT-END LOGIC ----------

var order = new Order();

function displayPizzas(order) {
  var pizzaDisplay = $("div.pizzaDisplay");
  var htmlForPizzaDisplay = "";
  order.pizzas.forEach(function(pizza) {
    var htmlForToppingDisplay = "";
    pizza.toppingsList.forEach(function(topping){
      htmlForToppingDisplay += '<li class="list-group-item pl-4 py-0">'+topping+'</li>';
    });

    htmlForPizzaDisplay += '<div class="col-md-4 mb-4"><div class="card"><div class="card-header bg-primary">Pizza # '+ pizza.id +' ('+pizza.pizzaSize+') </div><div class="card-body bg-info"><ul class="list-group list-group-flush "><li class="list-group-item">Toppings:</li>'+htmlForToppingDisplay+'</ul></div><div class="card-footer bg-secondary">Price: $'+pizza.price.toFixed(2)+'</div></div></div>';

  });
  pizzaDisplay.html(htmlForPizzaDisplay);
};

$(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var toppingsList = []
    $("input:checkbox[name=pizzaToppings]:checked").each(function(){
      var usersToppings = $(this).val();
      toppingsList.push(usersToppings);
    });
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phoneNumber = $("#phoneNumber").val();

    var pizza = new Pizza(pizzaSize, toppingsList, firstName, lastName, phoneNumber);
    order.addPizza(pizza);

    displayPizzas(order)
    console.log("order.pizzas: ",order.pizzas);

  });
});
