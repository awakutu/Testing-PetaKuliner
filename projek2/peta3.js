window.onload = function () {
    let gambarArea = document.getElementById("gambar");
    let reviewArea = document.getElementById("review");
    let img = document.createElement("img");
    let par = document.createElement("p");
    gambarArea.appendChild(img);
    reviewArea.appendChild(par);
  
  
    let mymap = L.map('mapid').setView([-7.938342, 112.586033], 16);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiaWZpa2FyaWZpbiIsImEiOiJjamxndm83cTQwZjYwM3BvMHBma3dndGJqIn0.6LyWJiWv-yvp7mNPbyebYA'
    }).addTo(mymap);
  
  
    let places = null;
  
    fetch("./data/peta.json")
      .then(res => res.json())
      .then(res => {
        places = res.places;
        for (var place of places) {
          let marker = L.marker(place.lokasi).addTo(mymap)
            .bindPopup(place.sponsor);
          marker.on("click", showReview);
        }
      })
      .catch(e => {
        console.log(e);
      });
  
  
    function showReview(e) {
      let ix = findLocation(e.latlng.lat, e.latlng.lng);
      if (ix >= 0) {
        img.src = places[ix].gambar;
        reviewArea.textContent = places[ix].review;
      }
    }
  
    function findLocation(x, y) {
      for (var i = 0; i < places.length; i++) {
  
        if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
          return i;
        }
      }
      return -1;
    }
  
  }