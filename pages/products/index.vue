<template>
    <div>
        <div class="container flex grid grid-cols-4 gap-5">
            <div v-for="p in useProduct().getProducts">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
import { useProduct } from "../../stores/useProduct"

useHead({
    title: 'AssisThem-The Easiest way to manage your product!',
    meta:[
       { name: 'description', content: 'AssisThem Products'}
    ]
})

//const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped>

</style>