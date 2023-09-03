<script setup lang="ts">
import Map from './components/Gmap.vue'
</script>

<template>
    <header>
        <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

        <div class="wrapper">
            <Map/>
        </div>
    </header>

    <main>
        <TheWelcome />
    </main>
</template>