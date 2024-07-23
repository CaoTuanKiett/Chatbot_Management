<script setup lang="ts">
import FileData from '@/components/configData/FileData.vue'
import ImportFileData from '@/components/configData/ImportFileData.vue'
import QAData from '@/components/configData/QAData.vue'
import { TabPane, Tabs } from 'ant-design-vue'
import { ref } from 'vue'
import LinkData from '../configData/LinkData.vue'
// const inputValue = ref('')
// const value1 = ref('')
const activeKey = ref('1')

const fetchData = () => {
    console.log('Fetching data ConfigData...')
}

defineExpose({ fetchData })
</script>

<template>
    <div class="config-data w-9/12 m-auto">
        <Tabs v-model:activeKey="activeKey" class="flex flex-row">
            <TabPane key="1" tab="Văn bản" class="w-96">
                <FileData />
            </TabPane>
            <TabPane key="2" tab="File" class="w-96">
                <ImportFileData />
            </TabPane>
            <TabPane key="3" tab="Câu hỏi" class="w-96">
                <QAData />
            </TabPane>
            <TabPane key="4" tab="Link" class="w-96">
                <LinkData />
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
