<template>
  <PartsModalsModal name="questions" class="modal-general questions-modal">
    <div class="modal-general-main questions-modal-main">
      <h2 class="text-center font-secondary text-2xl font-semibold">
        Остались вопросы?
      </h2>
      <div class="text-center text-brand-primary opacity-30">
        Вы можете ставить заявку и с вами свяжутся в ближайшее время
      </div>
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
      <PartsUIButton :styles="'btn-primary w-full'"
        >Заказать звонок</PartsUIButton
      >
      <div class="flex items-center">
        <div class="mr-3">
          <input type="checkbox" />
        </div>
        <div class="w-[90%]">
          Я согласен с
          <a href="" class="font-semibodl text-brand-accent-first">
            Условиями Политики Конфиденциальности данных</a
          >
        </div>
      </div>
    </div>
  </PartsModalsModal>
</template>

<script>
export default {};
</script>

<style></style>
