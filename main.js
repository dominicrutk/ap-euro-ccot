let sidebarEventOpen = false;
let sidebarEvents = [];

// Map initialization
const map = L.map('map', {
    center: [52.516278, 13.377683],
    zoom: 4
});
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZG9taW5pY3J1dGtvd3NraSIsImEiOiJjam83dzNkY2EwMnY3M3FwMGE3b281MjNvIn0.6gd3c6kSnu3bd8gaQdck-Q'
}).addTo(map);

const goToEvent = function (eventTitle) {
    for (let eventName in events) {
        let event = events[eventName];
        if (event.title === eventTitle) {
            document.getElementById('event-name').innerHTML = event.title;
            document.getElementById('event-description').innerHTML = event.parsedDescription;
            document.getElementById('back-button').addEventListener('click', goBack);
            map.flyTo([event.latitude, event.longitude]);
            sidebarEventOpen = true;
            break;
        }
    }
};

// Go back event handler
const goBack = function () {
    sidebarEventOpen = false;
    document.getElementById('event-name').innerHTML = 'Event Selection';
    let eventsList = '';
    for (let event of sidebarEvents) {
        eventsList += `<button class="event-list-item">${event.title}</button>`;
    }
    document.getElementById('event-description').innerHTML = eventsList;
    document.querySelectorAll('#event-description > button.event-list-item').forEach(element => {
        element.addEventListener('click', () => {
            goToEvent(element.innerHTML);
        });
    });
    map.flyTo([52.516278, 13.377683], 4);
};

// Marker initialization
for (let eventName in events) {
    let event = events[eventName];

    // Parse event title (name + date)
    event.title = `${event.name} (${event.startYear}` + (event.startYear !== event.endYear ? `-${event.endYear}` : '') + ')';

    // Parse event description (paragraphs + images + captions)
    event.parsedDescription = '<p id="back-button">&lt;&lt; Back</p>';
    for (let element of event.description) {
        if (element.type === 'p') {
            event.parsedDescription += `<p>${element.text}</p>`;
        } else if (element.type === 'img') {
            event.parsedDescription += `<figure><img src="${element.image}" alt="The image failed to load."><figcaption>${element.caption}</figcaption></figure>`;
        }
    }

    // Display marker on map
    event.marker = L.marker([event.latitude, event.longitude]).addTo(map);

    // Display event info when marker is clicked
    event.marker.on('click', () => {
        goToEvent(event.title);
    });

    // Display popup when marker is hovered over
    event.marker.bindPopup(event.title, {
        closeButton: false
    });
    event.marker.on('mouseover', () => {
       event.marker.openPopup();
    });
    event.marker.on('mouseout', () => {
        event.marker.closePopup();
    });

    sidebarEvents.push(event);
}

function updateMap(criteria) {
    for (let eventName in events) {
        let event = events[eventName];
        if (criteria(event.category)) {
            event.marker.addTo(map);
        } else {
            event.marker.removeFrom(map);
        }
    }
}

goBack();
