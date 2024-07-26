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
        link: RoutePath.ChatbotRegister,
        icon: '/icons/premium.png'
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
        link: RoutePath.ChatbotRegister,
        icon: '/icons/premium.png'
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
        link: RoutePath.ChatbotRegister,
        icon: '/icons/premium.png'
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
                data-aos="zoom-in-up"
                data-aos-duration="2000"
            >
                <div
                    class="item-expense bg-[#D0ECF8] flex flex-col items-center p-9 rounded-xl w-[276px] h-[460px] relative cursor-pointer hover:border-2 hover:bg-slate-100 shadow-tk-btn-2 hover:shadow-tk-btn transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    <p class="font-semibold text-[22px] mb-3">{{ plan.name }}</p>
                    <p class="text-3xl font-bold text-tk-color mb-7">{{ plan.price }}</p>
                    <ul class="list-disc list-inside w-56 tracking-wide mb-9">
                        <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
                    </ul>
                    <RouterLink
                        :to="plan.link"
                        class="button-upgrade flex items-center bg-tk-color text-white text-lg font-semibold px-6 py-2 rounded-2xl shadow-tk-btn-2 absolute bottom-10"
                    >
                        {{ plan.buttonText }}
                        <img
                            v-if="plan.icon"
                            :src="plan.icon"
                            alt="premium"
                            class="icon w-7 ml-2 mb-1"
                        />
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
.item-expense {
    box-shadow:
        rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.button-upgrade {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    /* border-radius: 9999px; */
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
}

/* .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
} */

.button-upgrade:hover {
    transform: scale(1.05);
    border-color: #fff9;
}

.button-upgrade:hover .icon {
    transform: translate(4px);
}

.button-upgrade:hover::before {
    animation: shine 1.5s ease-out infinite;
}

.button-upgrade::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 30%,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
}

@keyframes shine {
    0% {
        left: -100px;
    }

    60% {
        left: 100%;
    }

    to {
        left: 100%;
    }
}
</style>
