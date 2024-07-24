<script setup lang="ts">
import type { SelectProps } from 'ant-design-vue'
import { Select } from 'ant-design-vue'
import { ref } from 'vue'

const options1 = ref<SelectProps['options']>([
    {
        value: '1',
        label: 'Nhà Hàng'
    },
    {
        value: '2',
        label: 'Khách Sạn'
    },
    {
        value: '3',
        label: 'Khu nghỉ dưỡng',
        disabled: true
    },
    {
        value: '4',
        label: 'Homestay'
    }
])

const dataInfo = ref({
    nameCompany: '',
    address: '',
    email: '',
    phone: '',
    nameChatbot: '',
    service: 'Nhà Hàng'
})

const fetchData = () => {
    console.log('Fetching data Information...')
}

defineExpose({ fetchData, dataInfo })

const focus = () => {
    console.log('focus')
}

const handleChange = (value: string) => {
    console.log(`selected ${value}`)
}
</script>

<template>
    <div class="w-9/12 m-auto">
        <div class="">
            <form>
                <div class="">
                    <p class="text-xl">1.Thông tin doanh nghiệp:</p>
                    <div class="flex flex-wrap justify-center">
                        <div class="px-6 py-4">
                            <p class="text-sm text-black font-semibold pb-1">Tên doanh nghiệp:</p>
                            <input
                                v-model="dataInfo.nameCompany"
                                type="text"
                                class="border-2 w-96 border-black rounded p-2 text-sm"
                            />
                        </div>
                        <div class="px-6 py-4">
                            <p class="text-sm text-black font-semibold pb-1">Địa chỉ:</p>
                            <input
                                v-model="dataInfo.address"
                                type="text"
                                class="border-2 w-96 border-black rounded p-2 text-sm"
                            />
                        </div>
                        <div class="px-6 py-4">
                            <p class="text-sm text-black font-semibold pb-1">Email:</p>
                            <input
                                v-model="dataInfo.email"
                                type="text"
                                class="border-2 w-96 border-black rounded p-2 text-sm"
                            />
                        </div>
                        <div class="px-6 py-4">
                            <p class="text-sm text-black font-semibold pb-1">SĐT:</p>
                            <input
                                v-model="dataInfo.phone"
                                type="text"
                                class="border-2 w-96 border-black rounded p-2 text-sm"
                            />
                        </div>
                        <!-- <div class="px-6 py-4">
                            <p class="text-sm text-black font-semibold pb-1">Mã số thuế:</p>
                            <input
                                type="text"
                                class="border-2 w-96 border-black rounded p-2 text-sm"
                            />
                        </div> -->
                    </div>
                </div>
                <div>
                    <p class="text-xl">2.Thông tin chatbot:</p>
                    <div class="flex flex-wrap justify-center">
                        <div class="px-6 py-4">
                            <p class="text-sm text-black font-semibold pb-1">Tên chatbot</p>
                            <input
                                v-model="dataInfo.nameChatbot"
                                type="text"
                                class="border-2 w-96 border-black rounded p-2 text-sm"
                            />
                        </div>
                        <div class="px-6 py-4">
                            <p class="text-sm text-black font-semibold pb-1">Loại hình dịch vụ</p>
                            <Select
                                ref="select"
                                v-model:value="dataInfo.service"
                                :options="options1"
                                @focus="focus"
                                @change="handleChange(dataInfo.service)"
                                class="border-2 w-96 border-black rounded text-sm h-10 items-center flex"
                            >
                            </Select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style></style>
