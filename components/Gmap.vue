<template>
    <div>
        <h2>GMap</h2>
        <GoogleMap api-key:AIzaSyDiqmN8zt_5hTBV0NM-xoPpJl1F-y322_4 :center="center" :zoom="zoom" style="width: 100%; height: 400px">
            <!-- Display postcode markers here -->
            <!-- <GmapMarker v-for="postcode in postcodes" :key="postcode.id" :position="postcodeLatLng(postcode)"
                :icon="postcode.isSOArea ? '/so-marker.png' : '/normal-marker.png'" /> -->
        </GoogleMap>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 40.689247, lng: -74.044502 };

        return { center };
    },
});
</script>


<style scoped>
/* Add CSS styles for the map component */
</style>