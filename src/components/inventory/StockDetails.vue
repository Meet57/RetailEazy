<template>
    <div className="border px-5 py-2">
        Inventory
    </div>
    <div className="px-5">
        <template v-for="i in [1, 2, 3]">
            <inventory-item />
        </template>
    </div>
</template>
  
<script>
import { inventoryStore } from '@/stores/InventoryStore.js'
import { mapState, mapActions } from 'pinia'
import InventoryItem from './InventoryItem.vue';

export default {
    components: {
        "inventory-item": InventoryItem
    },
    mounted() {
        this.fetchInventoryDetails()
    },
    computed: {
        ...mapState(inventoryStore, ['getInventoryDetails']),
    },
    methods: {
        ...mapActions(inventoryStore, ['fetchInventoryDetails']),
    }
};
</script>
  