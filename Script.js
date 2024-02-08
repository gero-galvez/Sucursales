// Función para inicializar el mapa de Google Maps
function initMap() {
    // Sucursal 1 Tucumán
    var coord1 = {lat: -26.828925525789312, lng: -65.20284158531675} 
    var mapa1 = new google.maps.Map(document.getElementById('mapa1'), {
        center: coord1, // Coordenadas de ejemplo para Buenos Aires, Argentina
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: coord1,
        map: mapa1
    })

    // Sucursal 2, Salta 
    var coord2 = {lat: -24.78461929827841, lng: -65.41316175757916}
    var mapa2 = new google.maps.Map(document.getElementById('mapa2'), {
        center: coord2, // Coordenadas de ejemplo para Buenos Aires, Argentina
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: coord2,
        map: mapa2
    })

    // Sucursal 3, Cordoba 
    var coord3 = {lat: -31.412453734074393, lng:-64.19008235483122}
    var mapa3 = new google.maps.Map(document.getElementById('mapa3'), {
        center: coord3, // Coordenadas de ejemplo para Buenos Aires, Argentina
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: coord3,
        map: mapa3
    })

    // Sucursl 4, Rosario 
    var coord4 = {lat: -32.94202632347451, lng: -60.65140382832887}
    var mapa4 = new google.maps.Map(document.getElementById('mapa4'), {
        center: coord4, // Coordenadas de ejemplo para Buenos Aires, Argentina
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: coord4,
        map: mapa4
    })

    // Sucursl 5, San Lorenzo 
    var coord5 = {lat: -24.78461929827841, lng: -65.41316175757916}
    var mapa5 = new google.maps.Map(document.getElementById('mapa5'), {
        center: coord5, // Coordenadas de ejemplo para Buenos Aires, Argentina
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: coord5,
        map: mapa5
    })

    // Sucursl 6, Bahía Blanca
    var coord6 = {lat: -38.714533160779474, lng: -62.263093442037075}
    var mapa6 = new google.maps.Map(document.getElementById('mapa6'), {
        center: coord6, // Coordenadas de ejemplo para Buenos Aires, Argentina
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: coord6,
        map: mapa6
    })

    // Sucursl 7, Necochea 
    var coord7 = {lat: -38.556654373177736, lng:-58.73461633317272}
    var mapa7 = new google.maps.Map(document.getElementById('mapa7'), {
        center: coord7, // Coordenadas de ejemplo para Buenos Aires, Argentina
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: coord7,
        map: mapa7
    })

}
