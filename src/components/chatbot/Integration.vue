<script setup lang="ts">
import { RadioGroup } from 'ant-design-vue'
import { ref } from 'vue'
const inputValue = ref('')
const value1 = ref('')
const plainOptions = [
    {
        label: 'Tích hợp qua API',
        value: 'api'
    },
    {
        label: 'Tích hợp Messenger',
        value: 'messenger'
    },
    {
        label: 'Tích hợp Booking.com',
        value: 'booking'
    }
]

const fetchData = () => {
    console.log('Fetching data Integration...')
}

defineExpose({ fetchData })
</script>

<template>
    <div class="integration w-9/12 m-auto">
        <div>
            <p class="text-xl">1.Phương thức tích hợp</p>
            <RadioGroup v-model:value="value1" :options="plainOptions" class="flex flex-col p-4" />
        </div>
        <div>
            <p class="text-xl">2.Thông tin tài khoản</p>
            <div class="flex flex-wrap">
                <div class="px-6 py-4">
                    <p class="text-sm text-black font-semibold pb-1">Tên tài khoản</p>
                    <input type="text" class="border-2 w-96 border-black rounded p-2 text-sm" />
                </div>
                <div class="px-6 py-4">
                    <p class="text-sm text-black font-semibold pb-1">Mật khẩu</p>
                    <input type="password" class="border-2 w-96 border-black rounded p-2 text-sm" />
                </div>
                <div class="px-6 py-4">
                    <p class="text-sm text-black font-semibold pb-1">Token</p>
                    <input type="password" class="border-2 w-96 border-black rounded p-2 text-sm" />
                </div>
                <div v-if="value1 === 'api'" class="px-6 py-4">
                    <p class="text-sm text-black font-semibold pb-1">Token</p>
                    <input type="password" class="border-2 w-96 border-black rounded p-2 text-sm" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.integration .ant-radio-wrapper {
    margin-bottom: 10px;
}
</style>
