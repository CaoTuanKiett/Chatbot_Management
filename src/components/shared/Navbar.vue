<script setup lang="ts">
import LanguageChanger from '@/components/LanguageChanger.vue'
import ButtonRegisterChatbot from '@/components/common/ButtonRegisterChatbot.vue'
import { RoutePath } from '@/router'
import { useAuthStore } from '@/stores/auth'
import { Icon } from '@iconify/vue'
import { Dropdown, Menu, MenuItem } from 'ant-design-vue'
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
console.log('route', route.path)

const fullPath = computed(() => window.location.href)

watch(fullPath, (newValue, oldValue) => {
    console.log('fullPath', newValue, oldValue)
})

const activeScroll = ref(false)

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        activeScroll.value = true
        console.log('activeScroll', activeScroll.value)
    } else {
        activeScroll.value = false
    }
})

const auth = useAuthStore()
</script>

<template>
    <div class="bg-white drop-shadow-lg fixed top-0 left-0 right-0 z-10">
        <div class="max-w-screen-xl mx-auto px-5">
            <header
                :class="`flex flex-col lg:flex-row justify-between items-center my-4 transition ease-in-out delay-350 duration-300 ${
                    activeScroll ? 'activeScroll' : ''
                }`"
            >
                <div class="flex w-full lg:w-auto items-center justify-between">
                    <RouterLink to="/" class="flex items-center">
                        <img src="/images/logo-vaias.png" alt="logo-vaias" class="w-20 h-14" />
                        <div>
                            <span class="font-bold text-slate-800 text-2xl">VAIAS</span>
                            <span class="text-slate-500 text-xl">-Tourism</span>
                        </div>
                    </RouterLink>
                    <div class="block lg:hidden">
                        <button aria-label="Toggle Menu">
                            <title>Toggle Menu</title>
                            <Icon icon="ph:list-bold" />
                        </button>
                    </div>
                </div>
                <div class="flex">
                    <nav class="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
                        <ul class="flex flex-col items-center lg:flex-row lg:gap-3">
                            <li>
                                <RouterLink
                                    to="/#"
                                    class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                                >
                                    <span>Trang chủ</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/#"
                                    class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                                >
                                    <span>Cộng đồng</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    :to="RoutePath.ChatbotManagement"
                                    class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                                >
                                    <span>Quản lý Chatbot</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    :to="RoutePath.ChatbotRegister"
                                    class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                                >
                                    <!-- <button
                                        class="border-2 p-2 px-4 rounded-lg text-sm font-semibold bg-tk-primary-color text-white"
                                    >
                                        Đăng ký Chatbot
                                    </button> -->
                                    <ButtonRegisterChatbot />
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <div class="flex gap-4 items-center">
                        <LanguageChanger size="large" />
                        <div v-if="!auth.isLoggedIn" class="hidden lg:flex items-center gap-4">
                            <RouterLink :to="RoutePath.Login">
                                {{ $t('landingpage.navbar.login') }}
                            </RouterLink>
                            <RouterLink
                                :to="RoutePath.Register"
                                class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-vue text-white hover:bg-vue-shade border-2 border-transparent"
                            >
                                {{ $t('landingpage.navbar.signup') }}
                            </RouterLink>
                        </div>
                        <div v-else class="hidden lg:flex items-center gap-4">
                            <div>
                                <Dropdown :trigger="['click']">
                                    <div
                                        @click.prevent
                                        :class="`flex items-center py-2 px-3 rounded-lg shadow-md cursor-pointer transition ease-in-out delay-350 duration-300 ${
                                            activeScroll ? 'activeScroll-user' : ''
                                        }`"
                                    >
                                        <img
                                            src="/images/avatar.jpg"
                                            alt="avatar"
                                            class="avatar w-14 rounded-full mr-3"
                                        />
                                        <div>
                                            <p class="font-semibold">TUAN KIET</p>
                                            <p class="text-sm">Admin</p>
                                        </div>
                                    </div>
                                    <template #overlay>
                                        <Menu class="p-2">
                                            <MenuItem>
                                                <button @click="auth.logout">
                                                    {{ $t('landingpage.navbar.logout') }}
                                                </button>
                                            </MenuItem>
                                            <MenuItem>
                                                <RouterLink :to="RoutePath.ChatbotManagement">
                                                    Quản lý Chatbot
                                                </RouterLink>
                                            </MenuItem>
                                        </Menu>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<style lang="less" scoped>
.activeScroll {
    margin: 4px 0 !important;
}

.activeScroll-user {
    padding: 2px 12px;
    border: none;
    box-shadow: none;
}

.activeScroll-user .avatar {
    width: 40px;
    height: 40px;
    margin-right: 8px;
}
</style>
