<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

function animateCounter(element: HTMLElement, start: number, end: number, duration: number) {
    let startTime: number | null = null

    function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const currentNumber = Math.floor(progress * (end - start) + start)
        element.textContent = currentNumber.toString()

        if (progress < 1) {
            requestAnimationFrame(animation)
        }
    }

    requestAnimationFrame(animation)
}

const client = ref<HTMLElement | null>(null)
const chatbot = ref<HTMLElement | null>(null)
const year = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
    const observeElements = [client.value, chatbot.value, year.value]
    const endValues = [500, 5000, 1]
    const animateDurationValues = [800, 1000, 300]
    if (observeElements.some((el) => el !== null)) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        animateCounter(
                            entry.target as HTMLElement,
                            0,
                            endValues[index],
                            animateDurationValues[index]
                        )
                        if (observer) {
                            observer.unobserve(entry.target)
                        }
                    }
                })
            },
            { threshold: 0.1 }
        )

        observeElements.forEach((el) => {
            if (el && observer) {
                observer.observe(el)
            }
        })
    }
})

onBeforeUnmount(() => {
    const observeElements = [client.value, chatbot.value, year.value]
    if (observer) {
        observeElements.forEach((el) => {
            if (el) {
                observer && observer.unobserve(el)
            }
        })
    }
})
</script>

<template>
    <div
        class="auto relative h-[400px] w-full bg-[#D0ECF8] flex flex-col justify-center items-center"
    >
        <h2 class="text-[26px] font-semibold text-black tracking-wider pb-3 uppercase">
            Làm việc với VAIAS
        </h2>
        <span class="w-40 border-b-4 border-black mb-14"></span>
        <div class="flex justify-center items-center gap-48">
            <div class="item-work flex flex-col items-center cursor-default">
                <div
                    class="images-box bg-tk-color flex items-center justify-center w-24 h-24 rounded-full shadow-tk-btn-2"
                >
                    <img class="images" src="/icons/client.svg" alt="client" />
                </div>
                <h3 class="text-3xl font-semibold text-center pt-5">
                    <span class="text-4xl pr-[2px]" ref="client">0</span>+
                </h3>
                <p class="text-lg">Khách hàng</p>
            </div>
            <div class="item-work flex flex-col items-center cursor-default">
                <div
                    class="images-box bg-tk-color flex items-center justify-center w-24 h-24 rounded-full shadow-tk-btn-2"
                >
                    <img class="images" src="/icons/bot.svg" alt="chatbot" />
                </div>
                <h3 class="text-3xl font-semibold text-center pt-5">
                    <span class="text-4xl pr-[2px]" ref="chatbot">0</span>+
                </h3>
                <p class="text-lg">Chatbot</p>
            </div>
            <div class="item-work flex flex-col items-center cursor-default">
                <div
                    class="images-box bg-tk-color flex items-center justify-center w-24 h-24 rounded-full shadow-tk-btn-2"
                >
                    <img class="images" src="/icons/star.svg" alt="year" />
                </div>
                <h3 class="text-3xl font-semibold text-center pt-5">
                    <span class="text-4xl pr-[2px]" ref="year">0</span>+ năm
                </h3>
                <p class="text-lg">kinh nghiệm</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
// .auto {
//     // background-image: url('/images/bg-auto.png');
// }

.item-work:hover .images-box {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
        opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 120ms;
    transform: translateY(0.25rem);
    transform: scale(1.14);
    transition-duration: 300ms;
    background-color: rgb(70, 35, 126);
}

.item-work:hover h3 {
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

.item-work:hover span {
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
