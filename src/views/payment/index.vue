<script setup lang="ts">
import { ref } from 'vue'

interface UserPayment {
    name: string
    phone: string
    email: string
    address: string
}

const dataUserPayment = ref<UserPayment>({
    name: '',
    phone: '',
    email: '',
    address: ''
})

const fields: { label: string; model: keyof UserPayment }[] = [
    { label: 'Họ và tên:', model: 'name' },
    { label: 'Số điện thoại:', model: 'phone' },
    { label: 'Email:', model: 'email' },
    { label: 'Địa chỉ:', model: 'address' }
]

const dataRoom = ref({
    name: '',
    room: '',
    location: '',
    number: '',
    date: '',
    time: '',
    price: '',
    total: '',
    note: '',
    images: {
        img1: '',
        img2: '',
        img3: '',
        img4: ''
        // img5: ''
    }
})

dataRoom.value = {
    name: 'Golden Star Villa Hoi An',
    room: 'Phòng 1',
    location: 'Hai Ba Trung Street, Tra Que Hamlet, Cam Ha Ward, Cam Ha, Hội An, Việt Nam',
    number: '1',
    date: '2022-10-10',
    time: '1 giờ',
    price: '100.000 VND',
    total: '100.000 VND',
    note: 'Biệt thự cách Bãi biển Hà My 2.3 km và Bãi biển Cửa Đại 2.7 km. Sân bay gần nhất là Sân bay Quốc tế Đà Nẵng, cách Golden Star Villa Hoi An 24 km, đồng thời chỗ nghỉ này cũng cung cấp dịch vụ đưa đón sân bay mất phí.',
    images: {
        img1: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/432513915.jpg?k=2a22f317a6db66a03e743a23d002a9d5a3cc9769d38c47c827ed3d61524a49c3&o=',
        img2: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/228296440.jpg?k=7ee1d2ca98cec4fbdffcfe08a499e6a4ba44deacef016c2ae0577583ede5b55e&o=',
        img3: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/432494359.jpg?k=105db635d3e034ea4fb0361a6b4ad812677f601f13775d13fcc68f7b6b7b7f30&o=',
        img4: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/235308947.jpg?k=9327f2d2f82ebecf6e61cd7be2494ccf03cd3dcb158e792d70a2c5d00423a23b&o='
        // img5: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/432513915.jpg?k=2a22f317a6db66a03e743a23d002a9d5a3cc9769d38c47c827ed3d61524a49c3&o='
    }
}

const value1 = ref('Vietnam')
const currentImage = ref(dataRoom.value.images.img1)

const updateImage = (newImage: string) => {
    currentImage.value = newImage
}

const focus = () => {
    console.log('focus')
}

const handleChange = (value: string) => {
    console.log(value)
}
</script>

