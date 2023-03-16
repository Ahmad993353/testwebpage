//Initialize map 
var map_init = L.map('map', {
            center: [3.0652232, 101.4926983],
            zoom: 10
        });
        var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map_init);
        L.Control.geocoder().addTo(map_init);
        if (!navigator.geolocation) {
            console.log("Your browser doesn't support geolocation feature!")
        } else {
        };
// Define the custom icon
var myIcon = L.icon({
  iconUrl: 'images/car.ico',
  iconSize: [35, 35],
  iconAnchor: [19, 35],
  popupAnchor: [0, -35]
});
// Fetch the JSON data from the external file or API endpoint
fetch('payload.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the driving history objects and extract the coordinates
    data['driving-history'].forEach(item => {
      const lat = item.latitude;
      const lng = item.longitude;
      // Create a new marker and add it to the map
      var marker = L.marker([lat, lng], { icon: myIcon }).addTo(map_init);
    });
  });