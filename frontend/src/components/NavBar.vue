<template>
  <div class="bg-amber-50 min-h-screen relative pr-12">
    <div @click="handleClickOutside">
      <div class="bg-amber-50  py-2 flex justify-between px-4">
        <div class="flex items-center space-x-4">
          <span>Phone: +973 32295300</span>
          <a href="#" class="hover:underline">Store Locator
           <font-awesome-icon :icon="['fas', 'store']" />
          </a>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:underline">English</a>
          <a href="#" class="hover:underline">عربي</a>
        </div>
      </div>
      <div class="navbar flex items-center justify-between bg-white p-12">
        <div class="logo">
          <img src="@/assets/Decorplex Logo.png" alt="Decorplex Logo" class="h-21 w-60 object-contain" />
        </div>
        <div class="flex items-center flex-grow max-w-lg ml-6">
          <input type="text" placeholder="What are you looking for?" class="search-bar p-1.5 w-full border rounded-l-md" />
          <button class="bg-gray-200 p-1.5 border rounded-r-md">
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </div>
        <div class="links flex items-center ml-4">
          <a href="#" class="text-yellow-500">Sign Up Now</a>
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
     <div class="fixed right-0 top-0 h-full w-12 bg-yellow-700 text-white p-2.5 flex flex-col items-center justify-center z-50">
        <div class="transform -rotate-90 whitespace-nowrap cursor-pointer" @click="toggleBasket">
          VIEW BASKET
          <font-awesome-icon :icon="['fas', 'shopping-cart']" class="text-yellow-500 ml-2.5" />
        </div>
      </div>
    </div>

    <!-- Slider for basket -->
    <div class="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 pr-12"
         :class="{'translate-x-full': !basketVisible, 'translate-x-0': basketVisible}"
         @click.stop>
      <div class="p-4">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-bold mb-4">Your Basket</h2>
          <button @click="toggleBasket" class="text-red-500">Close</button>
        </div>
        <p>No items in the basket</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      basketVisible: false
    };
  },
  methods: {
    toggleBasket() {
      this.basketVisible = !this.basketVisible;
    },
    handleClickOutside(event) {
      // Close the basket if clicked outside of it
      if (this.basketVisible && !this.$el.querySelector('.fixed.right-0').contains(event.target)) {
        this.basketVisible = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
.translate-x-full {
  transform: translateX(100%);
}
.translate-x-0 {
  transform: translateX(0);
}
</style>