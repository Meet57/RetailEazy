<template>
    <div className="my-2">
        <a-card size="small">
            <template #title>
                Product Name
            </template>
            <template #extra>
                <a-button size="small" style="font-size: 10px;">
                    Edit
                </a-button>
            </template>
            <div>
                <p><strong>Quantity:</strong> 14</p>
                <p><strong>Price:</strong> Rs. 50</p>
            </div>
        </a-card>
    </div>
</template>
  
<script>
export default {
};
</script>
  