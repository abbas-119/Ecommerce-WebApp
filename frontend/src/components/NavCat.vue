<template>
  <div class="categories flex justify-center w-full bg-white border-b border-gray-300 pb-2 sticky top-0 z-30">
    <div class="relative group z-50">
      <div class="flex items-center mx-5 text-black hover:bg-gray-100 p-2 border-gray-200">
        <a href="#">Door Handles</a>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1"/>
      </div>
      <!-- Dropdown for Door Handles -->
      <div class="absolute hidden group-hover:block bg-white border mt-0.5 w-48 border-gray-200">
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type A</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type B</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
      </div>
    </div>

    <div class="relative group z-50">
      <div class="flex items-center mx-5 text-black hover:bg-gray-100 p-2 border-gray-200">
        <a href="#">Door Knobs</a>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1"/>
      </div>
      <!-- Dropdown for Door Knobs -->
      <div class="absolute hidden group-hover:block bg-white border mt-0.5 w-48 border-gray-200">
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type A</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type B</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
      </div>
    </div>

    <div class="relative group z-50">
      <div class="flex items-center mx-5 text-black hover:bg-gray-100 p-2 border-gray-200">
        <a href="#">Door Locks</a>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1"/>
      </div>
      <!-- Dropdown for Door Locks -->
      <div class="absolute hidden group-hover:block bg-white border mt-0.5 w-48 border-gray-200">
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type A</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type B</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
      </div>
    </div>

    <div class="relative group z-50">
      <div class="flex items-center mx-5 text-black hover:bg-gray-100 p-2 border-gray-200">
        <a href="#">Hinges</a>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1"/>
      </div>
      <!-- Dropdown for Hinges -->
      <div class="absolute hidden group-hover:block bg-white border mt-0.5 w-48 border-gray-200">
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type A</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type B</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
      </div>
    </div>

    <div class="relative group z-50">
      <div class="flex items-center mx-5 text-black hover:bg-gray-100 p-2 border-gray-200">
        <a href="#">Cabinet Handles</a>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1"/>
      </div>
      <!-- Dropdown for Cabinet Handles -->
      <div class="absolute hidden group-hover:block bg-white border mt-0.5 w-48 border-gray-200">
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type A</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type B</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
      </div>
    </div>

    <div class="relative group z-50">
      <div class="flex items-center mx-5 text-black hover:bg-gray-100 p-2 border-gray-200">
        <a href="#">Tools</a>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1"/>
      </div>
      <!-- Dropdown for Tools -->
      <div class="absolute hidden group-hover:block bg-white border mt-0.5 w-48 border-gray-200">
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type A</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200">Type B</a>
        <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
      </div>
    </div>
    <button class="sale-button mx-5 text-red-700 font-bold border-none p-1.5 border border-gray-200">Sale</button>
  </div>
</template>

<style scoped>

</style>
<script setup>
</script>