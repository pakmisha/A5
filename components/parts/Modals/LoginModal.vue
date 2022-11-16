<template>
  <PartsModalsModal name="login" class="modal-general auth-modal">
    <div class="modal-general-main auth-modal-main">
      <transtion name="slide-fade" mode="out-in">
        <div v-if="registration" class="space-y-3 px-6">
          <h2 class="text-center font-secondary text-2xl font-semibold">
            Регистарция
          </h2>
          <div class="input-auth-wrapper">
            <div class="input-auth-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
            </div>
            <div class="input-auth-divide"></div>
            <div class="w-full">
              <input type="text" class="input-auth" />
            </div>
          </div>
          <div class="input-auth-wrapper">
            <div class="input-auth-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
            <div class="input-auth-divide"></div>
            <div class="w-full">
              <input type="number" class="input-auth" />
            </div>
          </div>
          <div class="input-auth-wrapper">
            <div class="input-auth-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                />
              </svg>
            </div>
            <div class="input-auth-divide"></div>
            <div class="w-full">
              <input type="mail" class="input-auth" />
            </div>
          </div>
          <div>
            <input
              type="password"
              class="input-auth-password"
              placeholder="Введите пароль"
            />
          </div>
          <PartsUIButton :styles="'btn-primary w-full'"
            >Зарегистрироваться</PartsUIButton
          >
          <div class="text-center text-brand-primary opacity-40">
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных
          </div>
        </div>
        <div v-else class="space-y-3 px-6">
          <h2 class="text-center font-secondary text-2xl font-semibold">
            Вход
          </h2>
          <div class="input-auth-wrapper">
            <div class="input-auth-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
            <div class="input-auth-divide"></div>
            <div class="w-full">
              <input type="number" class="input-auth" />
            </div>
          </div>
          <div>
            <input
              type="password"
              class="input-auth-password"
              placeholder="Введите пароль"
            />
          </div>
          <div class="flex items-center justify-end">
            <label class="mr-2 cursor-pointer font-secondary" for="remember"
              >Запомнить меня</label
            >
            <input type="checkbox" id="remember" />
          </div>
          <PartsUIButton :styles="'btn-primary w-full'">Войти</PartsUIButton>
          <PartsUIButton class="flex justify-end font-secondary">
            Забыли пароль?
          </PartsUIButton>
        </div>
      </transtion>
      <transtion name="slide-fade" mode="out-in">
        <div v-if="registration" class="mt-7 text-center font-secondary">
          У меня уже есть аккаунт.
          <button
            @click="registration = false"
            class="border-b-2 border-dashed border-brand-accent-first font-semibold text-brand-accent-first"
          >
            Войти
          </button>
        </div>
        <div v-else class="mt-7 text-center font-secondary">
          У меня еще нет аккаунта.
          <button
            @click="registration = true"
            class="border-b-2 border-dashed border-brand-accent-first font-semibold text-brand-accent-first"
          >
            Регистрация
          </button>
        </div>
      </transtion>
      <div class="my-5 h-px w-full bg-brand-primary bg-opacity-30"></div>
      <div>
        <h3 class="mb-3 text-center font-secondary">Войти через соцсеть</h3>
        <div class="flex flex-wrap items-center justify-center space-x-3">
          <PartsUIButton :styles="'btn-social'">
            <img src="~/assets/img/icons/vk.png" alt="" />
          </PartsUIButton>
          <PartsUIButton :styles="'btn-social'">
            <img src="~/assets/img/icons/facebook.png" alt="" />
          </PartsUIButton>
          <PartsUIButton :styles="'btn-social'">
            <img src="~/assets/img/icons/gmail.png" alt="" />
          </PartsUIButton>
        </div>
      </div>
    </div>
  </PartsModalsModal>
</template>

<script>
export default {
  data: () => ({
    registration: false,
  }),
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
};
</script>

<style></style>
