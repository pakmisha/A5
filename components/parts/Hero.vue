<template>
  <section>
    <div class="hero content y-distance">
      <div class="hero-left">
        <h1 class="heading-big text-white">
          Энергетические
          <br />
          браслеты
          <div
            class="inline-block rounded-lg border bg-black bg-opacity-20 px-3 py-2 text-center text-sm font-normal leading-[1.20rem] text-white md:px-8 md:text-base md:leading-[1.5rem] lg:px-10 lg:text-lg"
          >
            Произведено
            <br />
            в Германии
          </div>
        </h1>
        <div class="max-w-lg font-secondary text-white">
          <span class="font-semibold"
            >Укрепите свой иммунитет, защититесь от влияния</span
          >
          вредных энергетических воздействий, активируете природные
          <span class="font-semibold">способности к самоисцелению</span> и
          восстановите <span class="font-semibold">энергетическое поле</span>
        </div>
        <div class="flex flex-col md:flex-row md:items-center">
          <PartsUIButton :styles="'btn-primary'"
            >Подобрать браслет</PartsUIButton
          >
          <div class="mt-5 max-w-[300px] text-white md:mt-0 md:ml-4">
            Оставьте заявку и мы
            <span class="font-semibold">подберем вам подходящий браслет</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        <img src="~/assets/img/bracelets/hero-bracelets.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
