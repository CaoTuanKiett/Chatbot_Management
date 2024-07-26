<template>
    <div class="bg-tk-color w-full h-[900px] flex flex-col items-center pt-16">
        <h2 class="text-white font-semibold text-[26px] pb-2 tracking-wider uppercase">
            Tính Năng
        </h2>
        <span class="border-b-[4px] border-white w-16 h-1"></span>
        <div class="flex flex-wrap justify-center items-center gap-7 mt-10 px-9">
            <div
                v-for="feature in features"
                :key="feature.title"
                class="card bg-white w-[360px] h-[300px] rounded-xl flex justify-center items-center"
            >
                <div class="px-8 py-12">
                    <img :src="feature.icon" :alt="feature.title" class="mb-4" />
                    <h3 class="text-tk-color text-2xl font-semibold pb-5">
                        {{ feature.title }}
                    </h3>
                    <p class="text-tk-color">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
    {
        icon: '/icons/oclock.svg',
        title: 'Chatbot AI tự động 24/7',
        description: 'Cung cấp dịch vụ tư vấn, hỗ trợ đặt phòng và chăm sóc khách hàng.'
    },
    {
        icon: '/icons/flash.svg',
        title: 'Tích hợp đa kênh',
        description:
            'Dễ dàng kết nối với các nền tảng như Messenger, Booking.com và tích hợp trên các API khác.'
    },
    {
        icon: '/icons/flash.svg',
        title: 'Tối ưu hóa chi phí nhân sự',
        description: 'Giảm bớt công việc thủ công và tăng hiệu suất làm việc của nhân viên.'
    },
    {
        icon: '/icons/plane.svg',
        title: 'Hạ tầng đám mây mạnh mẽ',
        description:
            'Sử dụng Google Cloud và Amazon Web Services để đảm bảo hệ thống luôn ổn định và dễ dàng mở rộng.'
    },
    {
        icon: '/icons/delivery.svg',
        title: 'Dễ dàng tùy chỉnh và mở rộng',
        description:
            'Cho phép doanh nghiệp thêm dữ liệu, điều chỉnh chatbot và tùy biến giao diện theo nhu cầu riêng.'
    }
])
</script>

<style>
/* Add your styles here */

.card {
    overflow: hidden;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow:
        rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    /* cursor: pointer; */
}

.card:hover {
    transform: rotateY(10deg) rotateX(10deg) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.06));
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
}

.card:hover:before {
    transform: translateX(-100%);
}

.card:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.07));
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
}

.card:hover:after {
    transform: translateX(100%);
}
</style>
