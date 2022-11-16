<template>
  <section>
    <div class="content y-distance bg-white">
      <div
        class="flex flex-col items-center justify-between rounded-3xl bg-white px-0 shadow-xl lg:flex-row lg:px-20"
      >
        <div class="mb-5 w-full lg:mb-0 lg:w-[60%] lg:py-20">
          <h1 class="heading-primary mb-6 text-brand-dark">
            Покупайте браслеты на Kaspi.kz
            <br />
            <span class="font-light">при выгодных условиях</span>
          </h1>
          <PartsUIButton :styles="'btn-primary'">Купить на каспи</PartsUIButton>
        </div>
        <div class="w-full lg:w-[25%]">
          <img
            class="h-full w-full"
            src="~/assets/img/icons/phone-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
