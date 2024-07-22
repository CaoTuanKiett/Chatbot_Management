<script lang="ts" setup>
import { InboxOutlined } from '@ant-design/icons-vue';
import type { UploadChangeParam } from 'ant-design-vue';
import { message, UploadDragger } from 'ant-design-vue';
import { ref } from 'vue';
const fileList = ref([])
const handleChange = (info: UploadChangeParam) => {
    const status = info.file.status
    if (status !== 'uploading') {
        console.log("info.file", info.file)
        console.log(", info.fileList", info.fileList)
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
    <div class="import-file">
        <div class="bg-white rounded-md">
            <UploadDragger
                v-model:fileList="fileList"
                name="file"
                :multiple="true"
                @change="handleChange"
                @drop="handleDrop"
                class="rounded w-full h-full"
            >
                <p class="ant-upload-drag-icon">
                    <inbox-outlined></inbox-outlined>
                </p>
                <p class="ant-upload-text">Kéo và thả file vào đây hoặc click để chọn file</p>
                <p class="ant-upload-hint">
                    Các loại tệp được hỗ trợ: .pdf, .doc, .docx, .txt
                </p>
            </UploadDragger>
        </div>

        <div class="flex justify-end my-4">
            <button
                class="flex justify-center items-center px-4 py-2 bg-tk-btn-color rounded text-white text-sm font-medium mr-4 shadow-tk-btn"
                onclick=""
            >
                <img src="/icons/import.svg" alt="back" class="pr-2" />
                Nhập
            </button>
        </div>

        <div class="mt-8 bg-white p-4 rounded">
            <div class="flex justify-between mb-4">
                <p>Data</p>
                <button
                    class="flex justify-center items-center px-2 py-1 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn"
                    onclick=""
                >
                    <img src="/icons/icon-delete-white.svg" alt="back" class="pr-2" />
                    Xóa tất cả
                </button>
            </div>

            <div>
                <div class="flex justify-between items-center bg-slate-300 p-2 rounded">
                    <div class="flex items-center">
                        <p>001</p>
                        <p>Hoàng Sa Trường Sa là của Việt Nam</p>
                    </div>
                    <div>
                        <img
                            src="/icons/icon-delete-black.svg"
                            alt="delete"
                            class="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.import-file .ant-upload-list {
    margin-top: 12px;
    padding: 12px;
}

.import-file .ant-upload-list-item-container {
    border: 1px solid #d9d9d9;
    padding: 4px 8px;
    background-color: #cbd5e1;
    margin-bottom: 8px;
    border-radius: 4px;
    height: 32px !important;
    /* display: flex; */
    /* align-items: center;
    justify-content: space-between; */
}

.import-file .ant-upload-list-item {
    margin-top: 0px !important;
}
</style>
