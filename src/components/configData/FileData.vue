<script></script>
<template>
    <div class="file-data">
        <div>
            <div>
                <p class="text-sm font-semibold">Văn bản 1</p>
                <textarea
                    class="border-[1px] border-black rounded p-2 text-sm w-full"
                    rows="4"
                ></textarea>
            </div>
            <div>
                <p>Văn bản 1</p>
                <div class="relative">
                    <img
                        src="/icons/icon-delete.svg"
                        alt="delete"
                        class="absolute top-[-8px] right-[-8px] cursor-pointer shadow-sm"
                    />
                    <textarea
                        class="border-2 w-full border-black rounded p-2 text-sm"
                        rows="4"
                    ></textarea>
                </div>
            </div>
        </div>
        <div class="flex justify-between">
            <button
                v-if="activeKey !== '1'"
                @click="handlePrevTab"
                class="flex justify-center items-center px-4 py-2 bg-tk-btn-color rounded text-white text-sm font-medium mr-4 shadow-tk-btn"
                onclick=""
            >
                <img src="/icons/plus.svg" alt="back" class="pr-2" />
                Thêm văn bản
            </button>
            <button
                v-if="activeKey !== '1'"
                @click="handlePrevTab"
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
                    v-if="activeKey !== '1'"
                    @click="handlePrevTab"
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

<style></style>
