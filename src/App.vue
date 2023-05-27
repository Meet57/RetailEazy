<template>
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

export default {
    data() {
        return {
            name: "Vue.js"
        };
    },
    components: {
        NavigationBar,
        FixedViewScroll
    }
}
</script>

<style>
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