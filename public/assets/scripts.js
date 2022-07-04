let map, markers = null;
let defaultLatitude = -17.3131921;
let defaultLongitude = -65.8829336;

jQuery(function () {
    console.log("Web App Loaded...");
    init();
})

function init() {
    map = L.map('map').setView([defaultLatitude, defaultLongitude], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    markers = L.layerGroup().addTo(map);
}