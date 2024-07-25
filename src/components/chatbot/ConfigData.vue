<script setup lang="ts">
import FileData from '@/components/configData/FileData.vue'
import ImportFileData from '@/components/configData/ImportFileData.vue'
import QAData from '@/components/configData/QAData.vue'
import { TabPane, Tabs } from 'ant-design-vue'
import { defineProps, onMounted, ref } from 'vue'
import LinkData from '../configData/LinkData.vue'
const activeKey = ref('1')

const fileDataRef = ref<InstanceType<typeof FileData> | null>(null)
const importFileDataRef = ref<InstanceType<typeof ImportFileData> | null>(null)
const qaDataRef = ref<InstanceType<typeof QAData> | null>(null)
const linkDataRef = ref<InstanceType<typeof LinkData> | null>(null)

const props = defineProps<{
    testDataConfig: {
        dataFile: any[]
        dataImportFile: any[]
        dataLink: any[]
        dataQA: any[]
    }
}>()

console.log('props.testDataConfig', props.testDataConfig)

type DataConfigFormat = {
    dataFile: any[] // Replace 'any' with the specific type if known
    dataImportFile: any[] // Replace 'any' with the specific type if known
    dataLink: any[] // Replace 'any' with the specific type if known
    dataQA: any[] // Replace 'any' with the specific type if known
}

const dataConfigFormat = ref<DataConfigFormat>({
    dataFile: props.testDataConfig.dataFile,
    dataImportFile: props.testDataConfig.dataImportFile,
    dataLink: props.testDataConfig.dataLink,
    dataQA: props.testDataConfig.dataQA
})

const dataConfig = ref({
    dataFile: fileDataRef.value?.dataFile,
    dataImportFile: importFileDataRef.value?.fileList,
    dataLink: linkDataRef.value?.dataLink,
    dataQA: qaDataRef.value?.dataQA
})

onMounted(() => {
    updateDataConfig()
    console.log('dataConfig', dataConfig.value)
})

const updateDataConfig = () => {
    dataConfig.value = {
        dataFile: fileDataRef.value?.dataFile || [],
        dataImportFile: importFileDataRef.value?.fileList || [],
        dataLink: linkDataRef.value?.dataLink || [],
        dataQA: qaDataRef.value?.dataQA || []
    }
}

const fetchData = () => {
    updateDataConfig()
    // const dataCheck: DataConfigFormat = {
    //     dataFile: dataConfig.value?.dataFile ? Array.from(dataConfig.value.dataFile) : [],
    //     dataImportFile: dataConfig.value.dataImportFile
    //         ? Array.from(dataConfig.value.dataImportFile).map((item: any) => {
    //               const newItem = Object.assign({}, item)
    //               if (newItem.originFileObj && typeof newItem.originFileObj === 'object') {
    //                   newItem.originFileObj = { ...newItem.originFileObj }
    //               }

    //               return newItem
    //           })
    //         : [],
    //     dataLink: dataConfig.value?.dataLink ? Array.from(dataConfig.value.dataLink) : [],
    //     dataQA: dataConfig.value?.dataQA
    //         ? Array.from(dataConfig.value.dataQA).map((item: any) => {
    //               return Object.assign({}, item)
    //           })
    //         : []
    // }

    // dataConfigFormat.value = {
    //     dataFile: dataCheck.dataFile,
    //     dataImportFile: dataCheck.dataImportFile,
    //     dataLink: dataCheck.dataLink,
    //     dataQA: dataCheck.dataQA
    // }
    // console.log('Fetching data ConfigData...')
    // console.log('dataCheck', dataCheck)
    // console.log('dataConfig.value', dataConfigFormat.value)
}

defineExpose({
    fetchData,
    dataConfig,
    activeKey,
    fileDataRef,
    importFileDataRef,
    qaDataRef,
    linkDataRef
})
</script>

<template>
    <div class="config-data w-9/12 m-auto">
        <Tabs v-model:activeKey="activeKey" class="flex flex-row">
            <TabPane key="1" tab="Văn bản" class="w-96">
                <FileData ref="fileDataRef" :testDataFile="dataConfigFormat.dataFile" />
            </TabPane>
            <TabPane key="2" tab="File" class="w-96">
                <ImportFileData
                    ref="importFileDataRef"
                    :testDataFileImport="dataConfigFormat.dataImportFile"
                />
            </TabPane>
            <TabPane key="3" tab="Câu hỏi" class="w-96">
                <QAData ref="qaDataRef" :testDataQA="dataConfigFormat.dataQA" />
            </TabPane>
            <TabPane key="4" tab="Link" class="w-96">
                <LinkData ref="linkDataRef" :testDataLink="dataConfigFormat.dataLink" />
            </TabPane>
        </Tabs>
    </div>
</template>

<style>
.config-data .ant-tabs-nav-list {
    flex-direction: column !important;
}

.config-data .ant-tabs-tabpane {
    width: 100% !important;
    min-height: 50vh;
}

.config-data .border-t-l {
    border-top-left-radius: 4px;
}
.config-data .ant-tabs-content-holder {
    width: 940px;
    background-color: #c7c7c7;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 20px;
}

.config-data .ant-tabs-nav {
    width: 180px;
}

.config-data .ant-tabs-nav::before {
    display: none;
}

.config-data .ant-tabs-ink-bar {
    display: none !important;
}

.config-data .ant-tabs-nav-wrap {
    width: 180px;
}

.config-data .ant-tabs-nav-wrap::after {
    display: none;
}

.config-data .ant-tabs-nav-wrap::before {
    display: none;
}

.config-data .ant-tabs-nav-list {
    width: 90%;
}

.config-data .ant-tabs-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    margin: 0 !important;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.config-data .ant-tabs-tab-active {
    background-color: #c7c7c7;
}

.config-data .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff !important;
}
</style>
