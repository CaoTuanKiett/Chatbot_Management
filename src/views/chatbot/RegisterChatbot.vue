<script setup lang="ts">
import { TabPane, Tabs } from 'ant-design-vue'
import { ref, watch } from 'vue'

import ConfigData from '@/components/chatbot/ConfigData.vue'
import Information from '@/components/chatbot/Information.vue'
import Integration from '@/components/chatbot/Integration.vue'
import ChatExample from '@/components/common/ChatExample.vue'

const inputValue = ref('')
const activeKey = ref('1')
// const informationRef = ref(null)
const dataRegister = ref({
    dataInfo: {},
    dataIntegration: {},
    dataConfigFormat: {}
})

type DataConfigFormat = {
    dataFile: any[] // Replace 'any' with the specific type if known
    dataImportFile: any[] // Replace 'any' with the specific type if known
    dataLink: any[] // Replace 'any' with the specific type if known
    dataQA: any[] // Replace 'any' with the specific type if known
}

const handleNextTab = () => {
    activeKey.value = (parseInt(activeKey.value) + 1).toString()
}

const handlePrevTab = () => {
    activeKey.value = (parseInt(activeKey.value) - 1).toString()
}
const informationRef = ref<InstanceType<typeof Information> | null>(null)
const integrationRef = ref<InstanceType<typeof Integration> | null>(null)
const configDataRef = ref<InstanceType<typeof ConfigData> | null>(null)

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

    // if (newValue === '4') {
    //     dataRegister.value = {
    //         dataInfo: informationRef.value?.dataInfo,
    //         dataIntegration: integrationRef.value?.dataIntegration,
    //         dataConfigFormat: configDataRef.value?.dataConfigFormat
    //     }

    //     // console.log('dataRegister', dataRegister.value)
    // }
})

const handleFinish = () => {
    const dataCheck: DataConfigFormat = {
        dataFile: configDataRef.value?.dataConfigFormat?.dataFile
            ? Array.from(configDataRef.value?.dataConfigFormat?.dataFile)
            : [],
        dataImportFile: configDataRef.value?.dataConfigFormat?.dataImportFile
            ? Array.from(configDataRef.value?.dataConfigFormat?.dataImportFile).map((item: any) => {
                  const newItem = Object.assign({}, item)
                  if (newItem.originFileObj && typeof newItem.originFileObj === 'object') {
                      newItem.originFileObj = { ...newItem.originFileObj }
                  }

                  return newItem
              })
            : [],
        dataLink: configDataRef.value?.dataConfigFormat?.dataLink
            ? Array.from(configDataRef.value?.dataConfigFormat?.dataLink)
            : [],
        dataQA: configDataRef.value?.dataConfigFormat?.dataQA
            ? Array.from(configDataRef.value?.dataConfigFormat?.dataQA).map((item: any) => {
                  return Object.assign({}, item)
              })
            : []
    }

    const data = {
        dataInfo: {
            nameCompany: informationRef.value?.dataInfo?.nameCompany,
            address: informationRef.value?.dataInfo?.address,
            email: informationRef.value?.dataInfo?.email,
            phone: informationRef.value?.dataInfo?.phone,
            nameChatbot: informationRef.value?.dataInfo?.nameChatbot,
            service: informationRef.value?.dataInfo?.service
        },
        dataIntegration: {
            integrationMethod: integrationRef.value?.dataIntegration?.integrationMethod,
            accountName: integrationRef.value?.dataIntegration?.accountName,
            password: integrationRef.value?.dataIntegration?.password,
            token: integrationRef.value?.dataIntegration?.token,
            verificationCode: integrationRef.value?.dataIntegration?.verificationCode
        },
        dataConfigFormat: {
            dataFile: dataCheck.dataFile,
            dataImportFile: dataCheck.dataImportFile,
            dataLink: dataCheck.dataLink,
            dataQA: dataCheck.dataQA
        }
    }
    console.log('Finish', data)
}
</script>

<template>
    <div class="register-chatbot w-full">
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
                <TabPane key="4" tab="Thử nghiệm"><ChatExample /></TabPane>
            </Tabs>
        </div>

        <div class="fixed bottom-0 right-0 pr-40 py-2 w-full border-2 bg-white">
            <div class="flex justify-end">
                <button
                    v-if="activeKey !== '1'"
                    @click="handlePrevTab"
                    class="flex justify-center items-center px-4 py-2 bg-tk-btn-color rounded text-white text-sm font-medium mr-4 shadow-tk-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-tk-hover duration-200"
                    onclick=""
                >
                    <img src="/icons/arrow-back.svg" alt="back" class="pr-2" />
                    Quay lại
                </button>
                <button
                    v-if="activeKey !== '4'"
                    @click="handleNextTab"
                    class="flex justify-center items-center px-4 py-2 bg-tk-btn-color-primary rounded text-white text-sm font-medium shadow-tk-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-tk-hover duration-200"
                >
                    Tiếp theo
                    <img src="/icons/arrow-back.svg" alt="back" class="pr-2 rotate-180" />
                </button>
                <button
                    v-if="activeKey == '4'"
                    @click="handleFinish"
                    class="flex justify-center items-center px-4 py-2 bg-tk-btn-color-primary rounded text-white text-sm font-medium shadow-tk-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-tk-hover duration-200"
                >
                    Hoàn thành
                    <img src="/icons/complete.svg" alt="back" class="pl-2" />
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.register-chatbot {
    padding: 56px 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 8px;
}

.register-chatbot .ant-tabs-tabpane {
    width: 1280px;
    min-height: 56vh;
}

.register-chatbot .ant-tabs-tab-btn {
    font-size: 16px;
}

.register-chatbot .ant-tabs-tab-active .ant-tabs-tab-btn {
    font-weight: 600;
}
</style>
