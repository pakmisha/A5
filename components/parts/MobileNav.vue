<template>
  <div class="mobile-nav pt-[60px]" :class="{ isActive: isActive }">
    <div class="flex items-center">
      <div class="mr-3">
        <img src="~/assets/img/icons/phone.png" alt="" />
      </div>
      <PartsUIButton
        @click="$nuxt.$emit('open-modal', 'call')"
        class="block font-secondary text-white"
        >+7 700 270 69 00</PartsUIButton
      >
    </div>
    <nav class="pt-5">
      <ul>
        <li>
          <a class="" href="">Преимущества</a>
        </li>
        <li>
          <a class="" href="">Браслеты</a>
        </li>
        <li>
          <a class="" href="">FAQ</a>
        </li>
        <li>
          <a class="" href="">Отзывы</a>
        </li>
        <li>
          <a class="" href="">Сертификаты</a>
        </li>
        <li>
          <a class="" href="">Контакты</a>
        </li>
      </ul>
    </nav>
    <div class="pt-5">
      <button class="navbar-basket my-5">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-white"
        >
          <i class="bi bi-basket"></i>
        </div>
        <div class="navbar-basket-sum">
          <span>96 000₸</span>
        </div>
      </button>
      <a href="/basket" class="btn-primary">Перейти в корзину</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
  created() {
    this.$nuxt.$on("toggle", (name) => {
      if (name == "mobileMenu") {
        this.isActive = !this.isActive;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav {
  @apply invisible fixed z-40 flex h-full w-full scale-90 flex-col justify-center bg-brand-primary px-5 pb-5 opacity-0 transition-all duration-300 ease-in-out;
  nav {
    @apply w-full;
    ul {
      li {
        a {
          @apply block w-full border-b border-white border-opacity-10 py-4 text-center text-white;
        }
      }
    }
  }
  .navbar-basket {
    @apply flex items-center;
    &-sum {
      @apply ml-4 text-2xl font-bold text-white;
    }
  }
  &.isActive {
    @apply visible scale-100 opacity-100;
    // .dv {
    //   @apply visible translate-y-0 scale-100 opacity-100;
    //   transition-delay: 700ms;
    // }
    li {
      @apply visible translate-y-0 opacity-100;
      &:nth-of-type(1) {
        transition-delay: 200ms;
      }
      &:nth-of-type(2) {
        transition-delay: 300ms;
      }
      &:nth-of-type(3) {
        transition-delay: 400ms;
      }
      &:nth-of-type(4) {
        transition-delay: 500ms;
      }
      &:nth-of-type(5) {
        transition-delay: 600ms;
      }
      &:nth-of-type(6) {
        transition-delay: 700ms;
      }
    }
  }

  ul {
    li {
      @apply invisible translate-y-10 transform opacity-0 transition-all duration-500 ease-in-out;
      a {
        @apply block;
      }
    }
  }
}
</style>
