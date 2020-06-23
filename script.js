script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcD4ZHxk-oaZEKVMkFT3BuyqgYVKkEATY&callback=initMap';
script.defer = true;
script.async = true;

function initMap() {     
     const map = new google.maps.Map(document.getElementById("map"), {zoom: 12, center: {lat:6.4595445, lng: 7.4931562} })
     var marker = new google.maps.Marker({position: place, map: map});

};

// var markerArray = [
//           {
//                "SITE ID": "EN0647",
//                "SITE STATUS": "2G & 3G",
//                "SITE TYPE (INDOOR/OUTDOOR)": "OUTDOOR",
//                "PRIORITY": "P1",
//                "VIP": "NO",
//                "HUB": "NO",
//                "HOST NAME": "I H S",
//                "ALPHA CITY": "RON",
//                "LGA": "IGBO-EZE-SOUTH",
//                "OLD_AIRTEL_REGION": "SOUTH",
//                "NEW_AIRTEL_REGION": "SOUTH",
//                "STATE": "ENUGU",
//                "HW REGIONS": "SOUTH CENTRAL",
//                "AIRTEL_ZONE": "ENUGU ZONE",
//                "NEW_AIRTEL_ZONE": "ENUGU ZONE 1",
//                "SITE CLASSIFICATION": "BRONZE",
//                "LONGITUDE": "7.0049999999999999",
//                "LATITUDE": "7.3250000000000002",
//                "SITE ADDRESS": "AKPANYA COMMUNITY",
//                "FME": " IGALAMELE/ODOLU LGA"
//           },
//         {
//             "SITE ID": "EN0547",
//             "SITE STATUS": "2G",
//             "SITE TYPE (INDOOR/OUTDOOR)": " 3G & 4G",
//             "PRIORITY": "OUTDOOR",
//             "VIP": "P0",
//             "HUB": "NO",
//             "HOST NAME": "NO",
//             "ALPHA CITY": "ATC",
//             "LGA": "ENUGU",
//             "OLD_AIRTEL_REGION": "NSUKKA",
//             "NEW_AIRTEL_REGION": "SOUTH",
//             "STATE": "SOUTH",
//             "HW REGIONS": "ENUGU",
//             "AIRTEL_ZONE": "SOUTH CENTRAL",
//             "NEW_AIRTEL_ZONE": "ENUGU ZONE",
//             "SITE CLASSIFICATION": "ENUGU ZONE 1",
//             "LONGITUDE": "SILVER",
//             "LATITUDE": "7.3748899999999997",
//             "SITE ADDRESS": "6.8316699999999999",
//             "FME": "PIECE OF LAND ALONG UWANI-UGWU VILLAGE RD"
//         },
//         {
//             "SITE ID": "EN0628",
//             "SITE STATUS": "2G & 3G",
//             "SITE TYPE (INDOOR/OUTDOOR)": "OUTDOOR",
//             "PRIORITY": "P1",
//             "VIP": "NO",
//             "HUB": "NO",
//             "HOST NAME": "I H S",
//             "ALPHA CITY": "RON",
//             "LGA": "OJI-RIVER",
//             "OLD_AIRTEL_REGION": "SOUTH",
//             "NEW_AIRTEL_REGION": "SOUTH",
//             "STATE": "ENUGU",
//             "HW REGIONS": "SOUTH CENTRAL",
//             "AIRTEL_ZONE": "ENUGU ZONE",
//             "NEW_AIRTEL_ZONE": "ENUGU ZONE 1",
//             "SITE CLASSIFICATION": "SILVER",
//             "LONGITUDE": "6.0724999999999998",
//             "LATITUDE": "7.32",
//             "SITE ADDRESS": "A PARCEL OF LAND INFRONT OF MR. THEOPHILUS OFU COMPOUND",
//             "FME": " UMUAKATA ISIAMA AWLAW"
//         },
        
// ]

// for(let i = 0; i < markerArray.length; i++) {
//     addMarker()

// }

var place = {lat:6.4354518, lng: 7.4826216}

// function addMarker() {
//      marker = new google.maps.Marker({position:place, map: map, });
     
// }

// document.head.appendChild(script);
document.head.appendChild(script);


