<template>
  <div class="navbar">
    <div class="logo">DECORPLEX</div>
    <input type="text" placeholder="What are you looking for?" class="search-bar" />
    <div class="links">
      <a href="#">Sign Up Now Get Exclusive Benefits</a>
      <i class="fas fa-heart"></i>
      <i class="fas fa-shopping-cart"></i>
    </div>
    <div class="categories">
      <a href="#">Furniture</a>
      <a href="#">Outdoor</a>
      <a href="#">Decor</a>
      <a href="#">Lights</a>
      <a href="#">Furnishings</a>
      <a href="#">Kitchen</a>
      <a href="#">Tools</a>
      <a href="#">Bath</a>
      <a href="#">Tiles</a>
      <button class="sale-button">Sale</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 10px;
}
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #d32f2f;
}
.search-bar {
  margin: 10px 0;
  padding: 5px;
  width: 300px;
}
.links {
  display: flex;
  align-items: center;
}
.links a {
  margin-right: 10px;
  color: #ff9800;
}
.categories {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
}
.categories a {
  margin: 0 10px;
  color: black;
}
.sale-button {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 5px 10px;
}
</style>
