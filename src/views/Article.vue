<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";

const route = useRoute();

const article = ref({});
const loading = ref(true);
const domain = import.meta.env.VITE_PUBLIC_API_URL;

const markdownToHtml = (content) => {
  return marked(content);
};

onMounted(async () => {
  await fetch(
    import.meta.env.VITE_PUBLIC_API_URL +
      "/api/articles/" +
      route.params.id +
      "?populate=*",
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
    <img
      :src="domain + article.attributes.thumbnail.data.attributes.url"
      :alt="article.attributes.judul"
      class="rounded-md shadow"
    />
    <div class="py-5 text-3xl font-bold">
      {{ article.attributes.judul }}
    </div>
    <p v-html="markdownToHtml(article.attributes.content)" />
  </div>
</template>
