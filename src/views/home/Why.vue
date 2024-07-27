<script setup lang="ts"></script>

<template>
    <div class="w-full bg-tk-color flex flex-col justify-center items-center py-14">
        <h2 class="text-[26px] font-semibold text-white tracking-wider pb-14 uppercase">
            Tại sao nên trải nghiệm VAIAS?
        </h2>
        <div class="flex items-center gap-40">
            <div data-aos="zoom-in-down" data-aos-duration="1100">
                <img
                    src="/images/why.png"
                    alt="why"
                    class="w-[400px] shadow-tk-btn-2 hover:shadow-tk-btn transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[44px]"
                />
            </div>
            <div class="flex flex-col gap-5">
                <div data-aos="fade-down-left" data-aos-duration="1000">
                    <div
                        class="item-work bg-white flex w-[460px] p-6 items-center rounded-xl shadow-tk-btn-2 hover:shadow-tk-btn transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300"
                    >
                        <img src="/icons/IdeaSharing.svg" alt="client" class="w-20 mr-6" />
                        <p class="text-lg font-semibold text-tk-color">
                            Giải pháp nâng cao trải nghiệm của khách hàng thông qua tự động hoá dịch
                            vụ.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="1100">
                    <div
                        class="item-work bg-white flex w-[460px] p-6 items-center rounded-xl shadow-tk-btn-2 hover:shadow-tk-btn transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300"
                    >
                        <img src="/icons/creative.svg" alt="client" class="w-20 mr-6" />
                        <p class="text-lg font-semibold text-tk-color">
                            Kết nối liền mạch với các nền tảng giúp quản lý và hỗ trợ khách hàng mọi
                            lúc, mọi nơi.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="1200">
                    <div
                        class="item-work bg-white flex w-[460px] p-6 items-center rounded-xl shadow-tk-btn-2 hover:shadow-tk-btn transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300"
                    >
                        <img src="/icons/goal.svg" alt="client" class="w-20 mr-6" />
                        <p class="text-lg font-semibold text-tk-color">
                            Tối ưu hóa dữ liệu và phản hồi khách hàng, cung cấp thông tin để cải
                            thiện dịch vụ lưu trú.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
// .auto {
//     // background-image: url('/images/bg-auto.png');
// }

.item-work:hover img {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
        opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 120ms;
    transform: translateY(0.25rem);
    transform: scale(1.14);
    transition-duration: 300ms;
}
</style>
