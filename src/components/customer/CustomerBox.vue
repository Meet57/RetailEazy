<template>
    <a-card size="small">
        <a-card-meta :title="customer.name" :description="customer.store">
        </a-card-meta>
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
    props: ['customer']
};
</script>