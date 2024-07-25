<script setup lang="ts">
import Navbar from '@/components/shared/Navbar.vue'
import { ref } from 'vue'

const showCurtain = ref(true)

setTimeout(() => {
    showCurtain.value = false // Show only 500ms for "đẹp" purpose
}, 500)
</script>

<template>
    <Curtain :show="showCurtain" />
    <Navbar />
    <div class="default-component">
        <slot />
    </div>
</template>

<style lang="less" scoped>
.default-component {
    // box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    //     rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
</style>
