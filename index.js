let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        // center: { lat: -34.397, lng: 150.644 },
        center: { lat: 49.23403216617231, lng: 28.46654095998418 },
        zoom: 15,
    });

    const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 49.23403216617231, lng: 28.46654095998418 },
    });
}
initMap();

