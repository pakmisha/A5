<template>
  <section>
    <div class="content y-distance">
      <div
        class="relative rounded-2xl bg-white py-10 px-5 md:py-14 md:px-10 lg:px-20 2xl:py-20"
      >
        <h1 class="heading-primary mx-auto max-w-md text-center">
          <span class="font-semibold text-brand-dark"
            >Вам 100% нужен этот браслет,</span
          >
          <span class="font-light opacity-80">если вы хотите:</span>
        </h1>
        <div
          class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 2xl:gap-20"
        >
          <div class="card-benefit">
            <div class="text-center text-xl text-white opacity-80">
              Хотите иметь крепкое здоровье и
              <span class="font-semibold">возможность самоисцеления</span>
            </div>
            <div class="mt-6">
              <img src="~/assets/img/icons/card-benefit-1.png" alt="" />
            </div>
          </div>
          <div class="card-benefit">
            <div class="text-center text-xl text-white opacity-80">
              Хотите почувствовать

              <span class="font-semibold">мощный прилив сил и энергии</span>
            </div>
            <div class="mt-6">
              <img src="~/assets/img/icons/card-benefit-2.png" alt="" />
            </div>
          </div>
          <div class="card-benefit">
            <div class="text-center text-xl text-white opacity-80">
              Хотите получать стабильное позитивное
              <span class="font-semibold">энергетическое влияние</span>
            </div>
            <div class="mt-6">
              <img src="~/assets/img/icons/card-benefit-3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="absolute left-1/2 top-0 -translate-x-1/2">
          <img src="~/assets/img/icons/vector-block-2.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-benefit {
  @apply flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat px-10 pt-10;
  background-image: url("~/assets/img/bg/bg-card-benefit.png");
}
</style>
