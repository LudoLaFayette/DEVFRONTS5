<script setup>
import myButton from '@/components/elements/myButton.vue'
import Layout from '@/components/layouts/DefaultLayout.vue'
import MyBackgroundScroll from '@/components/MyBackgroundScroll.vue';
import myIcon from '@/components/elements/myIcon.vue';
import myNote from '../components/elements/myNote.vue';
import {onMounted, ref, computed} from 'vue';
import axios from 'axios';

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const recipes = ref([]) 

const getRecipes = async () => {
    const response = await client.get('/recipes')
    return response.data

}
const recipesNames = computed(() =>{
    return recipes.value.map((items) => items.recipe_name ); 
})

const spaghettiRecipes = computed(() =>{
    return recipes.value.filter((item) => item.recipe_name.toLowerCase().includes('Spaghetti'))
})

const hadGoalNo1 = computed(() =>{
    return recipes.value.some((item) => item.goal_id === 1)
})


onMounted(async () =>{ 
    recipes.value = await getRecipes();
    console.log(recipesNames)
    console.log(spaghettiRecipes)
    console.log(hadGoalNo1)

    
    // getRecipes();
});

</script>

<template>
    <ul >
        <li v-for="(recipe, index) in recipes" :key="index">
            {{ recipe.recipe_name }}
        </li>
    </ul>
    <!-- <Layout>
    <template #header>
      <nav>
        <ul>
          <li><a href="#">Nav link 1</a></li>
          <li><a href="#">Nav link 2</a></li>
          <li><a href="#">Nav link 3</a></li>
        </ul>
      </nav>
    </template>

    <template #aside>
      <nav>
        <ul>
          <li><a href="#">Aside link 1</a></li>
          <li><a href="#">Aside link 2</a></li>
          <li><a href="#">Aside link 3</a></li>
        </ul>
      </nav>
    </template>

    <MyBackgroundScroll />

    <template #footer>
      <MyButton href="/about">My link Button</MyButton>
    </template>
</Layout> -->

    <!-- <MyButton size="small" href="/about">My Small Button</MyButton>
  <MyButton href="/about">My link Button</MyButton>
  <MyButton variant="rounded" >My rounded Button</MyButton> -->
    <!-- <p></p> -->

    <!-- {{ recipes }} -->
    <Layout>
        <template v-slot:header>
          <myNote/>
            <p>hello world</p>
            <nav>
                <ul>
                    <li><a href="#">link1</a></li>
                    <li><a href="#">link2</a></li>
                    <li><a href="#">link3</a></li>
                </ul>
            </nav>
        </template>
        <p>hello world</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit provident ipsam commodi! Sit, veritatis
            sapiente ut, odit culpa eveniet sunt vitae inventore nobis labore a expedita architecto repellat mollitia id!</p>
        <MyBackgroundScroll/> 
        <template v-slot:aside>

      
            <nav>
                <ul>
                    <li><a href="#">Asidelink1</a></li>
                    <li><a href="#">Asidelink2</a></li>
                    <li><a href="#">Asidelink3</a></li>
                </ul>
            </nav>
        </template>
        <template v-slot:footer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, autem dicta? Quos velit fugit ea maiores explicabo?
                Fugiat, sapiente? Totam, ipsam. Maiores iure sint non dolore, magnam eius quos incidunt.</p>
            <!-- <myButton link="#">Order Now</myButton>
      <myButton link="#" variant="rounded">Order Now</myButton>
      <myButton link="#" size="small">Order Now</myButton> -->
            <myButton href="/order">Order Now</myButton>
            <myIcon/>
            <myNote/>
        </template>
    </Layout>
  
  
  
</template>
