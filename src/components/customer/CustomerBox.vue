<template>
    <a-card size="small">
        <a-card-meta>
        </a-card-meta>
        <template #title>
            {{ customer.name }}
        </template>
        <span className="text-gray-900">{{ customer.store }}</span>
        <br>
        <span className="text-gray-500">{{ customer.address }}</span>
        <template #extra>
            <a-button size="small" @click="editCustomer"><font-awesome-icon icon="pencil" style="color: blue;" /></a-button>
            <a-button class="ml-2" size="small"><font-awesome-icon icon="trash" style="color: red;" /></a-button>
        </template>
        <template #actions>
            <a-row>
                <a-col :span="12">
                    <font-awesome-icon icon="phone" style="color: green;" />
                    Phone
                </a-col>
                <a-col :span="12">
                    <font-awesome-icon icon="location-crosshairs" style="color: blue;" />
                    Location
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
        }
    }
};
</script>