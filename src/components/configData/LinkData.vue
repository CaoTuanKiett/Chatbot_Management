<template>
    <div id="app">
        <h1>Nhập URL để hiển thị trang</h1>
        <input v-model="url" type="text" placeholder="Nhập URL" />
        <button @click="loadPage">Hiển thị trang</button>
        <div v-if="url">
            <iframe :src="url" width="100%" height="600px"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: ''
        }
    },
    methods: {
        loadPage() {
            // Cập nhật URL và hiển thị iframe
        }
    }
}
</script>

<style scoped>
#app {
    text-align: center;
    margin-top: 20px;
}
input {
    width: 60%;
    padding: 10px;
    margin-right: 10px;
}
button {
    padding: 10px;
}
iframe {
    border: none;
}
</style>
