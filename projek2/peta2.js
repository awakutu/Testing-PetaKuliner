window.onload = function(){
    let mymap = L.map('mapid').setView([-7.938342, 112.586033], 16);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiaWZpa2FyaWZpbiIsImEiOiJjamxndm83cTQwZjYwM3BvMHBma3dndGJqIn0.6LyWJiWv-yvp7mNPbyebYA'
    }).addTo(mymap);


let gambarArea = document.getElementById("gambarArea");
let reviewArea = document.getElementById("reviewArea");
let img = document.createElement("img");
let par = document.createElement("p");

let places = null;

fetch("./data/peta.json")
    .then(res => res.json())
    .then(res => {
        places = res.places;
        for (var p of places){
            var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
            marker.on("click", showLocation);
        }
    })
    .catch(e => {
        console.log(e);
    });



function showLocation(e) {
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    console.log(ix);
    if(ix >= 0){
        img.src = places[ix].gambar;
        reviewArea.textContent = places[ix].review;
        gambarArea.appendChild(img);
        reviewArea.appendChild(par);
    }
}

function findLocation(x,y) {
    for(var i = 0; i < places.length; i++){
        if(places[i].lokasi[0]== x && places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

}


