<script setup>
import bg from '../assets/images/2.jpeg'
</script>

<template>
    <!-- menggunakan background 1 dari assets/images/1.jpeg -->
    <div class="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen" :style="{ backgroundImage: 'url(' + bg + ')' }">
        <div class="flex justify-center bg-gradient-to-r from-green-800/90 to-green-800/20 min-h-screen">
            <!-- center the text -->
            <div class="p-5 max-w-5xl flex flex-col justify-center">
                <h1 class="text-5xl font-bold text-white">Selamat Datang di NUKang Interior</h1>
                <p class="mt-3 text-2xl text-white">
                    Kami adalah studio desain interior yang melayani segala kebutuhan desain interior Anda, mulai dari
                    desain
                    ruang tamu, kamar tidur, dapur, kantor, hingga desain ruang komersial seperti restoran, cafe, dan
                    toko.
                </p>
            </div>
        </div>
    </div>
</template>