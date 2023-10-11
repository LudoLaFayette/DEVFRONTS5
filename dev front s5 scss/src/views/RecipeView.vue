<template>
    <div class="p-recipe-view">
        recette avec l'id : {{ route.params.id }}
    </div>
    <RouterLink to="/">retour acceuil</RouterLink>
</template>

<script setup>
import {useRoute , RouterLink,} from 'vue-router'
import { onMounted,ref} from 'vue'
import {client} from '@/utils/axios.js'
const route = useRoute();
console.log(route)
const recipe = ref({})
const getRecipes = async () => {
    const response = await client.get(`/recipes/${route.params.id}`)
    return response.data

}

onMounted(async () =>{
    recipe.value = await getRecipes();
})
</script>

<style lang="scss" scoped></style>