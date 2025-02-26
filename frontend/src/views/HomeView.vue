<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <section class="text-center py-10">
      <h1 class="text-4xl font-bold text-gray-800">Welcome to Decorplex</h1>
      <p class="text-lg text-gray-600 mt-2">Your one-stop shop for premium hardware and home essentials.</p>
    </section>

    <div class="relative w-4/5 h-screen overflow-hidden flex items-center">
<!--      <button @click="prevSlide" class="absolute left-0 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition">-->
<!--        &#10094;-->
<!--      </button>-->

      <div class="relative w-full h-full">
        <div v-for="(image, index) in images" :key="index" class="absolute inset-0 flex items-center justify-center transition-opacity duration-700" :class="{ 'opacity-100': index === currentImageIndex, 'opacity-0': index !== currentImageIndex }">
          <img :src="require(`@/assets/${image}`)" :alt="'Slide ' + (index + 1)" class="w-full h-full object-cover"/>
        </div>
      </div>

<!--      <button @click="nextSlide" class="absolute right-0 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition">-->
<!--        &#10095;-->
<!--      </button>-->
    </div>

    <div class="flex justify-center space-x-2 mt-4">
      <span v-for="(image, index) in images" :key="'dot-' + index"
            class="w-3 h-3 rounded-full cursor-pointer transition-all"
            :class="index === currentImageIndex ? 'bg-gray-800 w-4 h-4' : 'bg-gray-400'"
            @click="currentImageIndex = index">
      </span>
    </div>
    <br>

    <section class="flex flex-col md:flex-row items-center justify-center mt-10 w-4/5">
      <div class="text-center md:text-left md:w-1/2">
        <h2 class="text-2xl font-semibold text-gray-800">Door Handles</h2>
        <p class="text-md text-gray-600 mt-2">Explore our collection of modern and stylish door handles, crafted with the finest materials for durability and elegance.</p>
      </div>
      <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img :src="require('@/assets/Door handle gold.png')" alt="Door Handle Black" class="w-96 h-auto object-cover rounded-lg shadow-lg"/>
      </div>
    </section>

    <section class="flex flex-col md:flex-row items-center justify-center mt-10 w-4/5">
      <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img :src="require('@/assets/Cabinet handles gold.png')" alt="Cabinet Handles Gold" class="w-96 h-auto object-cover rounded-lg shadow-lg"/>
      </div>
      <div class="text-center md:text-left md:w-1/2">
        <h2 class="text-2xl font-semibold text-gray-800">Cabinet Handles</h2>
        <p class="text-md text-gray-600 mt-2">Enhance your furniture with our exquisite range of cabinet handles. Designed for both style and functionality, our handles come in various finishes and materials, adding a touch of sophistication to any space.</p>
      </div>
    </section>

    <section class="flex flex-col md:flex-row items-center justify-center mt-10 w-4/5">
      <div class="text-center md:text-left md:w-1/2">
        <h2 class="text-2xl font-semibold text-gray-800">Hinges</h2>
        <p class="text-md text-gray-600 mt-2">Discover our high-quality hinges, built for smooth operation and lasting durability. Whether for cabinets, doors, or furniture, our hinges provide reliable support and effortless movement.</p>
      </div>
      <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img :src="require('@/assets/Butt hinges.png')" alt="Butt Hinges" class="w-96 h-auto object-cover rounded-lg shadow-lg"/>
      </div>
    </section>

    <section class="flex flex-col md:flex-row items-center justify-center mt-10 w-4/5">
  <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
    <div class="w-96 h-auto p-6 bg-[#e3e3e3] rounded-lg shadow-lg flex items-center justify-center">
      <img :src="require('@/assets/Lock body.png')" alt="Lock Body" class="w-full h-auto object-cover"/>
    </div>
  </div>
  <div class="text-center md:text-left md:w-1/2">
    <h2 class="text-2xl font-semibold text-gray-800">Lock Body</h2>
    <p class="text-md text-gray-600 mt-2">
      Enhance security with our durable and high-quality lock bodies, designed for smooth operation and lasting reliability. Perfect for both residential and commercial use, our collection combines functionality with style.
    </p>
  </div>
</section>
    <br><br>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      images: [
        "Smart Lock Home page1.jpeg",
        "img.png",
        "Home background.png"

      ],
      currentImageIndex: 0,
      slideshowInterval: null,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  beforeUnmount() {
    clearInterval(this.slideshowInterval);
  },
  methods: {
    startSlideshow() {
      this.slideshowInterval = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 5000);
    },
    nextSlide() {
      clearInterval(this.slideshowInterval);
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.startSlideshow();
    },
    prevSlide() {
      clearInterval(this.slideshowInterval);
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      this.startSlideshow();
    }
  }
};
</script>

<style scoped>
.slideshow {
  position: relative;
  width: 80%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s ease;
}

.slideshow-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.dots {
  position: absolute;
  bottom: 15px;
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #555;
}
</style>
