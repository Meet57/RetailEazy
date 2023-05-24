<template>
    <div>
        <navigation-bar />
        <router-view />
    </div>
</template>

<script>
import NavigationBar from './components/navigation/NavigationBar.vue';

export default {
    data() {
        return {
            name: "Vue.js"
        };
    },
    components: {
        "navigation-bar": NavigationBar
    }
}
</script>