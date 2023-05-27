<template>
    <div className="border px-5 py-2 text-indigo-950">
        <div className="flex justify-between align-middle">
            Customer Details
            <a-button @click="() => { modelToggle = true }">Add</a-button>
        </div>
        <div className="mt-2">
            <a-input v-model:value="value" placeholder="Search Customer" />
        </div>
    </div>
    <div className="px-5">
        <div className="my-2" v-for="customer in customerDetails">
            <customer-box :customer="customer" @editCustomer="editCustomer" />
        </div>
    </div>
    <model-view :visible="modelToggle" :okText="modelContent.id == undefined ? 'Save' : 'Update'" @okClicked="handleOk"
        @cancelClicked="handleClose">
        <template #header>
            <div v-if="modelContent.id == undefined">
                New Customer
            </div>
            <div v-else>
                Edit Customer: {{ modelContent.name }}
            </div>
        </template>
        <div className="mt-2"><a-input v-model:value="modelContent.name" addonBefore="Name" /></div>
        <div className="mt-2"><a-input v-model:value="modelContent.store" addonBefore="Store" /></div>
        <div className="mt-2"><a-input-number v-model:value="modelContent.phone" addonBefore="Number" /></div>
        <div className="mt-2"><a-input v-model:value="modelContent.address" addonBefore="Address" /></div>
        <div className="mt-2 flex justify-between items-center">
            <a-button @click="grabGeoLocation">Location</a-button>
            <p v-if="modelContent.longitude != undefined" className="text-green-400 m-0 p-0">Geo Location Captured</p>
        </div>
    </model-view>
</template>

<script>

import { customerStore } from '@/stores/CustomerStore.js'
import { mapState, mapActions } from 'pinia'
import CustomerBox from './CustomerBox.vue'
import ModalView from '../views/ModalView.vue';

export default {
    name: "customer-details",
    components: {
        'customer-box': CustomerBox,
        'model-view': ModalView
    },
    data() {
        return {
            value: "",
            modelToggle: false,
            modelContent: {}
        }
    },
    mounted() {
        if (this.getCustomerDetails.length == 0) {
            this.fetchCustomerData()
        }
    },
    computed: {
        ...mapState(customerStore, ['getCustomerDetails']),
        customerDetails() {
            if (this.value.length > 0) {
                return this.getCustomerDetails.filter(
                    (customerDetails) => {
                        if (customerDetails.name.toLowerCase().includes(this.value.toLowerCase()) || customerDetails.store.toLowerCase().includes(this.value.toLowerCase())) {
                            return true
                        }
                        return false
                    }
                )
            }
            return this.getCustomerDetails
        }
    },
    methods: {
        ...mapActions(customerStore, ['fetchCustomerData', 'addNewCustomer']),
        handleOk() {
            if (this.modelContent.id == undefined) {
                this.modelToggle = false
                this.addNewCustomer(this.modelContent)
                this.modelContent = {}
            } else {
                this.modelToggle = false
                this.modelContent = {}
            }
        },
        handleClose() {
            this.modelToggle = false
        },
        showPosition(position) {
            this.modelContent.latitude = position.coords.latitude
            this.modelContent.longitude = position.coords.longitude;
        },
        grabGeoLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                alert("Geolocation is not supported by this browser.")
            }
        },
        editCustomer(data) {
            this.modelContent = this.getCustomerDetails.filter((customer) => customer.id == data)[0]
            this.modelToggle = true
        }
    }
};
</script>