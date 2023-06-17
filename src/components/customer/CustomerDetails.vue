<template>
    <div className="border px-5 py-2 text-indigo-950">
        <div className="flex justify-between item-center">
            <span className="text-xl">Customer Details</span>
            <a-button @click="() => { modelToggle = true }">Add</a-button>
        </div>
        <div className="mt-2">
            <a-input v-model:value="value" placeholder="Search Customer" />
        </div>
    </div>
    <div className="px-5">
        <div className="my-2" v-for="customer in customerDetails">
            <customer-box :customer="customer" @editCustomer="editCustomer" @deleteCustomer="deleteCustomerFn" />
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
        <form id="customer-form">
            <div className="mt-2"><a-input v-model:value="modelContent.name" addonBefore="Name" /></div>
            <div className="mt-2"><a-input v-model:value="modelContent.store" addonBefore="Store" /></div>
            <div className="mt-2"><a-input-number v-model:value="modelContent.phone" addonBefore="Number" /></div>
            <div className="mt-2"><a-input v-model:value="modelContent.address" addonBefore="Address" /></div>
        </form>
        <div className="mt-2 flex justify-between items-center">
            <a-button @click="grabGeoLocation">Location</a-button>
            <p v-if="modelContent.longitude != undefined" className="text-green-900 text-xs m-0 p-0">
                Geo Location:
                {{ modelContent.latitude.toString().slice(0, 5) }},
                {{ modelContent.longitude.toString().slice(0, 5) }}
            </p>
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
        this.fetchCustomerData()
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
        ...mapActions(customerStore, ['fetchCustomerData', 'addNewCustomer', 'deleteCustomer']),
        handleOk() {
            this.modelToggle = false
            this.addNewCustomer(this.modelContent)
            this.modelContent = {}
        },
        handleClose() {
            this.modelToggle = false
            this.modelContent = {}
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
        editCustomer(id) {
            this.modelContent = this.getCustomerDetails.filter((customer) => customer.id == id)[0]
            this.modelToggle = true
        },
        deleteCustomerFn(id) {
            this.deleteCustomer(id)
        }
    }
};
</script>