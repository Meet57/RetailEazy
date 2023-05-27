<template>
    <div className="fixedviewscroll">
        <slot></slot>
    </div>
</template>

<style>
.fixedviewscroll {
    height: calc(100% - 80px);
    overflow-y: auto;
}
</style>