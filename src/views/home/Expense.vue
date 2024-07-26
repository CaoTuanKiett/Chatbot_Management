<script setup lang="ts">
import { RoutePath } from '@/router'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Define the plans array
const plans = ref([
    {
        name: 'Gói miễn phí',
        price: '0 VND',
        features: [
            '100 tin nhắn/1 tháng',
            'Nhúng vào các trang web không giới hạn',
            '1 chatbot',
            'Xem lịch sử cuộc trò chuyện'
        ],
        buttonText: 'Dùng thử ngay',
        link: RoutePath.ChatbotRegister
    },
    {
        name: 'Gói cơ bản',
        price: '399.000 VND',
        features: [
            '3.000 tin nhắn/tháng',
            '2 chatbot',
            'Nhúng vào các trang web không giới hạn',
            'Tải lên nhiều tệp',
            'Xem lịch sử cuộc trò chuyện'
        ],
        buttonText: 'Nâng cấp ngay',
        link: RoutePath.ChatbotRegister
    },
    {
        name: 'Gói nâng cao',
        price: '599.000 VND',
        features: [
            '10.000 tin nhắn/tháng',
            '8 chatbot',
            'Nhúng vào các trang web không giới hạn',
            'Tải lên nhiều tệp',
            'Xem lịch sử cuộc trò chuyện'
        ],
        buttonText: 'Nâng cấp ngay',
        link: RoutePath.ChatbotRegister
    },
    {
        name: 'Gói chuyên nghiệp',
        price: '999.000 VND',
        features: [
            '50.000 tin nhắn/tháng',
            '10 chatbot',
            'Nhúng vào các trang web không giới hạn',
            'Tải lên nhiều tệp',
            'Xem lịch sử cuộc trò chuyện'
        ],
        buttonText: 'Nâng cấp ngay',
        link: RoutePath.ChatbotRegister
    }
])
</script>

<template>
    <div class="w-full bg-white flex flex-col justify-center items-center py-14">
        <h2 class="text-[26px] font-semibold text-tk-color tracking-wider pb-3">
            CHI PHÍ CỦA VAIAS
        </h2>
        <p class="text-tk-color mb-9 text-xl">Giải pháp tốt nhất cho khách hàng của chúng tôi</p>
        <div class="flex items-center gap-8">
            <!-- Use v-for to render plans dynamically -->
            <div
                v-for="plan in plans"
                :key="plan.name"
                class="item-expense bg-[#D0ECF8] flex flex-col items-center p-9 rounded-xl w-[270px] h-[460px] relative"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <p class="font-semibold text-[22px] mb-3">{{ plan.name }}</p>
                <p class="text-3xl font-bold text-tk-color mb-7">{{ plan.price }}</p>
                <ul class="list-disc list-inside w-56 tracking-wide mb-9">
                    <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
                </ul>
                <RouterLink
                    :to="plan.link"
                    class="bg-tk-color text-white text-lg font-semibold px-6 py-2 rounded-md shadow-tk-btn-2 absolute bottom-10"
                >
                    {{ plan.buttonText }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style>
/* Add your styles here */
.item-expense {
    box-shadow:
        rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
</style>
