<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
    item: {
        dataInfo: {
            nameChatbot: string
            service: string
        }
    }
    isChecked: boolean
    toggleCheckbox: () => void
    handleSetting: (item: any) => void
    handleDelete: (item: any) => void
}>()
</script>

<template>
    <div class="chatbot border-2 border-black rounded-lg p-4 mb-3 shadow-tk-btn flex w-[900px]">
        <img
            src="/images/itemhotel.png"
            alt="itemhotel"
            class="w-40 h-40 object-cover rounded mr-4"
        />
        <div class="flex justify-between w-full">
            <div class="flex flex-col justify-between py-4">
                <div>
                    <h2 class="font-semibold text-xl">{{ props.item.dataInfo.nameChatbot }}</h2>
                    <p v-if="isChecked" class="flex items-center gap-2">
                        <span class="block w-3 h-3 bg-tk-active rounded-full"></span>
                        Đang hoạt động
                    </p>
                    <p v-else class="flex items-center gap-2">
                        <span class="block w-3 h-3 bg-tk-inactive rounded-full"></span>
                        Không hoạt động
                    </p>
                </div>
                <p class="text-sm">Cập nhật lần cuối: 19/5/1999</p>
            </div>
            <div class="flex flex-col justify-between items-end py-2">
                <div class="flex items-end">
                    <p class="mr-16">
                        <span class="font-semibold">Loại dịch vụ:</span>
                        {{ props.item.dataInfo.service }}
                    </p>
                    <button @click="handleDelete(props.item)">
                        <img src="/icons/icon-delete.svg" alt="icon-delete" class="w-8" />
                    </button>
                </div>
                <div class="flex row">
                    <button
                        @click="handleSetting(props.item)"
                        class="flex border-2 border-black px-2 mr-2 py-1 rounded h-10 justify-center items-center shadow-tk-btn-2 font-semibold"
                    >
                        <img src="/icons/iconsetting.svg" alt="icon-setting" class="mr-2" />
                        Cài đặt
                    </button>
                    <button
                        class="flex border-2 border-black px-2 py-1 mr-2 rounded h-10 justify-center items-center shadow-tk-btn-2 font-semibold"
                    >
                        <img src="/icons/iconQA.svg" alt="icon-qa" class="mr-2" />
                        Thử nghiệm
                    </button>
                    <button
                        @click="toggleCheckbox"
                        class="flex border-2 border-black px-2 py-1 mr-2 rounded h-10 justify-center items-center shadow-tk-btn-2 font-semibold"
                    >
                        Trạng thái
                        <div class="checkbox-wrapper-22">
                            <label class="switch" for="checkbox">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    v-model="props.isChecked"
                                    disabled
                                />
                                <div class="slider round"></div>
                            </label>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* Include any styles needed for the component here */
</style>
