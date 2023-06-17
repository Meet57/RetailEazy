<template>
    <div className="flex p-5">
        <div className="border w-6/12 m-1 text-center bg-cyan-900 text-white p-5" @click="inventoryPage">
            Inventory
        </div>
        <div className="border w-6/12 m-1 text-center bg-cyan-900 text-white p-5" @click="customerBasePage">
            Customer Base
        </div>
    </div>
</template>

<script>
export default {
    name: "home-view",
    methods: {
        customerBasePage() {
            this.$router.replace("/customer-details")
        },
        inventoryPage() {
            this.$router.replace("/inventory")
        }
    }
};
</script>

<style></style>