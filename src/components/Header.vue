<script setup>
import bg from '../assets/images/2.jpeg'
</script>

<template>
    <!-- menggunakan background 1 dari assets/images/1.jpeg -->
    <div class="bg-cover bg-center bg-no-repeat bg-fixed h-3/4 lg:min-h-screen"
        :style="{ backgroundImage: 'url(' + bg + ')' }">
        <div class="flex justify-center bg-gradient-to-r from-green-800/90 to-green-800/20 min-h-screen">
            <!-- center the text -->
            <div class="p-5 max-w-5xl flex flex-col justify-center">
                <h1 class="text-2xl lg:text-5xl font-bold text-white">Selamat Datang di NUkang Interior</h1>
                <p class="mt-3 text-md lg:text-2xl text-white">
                    <strong>NUkang</strong> adalah layanan jasa desain interior yang di pelopori oleh mahasiswa Teknologi
                    Informasi Kampus ITS NU Pekalongan, di bersamai oleh Yudi & Rory owner <strong><u><a
                                href="//interiorloka.com">interiorloka</a></u></strong> yang sudah
                    berpengalaman.
                </p>
            </div>
        </div>
    </div>
</template>