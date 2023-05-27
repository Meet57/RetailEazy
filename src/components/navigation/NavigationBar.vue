<template>
    <div className="bg-indigo-950 text-white px-5 flex justify-between place-items-center navigation-bar">
        <div className="text-xl">
            Retail Eazy
        </div>
        <button @click="home" className="border border-white p-2">
            Home
        </button>
    </div>
</template>

<script>
export default {
    name: "Navigation-Bar",
    methods: {
        home() {
            this.$router.replace("/")
        }
    }
};
</script>

<style>
.navigation-bar {
    min-height: 80px;
}
</style>