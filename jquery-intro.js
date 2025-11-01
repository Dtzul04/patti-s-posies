console.log("✅ jquery-intro.js loaded");

$(document).ready(function() {
  var months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  var specials = [
    "<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this January.</p>",
    "<p>Roses for your sweetheart!</p><p>All roses are $24.99 this February.</p>",
    "<p>Add some color to your garden!</p><p>This March all petunias are $10.99 for a flat of 16.</p>",
    "<p>Time to fertilize!</p><p>All fertilizers 20% off.</p>",
    "<p>Geraniums: 6 inch pot is only $6.99 all May!</p>",
    "<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot.</p>",
    "<p><strong>BOGO</strong></p><p>All containers, buy one, get one of equal or lesser value 1/2 price</p>",
    "<p>Cacti and succulents, 25% off</p>",
    "<p>Get ready for fall!</p><p>Mums: 6 inch pot $5.99</p>",
    "<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins:<br>large $8.99<br>small $5.99<br>Decorative pumpkins: $7.99-11.99<br>Gourds: $6.99</p>",
    "<p>Trees and shrubs: 1/2 price - in stock only.</p>",
    "<p>Christmas trees!</p><p>We have sizes from 3' to 15' and lots of varieties. Find the perfect fit for your family while they last!</p>"
  ];

  var tips = [
    "<p>Those of us who live through our gardens know how bittersweet it can be to see the lush green growth of summer disappear during the cold months of winter. Hellebores are the perfect winter garden companion to plant with another winter blooming favorite, Camellias.</p><p>Visit us this season for the exciting selection of both of these cool season beauties and enjoy them in your garden for years to come.</p>",
    "<p>Spring is a time of renewal for both the gardener and the garden. Suggestions for this month:</p><ul><li>Transplants of tomatoes should be planted by March 15th.</li><li>Fertilize your lawn after warm-season grasses are growing and have been mowed 2-3 times.</li><li>Release beneficial nematodes to control ticks, fleas, chiggers, and fire ants.</li></ul>",
    "<p><strong>Summer is the TIME!</strong></p><ul><li>Select rose bushes from the huge selection of varieties we offer.</li><li>Transplants of peppers, eggplant and tender herbs can be planted.</li><li>Plant fruit trees, shrubs, roses, perennials, herbs and colorful annuals like geraniums and snapdragons.</li></ul>",
    "<p>Fall is the best time to plant in north Texas. Milder temperatures and increased rainfall mean that new plants—especially trees and shrubs—can establish root systems much more easily than during hot summer months.</p><p>Also with the changing season comes the changing of our color plantings: petunias, dianthus, ornamental kale and mums bringing cheerful color ahead of winter’s trusted and long-lasting pansies and violas.</p>"
  ];

  var now = new Date();
  var monthIndex = now.getMonth();
  var monthName = months[monthIndex];

  var season, seasonColor, seasonIndex, bgImage;

  switch (monthIndex) {
    case 11:
    case 0:  
    case 1:  
      season = "Winter";
      seasonColor = "#00f";
      seasonIndex = 0;
      bgImage = "winterbg.jpg";
      break;

    case 2: 
    case 3: 
    case 4: 
      season = "Spring";
      seasonColor = "#d7d";
      seasonIndex = 1;
      bgImage = "springbg.jpg";
      break;

    case 5: 
    case 6: 
    case 7: 
      season = "Summer";
      seasonColor = "#006400";
      seasonIndex = 2;
      bgImage = "summerbg.jpg";
      break;

    case 8: 
    case 9: 
    case 10: 
      season = "Fall";
      seasonColor = "#930";
      seasonIndex = 3;
      bgImage = "fallbg.jpg";
      break;
  }

  console.log("The current month is:", monthName);

  if (monthName === "December") {
    $("h2#slogan").after("<h3>Happy Holidays!</h3>");
  }

  $("#month").text("Tips for " + monthName);

  var year = now.getFullYear();
  $("#copy").append(" " + year);

  $("#specials").addClass(season.toLowerCase());

  $("#specials").html("<h3>Specials</h3>" + specials[monthIndex]);

  $("#seasontips").html(tips[seasonIndex]);

  $("strong, h1, h2, h3").css("color", seasonColor);

  $("body").css({
    "background-image": "url('" + bgImage + "')",
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "background-position": "center center"
  });
});
