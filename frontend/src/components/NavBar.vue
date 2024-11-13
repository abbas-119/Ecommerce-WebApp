<template>
  <div>
    <div class="navbar flex items-center justify-between bg-white p-12">
      <div class="logo text-2xl font-bold text-red-700">DECORPLEX</div>
      <div class="flex items-center">
        <input type="text" placeholder="What are you looking for?" class="search-bar p-1.5 w-96 border rounded-l-md"/>
        <button class="bg-gray-200 p-1.5 border rounded-r-md">
          <font-awesome-icon :icon="['fas', 'search']" />
        </button>
      </div>
      <div class="links flex items-center">
        <a href="#" class="mr-2.5 text-yellow-500">Sign Up Now Get Exclusive Benefits</a>
        <font-awesome-icon :icon="['fas', 'heart']" class="text-red-500" />
        <font-awesome-icon :icon="['fas', 'shopping-cart']" class="text-yellow-500 ml-2.5" />
      </div>
    </div>
    <div class="categories flex justify-around w-full mt-2.5">
      <div class="relative group">
        <div class="flex items-center mx-2.5 text-black hover:bg-gray-100 p-2 rounded-md">
          <a href="#">Door Handles</a>
          <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1" />
        </div>
        <!-- Dropdown for Door Handles -->
        <div class="absolute hidden group-hover:block bg-white border mt-1 w-48">
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type A</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type B</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
        </div>
      </div>
      <div class="relative group">
        <div class="flex items-center mx-2.5 text-black hover:bg-gray-100 p-2 rounded-md">
          <a href="#">Door knobs</a>
          <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1" />
        </div>
        <!-- Dropdown for Door knobs -->
        <div class="absolute hidden group-hover:block bg-white border mt-1 w-48">
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type A</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type B</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
        </div>
      </div>
      <div class="relative group">
        <div class="flex items-center mx-2.5 text-black hover:bg-gray-100 p-2 rounded-md">
          <a href="#">Door Locks</a>
          <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1" />
        </div>
        <!-- Dropdown for Door Locks -->
        <div class="absolute hidden group-hover:block bg-white border mt-1 w-48">
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type A</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type B</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
        </div>
      </div>
      <div class="relative group">
        <div class="flex items-center mx-2.5 text-black hover:bg-gray-100 p-2 rounded-md">
          <a href="#">Hinges</a>
          <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1" />
        </div>
        <!-- Dropdown for Hinges -->
        <div class="absolute hidden group-hover:block bg-white border mt-1 w-48">
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type A</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type B</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
        </div>
      </div>
      <div class="relative group">
        <div class="flex items-center mx-2.5 text-black hover:bg-gray-100 p-2 rounded-md">
          <a href="#">Cabinet Handles</a>
          <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1" />
        </div>
        <!-- Dropdown for Cabinet Handles -->
        <div class="absolute hidden group-hover:block bg-white border mt-1 w-48">
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type A</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type B</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
        </div>
      </div>
      <div class="relative group">
        <div class="flex items-center mx-2.5 text-black hover:bg-gray-100 p-2 rounded-md">
          <a href="#">Tools</a>
          <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1" />
        </div>
        <!-- Dropdown for Tools -->
        <div class="absolute hidden group-hover:block bg-white border mt-1 w-48">
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type A</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type B</a>
          <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Type C</a>
        </div>
      </div>
      <button class="sale-button bg-red-700 text-white border-none p-1.5">Sale</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* Tailwind CSS handles the styling */
</style>
