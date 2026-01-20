<script setup lang="ts">
import FortuneWheel from './components/FortuneWheel.vue';

const logoImage = "data:image/webp;base64,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";

</script>

<template>
  <img :src="logoImage" alt="logo" class="absolute drop-shadow z-[3000] top-[95%] left-[10px] w-[15%]
  md:top-[100px] md:left-[90px] md:w-[150px] sm:top-[92%]
                                                    ">
  <div class="coin1-overlay"></div>
  <div class="coin2-overlay"></div>
  <div class="coin3-overlay"></div>
  <div >
    <FortuneWheel 
    />
    
  </div>
  
  
</template>