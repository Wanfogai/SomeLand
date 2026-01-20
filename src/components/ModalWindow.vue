<script setup>
import { useModalStore } from '../modalStore';
import ShinyButton from './ShinyButton.vue';
import TakeButton from './TakeButton.vue';

const emit = defineEmits(['click']);

const store = useModalStore();
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-win">
      <div 
        v-if="store.isOpen" 
        class="modal-backdrop w-full" 
        @click.self="()=>{store.closeModal;emit('click')}"
      >

       <button class="close-btn absolute top-2 right-2 items-center justify-center"  @click="()=>{store.closeModal;emit('click')}">
            &times;
          </button>

        <div class="w-[60%] h-[20%] modal-content flex flex-col justify-center items-center ">
         <div class="flex w-full items-center justify-center mb-[40px] w-[120%] leading-tight">
            <span class=" monser text-[24px] lg:text-[36px] font-bold text-white">
              Регистрируйся, вводи промокод <br> и получи бонус к первому депозиту
            </span>
          </div>
          
            <div class="relative w-[120%] border-solid bg-gradient-to-b from-[#9c52cc] to-[#8840bc] border-white rounded-[25px] px-5 py-5
            sm:w-[80%] md:w-[80%] lg:w-[50%]">
              <span class="monser text-5xl sm:text-6xl md:text-[80px] font-bold text-white text-center block">
                WINNES
              </span>
            </div>
          <div >
            <TakeButton @click="emit('click')">ЗАБРАТЬ БОНУС</TakeButton></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Темная зона (Backdrop) */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Само окно */
.modal-content {
  /* Увеличим отступы */
  border-radius: 15px; /* Более мягкие углы */
  position: relative;
  text-align: center; /* Выравнивание текста по центру */
  justify-content: center;
  align-items: center;
}

/* Иконка выигрыша */
.win-icon {
    font-size: 60px;
    margin-bottom: 15px;
    animation: bounce 0.8s infinite alternate; /* Анимация "подпрыгивания" */
}

/* Анимация подпрыгивания для иконки */
@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}

h2 {
    color: #8B4513; /* Цвет заголовка */
    margin-bottom: 15px;
}

p {
    font-size: 1.1em;
}

/* Крестик */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px; /* Чуть крупнее */
  cursor: pointer;
  color:white; /* Цвет крестика */
  font-weight: bold;
}

/* --- АНИМАЦИИ ВУЭ --- */

/* Классы для появления/исчезновения backdrop */
.modal-win-enter-from,
.modal-win-leave-to {
  opacity: 0;
}

.modal-win-enter-active,
.modal-win-leave-active {
  transition: opacity 0.5s ease; /* Плавное изменение прозрачности */
}

/* Классы для появления/исчезновения modal-content */
.modal-win-enter-from .modal-content,
.modal-win-leave-to .modal-content {
  transform: translateY(-50px) scale(0.8); /* Выезжает снизу и уменьшается */
  opacity: 0;
}

.modal-win-enter-active .modal-content {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Пружинящая анимация */
}

.modal-win-leave-active .modal-content {
  transition: all 0.4s ease-out; /* Более быстрое исчезновение */
}
</style>