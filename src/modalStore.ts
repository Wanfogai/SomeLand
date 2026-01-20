import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  // Состояние
  const isOpen = ref(false);
  const timerId = ref();

  const REDIRECT_URL = "https://drgn12ney.casino/?stag=14532_696a43f64798b1277fa0415a";

  const RedirectToDragon = () => {
    window.location.assign(REDIRECT_URL);
  };

  // Действие: Закрыть окно
  const closeModal = () => {
    isOpen.value = false;

    // Обязательно очищаем таймер при закрытии, чтобы он не сработал позже
    if (timerId.value) {
      clearTimeout(timerId.value);
      
      timerId.value = null;
    }
  };

  // Действие: Открыть окно
  const openModal = () => {
    // Если окно уже открыто или есть старый таймер — сбрасываем
    if (timerId.value) clearTimeout(timerId.value);

    isOpen.value = true;

    // Запускаем таймер на 5 секунд (5000 мс)
    
  };

  return {
    isOpen,
    timerId,
    openModal,
    closeModal,
    RedirectToDragon,
  };
});
