<template>
    <Head>
        <Title>AssisThem | {{ product.title }}</Title>
        <Meta name="description" :content="product.description"/>
    </Head>
    <div>
        <ProductDetails :product="product"></ProductDetails>
  </div>
</template>

<script setup>
import { useProduct } from "../../stores/useProduct"
import { computed } from 'vue'
const { id } = useRoute().params
//const url = 'https://fakestoreapi.com/products/' + id

definePageMeta({
    layout: 'products'
})

//const { data: product } = await useFetch(url, { key: id })

const product = computed(()=>{
    return useProduct().getProducts.find((Prd)=> Prd.id == id)
})

if(!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Product not found!'
    })
}
</script>