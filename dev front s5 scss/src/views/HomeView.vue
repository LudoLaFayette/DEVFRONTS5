<script setup>
import myButton from '@/components/elements/myButton.vue'
import Layout from '@/components/layouts/DefaultLayout.vue'
import MyBackgroundScroll from '@/components/MyBackgroundScroll.vue';
import myIcon from '@/components/elements/myIcon.vue'
</script>

<template>

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
    <Layout>
        <template v-slot:header>
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
        </template>
    </Layout>
  
  
  
</template>
