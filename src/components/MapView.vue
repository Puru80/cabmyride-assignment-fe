<template>
    <GoogleMap :api-key="api_key" style="width: 1000px; height: 700px" :center="center" :zoom="3">
        <!-- <Marker :options="markerOptions" /> -->
        <Marker v-for="(location, i) in markerOptions" :options="location" :key="i" />
    </GoogleMap>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

const api_key = import.meta.env.VITE_GOOGLE_MAP_API_KEY

const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "green",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
};

const markerOptions = [];

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {

        console.log("Google Map API Key: ", api_key)

        return {
            markerOptions,
            api_key,
        };
    },
    methods: {
        created() {
            // Make a GET request to the API
            axios
                .get("http://127.0.0.1:8080/api/v1/postCodes/111") 
                
                .then((response) => {
                    const dataList = response.data; // Update the dataList with the fetched data
                    // console.log("PostalCodes[Inside axios]: ", this.dataList)

                    dataList.forEach(element => {
                        let center = { lat: element.latitude, lng: element.longitude };
                        let markerOption = { position: center, label: element.id, title: element.postCode};

                        if(element.so)
                            markerOption = { position: center, label: element.id, title: element.postCode, icon: svgMarker };

                        // console.log(markerOption)

                        this.markerOptions.push(markerOption)
                    });

                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
            
        },
    }, 
    mounted() {
        this.created()
    }
});
</script>