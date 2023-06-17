<template>
    <!-- <div class="loading-screen flex flex-col items-center justify-center">
        <LoadingView :size="'large'" :message="'Meet'" />
    </div> -->
    <div class="scrollable-container">
        <div class="fixed-div">
            <NavigationBar />
        </div>
        <div class="scrollable-content">
            <router-view />
        </div>
    </div>
</template>

<script>
import NavigationBar from './components/navigation/NavigationBar.vue';
import FixedViewScroll from './components/views/FixedViewScroll.vue';
import LoadingView from './components/views/LodingView.vue'

export default {
    data() {
        return {
            name: "Vue.js"
        };
    },
    components: {
        NavigationBar,
        FixedViewScroll,
        LoadingView
    }
}
</script>

<style>
.loading-screen {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
}

.scrollable-container {
    position: relative;
    height: 100vh;
    overflow-y: auto;
}

.fixed-div {
    position: sticky;
    top: 0;
    height: 80px;
    z-index: 99;
    background-color: #f0f0f0;
}

.scrollable-content {}
</style>