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


let places = [
    {"lokasi" : [-7.938787, 112.589171], "sponsor" : "Greenbarn Eatery", "gambar" : "img/greenbarn.jpg","review" : "Sebuah Cafe dengan arsitektur Belanda dengan makanan yang bervariasi"},
    {"lokasi" : [-7.938766, 112.588645], "sponsor" : "Punokawan Cafe", "gambar" : "img/punokawan.jpg","review" : "Memiliki nama uni berasal dari tokoh pewayangan Jawa yakni Punokawan. Resto ini sangat bernuansa etnik "},
    {"lokasi" : [-7.938676, 112.590356], "sponsor" : "Bukit Delight", "review" : "Memiliki konsep cafe modern, cafe ini sangat indah dimalam hari dengan tambahan eskrim yang menggoda dan sate taichan yang nikmat"},
    {"lokasi" : [-7.938851, 112.589102], "sponsor" : "Es Bakar 99 Malang", "review" : "Kedai cantik ini menyajikan beragam variasi kudapan manis berupa eskrim cantik "},
    {"lokasi" : [-7.938830, 112.589611], "sponsor" : "Coklat Klasik Cafe", "review" : "Coklat Klasik menjadi tempat paling nyaman untuk bercerita dengan kawan maupun gebetan. Buka sampai tengah malam, kafe ini tak pernah sepi pengunjung" }
];


for (var p of places){
    var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    marker.on("click", showLocation);
}

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

/*

for (var p of places){
    var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    marker.on("click", showLocation);
}

function showLocation(e) {
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if(i >= 0){
        Image.src = places[ix].gambar;
        parent.textContent = places[ix].review;
    }
}

function findLocation(x,y) {
    for(var i = 0; i < places.length; i++){
        if(places[i].lokasi[0]== x && places[i].lokasi[i] == y) {
            return i;
        }
    }
    return -1;
}
*/