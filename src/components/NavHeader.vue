<!-- create menu navbar header with list menu of home, article, about. its position is fixed at top. we use tailwindcss  -->
<template>
  <div class="w-full p-5 fixed z-50 bg-white bg-opacity-80 shadow-md">
    <!-- menu list at center -->
    <div class="flex justify-center">
      <ul class="flex">
        <li class="mr-6">
          <router-link to="/" class="text-black font-bold hover:text-blue-500"
            >Home</router-link
          >
        </li>
        <li class="mr-6">
          <router-link
            to="/articles"
            class="text-black font-bold hover:text-blue-500"
            >Articles</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
