import {defineStore} from 'pinia';
import { ref, computed } from 'vue';
export const useProduct = defineStore('useProduct', ()=>{
    const products = ref([])

    const getProducts = computed(()=>{
        return products.value
    })

    const getProduct = computed(()=>{
        return (id) => getProducts.value.find(Prd=>Prd.id === id)
    })

    async function loadProducts() {
        products.value= await $fetch('https://fakestoreapi.com/products')
    }

    return { products, loadProducts, getProducts, getProduct }
})