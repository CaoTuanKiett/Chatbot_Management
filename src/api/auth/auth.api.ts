import { $post } from '@/api'
import { mockApiIAmAdmin, mockApiLogin, mockApiRefreshToken } from '@/helpers/mockApi'
import {
    type LoginRequest,
    type RefreshTokenRequest,
    type RegisterRequest,
    type RegisterResponse
} from './auth.dto'

export async function apiLogin(payload: LoginRequest) {
    // TODO: Please uncomment the code below and remove the mockApiLogin function
    console.log(':::apiLogin -> payload', payload)

    // return await $post<LoginResponse>('/api/v1/auth/login', payload).then((resp) => {
    //     console.log(':::apiLogin -> resp', resp)
    //     return resp.data
    // })

    return await mockApiLogin(payload)
}

export async function apiLogout() {
    // TODO: Please uncomment the line below
    // await $post('/auth/logout/')
}

export async function apiRegister(payload: RegisterRequest) {
    await $post<RegisterResponse>('/auth/register/', payload).then((resp) => {
        return resp.data
    })

    // const data = {
    //     full_name: payload.name,
    //     email: payload.email,
    //     phone: payload.phone,
    //     status: true,
    //     role_id: 0,
    //     password: payload.password
    // }
    // console.log(':::apiRegister -> payload', data)

    // return await axios.post('https://htklalala.xyz/api/v1/auth/signup', data).then((resp) => {
    //     console.log(':::apiRegister -> resp', resp)
    //     return resp.data
    // })

    // await $post<RegisterResponse>('/api/v1/auth/signup', payload).then((resp) => {
    //     console.log(':::apiRegister -> resp', resp)

    //     return resp.data
    // })
}

export async function apiRefreshToken(payload: RefreshTokenRequest) {
    // TODO: Please uncomment the code below and remove the mockApiRefreshToken function
    // return await $post<RefreshTokenResponse>('/auth/refresh/', payload).then((resp) => {
    //     return resp.data
    // })

    return await mockApiRefreshToken(payload)
}

export async function apiIAmAdmin() {
    // TODO: add api call to check if user is admin

    // Mock implementation
    const access_token = localStorage.getItem('access_token')
    if (!access_token) {
        return Promise.reject({ message: 'Unauthorize' })
    }
    return await mockApiIAmAdmin(access_token)
}
