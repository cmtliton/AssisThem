<script setup>
</script>
<template>
<div>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <NuxtLink class="font-bold" to="/products">
            <img src="../assets/assisthem.png" alt="product img" class="max-auto">
        </NuxtLink>
        </nav>
    </header>

    <!--- Content Display Here-->
    <div class="container mx-auto p-4">
        <slot/>
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
                <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            </ul>
    </footer>
    </div>

</template>
<style scoped>
img {
    max-width: 220px;
}
</style>