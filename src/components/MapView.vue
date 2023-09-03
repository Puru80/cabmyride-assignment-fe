<template>
    <GoogleMap :api-key = "api_key"
    style="width: 500px; height: 500px" :center="center" :zoom="15">
        <Marker :options="markerOptions"/>
    </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

const api_key = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 57.144156, lng: -2.114864 };
        const markerOptions = { position: center, label: "1", title: "AB10 1XG" };

        console.log("Google Map API Key: " , api_key)

        return { center, markerOptions, api_key };
    },
});
</script>