/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                vue: '#42b883',
                'vue-shade': '#2E805B',
                'tk-primary-color': '#11212E',
                'tk-btn-color': '#509D9D',
                'tk-btn-color-primary': '#373977'
            },
            boxShadow: {
                'tk-btn': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
                'vue-card-hover': '0 4px 8px 0 rgba(0,0,0,0.10)',
                'vue-card-active': '0 8px 16px 0 rgba(0,0,0,0.10)'
            }
        }
    },
    plugins: []
}
