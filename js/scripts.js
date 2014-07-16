var package = {
  pweight : 0,
  pwidth : 0,
  plength : 0,
  pheight : 0,
  rate: function() {
    var cost = this.pweight;
    if (this.pwidth >= 50) {
      cost += 20;
    }
    if (this.plength >= 50) {
      cost += 20;
    }
    if (this.pheight >= 50) {
      cost += 20;
    };

    return cost;
  }
}

$(document).ready(function() {

  $('form#form').submit(function(event) {

    package.pweight = parseInt($('input#weight').val());
    package.pwidth = parseInt($('input#width').val());
    package.plength = parseInt($('input#length').val());
    package.pheight = parseInt($('input#height').val());

    var rateResult = package.rate();
    $('#rate-result').append("<li>" + "$" + rateResult + " to send your package." + "</li>");

    // if (triangle.valid()) {

    //   switch(triangle.type()) {
    //     case "isosceles":
    //       $('#isosceles-result').append("<li>" + triangle.side1 + "," + triangle.side2 + "," + triangle.side3 + "</li>");
    //       break;
    //     case "equilateral":
    //       $('#equilateral-result').append("<li>" + triangle.side1 + "," + triangle.side2 + "," + triangle.side3 + "</li>");
    //       break;
    //     case "scalene":
    //       $('#scalene-result').append("<li>" + triangle.side1 + "," + triangle.side2 + "," + triangle.side3 + "</li>");
    //       break;
    //     case "invalid":
    //       alert("Invalid: Not a Triangle. Try Again.");
    //       break;
    //     case "error":
    //       alert("Error.");
    //       break;
    //   }

    // } else {
    //   alert("Triangle not valid.  Try Again.");
    //   $('input#side1').val("");
    //   $('input#side2').val("");
    //   $('input#side3').val("");
    // }

    event.preventDefault();
  });
});
