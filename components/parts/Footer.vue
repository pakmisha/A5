<template>
  <footer class="content y-distance bg-brand-primary">
    <div class="footer">
      <div class="footer-left">
        <h4 class="mb-3 text-2xl font-semibold text-white">
          Остались вопросы?
        </h4>
        <div
          class="mb-3 max-w-sm text-center text-white opacity-80 lg:text-start"
        >
          Оставьте заявку и получите ответы по всем вопросам и промокод на
          скидку
        </div>
        <PartsUIButton
          @click="$nuxt.$emit('open-modal', 'questions')"
          :styles="'btn-primary'"
          >Оставить заявку</PartsUIButton
        >
      </div>
      <div
        class="my-5 h-[2px] w-full bg-white opacity-40 lg:my-0 lg:h-[200px] lg:w-[2px]"
      ></div>
      <div class="footer-right">
        <div>
          <a href="/index" class="inline-block">
            <img src="~/assets/img/icons/logo-footer.png" alt="" />
          </a>
        </div>
        <div class="mt-4 flex w-full justify-between lg:mt-0 lg:w-[50%]">
          <div>
            <h4
              class="mb-3 mt-3 font-secondary uppercase text-white opacity-40"
            >
              Меню
            </h4>
            <ul class="space-y-3 font-secondary">
              <li>
                <a class="link" href="">Преимущества</a>
              </li>
              <li>
                <a class="link" href="">Браслеты</a>
              </li>
              <li>
                <a class="link" href="">FAQ</a>
              </li>
              <li>
                <a class="link" href="">Отзывы</a>
              </li>
              <li>
                <a class="link" href="">Сертификаты</a>
              </li>
              <li>
                <a class="link" href="">Контакты</a>
              </li>
            </ul>
          </div>
          <div>
            <h5
              class="mb-3 mt-3 font-secondary uppercase text-white opacity-40"
            >
              Контакты
            </h5>
            <div class="space-y-3 font-secondary text-white">
              <a href="" class="flex items-center">
                <span>+7 700 270 69 00</span>
              </a>
              <a href="" class="flex items-center">
                <span>Написать нам</span>
              </a>
              <a href="" class="flex items-center">
                <span>@a5energy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  @apply flex flex-col items-center justify-between lg:flex-row;
  &-left {
    @apply flex flex-col items-center lg:items-start;
  }
  &-right {
    @apply flex w-full flex-col items-center justify-between lg:w-[60%] lg:flex-row lg:items-start;
  }
}
</style>
