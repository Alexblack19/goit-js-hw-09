// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();      
    }, 1000);
  },
};

timer.start();
