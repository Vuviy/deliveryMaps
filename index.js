
async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
        center: { lat: 49.23403216617231, lng: 28.46654095998418 },
        zoom: 14,
        mapId: "4504f8b37365c3d0",
    });
    // const marker = new AdvancedMarkerElement({
    //     map,
    //     position: { lat: 49.23403216617231, lng: 28.46654095998418 },
    // });
}

initMap();