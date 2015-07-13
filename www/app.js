var $ = require("./lib/jquery.min");
var message;

var page = tabris.create("Page", {
  title: "Geolocation",
  topLevel: true
});

var button = tabris.create("Button", {
    layoutData: {left: 10, top: 10, right: 10},
    text: "Show Locations"
  }).appendTo(page).on("select", function() {
    	window.plugins.GPSLocator.getLocation(function(result){
		console.log(JSON.stringify(result));//result[0]:latitude,result[1]:longitude.
		},function(e){
			console.log(JSON.stringify(e));//Error Message
		});
  });

 


page.apply({
  "#firstNameLabel": {layoutData: {left: 10, top: 58, width: 120}},
   "#firstNameInput": {layoutData: {left: ["#firstNameLabel", 10], right: 10, baseline: "#firstNameLabel"}},
   "#done": {layoutData: {left: 20, right: 10, top: ["#firstNameLabel", 50]}}
});
page.open();