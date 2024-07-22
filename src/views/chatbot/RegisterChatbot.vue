<script setup lang="ts">
import { TabPane, Tabs } from 'ant-design-vue'
import { ref, watch } from 'vue'

import ConfigData from '@/components/chatbot/ConfigData.vue'
import Information from '@/components/chatbot/Information.vue'
import Integration from '@/components/chatbot/Integration.vue'

const inputValue = ref('')
const activeKey = ref('1')
// const informationRef = ref(null)

const handleNextTab = () => {
    activeKey.value = (parseInt(activeKey.value) + 1).toString()
}

const handlePrevTab = () => {
    activeKey.value = (parseInt(activeKey.value) - 1).toString()
}
const informationRef = ref<InstanceType<typeof Information> | null>(null)
const integrationRef = ref<InstanceType<typeof Integration> | null>(null)
const configDataRef = ref<InstanceType<typeof Integration> | null>(null)

watch(activeKey, (newValue, oldValue) => {
    if (oldValue === '1' && informationRef.value) {
        if (typeof informationRef.value.fetchData === 'function') {
            informationRef.value.fetchData()
        } else {
            console.error('fetchData is not a function on Information component')
        }
    }

    if (oldValue === '2' && integrationRef.value) {
        if (typeof integrationRef.value.fetchData === 'function') {
            integrationRef.value.fetchData()
        } else {
            console.error('fetchData is not a function on Information component')
        }
    }

    if (oldValue === '3' && configDataRef.value) {
        if (typeof configDataRef.value.fetchData === 'function') {
            configDataRef.value.fetchData()
        } else {
            console.error('fetchData is not a function on Information component')
        }
    }
})
</script>

<template>
    <div class="register-chatbot">
        <div class="max-w-screen-xl">
            <Tabs v-model:activeKey="activeKey" centered class="h-100">
                <TabPane key="1" tab="Thông tin chung">
                    <Information ref="informationRef" />
                </TabPane>
                <TabPane key="2" tab="Cấu hình" force-render>
                    <Integration ref="integrationRef" />
                </TabPane>
                <TabPane key="3" tab="Dữ liệu">
                    <ConfigData ref="configDataRef" />
                </TabPane>
                <TabPane key="4" tab="Thử nghiệm">Content of Tab Pane 3</TabPane>
            </Tabs>
        </div>

        <div class="fixed bottom-0 right-0 pr-40 py-2 w-full border-2 bg-white">
            <div class="flex justify-end">
                <button
                    v-if="activeKey !== '1'"
                    @click="handlePrevTab"
                    class="flex justify-center items-center px-4 py-2 bg-tk-btn-color rounded text-white text-sm font-medium mr-4 shadow-tk-btn"
                    onclick=""
                >
                    <img src="/icons/arrow-back.svg" alt="back" class="pr-2" />
                    Quay lại
                </button>
                <button
                    v-if="activeKey !== '4'"
                    @click="handleNextTab"
                    class="flex justify-center items-center px-4 py-2 bg-tk-btn-color-primary rounded text-white text-sm font-medium shadow-tk-btn"
                >
                    Tiếp theo
                    <img src="/icons/arrow-back.svg" alt="back" class="pr-2 rotate-180" />
                </button>
                <button
                    v-if="activeKey == '4'"
                    @click="handleNextTab"
                    class="flex justify-center items-center px-4 py-2 bg-tk-btn-color-primary rounded text-white text-sm font-medium shadow-tk-btn"
                >
                    Hoàn thành
                    <img src="/icons/complete.svg" alt="back" class="pl-2" />
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>
