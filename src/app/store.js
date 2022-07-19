import { configureStore } from "@reduxjs/toolkit";

// import service yang dibutuhkan
import { moviesApi } from "../services/movies";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // Misalnya ini untuk tingkat lanjut, ingin menggunakan caching, invalidation (untuk refresh data),
  // ataupun untuk polling datanya
  // bisa menggunakan middleware

  // menerima sebuah fungsi yang menerima parameter getDefaultMiddleware (sebuah fungsi juga)
  middleware: (getDefaultMiddleware) => {
    // Di sini kita akan menggabungkan middleware dari reqresinColorAPI ke default middlewarenya
    // Kapan kita bikinnya yah? Lagi lagi, dibuatkan secara otomatis pada saat kita mendefinisikan
    // dalam createApi di service (wuoah......)
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});
