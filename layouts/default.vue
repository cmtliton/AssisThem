<script setup>
</script>
<template>
<div>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink class="font-bold" to="/">
                <img src="../assets/assisthem.png" alt="product img" class="max-auto">
            </NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
                <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            </ul>
        </nav>
    </header>

    <!--- Content Display Here-->
    <div class="container mx-auto p-4">
        <slot/>
    </div>
    </div>

</template>

<style scoped>
img {
    max-width: 220px;
}
</style>