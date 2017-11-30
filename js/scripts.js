// Business (or back-end) logic:

var tsp = function(number1) {
  return number1 * 3;
};

var oz = function(number1) {
  return number1 * 16;
};

var cup = function(number1) {
  return number1 * 8;
};

var grams = function(number1) {
    return number1 * 128;
};

// User interface (or front-end) logic:
$(document).ready(function() {
  $("form#tsp").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#tsp1").val());
    var result = tsp(number1);
    $("#output").text(result);
  });

  $("form#oz").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#oz1").val());
    var result =oz(number1);
    $("#output1").text(result);
  });

  $("form#cup").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#cup1").val());
    var result = cup(number1);
    $("#output2").text(result);
  });

  $("form#grams").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#grams1").val());
    var result = grams(number1);
    $("#output3").text(result);
  });
});
