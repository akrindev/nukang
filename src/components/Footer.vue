<script setup>
import { IconBrandInstagram } from '@tabler/icons-vue';
import { IconBrandFacebook } from '@tabler/icons-vue';
</script>

<template>
    <!-- footer dengan copyright dan media sosial icon -->
    <div class="bg-green-800 text-white p-5">
        <div class="flex justify-center">
            <div class="flex flex-col items-center">
                <div class="flex flex-row">
                    <a href="https://www.facebook.com/">
                        <IconBrandFacebook />
                    </a>
                    <a href="https://www.instagram.com/">
                        <IconBrandInstagram />
                    </a>
                </div>
                <p class="mt-3">© 2023 NUKang Interior</p>
            </div>
        </div>
    </div>
</template>