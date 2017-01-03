//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
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


  });
                    
