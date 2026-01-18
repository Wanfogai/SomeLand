<template>
  <div class="btn-wrapper">
    <button 
      class="spin-btn" 
      @click="emit('click')"
      @mouseenter="triggerShine"
    >
      <div class="btn-content">
        <span class="btn-text">Крутить</span>
        <div 
          class="shine" 
          :class="{ 'animate-shine': isShining }"
          @animationend="isShining = false"
        ></div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['click'])
const isShining = ref(false)

const triggerShine = () => {
  if (!isShining.value) {
    isShining.value = true
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

.btn-wrapper {
  padding: 50px;
  display: flex;
  justify-content: center;
}

.spin-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  display: block;
}

.btn-content {
  position: relative;
  background: linear-gradient(180deg, #9c52cc 0%, #8840bc 100%);
  border-radius: 100px;
  padding: 0 60px;
  overflow: hidden; 
  box-shadow: 
    0 6px 0 #860fa3, 
    0 12px 20px rgba(0, 0, 0, 0.2), 
    inset 0 2px 3px rgba(255, 255, 255, 0.4);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 80px;
  color: #fffaf0;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  display: block;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.spin-btn:hover .btn-content {
  filter: brightness(1.1);
}

.spin-btn:active .btn-content {
  transform: translateY(6px); 
  box-shadow: 
    0 0 0 #860fa3, 
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 3px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.05s ease; 
}

/* --- Логика Блика --- */
.shine {
  position: absolute;
  top: 0;
  left: -100%; /* Начальная позиция за пределами кнопки */
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg);
  z-index: 1;
}

/* Класс, который запускает анимацию */
.animate-shine {
  animation: shine-sweep 1.4s ease-in-out;
}

@keyframes shine-sweep {
  0% {
    left: -100%;
  }
  100% {
    left: 150%;
  }
}
</style>