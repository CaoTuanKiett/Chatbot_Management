<script setup lang="ts">
import { $get, $post } from '@/api'
import { loadStripe } from '@stripe/stripe-js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const stripePromise = loadStripe(
    'pk_test_51PhD2dDSs15Z8bpqz5gu04UoFAxqS0IyKEjBAhTOjrJAZZeXi0a5cAX5zNxoaSperiuO66zoVsYatKkvW8FRvafp00Qmamf5LF'
) // Replace with your Stripe publishable key

const route = useRoute()
const token = ref('')

interface UserPayment {
    full_name: string
    phone: string
    email: string
    amount?: number
    arrival_date?: string
    departure_date?: string
    thread_id?: number
}

const dataUserPayment = ref<UserPayment>({
    full_name: '',
    phone: '',
    email: '',
    amount: 0,
    arrival_date: '',
    departure_date: '',
    thread_id: 0
})

const fields: { label: string; model: keyof UserPayment }[] = [
    { label: 'Họ và tên:', model: 'full_name' },
    { label: 'Số điện thoại:', model: 'phone' },
    { label: 'Email:', model: 'email' },
    { label: 'Số tiền:', model: 'amount' },
    { label: 'Ngày đến:', model: 'arrival_date' },
    { label: 'Ngày đi:', model: 'departure_date' }
]

const dataRoom = ref({
    full_name: '',
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
    }
})

dataRoom.value = {
    full_name: 'Hilton Da Nang',
    room: 'Phòng 1',
    location: '50 Bạch Đằng - Hải Châu - Đà Nẵng',
    number: '1',
    date: '28/07/2024',
    time: '4 giờ',
    price: '146 $',
    total: '8.900.000 VND',
    note: 'Nằm tại vị trí thuận tiện ở Đà Nẵng, Hilton Da Nang cung cấp các phòng có điều hòa, hồ bơi ngoài trời, Wi-Fi miễn phí và trung tâm thể dục. Khách sạn 5 sao này có dịch vụ phòng và quầy lễ tân 24 giờ. Đây là chỗ nghỉ không hút thuốc và tọa lạc cách Bãi biển Mỹ Khê 2.9 km.',
    images: {
        img1: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483826834.jpg?k=1d629de3ce2bba212b88f5cc1f3ef1df56ea30d60225f025eb0984d6a121ca63&o=',
        img2: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483826848.jpg?k=b7d9ba55f3ba11d2fda0255170129d3d8d702b4592251342a64571c1e236a033&o=',
        img3: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483826858.jpg?k=2f2b2fc868cf8132f12fa4f808b64de2c2567c7dbf53e89689b27b3c00226230&o=',
        img4: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483826839.jpg?k=b6e8d2c0b9006d69e17d4d6c22f4b2be351f60c9292149cc9689e4e1663f0111&o='
    }
}

const handleCheckout = async () => {
    // console.log('dataUserPayment', dataUserPayment.value)

    const stripe = await stripePromise

    if (!stripe) {
        console.error('Stripe failed to load')
        return
    }

    const dataPayload = {
        arrival_date: dataUserPayment.value.arrival_date,
        departure_date: dataUserPayment.value.departure_date,
        reservation_status: 'active',
        json_data: {
            full_name: dataUserPayment.value.full_name,
            phone: dataUserPayment.value.phone,
            email: dataUserPayment.value.email,
            amount: dataUserPayment.value.amount,
            arrival_date: dataUserPayment.value.arrival_date,
            departure_date: dataUserPayment.value.departure_date,
            thread_id: dataUserPayment.value.thread_id
        },
        reservation_thread_id: 0
    }

    console.log('dataPayload', dataPayload)

    return await $post('/api/v1/payment/create-checkout-session/', dataPayload)
        .then((resp) => {
            console.log(':::data -> resp', resp.data)
            const { checkout_session } = resp.data
            // Linking.openURL(checkout_url)
            return stripe.redirectToCheckout({
                sessionId: checkout_session.id
            })
        })
        .catch((err) => {
            console.log(':::err', err)
        })
}

const value1 = ref('Vietnam')
const currentImage = ref(dataRoom.value.images.img1)

onMounted(async () => {
    token.value = route.query.token as string
    console.log('token', token.value)
    if (token.value) {
        console.log('token', token.value)
        return await $get('/api/v1/auth/decode-payment-token?token=' + token.value)
            .then((resp) => {
                console.log(':::data -> resp', resp.data)
                return (dataUserPayment.value = resp.data)
            })
            .catch((err) => {
                console.log(':::err', err)
            })
    }
})

const updateImage = (newImage: string) => {
    currentImage.value = newImage
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
                <div class="flex gap-4 justify-end mt-9 mr-6">
                    <button
                        class="flex justify-center items-center px-6 py-3 bg-tk-btn-color rounded text-white text-sm font-medium shadow-tk-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-200"
                    >
                        Hủy
                    </button>
                    <button
                        @click="handleCheckout"
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
                <h1 class="text-2xl font-semibold mb-3">{{ dataRoom.full_name }}</h1>

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
                    class="flex justify-start items-end py-3 pl-5 text-black mt-16 rounded-md tracking-wider"
                >
                    Thành Tiền:
                    <span class="text-2xl font-semibold text-tk-color ml-2">
                        {{ dataUserPayment.amount }}
                        $</span
                    >
                </p>
            </div>
        </div>
    </div>
</template>


<style>
/* Add your styles here */
.payment .ant-select-selector {
    height: 100% !important;
    display: flex;
    align-items: center;
}
</style>
