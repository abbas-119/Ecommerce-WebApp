<template>
  <div class="slideshow">
    <div v-for="(image, index) in images" :key="index" class="slide" v-show="index === currentImageIndex">
      <img :src="require(`@/assets/${image}`)" :alt="'Slide ' + (index + 1)" class="slideshow-image" />
    </div>
    <div class="dots">
      <span
        v-for="(image, index) in images"
        :key="'dot-' + index"
        :class="['dot', { active: index === currentImageIndex }]"
        @click="currentImageIndex = index"
      ></span>
    </div>
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
        "img_1.png",
      ],
      currentImageIndex: 0,
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
      }, 5000); // Change every 5 seconds
    }
  }
};
</script>

<style scoped>
.slideshow {
  position: relative;
  width: 100%;
  height: 500px; /* Adjusted container height */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  max-width: 80%; /* Limits image width to 80% of container width */
  max-height: 80%; /* Limits image height to 80% of container height */
  object-fit: contain;
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
  background-color: #555; /* Color for active dot */
}
</style>