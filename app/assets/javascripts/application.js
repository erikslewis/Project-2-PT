//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree


function perc1() {
a = document.form1.a.value/100;
b = a*document.form1.b.value;
document.form1.total1.value = b
}

function perc2() {
 a = document.form1.c.value;
 b = document.form1.d.value;
 c = a/b;
d = c*100;
document.form1.total2.value = d
                         };



                         $(document).ready(function() {
                           var map,
                               currentPositionMarker,
                               mapCenter = new google.maps.LatLng(14.668626, 121.24295),
                               map;

                           // change the zoom if you want
                           function initializeMap()
                           {
                               map = new google.maps.Map(document.getElementById('map_canvas'), {
                                  zoom: 18,
                                  center: mapCenter,
                                  mapTypeId: google.maps.MapTypeId.ROADMAP
                                });
                           }

                           function locError(error) {
                               // tell the user if the current position could not be located
                               alert("The current position could not be found!");
                           }

                           // current position of the user
                           function setCurrentPosition(pos) {
                               currentPositionMarker = new google.maps.Marker({
                                   map: map,
                                   position: new google.maps.LatLng(
                                       pos.coords.latitude,
                                       pos.coords.longitude
                                   ),
                                   title: "Current Position"
                               });
                               map.panTo(new google.maps.LatLng(
                                       pos.coords.latitude,
                                       pos.coords.longitude
                                   ));
                           }

                           function displayAndWatch(position) {

                               // set current position
                               setCurrentPosition(position);

                               // watch position
                               watchCurrentPosition();
                           }

                           function watchCurrentPosition() {
                               var positionTimer = navigator.geolocation.watchPosition(
                                   function (position) {
                                       setMarkerPosition(
                                           currentPositionMarker,
                                           position
                                       );
                                   });
                           }

                           function setMarkerPosition(marker, position) {
                               marker.setPosition(
                                   new google.maps.LatLng(
                                       position.coords.latitude,
                                       position.coords.longitude)
                               );
                           }

                           function initLocationProcedure() {
                               initializeMap();
                               if (navigator.geolocation) {
                                   navigator.geolocation.getCurrentPosition(displayAndWatch, locError);
                               } else {
                                   // tell the user if a browser doesn't support this amazing API
                                   alert("Your browser does not support the Geolocation API!");
                               }
                           }

                           // initialize with a little help of jQuery
                           $(document).ready(function() {
                               initLocationProcedure();
                           });



  (function () {
      var audio = new Audio();

      function searchTracks(query) {
          $.ajax({
              url: 'https://api.spotify.com/v1/search',
              data: {
                  q: query,
                  type: 'track'
              },
              success: function (response) {
                  if (response.tracks.items.length) {
                      var track = response.tracks.items[0];
                      audio.src = track.preview_url;
                      audio.play();
                      communicateAction('<div>Playing ' + track.name + ' by ' + track.artists[0].name + '</div><img width="150" src="' + track.album.images[1].url + '">');
                  }
              }
          });
      }

      function playSong(songName, artistName) {
          var query = songName;
          if (artistName) {
              query += ' artist:' + artistName;
          }

          searchTracks(query);
      }

      function communicateAction(text) {
          var rec = document.getElementById('conversation');
          rec.innerHTML += '<div class="action">' + text + '</div>';
      }

      function recognized(text) {
          var rec = document.getElementById('conversation');
          rec.innerHTML += '<div class="recognized"><div>' + text + '</div></div>';
      }

      if (annyang) {
          // Let's define our first command. First the text we expect, and then the function it should call
          var commands = {
              'stop': function () {
                  audio.pause();
              },
                  'play track *song': function (song) {
                  recognized('Play track ' + song);
                  playSong(song);
              },
                  'play *song by *artist': function (song, artist) {
                  recognized('Play song ' + song + ' by ' + artist);
                  playSong(song, artist);
              },
                  'play song *song': function (song) {
                  recognized('Play song ' + song);
                  playSong(song);
              },
                  'play *song': function (song) {
                  recognized('Play ' + song);
                  playSong(song);
              },

                  ':nomatch': function (message) {
                  recognized(message);
                  communicateAction('Sorry, I don\'t understand this action');
              }
          };

          // Add our commands to annyang
          annyang.addCommands(commands);

          // Start listening. You can call this here, or attach this call to an event, button, etc.
          annyang.start();
      }

      annyang.addCallback('', function () {
          communicateAction('');
      });
  })();


var timer = {
  seconds: 0,
  timerId: 0,
  run: false,

  clock: {
    timer: $("#timer"),
    reset: $("#reset"),
    start: $("#start"),
    pause: $("#pause"),
  },

  updateTime: function updateTime(){
    this.seconds++;
    this.clock.timer.text('TIME ELAPSED: ' + this.seconds);
  },

  setupListeners: function () {
    this.clock.start.on('click', function() {
      console.log('start');
      this.clock.timer.text('TIME ELAPSED: ' + this.seconds);
      if (this.run === false){
        this.timerId = setInterval(this.updateTime.bind(this), 1000);
        this.run = true;
      }
    }.bind(this));

    this.clock.pause.on('click', function() {
      clearInterval(this.timerId);
      this.run = false;
    }.bind(this));

    this.clock.reset.on('click', function() {
      this.seconds = 0;
      console.log('reset ' + this.seconds);
      clearInterval(this.timerId);
      this.run = false;
      this.clock.timer.text("Go Again");
    }.bind(this));
  }
}

timer.setupListeners();




$(function(){
    $("#show1").hide();
    $("#button1").on("click", function(){
        $("#hide, #show1").toggle(450);


    });
  });

$(function(){
    $("#show2").hide();
    $("#button2").on("click", function(){
    $("#hide, #show2").toggle(450);
    });
  });

$(function(){
    $("#show3").hide();
    $("#button3").on("click", function(){
    $("#hide, #show3").toggle(450);
    });
});

$(function(){
            $("#show4").hide();
            $("#button4").on("click", function(){
                $("#hide, #show4").toggle(450);
            });
            });
            $(function(){
                $("#show5").hide();
                $("#button5").on("click", function(){
                $("#hide, #show5").toggle(450);
                });
               });
                $(function(){
                    $("#show6").hide();
                    $("#button6").on("click", function(){
                    $("#hide, #show6").toggle(450);
                    });
                  });
                    $(function(){
                        $("#show7").hide();
                        $("#button7").on("click", function(){
                        $("#hide, #show7").toggle(450);

                        });
                      });

                      var myNodelist = document.getElementsByTagName("LI");
                      var i;
                      for (i = 0; i < myNodelist.length; i++) {
                        var span = document.createElement("SPAN");
                        var txt = document.createTextNode("\u00D7");
                        span.className = "close";
                        span.appendChild(txt);
                        myNodelist[i].appendChild(span);
                      }

                      // Click on a close button to hide the current list item
                      var close = document.getElementsByClassName("close");
                      var i;
                      for (i = 0; i < close.length; i++) {
                        close[i].onclick = function() {
                          var div = this.parentElement;
                          div.style.display = "none";
                        }
                      }

                      // Add a "checked" symbol when clicking on a list item
                      var list = document.querySelector('ul');
                      list.addEventListener('click', function(ev) {
                        if (ev.target.tagName === 'LI') {
                          ev.target.classList.toggle('checked');
                        }
                      }, false);

                      // Create a new list item when clicking on the "Add" button
                      function newElement() {
                        var li = document.createElement("li");
                        var inputValue = document.getElementById("myInput").value;
                        var t = document.createTextNode(inputValue);
                        li.appendChild(t);
                        if (inputValue === '') {
                          alert("You must write something!");
                        } else {
                          document.getElementById("myUL").appendChild(li);
                        }
                        document.getElementById("myInput").value = "";

                        var span = document.createElement("SPAN");
                        var txt = document.createTextNode("\u00D7");
                        span.className = "close";
                        span.appendChild(txt);
                        li.appendChild(span);

                        for (i = 0; i < close.length; i++) {
                          close[i].onclick = function() {
                            var div = this.parentElement;
                            div.style.display = "none";
                          }
                        }
                      }
                      $("#ton").on("click",function(){
                        newElement();

                      });


                      $('.water-calculator input[name="weight-system"]').click(function() {
		var weightUnits = $(this).val();

		if (weightUnits == "kilos") {
			$('.water-calculator input[name="weight"]').attr("placeholder", "Kilograms");
            $('.water-calculator input[name="weight"]').val("");
		}

		else if (weightUnits == "pounds") {
			$('.water-calculator input[name="weight"]').attr("placeholder", "Pounds");
            $('.water-calculator input[name="weight"]').val("");
		}
	});

	$('.water-calculator .calc-submit').click(function() {
        var weight = parseInt($('.water-calculator input[name="weight"]').val());
		var weightType = $('.water-calculator input[name="weight-system"]:checked').val();
		var workout = $('.water-calculator input[name=activity]:checked').val();
        var water = 0;

        if (isNaN(weight)) {
            $('.water-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter your weight.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
            });
        }

        else {
            if (weightType == "kilos") {
                weight = (weight * 2.20462);
            }

            switch (workout) {
                case "L":
                    water = Math.round(weight * 0.6 + 12);
                    break;
                case "M":
                    water = Math.round(weight * 0.6 + 24);
                    break;
                case "V":
                    water = Math.round(weight * 0.6 + 36);
                    break;
             }

                $('.water-calculator .calc-answer').show(0).html('<div>Target Daily Water Intake: <span class="waters extra-condensed-regular">' + water + ' oz</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated flipInX');
                });
        }
    });

    $('.protein-calculator input[name="height-system"]').click(function() {
  		var heightUnits = $(this).val();

  		if (heightUnits == "meters") {
  			$('.protein-calculator input[name="height-tens"]').attr("placeholder", "Meters");
  			$('.protein-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
  			$('.protein-calculator input[name="height-tens"]').val("");
  			$('.protein-calculator input[name="height-units"]').val("");
  		}

  		else if (heightUnits == "feet") {
  			$('.protein-calculator input[name="height-tens"]').attr("placeholder", "Feet");
  			$('.protein-calculator input[name="height-units"]').attr("placeholder", "Inches");
  			$('.protein-calculator input[name="height-tens"]').val("");
  			$('.protein-calculator input[name="height-units"]').val("");
  		}
  	});

  	$('.protein-calculator input[name="weight-system"]').click(function() {
  		var weightUnits = $(this).val();

  		if (weightUnits == "kilos") {
  			$('.protein-calculator input[name="weight"]').attr("placeholder", "Kilograms");
              $('.protein-calculator input[name="weight"]').val("");
  		}

  		else if (weightUnits == "pounds") {
  			$('.protein-calculator input[name="weight"]').attr("placeholder", "Pounds");
              $('.protein-calculator input[name="weight"]').val("");
  		}
  	});

  	$('.protein-calculator .calc-submit').click(function() {
  		var height = 0;
  		var heightTens = parseInt($('.protein-calculator input[name="height-tens"]').val());
  		var heightUnits= parseInt($('.protein-calculator input[name="height-units"]').val());
  		var heightType = $('.protein-calculator input[name="height-system"]:checked').val();
                  var weight = parseInt($('.protein-calculator input[name="weight"]').val());
  		var weightType = $('.protein-calculator input[name="weight-system"]:checked').val();
  		var calories = 0;
  		var age = parseInt($('.protein-calculator input[name=age]').val());
  		var sex = $('.protein-calculator input[name=sex]:checked').val();
  		var job = $('.protein-calculator input[name=activity]:checked').val();
                  var goal = $('.protein-calculator input[name=goal]:checked').val();
                  var protons = 0;

          if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
              $('.protein-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter numerical values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass('animated flipInX');
              });
          }

          else {
              if(isNaN(heightUnits)) {
                  heightUnits = 0;
              }

              if (heightType == "feet") {
                  height = ((heightTens * 30.48) + (heightUnits * 2.54));
              }
              else {
                  height = (heightTens * 100) + heightUnits;
              }

              if (weightType == "pounds") {
                  weight = (weight * 0.453592);
              }

              if (sex == "M") {
                  calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
              }
              else {
                  calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
              }

              switch (job) {
                  case "L":
                      calories = Math.round(calories * 1.1);
                      break;
                  case "M":
                      calories = Math.round(calories * 1.3);
                      break;
                  case "V":
                      calories = Math.round(calories * 1.5);
                      break;
                  case "E":
                      calories = Math.round(calories * 1.7);
                      break;
              }

              switch (goal) {
                  case "fat-loss":
                      if (calories <= 2000) calories = 0.9 * calories;
                      if (calories > 2000) calories = 0.8 * calories;
                      protons = Math.round(0.40 * calories / 4);
                      break;
                  case "maintenance":
                      protons = Math.round(0.30 * calories / 4);
                      break;
                  case "gainz":
                      calories += 500;
                      protons = Math.round(0.30 * calories / 4);
                      break;
              }

              $('.protein-calculator .calc-answer').show(0).html('Target daily protein intake: <span class="calories extra-condensed-regular">' + protons + ' g</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                  $(this).removeClass('animated flipInX');
              });
          }
      });

      $('.carb-calculator input[name="height-system"]').click(function() {
		var heightUnits = $(this).val();

		if (heightUnits == "meters") {
			$('.carb-calculator input[name="height-tens"]').attr("placeholder", "Meters");
			$('.carb-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
			$('.carb-calculator input[name="height-tens"]').val("");
			$('.carb-calculator input[name="height-units"]').val("");
		}

		else if (heightUnits == "feet") {
			$('.carb-calculator input[name="height-tens"]').attr("placeholder", "Feet");
			$('.carb-calculator input[name="height-units"]').attr("placeholder", "Inches");
			$('.carb-calculator input[name="height-tens"]').val("");
			$('.carb-calculator input[name="height-units"]').val("");
		}
	});

	$('.carb-calculator input[name="weight-system"]').click(function() {
		var weightUnits = $(this).val();

		if (weightUnits == "kilos") {
			$('.carb-calculator input[name="weight"]').attr("placeholder", "Kilograms");
            $('.carb-calculator input[name="weight"]').val("");
		}

		else if (weightUnits == "pounds") {
			$('.carb-calculator input[name="weight"]').attr("placeholder", "Pounds");
            $('.carb-calculator input[name="weight"]').val("");
		}
	});

	$('.carb-calculator .calc-submit').click(function() {
		var height = 0;
		var heightTens = parseInt($('.carb-calculator input[name="height-tens"]').val());
		var heightUnits= parseInt($('.carb-calculator input[name="height-units"]').val());
		var heightType = $('.carb-calculator input[name="height-system"]:checked').val();
                var weight = parseInt($('.carb-calculator input[name="weight"]').val());
		var weightType = $('.carb-calculator input[name="weight-system"]:checked').val();
		var calories = 0;
		var age = parseInt($('.carb-calculator input[name=age]').val());
		var sex = $('.carb-calculator input[name=sex]:checked').val();
		var job = $('.carb-calculator input[name=activity]:checked').val();
                var goal = $('.carb-calculator input[name=goal]:checked').val();
                var carbs = 0;

        if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
            $('.carb-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter numerical values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
            });
        }

        else {
            if(isNaN(heightUnits)) {
                heightUnits = 0;
            }

            if (heightType == "feet") {
                height = ((heightTens * 30.48) + (heightUnits * 2.54));
            }
            else {
                height = (heightTens * 100) + heightUnits;
            }

            if (weightType == "pounds") {
                weight = (weight * 0.453592);
            }

            if (sex == "M") {
                calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
            }
            else {
                calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
            }

            switch (job) {
                case "L":
                    calories = Math.round(calories * 1.1);
                    break;
                case "M":
                    calories = Math.round(calories * 1.3);
                    break;
                case "V":
                    calories = Math.round(calories * 1.5);
                    break;
                case "E":
                    calories = Math.round(calories * 1.7);
                    break;
            }

            switch (goal) {
                case "fat-loss":
                    if (calories <= 2000) calories = 0.9 * calories;
                    if (calories > 2000) calories = 0.8 * calories;
                    carbs = Math.round(0.40 * calories / 4);
                    break;
                case "maintenance":
                    carbs = Math.round(0.45 * calories / 4);
                    break;
                case "gainz":
                    calories += 500;
                    carbs = Math.round(0.45 * calories / 4);
                    break;
            }

            $('.carb-calculator .calc-answer').show(0).html('Target daily carb intake: <span class="calories extra-condensed-regular">' + carbs + ' g</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated flipInX');
            });
        }
          });


  });
