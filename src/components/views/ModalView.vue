<template>
    <a-modal :visible="visible" :okText="okText" :cancelText="cancelText" @ok="handleOk" @cancel="handleCancel">
        <template v-slot:title>
            <slot name="header"></slot>
        </template>
        <slot></slot>
    </a-modal>
</template>
  
<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        cancelText: {
            type: String,
            default: "Close"
        },
        okText: {
            type: String,
            default: "Ok"
        }
    },
    methods: {
        handleOk() {
            this.$emit('okClicked');
        },
        handleCancel() {
            this.$emit('cancelClicked');
        },
    },
};
</script>
  