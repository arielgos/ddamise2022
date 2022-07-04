let map, markers = null;
let defaultLatitude = -17.3131921;
let defaultLongitude = -65.8829336;

/**
 * Firebase Realtime Database
 */
const database = firebase.database();

// database reference
const databaseReference = firebase.database().ref('users');

// firebase listener/observer
databaseReference.on('child_added', (snapshot) => {
    console.log(snapshot.val().username);
}, (error) => {
    console.error(error);
});

$(function () {
    console.log("Web App Loaded...");

    init();

    $('form').submit(function (event) {
        let name = $('form input#name').val();

        let newUser = databaseReference.push();
        newUser.set({
            username: name,
            latitude: 0,
            longitude: 0
        }).then(function () {
            $('#login').hide();
        });

        event.preventDefault();
    });
})

function loading(status) {
    if (status) {
        $('#loading').show();
    } else {
        $('#loading').hide();
    }
}

function init() {
    map = L.map('map').setView([defaultLatitude, defaultLongitude], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    markers = L.layerGroup().addTo(map);

    loading(false);

    $('#login').show();
}


