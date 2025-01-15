<template>
  <div id="app" class="flex flex-col min-h-screen">
    <NavBar/>
    <NavCat/>

    <!-- Main Content -->
    <div class="flex-grow w-full">
      <router-view/>
    </div>

    <!-- Footer -->
    <div class="pr-12">
      <footer
          class="border-t-[3px] bg-amber-50 border-black md:flex md:items-center md:justify-between md:p-6 text-black dark:text-white text-sm pr-12">
      <span class="sm:text-center">© 2025 <a href="#" class="hover:underline">Decorplex Interior Decoration</a>. All Rights Reserved.
      </span>
        <ul class="mt-3 flex flex-wrap items-center sm:mt-0">
          <li>
            <a target="_blank" href="/privacy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NavCat from "@/components/NavCat.vue";

export default {
  name: "App",
  components: {
    NavCat,
    NavBar,
  },
};
</script>
