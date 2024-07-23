<script lang="ts" setup>
import { AutoComplete, InputSearch } from 'ant-design-vue'
import { ref } from 'vue'
interface Option {
    query: string
    category: string
    value: string
    count: number
}
const value = ref('')
const dataSource = ref<Option[]>([])
// const onSelect = (value: string) => {
//     console.log('onSelect', value)
// }

const getRandomInt = (max: number, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const searchResult = (query: string): Option[] => {
    return new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_item, idx) => ({
            query,
            category: `${query}${idx}`,
            value: `${query}${idx}`,
            count: getRandomInt(200, 100)
        }))
}
const handleSearch = (val: string) => {
    dataSource.value = val ? searchResult(val) : []
}

const isChecked = ref(false)

const toggleCheckbox = () => {
    console.log('heheh')

    isChecked.value = !isChecked.value
}
</script>

<template>
    <div class="managemnt-chatbot">
        <div>
            <AutoComplete
                v-model:value="value"
                :dropdown-match-select-width="252"
                style="width: 300px"
                :options="dataSource"
                @search="handleSearch"
            >
                <template #option="item">
                    <div style="display: flex; justify-content: space-between">
                        <span>
                            Found {{ item.query }} on
                            <a
                                :href="`https://s.taobao.com/search?q=${item.query}`"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ item.category }}
                            </a>
                        </span>
                        <span>{{ item.count }} results</span>
                    </div>
                </template>
                <InputSearch size="large" placeholder="input here" enter-button></InputSearch>
            </AutoComplete>
        </div>
        <div>
            <h1>Quản lý chatbot:</h1>
            <div>
                <div class="chatbot border-2 border-black rounded-lg p-4 flex w-[900px]">
                    <img
                        src="/images/itemhotel.png"
                        alt="itemhotel"
                        class="w-40 h-40 object-cover rounded mr-4"
                    />
                    <div class="flex justify-between w-full">
                        <div class="flex flex-col justify-between py-4">
                            <div>
                                <h2 class="font-semibold text-xl">Chatbot ABc</h2>
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
                                    Khách sạn
                                </p>
                                <button>
                                    <img
                                        src="/icons/icon-delete.svg"
                                        alt="icon-delete"
                                        class="w-8"
                                    />
                                </button>
                            </div>
                            <div class="flex row">
                                <button
                                    class="flex border-2 border-black px-2 mr-2 py-1 rounded h-10 justify-center items-center shadow-tk-btn-2 font-semibold"
                                >
                                    <img
                                        src="/icons/iconsetting.svg"
                                        alt="icon-setting"
                                        class="mr-2"
                                    />
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
                                                v-model="isChecked"
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
            </div>
        </div>
    </div>
</template>

<style>
.checkbox-wrapper-22 {
    display: inline-block;
    height: 25px;
    position: relative;
    width: 48px;
    margin-left: 4px;
}

.checkbox-wrapper-22 .switch {
    display: inline-block;
    height: 25px;
    position: relative;
    width: 48px;
}

.checkbox-wrapper-22 .switch input {
    display: none;
}

.checkbox-wrapper-22 .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
}

.checkbox-wrapper-22 .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: '';
    height: 18px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 18px;
}

.checkbox-wrapper-22 input:checked + .slider {
    background-color: #66bb6a;
}

.checkbox-wrapper-22 input:checked + .slider:before {
    transform: translateX(22px);
}

.checkbox-wrapper-22 .slider.round {
    border-radius: 34px;
}

.checkbox-wrapper-22 .slider.round:before {
    border-radius: 50%;
}
</style>
