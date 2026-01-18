<template>
  <div class="btn-wrapper">
    <button class="spin-btn" @click="emit('click')">
      <div class="btn-content">
        <span class="btn-text">Крутить</span>
        <div class="shine"></div>
      </div>
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['click'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

.btn-wrapper {

  padding: 50px;
  display: flex;
  justify-content: center;
}

.spin-btn {
  /* Сбрасываем дефолтные стили кнопки */
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  /* Создаем "фундамент", который не двигается */
  position: relative;
  display: block;
}

.btn-content {
  position: relative;
  /* background: linear-gradient(180deg, #9c52cc 0%, #8840bc 100%); */
  background: linear-gradient(180deg, #9c52cc 0%, #8840bc 100%);
  border-radius: 100px;
  padding: 0 60px;
  
  overflow: hidden; 

  box-shadow: 
    0 6px 0 #860fa3, 
    0 12px 20px rgba(0, 0, 0, 0.2), 
    inset 0 2px 3px rgba(255, 255, 255, 0.4);
    
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateY(0);
}
.btn-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 80px; /* Немного уменьшил, чтобы лучше входила в паддинги */
  color: #fffaf0;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  display: block;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

/* --- HOVER (Наведение) --- */
.spin-btn:hover .btn-content {
  
  filter: brightness(1.1);

}

/* --- ACTIVE (Нажатие) --- */
.spin-btn:active .btn-content {
  /* Прячем кнопку вниз */
  transform: translateY(6px); 
  /* Толщина кнопки "съедается" за счет смещения вниз */
  box-shadow: 
    0 0 0 #860fa3, 
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 3px 5px rgba(0, 0, 0, 0.2);
  
  /* Ускоряем переход для отклика на клик */
  transition: all 0.05s ease; 
}

/* Блик */
.shine {
  position: absolute;
  top: 0;
  left: -100%;
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

.spin-btn:hover .shine {
  left: 150%;
  transition: 1.4s ease-in-out;
}
</style>