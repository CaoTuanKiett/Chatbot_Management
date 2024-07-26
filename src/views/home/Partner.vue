<script setup lang="ts">
import { ref } from 'vue'

interface Partner {
    src: string
    alt: string
    width: string
    height: string
    marginBottom?: string // Optional property
    marginTop?: string // Optional property
}

const partnersRow1 = ref<Partner[]>([
    {
        src: '/icons/Hilton-hotel.svg',
        alt: 'partner1',
        width: '122px',
        height: '100px'
    },
    {
        src: '/icons/intercon.svg',
        alt: 'partner2',
        width: '162px',
        height: '100px'
    },
    {
        src: '/icons/radisson.svg',
        alt: 'partner3',
        width: '200px',
        height: '807px'
    },
    {
        src: '/icons/altara.svg',
        alt: 'partner4',
        width: '100px',
        height: '100px'
    },
    {
        src: '/icons/muongthanh.svg',
        alt: 'partner5',
        width: '146px',
        height: '100px'
    },
    {
        src: '/icons/crowne.svg',
        alt: 'partner6',
        width: '200px',
        height: '300px'
    }
])

const partnersRow2 = ref<Partner[]>([
    {
        src: '/icons/novotel.svg',
        alt: 'partner7',
        width: '130px',
        height: '100px'
    },
    {
        src: '/icons/ala.svg',
        alt: 'partner8',
        width: '134px',
        height: '100px'
    },
    {
        src: '/icons/pullman.svg',
        alt: 'partner9',
        width: '140px',
        height: '100px'
    },
    {
        src: '/icons/goldenbay.svg',
        alt: 'partner10',
        width: '152px',
        height: '152px',
        marginBottom: '9px'
    },
    {
        src: '/icons/marriott.svg',
        alt: 'partner11',
        width: '128px',
        height: '160px',
        marginTop: '6px'
    }
])
</script>

<template>
    <div class="auto relative h-[600px] w-full">
        <div class="z-[1] relative w-full h-full flex flex-col justify-center items-center">
            <h2 class="text-3xl font-semibold text-tk-color tracking-wider pb-14 uppercase">
                Đối tác của chúng tôi
            </h2>
            <div class="flex flex-col items-center gap-9">
                <!-- Render first row of partners -->
                <div
                    class="flex gap-6"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <div
                        v-for="partner in partnersRow1"
                        :key="partner.alt"
                        class="bg-tk-color h-[100px] w-48 flex justify-center items-center rounded-full"
                    >
                        <img
                            :src="partner.src"
                            :alt="partner.alt"
                            :class="[
                                'object-contain',
                                { 'mb-[9px]': partner.marginBottom, 'mt-[6px]': partner.marginTop }
                            ]"
                            :style="{ width: partner.width, height: partner.height }"
                        />
                    </div>
                </div>
                <!-- Render second row of partners -->
                <div
                    class="flex gap-6"
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <div
                        v-for="partner in partnersRow2"
                        :key="partner.alt"
                        class="bg-tk-color h-[100px] w-48 flex justify-center items-center rounded-full"
                    >
                        <img
                            :src="partner.src"
                            :alt="partner.alt"
                            :class="[
                                'object-contain',
                                { 'mb-[9px]': partner.marginBottom, 'mt-[6px]': partner.marginTop }
                            ]"
                            :style="{ width: partner.width, height: partner.height }"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
/* Add your styles here */
</style>
