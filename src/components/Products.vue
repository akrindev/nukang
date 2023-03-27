<script setup>
import image1 from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpeg'
import image4 from '../assets/images/4.jpeg'
import image5 from '../assets/images/5.jpeg'
import image6 from '../assets/images/6.jpeg'

const interiors = [
    { name: 'Ruang 1', image: image1 },
    { name: 'Ruang 2', image: image2 },
    { name: 'Ruang 3', image: image3 },
    { name: 'Ruang 4', image: image4 },
    { name: 'Ruang 5', image: image5 },
    { name: 'Ruang 6', image: image6 },
]
</script>

<template>
    <!-- terdapat preview design produk berupa grid 3 kolom -->
    <div class="p-5 max-w-7xl mx-auto">
        <div class="py-12 text-center">
            <h1 class="text-3xl font-bold">
                Beberapa interior yang mungkin kamu suka
            </h1>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <!-- menggunakan v-for untuk mengulang component ProductCard sebanyak 6 kali -->
            <div v-for="interior in interiors" :key="interior.name">
                <img :src="interior.image" alt="interior.name"
                    class="w-full h-full object-cover hover:scale-95 duration-200">
            </div>

        </div>
    </div>
</template>