<template>
    <div className="flex">
        <div className="border p-5" @click="customerBase">
            Customer Base
        </div>
    </div>
</template>

<script>
export default {
    name: "home-view",
    methods: {
        customerBase() {
            this.$router.replace("/customer-details")
        }
    }
};
</script>

<style></style>