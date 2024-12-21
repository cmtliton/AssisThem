<script setup>
import{ref} from 'vue';
import { useProduct } from '../stores/useProduct'
definePageMeta({
    layout: 'default'
})
let youdata = ref('My Name is liton lives in bangladesh!')

onMounted(()=>{
if(useProduct().getProducts.length < 1) {
    useProduct().loadProducts()
}
})


</script>
<template>
<div>
        <h1> {{ youdata }}</h1>
        <p>AssisThem is a digital marketing agency who is Promoting products or services through digital marketing involves a strategic mix of channels and tactics to reach and engage a target audience online. We are building a  strong online presence of your products or services with a user-friendly website optimized for search engines (SEO), ensuring it ranks well for relevant keywords. Social media platforms like Instagram, Facebook, LinkedIn and Pinterest are essential for targeting specific demographics, sharing engaging content, and fostering community. We also deal with Content marketing, such as blogging or video creation, adds value for potential customers, establishes expertise, and drives organic traffic. Additionally, pay-per-click (PPC) advertising on platforms like Google Ads allows you to reach audiences actively searching for your offerings. Beside these we offer the same through Email marketing campaigns nurture leads and keep current customers informed about new products or promotions so that you can utilize analytics to monitor performance, as it enables you to adjust strategies for better results, maximizing return on investment (ROI) and driving growth.</p>
    </div>

</template>