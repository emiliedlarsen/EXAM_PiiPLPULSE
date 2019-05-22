    // -------------------------- Navigationsbar -----------------------------

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

// ----------------------------- Google map ---------------------

      function myMap() {
          var mapCanvas = document.getElementById("map");
          var mapOptions = {
              center: new google.maps.LatLng(56.170538, 10.193985),
              zoom: 18
          };
          var map = new google.maps.Map(mapCanvas, mapOptions);
      }


