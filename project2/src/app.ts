import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const GOOGLE_API_KEY = "hiding";

// declare var google : any;

type GoogleGeocodingResponse = {
    results: {geometry: {location: {lat: number, lng: number}}}[];
    status: "OK" | "ZERO_RESULTS";
};

const searchAddressHandler = (event: Event) => {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // send this to google api
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`).then(response => {
        if (response.data.status !== "OK") {
            // throw new Error(response.data);
            console.log(response);
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map")!, {
            center: coordinates,
            zoom: 8,
        });
        new google.maps.Marker({position: coordinates, map: map});
        console.log(response);
    }).catch(err => {
        // alert(err.message);
        console.log(err);
    });
};

form?.addEventListener('submit',searchAddressHandler);