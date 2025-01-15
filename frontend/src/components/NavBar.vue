<template>
  <div class="pr-12">
    <div @click="handleClickOutside">
      <!-- Top Contact Section -->
      <div class="bg-amber-50 py-2 flex justify-between px-4 border-b border-black">
        <div class="flex items-center space-x-4">
          <span>Phone: +973 32295300</span>
          <a @click="goToStoreLocator" class="hover:underline cursor-pointer">Store Locator
            <font-awesome-icon :icon="['fas', 'store']"/>
          </a>
        </div>
        <div class="flex items-center space-x-4">
          <!--          <a href="#" class="hover:underline">English</a>-->
          <img src="https://flagcdn.com/w40/bh.png" alt="Bahrain Flag" class="h-4 w-6 object-contain"/>
          <a href="#" class="hover:underline">عربي</a>
        </div>
      </div>

      <!-- Navbar Section -->
      <div class="navbar flex items-center justify-center bg-white p-12 border-gray-200">
        <div class="logo mr-40">
          <img @click="goToHome" src="@/assets/Decorplex Logo.png" alt="Decorplex Logo"
               class="h-21 w-60 object-contain cursor-pointer"/>
        </div>
        <div class="flex items-center flex-grow max-w-2xl">
          <input type="text" placeholder="What are you looking for?"
                 class="search-bar p-1.5 w-full border border-gray-300 rounded-l-md"/>
          <button class="bg-gray-200 p-1.5 border border-gray-300 rounded-r-Kmd">
            <font-awesome-icon :icon="['fas', 'search']"/>
          </button>
        </div>
        <div class="links flex items-center ml-40">
          <a href="#" class="text-yellow-500">Sign Up Now</a>
        </div>
      </div>


      <!-- Basket View Button -->
      <div
          class="fixed right-0 top-0 h-full w-12 bg-yellow-700 text-white p-2.5 flex flex-col items-center justify-center z-50 border-l border-gray-300 z-50">
        <div class="transform -rotate-90 whitespace-nowrap cursor-pointer z-50" @click="toggleBasket">
          VIEW BASKET
          <font-awesome-icon :icon="['fas', 'shopping-cart']" class="text-yellow-500 ml-2.5"/>
        </div>
      </div>
    </div>

    <!-- Slider for basket -->
    <div
        class="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 pr-12 border-l border-gray-200 z-50"
        :class="{'translate-x-full': !basketVisible, 'translate-x-0': basketVisible}"
        @click.stop>
      <div class="p-4 border-b border-gray-200">
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
    },
    goToStoreLocator() {
      this.$router.push('/store-locator');
    },
    goToHome() {
      this.$router.push('/');
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
