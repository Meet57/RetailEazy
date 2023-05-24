<template>
    <div className="fixedviewscroll">
        <slot></slot>
    </div>
</template>

<style>
.fixedviewscroll {
    height: 100%;
    overflow-y: scroll;
}
</style>