<script setup>
import { IconCheck } from '@tabler/icons-vue'

const services = [
    { name: 'Terpercaya', description: 'Kami merupakan Tim yang berpengalaman' },
    { name: 'Terjangkau', description: 'Harga yang kami tawarkan sangat terjangkau' },
    { name: 'Gratis Desain 2D', description: 'Gratis Desain untuk setiap pembelian' },
    { name: 'Desainer', description: 'Di desain oleh Tim yang berpengalaman' },

]
</script>
<template>
    <!-- list dengan centang icon -->
    <div class="p-5 max-w-7xl mx-auto">
        <div class="py-12 text-center">
            <h1 class="text-3xl font-bold">
                Kenapa Memilih Kami?
            </h1>
        </div>
        <div class="flex justify-center items-center w-full">
            <div class="my-12 grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                <!-- menggunakan v-for untuk mengulang component ServiceCard sebanyak 6 kali -->
                <div v-for="service in services" :key="service.name">
                    <div class="flex items-center">
                        <div class="bg-green-800 rounded-full p-2">
                            <IconCheck class="text-white" />
                        </div>
                        <div class="flex flex-col ml-3">
                            <span class="font-bold text-md">{{ service.name }}</span>
                            <p>{{ service.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>