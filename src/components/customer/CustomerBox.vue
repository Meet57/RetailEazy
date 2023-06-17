<template>
    <a-card size="small">
        <a-card-meta>
        </a-card-meta>
        <template #title>
            <div className="flex items-center">
                <div className="text-2xl mr-2">
                    {{ customer.name }}
                </div>
                <!-- <a-popconfirm title="Delete" @confirm="deleteCustomer" ok-text="Yes">
                    <font-awesome-icon icon="trash" style="color: red;" />
                </a-popconfirm> -->
            </div>
        </template>
        <span className="text-gray-900">{{ customer.store }}</span>
        <br>
        <span className="text-gray-500">{{ customer.address }}</span>
        <template #extra>
            <span @click="editCustomer"><font-awesome-icon icon="pencil" style="color: blue;" /></span>
        </template>
        <template #actions>
            <a-row>
                <a-col :span="12">
                    <a :href="'tel:' + customer.phone" className="text-xs">
                        <font-awesome-icon icon="phone" style="color: green;" />
                        <br />
                        {{ customer.phone }}
                    </a>
                </a-col>
                <a-col :span="12">
                    <a className="text-xs" v-if="customer.latitude != undefined && customer.latitude != undefined"
                        :href="'https://maps.google.com/?q=' + customer.latitude + ',' + customer.longitude">
                        <font-awesome-icon icon="location-crosshairs" style="color: blue;" />
                        <br />
                        Google Map
                    </a>
                    <div v-else className="text-xs">
                        <font-awesome-icon icon="location-crosshairs" style="color: blue;" />
                        <br />
                        Location not present
                    </div>
                </a-col>
            </a-row>
        </template>
    </a-card>
</template>

<script>
export default {
    name: "customer-box",
    props: ['customer'],
    methods: {
        editCustomer(event) {
            this.$emit('editCustomer', this.customer.id)
        },
        deleteCustomer(event) {
            this.$emit('deleteCustomer', this.customer.id)
        }
    }
};
</script>