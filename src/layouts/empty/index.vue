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
    <div class="mt-28 mb-16">
        <slot />
    </div>
</template>

<style lang="less" scoped></style>
