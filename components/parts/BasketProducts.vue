<template>
  <div>
    <h1 class="heading-primary text-brand-dark">Корзина</h1>
    <div>
      <div class="product">
        <div class="product__image">
          <img src="~/assets/img//bracelets/blue-bracelet.png" alt="" />
        </div>
        <div
          class="flex w-[80%] flex-wrap items-center justify-between lg:w-full"
        >
          <div class="product__description order-1 lg:order-none">
            <div class="product__description__name">Ampli синий</div>
            <div class="product__description__item">
              <div class="product-description-property">Размер браслета:</div>
              <div class="product-description-value">xs - 18см</div>
            </div>
            <div class="product__description__item">
              <div class="product-description-property">Цвет:</div>
              <div class="product-description-value">синий</div>
            </div>
            <div class="product__description__item">
              <div class="product-description-property">Артикул:</div>
              <div class="product-description-value">#82231731</div>
            </div>
          </div>
          <div class="counter order-3 lg:order-none">
            <button class="counter-btn minus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                />
              </svg>
            </button>
            <div class="counter-number">1</div>
            <button class="counter-btn plus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </button>
          </div>
          <div class="product__cost order-4 lg:order-none">
            <div class="product__cost__old">52 000₸</div>
            <div class="product__cost__new">48 000₸</div>
          </div>
          <button class="product__delete order-2 lg:order-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="product">
        <div class="product__image">
          <img src="~/assets/img//bracelets/blue-bracelet.png" alt="" />
        </div>
        <div
          class="flex w-[80%] flex-wrap items-center justify-between lg:w-full"
        >
          <div class="product__description order-1 lg:order-none">
            <div class="product__description__name">Ampli синий</div>
            <div class="product__description__item">
              <div class="product-description-property">Размер браслета:</div>
              <div class="product-description-value">xs - 18см</div>
            </div>
            <div class="product__description__item">
              <div class="product-description-property">Цвет:</div>
              <div class="product-description-value">синий</div>
            </div>
            <div class="product__description__item">
              <div class="product-description-property">Артикул:</div>
              <div class="product-description-value">#82231731</div>
            </div>
          </div>
          <div class="counter order-3 lg:order-none">
            <button class="counter-btn minus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                />
              </svg>
            </button>
            <div class="counter-number">1</div>
            <button class="counter-btn plus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </button>
          </div>
          <div class="product__cost order-4 lg:order-none">
            <div class="product__cost__old">52 000₸</div>
            <div class="product__cost__new">48 000₸</div>
          </div>
          <button class="product__delete order-2 lg:order-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.product {
  @apply flex justify-between border-b border-brand-primary border-opacity-30 py-5 lg:items-center lg:py-10;
  &__image {
    @apply mr-3 flex h-[100px] w-[80px] items-center justify-center md:w-[100px] lg:mr-7 lg:w-[150px] 2xl:h-[150px] 2xl:w-[200px];
    img {
      @apply w-full object-contain;
    }
  }
  &__description {
    @apply w-[80%] font-secondary lg:w-[40%];
    &__name {
      @apply mb-1 text-xl font-semibold lg:mb-2 lg:text-2xl;
    }
    &__item {
      @apply mb-1 flex items-center;
    }
    .product-description-property {
      @apply mr-2 text-sm text-black opacity-80 lg:text-base;
    }
    .product-description-value {
      @apply text-sm font-semibold lg:text-base;
    }
  }
  .counter {
    @apply flex items-center justify-between rounded-full border border-brand-primary border-opacity-30 lg:w-[115px];
    .counter-btn {
      @apply px-2 py-1 text-brand-accent-second lg:px-3 lg:py-2;
      svg {
        @apply h-[20px] w-[20px] lg:h-[24px]  lg:w-[24px];
      }
    }
    .counter-number {
      @apply mx-1 text-lg font-semibold;
    }
  }
  &__cost {
    @apply w-[40%] font-secondary lg:w-[15%];
    &__old {
      @apply font-semibold text-black line-through opacity-30;
    }
    &__new {
      @apply text-xl font-bold;
    }
  }
  &__delete {
    @apply text-black opacity-40 transition-all duration-300 ease-in-out;
    svg {
      @apply h-[30px] w-[30px];
    }
    &:hover {
      @apply text-brand-gold opacity-100;
    }
  }
  &:last-child {
    @apply border-none;
  }
}
</style>
