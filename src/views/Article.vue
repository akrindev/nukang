<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// get id from route

const route = useRoute();

const article = ref({});
const loading = ref(true);

onMounted(async () => {
  await fetch(
    import.meta.env.VITE_PUBLIC_API_URL + "/articles/" + route.params.id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // authorization bearer token
        Authorization: "Bearer " + import.meta.env.VITE_STRAPI_API_KEY,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      article.value = data.data;
      loading.value = false;

      console.log(article);
    });
});
</script>

<template>
  <div v-if="!loading" class="py-32 px-5 lg:px-0 mx-auto max-w-5xl">
    <div class="pb-5 text-3xl font-bold">
      {{ article.attributes.judul }}
    </div>
    <p>
      {{ article.attributes.content }}
    </p>
  </div>
</template>