<template>
    <div class="payment h-screen w-full flex gap-2 items-center justify-between mt-32">
        <div class="h-screen w-1/3 flex flex-col items-center ml-12">
            <div class="mt-10 bg-slate-100 py-10 px-6 rounded-lg">
                <h1 class="uppercase text-lg font-semibold">Thông tin đặt phòng</h1>
                <div v-for="field in fields" :key="field.model" class="px-6 py-4">
                    <p class="text-sm text-black font-semibold pb-1">{{ field.label }}</p>
                    <input
                        v-model="dataUserPayment[field.model]"
                        type="text"
                        class="border-2 w-96 border-slate-400 rounded p-2 text-sm shadow-tk-btn-2"
                    />
                </div>
                <div class="flex gap-4 justify-end mt-9">
                    <button
                        class="flex justify-center items-center px-6 py-3 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-200"
                    >
                        Hủy
                    </button>
                    <button
                        class="flex justify-center items-center px-6 py-3 bg-tk-btn-color-primary rounded text-white text-sm font-medium shadow-tk-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-tk-hover duration-200"
                    >
                        Thanh Toán
                    </button>
                </div>
            </div>
        </div>
        <div class="h-screen w-2/3 flex px-11 gap-3">
            <div class="flex flex-col w-1/2 gap-2 items-center flex-wrap mt-4">
                <img
                    :src="currentImage"
                    alt="image-room"
                    class="img-show object-cover w-[420px] h-[480px] rounded-md shadow-tk-btn-2"
                />
                <div class="flex gap-3">
                    <img
                        v-for="(image, index) in Object.values(dataRoom.images)"
                        :key="index"
                        :src="image"
                        alt="image-room"
                        class="img-item object-cover w-24 h-24 cursor-pointer rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-108 duration-300 shadow-tk-btn-2 hover:shoadow-tk-btn"
                        @click="updateImage(image)"
                    />
                </div>
            </div>
            <div class="w-1/2 mt-14 flex flex-col gap-3">
                <h1 class="text-2xl font-semibold mb-3">{{ dataRoom.name }}</h1>

                <p class="flex items-center">
                    <img src="/images/room.png" alt="room" class="w-6 mr-1" /> Phòng:
                    {{ dataRoom.number }}
                </p>
                <p class="flex items-center">
                    <img src="/images/oclock.png" alt="room" class="w-6 mr-1" />Thời gian:
                    {{ dataRoom.time }}
                </p>
                <p class="flex items-center">
                    <img src="/images/calendar.png" alt="room" class="w-6 mr-1" /> Ngày đặt:
                    {{ dataRoom.date }}
                </p>
                <p class="flex items-center">
                    <img src="/images/price.png" alt="room" class="w-6 mr-1" />Giá:
                    {{ dataRoom.price }}
                </p>
                <p class="flex items-start">
                    <img src="/images/location.png" alt="" class="w-6 mr-1" /> Địa chỉ:
                    {{ dataRoom.location }}
                </p>
                <p class="flex items-start">
                    <img src="/images/note.png" alt="room" class="w-6 mr-1" /> Ghi chú:
                    {{ dataRoom.note }}
                </p>

                <p
                    class="bg-tk-color mx-12 flex justify-center items-center py-3 text-white font-semibold mt-16 rounded-md tracking-wider"
                >
                    Thành Tiền: {{ dataRoom.total }}
                </p>
            </div>
        </div>
    </div>
    <!-- <div class="payment h-screen pt-[200px]">
        <div
            class="flex flex-col justify-center items-center p-20 border border-solid bg-slate-50 border-neutral-200 max-w-[829px] max-md:px-5"
        >
            <div class="flex gap-4 mt-7 max-w-full w-[466px] max-md:flex-wrap">
                <div
                    class="flex flex-col flex-1 justify-center items-start px-3 py-2.5 text-sm font-semibold text-sky-600 whitespace-nowrap bg-white rounded-md border-2 border-sky-600 border-solid shadow-sm max-md:pr-5"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/35a9d6540bc7f3ccf84602fab2575738001d50216859d3bc065fee2dbc3ac9c8?"
                        class="w-4 aspect-square"
                    />
                    <div>Card</div>
                </div>
                <div
                    class="flex flex-col flex-1 justify-center items-start px-3 py-2.5 text-sm font-semibold whitespace-nowrap bg-white rounded-md border-2 border-solid shadow-sm border-neutral-200 text-slate-500 max-md:pr-5"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/713329827f24f05e4a2097b662fa93024fd6633c6f9e12b14460cc0b10b85e10?"
                        class="w-4 aspect-square"
                    />
                    <div>EPS</div>
                </div>
                <div
                    class="flex flex-col flex-1 justify-center items-start px-3 py-2.5 text-sm font-semibold whitespace-nowrap bg-white rounded-md border-2 border-solid shadow-sm border-neutral-200 text-slate-500 max-md:pr-5"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8151e47fb3182520dd209259e53818c7bc93b72da04ad8ddee81e4afc108ba13?"
                        class="w-4 aspect-square"
                    />
                    <div>Giropay</div>
                </div>
                <div
                    class="flex justify-center items-center px-3 py-2.5 bg-white rounded-md border-2 border-solid shadow-sm border-neutral-200"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb3d3587fc8c6d9dc0ce588b6e3cdd81e69953dec37ba2bf6814a169cfb2276?"
                        class="w-2 aspect-[4] fill-slate-500"
                    />
                </div>
            </div>
            <div class="mt-2.5 text-sm font-semibold text-slate-600 max-md:max-w-full">
                Card number
            </div>
            <div
                class="flex flex-col justify-center mt-1 max-w-full bg-white rounded-md border-2 border-solid shadow-sm border-neutral-200 w-[466px]"
            >
                <div
                    class="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full relative"
                >
                    <input
                        type="text"
                        class="text-base font-medium text-black w-full h-full px-3 py-2.5"
                        placeholder="1234 1234 1234 1234"
                    />
                    <div class="flex gap-1 absolute right-3 top-0 bottom-0">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b16e85282079ea1dde027a70317b379de23da0584473a62a265cf85c0170f6cc?"
                            class="shrink-0 w-6 aspect-[1.49]"
                        /><img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd713791d4f76fb9df1fc74f1dad091cdfcbaa4e81dd78cea003dad765a884f?"
                            class="shrink-0 w-6 aspect-[1.49]"
                        /><img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a7902317f22df9dd8bf96774a0e591bfeb1b290207f353099eacb50f6f26224?"
                            class="shrink-0 w-6 aspect-[1.49]"
                        /><img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3431a6cad0a11ef2a00e83e634746bad6e29c20a1cf788f05231999fd4d0c133?"
                            class="shrink-0 w-6 aspect-[1.49]"
                        />
                    </div>
                </div>
            </div>
            <div
                class="flex gap-2.5 mt-2.5 max-w-full text-sm font-semibold w-[466px] max-md:flex-wrap"
            >
                <div class="flex flex-col flex-1">
                    <div class="text-slate-600">Expiry</div>
                    <input
                        type="text"
                        class="px-3 py-2.5 mt-1 ext-base font-medium text-black bg-white rounded-md border-2 border-solid shadow-sm border-neutral-200 max-md:pr-5"
                        placeholder="MM / YY"
                    />
                </div>
                <div class="flex flex-col flex-1 whitespace-nowrap">
                    <div class="text-slate-600">CVC</div>
                    <input
                        type="text"
                        class="px-3 py-2.5 mt-1 ext-base font-medium text-black bg-white rounded-md border-2 border-solid shadow-sm border-neutral-200 max-md:pr-5"
                        placeholder="CVC"
                    />
                </div>
            </div>
            <div
                class="flex gap-2.5 mt-2.5 max-w-full text-sm font-semibold w-[466px] max-md:flex-wrap"
            >
                <div class="flex flex-col flex-1">
                    <div class="text-slate-600">Country</div>

                    <Select
                        ref="select"
                        v-model:value="value1"
                        @focus="focus"
                        @change="handleChange"
                        class="flex gap-5 justify-between w-56 h-11 text-black bg-white rounded-md border-2 border-solid shadow-sm border-neutral-200"
                    >
                        <SelectOption value="United States">
                            <span>United States</span>
                        </SelectOption>
                        <SelectOption value="Canada">
                            <span>Canada</span>
                        </SelectOption>
                        <SelectOption value="Việt Nam">
                            <span>Vietnam</span>
                        </SelectOption>
                    </Select>
                </div>
                <div class="flex flex-col flex-1">
                    <div class="text-slate-600">Postal code</div>
                    <input
                        type="text"
                        class="px-3 py-2.5 mt-1 text-gray-400 whitespace-nowrap bg-white rounded-md border-2 border-solid shadow-sm border-neutral-200 max-md:pr-5"
                        placeholder="90210"
                    />
                </div>
            </div>
        </div>
    </div> -->
</template>

<style>
/* Add your styles here */
.payment .ant-select-selector {
    height: 100% !important;
    display: flex;
    align-items: center;
}
</style>
