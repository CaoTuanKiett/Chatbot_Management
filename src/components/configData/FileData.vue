<script setup lang="ts">
import { ref } from 'vue'

interface Input {
    content: string
}

const inputs = ref<Input[]>([{ content: '' }])
const combinedData = ref<string[]>([])

const addInput = () => {
    inputs.value.push({ content: '' })
}

const removeInput = (index: number) => {
    inputs.value.splice(index, 1)
}

const importData = () => {
    const filteredInputs = inputs.value.filter((input) => input.content.trim() !== '')
    combinedData.value = filteredInputs.map((input) => input.content)
    inputs.value = [{ content: '' }]
}

const clearAll = () => {
    combinedData.value = []
    // inputs.value = [{ content: '' }]
}

const removeData = (index: number) => {
    combinedData.value.splice(index, 1)
}
</script>

<template>
    <div class="file-data">
        <div>
            <div v-for="(input, index) in inputs" :key="index" class="mb-4">
                <div>
                    <p class="text-sm font-semibold">Văn bản {{ index + 1 }}</p>
                    <div class="relative">
                        <img
                            v-if="index !== 0"
                            @click="removeInput(index)"
                            src="/icons/icon-delete.svg"
                            alt="delete"
                            class="absolute top-[-8px] right-[-8px] cursor-pointer shadow-sm"
                        />
                        <textarea
                            v-model="input.content"
                            class="border-[1px] border-black rounded p-2 text-sm w-full"
                            rows="4"
                            placeholder="Nhập nội dung"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-4">
            <button
                @click="addInput"
                class="flex justify-center items-center px-4 py-2 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn"
            >
                <img src="/icons/plus.svg" alt="add" class="pr-2" />
                Thêm văn bản
            </button>
            <button
                @click="importData"
                class="flex justify-center items-center px-4 py-2 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn"
            >
                <img src="/icons/import.svg" alt="import" class="pr-2" />
                Nhập
            </button>
        </div>
        <div class="mt-8 bg-white p-4 rounded">
            <div class="flex justify-between mb-4">
                <p class="text-lg font-semibold">Data</p>
                <button
                    @click="clearAll"
                    class="flex justify-center items-center px-2 py-1 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn"
                >
                    <img src="/icons/icon-delete-white.svg" alt="delete all" class="pr-2" />
                    Xóa tất cả
                </button>
            </div>
            <div>
                <div
                    v-for="(item, index) in combinedData"
                    :key="index"
                    class="flex justify-between items-center bg-slate-300 p-2 rounded mb-2"
                >
                    <div class="flex items-center space-x-2">
                        <p class="border-r-2 border-black pr-2">00{{ index + 1 }}</p>
                        <p>{{ item }}</p>
                    </div>
                    <div>
                        <img
                            src="/icons/icon-delete-black.svg"
                            alt="delete"
                            class="cursor-pointer"
                            @click="removeData(index)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.file-data {
    max-width: 600px;
    margin: auto;
}

textarea {
    margin-bottom: 10px;
}

button {
    margin-top: 10px;
    cursor: pointer;
}

.shadow-tk-btn {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
