<template>
  <div class="content border-b border-white border-opacity-20 py-3">
    <nav class="top-panel">
      <div class="top-panel-left">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl"
        >
          <i class="bi bi-person"></i>
        </div>
        <div class="ml-4 flex items-center text-white">
          <PartsUIButton
            @click="$nuxt.$emit('open-modal', 'login')"
            :styles="'link'"
            >Войти</PartsUIButton
          >
          <div class="mx-2 h-4 w-[2px] rounded-full bg-white"></div>
          <PartsUIButton :styles="'link'">зарегистрироваться</PartsUIButton>
        </div>
      </div>
      <a href="/" class="logo z-40">
        <img src="~/assets/img/icons/logo.png" alt="" />
      </a>
      <div class="top-panel-right">
        <PartsUIButton @click="$nuxt.$emit('open-modal', 'call')">
          <div class="flex items-center text-brand-accent-first">
            <i class="bi bi-telephone-fill text-sm"></i>
            <span class="ml-3 block font-semibold lg:text-lg"
              >+7 700 270 69 00</span
            >
          </div>
          <div class="flex justify-end text-white">
            <span class="border-b border-dashed">Заказать звонок</span>
          </div>
        </PartsUIButton>
      </div>
      <div class="flex items-center lg:hidden">
        <PartsUIButton
          @click="$nuxt.$emit('open-modal', 'login')"
          class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl"
        >
          <i class="bi bi-person"></i>
        </PartsUIButton>
        <PartsUIButton
          :link="'/basket'"
          class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white"
        >
          <i class="bi bi-basket"></i>
        </PartsUIButton>
        <button
          class="hamburger z-50"
          :class="{ isActive: isActive }"
          @click.prevent="$nuxt.$emit('toggle', 'mobileMenu')"
        ></button>
      </div>
    </nav>
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
        // document.querySelector("html").classList.toggle("no-scroll");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.top-panel {
  @apply z-50 flex flex-grow items-center justify-between font-secondary;
  &-left {
    @apply hidden w-[40%] items-center lg:flex;
  }
  .logo {
    img {
      @apply w-28 object-contain lg:w-32 2xl:w-auto;
    }
  }
  &-right {
    @apply hidden w-[40%] items-center justify-end lg:flex;
  }
}
</style>
