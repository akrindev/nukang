<script setup>
import { onMounted, ref } from "vue";

let articles = ref([]);
let domain = import.meta.env.VITE_PUBLIC_API_URL;

onMounted(async () => {
  const response = await fetch(
    import.meta.env.VITE_PUBLIC_API_URL + "/api/articles?populate=*",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // authorization bearer token
        Authorization: "Bearer " + import.meta.env.VITE_STRAPI_API_KEY,
      },
    }
  );
  const data = await response.json();
  articles.value = data.data;

  console.log(articles);
});
</script>

<!-- create list articles from api '/api/articles' -->
<template>
  <div class="px-5 lg:px-0 pt-28 mx-auto max-w-7xl">
    <div class="mb-12">
      <h1 class="text-4xl font-bold">Articles</h1>
    </div>
    <ul class="max-w-3xl">
      <li v-for="article in articles" :key="article.id" class="py-8">
        <router-link :to="'/articles/' + article.id">
          <img
            :src="domain + article.attributes.thumbnail.data.attributes.url"
            :alt="article.attributes.judul"
            class="rounded-md shadow"
          />
          <div class="pb-5 text-lg font-bold underline">
            {{ article.attributes.judul }}
          </div>
          <p>
            {{ article.attributes.content.slice(0, 350) }} ...
            <strong class="text-yellow-700">baca selengkapnya</strong>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
