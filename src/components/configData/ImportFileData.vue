<script lang="ts" setup>
import { InboxOutlined } from '@ant-design/icons-vue'
import type { UploadChangeParam } from 'ant-design-vue'
import { message, UploadDragger } from 'ant-design-vue'
import { ref } from 'vue'
const fileList = ref([])
const handleChange = (info: UploadChangeParam) => {
    const status = info.file.status
    if (status !== 'uploading') {
        console.log(info.file, info.fileList)
    }
    if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
    }
}
function handleDrop(e: DragEvent) {
    console.log(e)
}
</script>
<template>
    <UploadDragger
        v-model:fileList="fileList"
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
        @drop="handleDrop"
    >
        <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or
            other band files
        </p>
    </UploadDragger>
</template>

<style></style>
