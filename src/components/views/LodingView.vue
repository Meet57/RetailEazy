<template>
    <a-spin :size="size" />
    <br />
    <div v-if="message" class="text-white text-xl">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'large'
        },
        message: {
            type: String,
            default: null
        }
    }
}
</script>