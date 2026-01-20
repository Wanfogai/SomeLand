<template>
  <div class="btn-wrapper">
    <button 
      class="spin-btn" 
      @click="emit('click')"
      @mouseenter="triggerShine"
    >
      <div class="btn-content">
        <span class="btn-text"><slot></slot></span>
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
.btn-wrapper {
  padding: 50px;
  display: flex;
  justify-content: center;
}

.spin-btn {
  font-family: "Unbounded";
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
  /* Градиент как на фото: от светло-оранжевого к насыщенному */
  background: linear-gradient(180deg, #FFB31F 0%, #FF8A00 100%);
  border-radius: 100px;
  padding: 15px 35px; /* Уменьшил padding для пропорций как на фото */
  overflow: hidden; 
  /* Нижняя "объемная" тень и внутренний блик сверху */
  box-shadow: 
    0 6px 0 #D36B00, 
    0 8px 15px rgba(0, 0, 0, 0.3), 
    inset 0 2px 2px rgba(255, 255, 255, 0.5);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn-text {
  font-weight: 900;
  font-size: 2em; /* Оптимальный размер для кнопки */
  color: #FFFFFF;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  display: block;
  /* Легкая тень текста для читаемости */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
}

.spin-btn:hover .btn-content {
  filter: brightness(1.05);
}

.spin-btn:active .btn-content {
  transform: translateY(4px); /* Смещение вниз при нажатии */
  box-shadow: 
    0 2px 0 #D36B00, 
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.05s ease; 
}

/* --- Логика Блика --- */
.shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-25deg);
  z-index: 1;
}

.animate-shine {
  animation: shine-sweep 1.2s ease-in-out;
}

@keyframes shine-sweep {
  0% { left: -100%; }
  100% { left: 150%; }
}
</style>