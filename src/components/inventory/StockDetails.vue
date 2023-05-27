<template>
    <div className="border px-5 py-2">
        Inventory
    </div>
    <div className="px-5">
        <template v-for="i in [1,2,3,4,5,6,7,8,9,10]">
            <inventory-item />
        </template>
    </div>
</template>
  
<script>
import InventoryItem from './InventoryItem.vue';

export default {
    components: {
        "inventory-item": InventoryItem
    }
};
</script>
  