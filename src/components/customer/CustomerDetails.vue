<template>
    <div>
        <div className="border px-5 py-2">
            Customer Details
        </div>
        <div className="px-5">
            <div className="my-2" v-for="customer in getCustomerDetails">
                <customer-box :customer="customer" />
            </div>
        </div>
    </div>
</template>

<script>

import { customerStore } from '@/stores/CustomerStore.js'
import { mapState, mapActions } from 'pinia'
import CustomerBox from './CustomerBox.vue'

export default {
    name: "customer-details",
    components: {
        'customer-box': CustomerBox
    },
    data() {
        return {
        }
    },
    mounted() {
        this.getCustomerData()
    },
    computed: {
        ...mapState(customerStore, ['getCustomerDetails'])
    },
    methods: {
        ...mapActions(customerStore, ['getCustomerData'])
    }
};
</script>