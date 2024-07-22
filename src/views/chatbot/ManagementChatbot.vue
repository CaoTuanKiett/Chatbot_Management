<script lang="ts" setup>
import IconStatus from '@/components/icons/IconStatus.vue'
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
                <div>
                    <img src="/images/itemhotel.png" alt="itemhotel" />
                    <div>
                        <div>
                            <h2>Chatbot ABc</h2>
                            <p><span></span> Đang hoạt động</p>
                            <p>Cập nhật lần cuối: 19/5/1999</p>
                        </div>
                        <div>
                            <button>
                                <img src="/icons/icon-delete-black.svg" alt="icon-delete" />
                            </button>
                            <div>
                                <button>
                                    <img src="/icons/iconsetting.svg" alt="icon-setting" />
                                    Cài đặt
                                </button>
                                <button>
                                    <img src="/icons/iconQA.svg" alt="icon-qa" />
                                    Thử nghiệm
                                </button>
                                <button>
                                    Trạng thái
                                    <IconStatus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
