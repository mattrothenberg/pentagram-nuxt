<template>
  <header class="pt-6">
    <div class="flex flex-col md:flex-row mb-8 md:items-center">
      <div class="flex-1">
        <h1 class="mb-4 text-black font-medium text-5xl">Page Title</h1>
        <h2 class="text-grey text-xl font-normal">Category</h2>
      </div>
      <h2 class="mt-4 md:mt-0 font-medium flex-1 text-2xl leading-tight text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium voluptatibus eum tenetur sapiente tempore
      </h2>
    </div>
    <figure class="w-full" :style="computedStyle"></figure>
  </header>
</template>

<script>
export default {
  name: "page-header",
  props: ["image"],
  computed: {
    computedStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<style scoped>
figure {
  height: 700px;
  background-size: cover;
}
</style>
