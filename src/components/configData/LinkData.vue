<script setup lang="ts">
import { Modal } from 'ant-design-vue'
import { defineProps, ref } from 'vue'

const props = defineProps<{
    testDataLink: any[]
}>()

const open = ref<boolean>(false)

interface Input {
    content: string
}

const inputs = ref<Input[]>([{ content: '' }])

const inputUrl = ref('')
const dataLink = ref<string[]>(props.testDataLink)
// const dataLink = ref<string[]>([])

const showModal = (item: string) => {
    open.value = true
    inputUrl.value = item
}

const addInput = () => {
    inputs.value.push({ content: '' })
}

const removeInput = (index: number) => {
    inputs.value.splice(index, 1)
}

const importData = () => {
    const filteredInputs = inputs.value.filter((input) => input.content.trim() !== '')
    dataLink.value.push(...filteredInputs.map((input) => input.content))
    inputs.value = [{ content: '' }]
}

const clearAll = () => {
    dataLink.value = []
    // inputs.value = [{ content: '' }]
}

const removeData = (index: number) => {
    dataLink.value.splice(index, 1)
}

defineExpose({ dataLink })
</script>

<template>
    <div class="link-data max-w-[600px] m-auto">
        <div class="w-full">
            <!-- <h1>Nhập URL để hiển thị trang</h1>
            <input v-model="inputUrl" type="text" placeholder="Nhập URL" />
            <button @click="showModal">Hiển thị trang</button> -->

            <div v-for="(input, index) in inputs" :key="index">
                <div class="mb-5">
                    <p class="text-sm font-semibold mb-1">Link {{ index + 1 }}</p>
                    <div class="relative w-full">
                        <img
                            v-if="index !== 0"
                            @click="removeInput(index)"
                            src="/icons/icon-delete.svg"
                            alt="delete"
                            class="absolute top-[-8px] right-[-8px] cursor-pointer shadow-sm"
                        />
                        <input
                            v-model="input.content"
                            type="text"
                            placeholder="Nhập URL"
                            class="border-[1px] border-slate-400 shadow-tk-btn-2 rounded p-2 text-sm w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-4">
            <button
                @click="addInput"
                class="button2 flex justify-center items-center px-4 py-2 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn"
            >
                <img src="/icons/plus.svg" alt="add" class="pr-2" />
                Thêm văn bản
            </button>
            <button
                @click="importData"
                class="button2 flex justify-center items-center px-4 py-2 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn"
            >
                <img src="/icons/import.svg" alt="import" class="pr-2" />
                Nhập
            </button>
        </div>

        <div class="mt-8 bg-white p-4 rounded">
            <div class="flex justify-between mb-4">
                <p class="text-lg font-semibold">Data</p>
                <button
                    v-if="dataLink.length > 0"
                    @click="clearAll"
                    class="btn-delete flex justify-center items-center px-2 py-1 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-tk-hover duration-200"
                >
                    <img src="/icons/icon-delete-white.svg" alt="delete all" class="pr-2" />
                    Xóa tất cả
                </button>
            </div>
            <div>
                <div v-if="dataLink.length === 0" class="flex justify-center items-center">
                    <img src="/images/img-noItem.png" alt="no item" class="w-40" />
                </div>
                <div
                    v-else
                    v-for="(item, index) in dataLink"
                    :key="index"
                    class="flex justify-between items-center bg-slate-300 p-2 rounded mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-200"
                >
                    <div
                        class="flex items-center space-x-2 cursor-pointer"
                        @click="showModal(item)"
                    >
                        <p class="border-r-2 border-black pr-2">00{{ index + 1 }}</p>
                        <p class="max-w-[484px] text-nowrap text-ellipsis overflow-hidden">
                            {{ item }}
                        </p>
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

        <div>
            <Modal v-model:open="open" title="Page" width="1280px" class="overflow-auto">
                <div>
                    <iframe :src="inputUrl" width="100%" height="600px"></iframe>
                </div>
            </Modal>
        </div>
    </div>
</template>

<style scoped>
#app {
    text-align: center;
    margin-top: 20px;
}
/* input {
    width: 60%;
    padding: 10px;
    margin-right: 10px;
} */
button {
    padding: 10px;
}
iframe {
    border: none;
}

.button2 {
    /* display: inline-block; */
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #090909;
    padding: 0.7em 1.7em;
    cursor: pointer;
    font-size: 14px;
    border-radius: 0.5em;
    /* background: #e8e8e8; */
    /* border: 1px solid #e8e8e8; */
    /* box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; */
}

.button2:active {
    color: #666;
    box-shadow:
        inset 4px 4px 12px #c5c5c5,
        inset -4px -4px 12px #ffffff;
}

.button2:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
}

.button2:after {
    content: '';
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #009087;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
}

.button2:hover {
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 1px;
    transform: translateY(-2px);
    /* border: 1px solid #009087; */
}

.button2:hover:before {
    top: -35%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
    top: -45%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
</style>
