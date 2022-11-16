<template>
  <div class="content hidden py-5 lg:block">
    <div class="navbar">
      <nav>
        <ul>
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
      </nav>
      <a href="/basket" class="navbar-basket block">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-white"
        >
          <i class="bi bi-basket"></i>
        </div>
        <div class="navbar-basket-sum">
          <span>96 000₸</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  @apply flex items-center justify-between;
  nav {
    ul {
      @apply flex space-x-10 font-secondary;
    }
  }
  &-basket {
    @apply flex items-center;
    &-sum {
      @apply ml-4 text-2xl font-bold text-white;
    }
  }
}
</style>
