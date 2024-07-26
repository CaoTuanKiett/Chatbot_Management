<script setup lang="ts">
import { RoutePath } from '@/router'
// import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="hero w-full h-[740px] relative bg-slate-300">
        <div class="hero-container w-full h-full flex flex-col items-start justify-center pl-40">
            <h3
                class="text-6xl font-semibold text-white mb-6"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                Tối ưu hóa du lịch,<br />
                nâng tầm trải nghiệm
            </h3>
            <p
                class="text-xl text-white mb-6 font-thin"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
                Tự động hóa hệ thống, giảm chi phí, tối ưu vận hành <br />
                và nâng cao trải nghiệm khách hàng với dịch vụ AI 24/7.
            </p>
            <RouterLink
                :to="RoutePath.ChatbotRegister"
                class="flex bg-[#f6f1f1] justify-center items-center px-3 py-1 rounded-md shadow-tk-btn-2"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="2500"
            >
                <img src="/icons/icon-bot.svg" alt="icon-bot" />
                <span class="text-[#0879A6] font-semibold ml-2">TẠO CHATBOT CHO DOANH NGHIỆP</span>
            </RouterLink>
        </div>
        <img
            src="/icons/cloud2.svg"
            alt="bg-hero"
            class="absolute bottom-0 right-0"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2500"
        />
        <img
            src="/icons/cloud1.svg"
            alt="bg-hero"
            class="absolute bottom-0 right-0 left-0 w-full"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1700"
        />

        <img
            src="/images/bot.png"
            alt="bg-hero"
            class="absolute bottom-40 right-40 w-96"
            data-aos="flip-right"
            data-aos-duration="1600"
        />
    </div>
</template>

<style>
.hero {
    background-image: url('/images/HeroPage.png');
}

.hero-container {
    /* height: 100%; */
    /* background-image: image('/images/bg-hero.png'); */
}
</style>
