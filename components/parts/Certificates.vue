<template>
  <section>
    <div class="content y-distance rounded-b-3xl bg-white">
      <h1 class="heading-primary mb-6 text-center text-brand-dark">
        Сертификаты наших браслетов
      </h1>
      <div class="hidden grid-cols-4 gap-5 md:grid lg:gap-10">
        <a
          href=""
          class="certificate"
          v-for="(certificate, index) in certificates"
          :key="index"
          :certificate="certificate"
        >
          <img :src="require('~/assets/img/bg/' + certificate.image)" alt="" />
          <div class="certificate-mask">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </div>
        </a>
      </div>
      <div class="slider-certificate block md:hidden">
        <PartsSlider
          :options="{
            slidesPerView: 1.3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 30,
          }"
        >
          <div class="swiper-slide">
            <div class="certificate">
              <img src="~/assets/img/bg/certificate.png" alt="" />
              <div class="certificate-mask">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="certificate">
              <img src="~/assets/img/bg/certificate.png" alt="" />
              <div class="certificate-mask">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="certificate">
              <img src="~/assets/img/bg/certificate.png" alt="" />
              <div class="certificate-mask">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </PartsSlider>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    certificates: [
      {
        image: "certificate.png",
      },
      {
        image: "certificate.png",
      },
      {
        image: "certificate.png",
      },
      {
        image: "certificate.png",
      },
      {
        image: "certificate.png",
      },
      {
        image: "certificate.png",
      },
      {
        image: "certificate.png",
      },
      {
        image: "certificate.png",
      },
    ],
  }),
};
</script>

<style lang="scss">
.certificate {
  @apply relative inline-block overflow-hidden rounded-xl border border-brand-primary border-opacity-30 shadow-lg lg:rounded-2xl;
  img {
    @apply w-full;
  }
  .certificate-mask {
    @apply invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white bg-opacity-80 opacity-0 transition-all duration-300 ease-in-out;
    svg {
      @apply h-6 w-6;
      fill: #616161;
    }
  }
  &:hover {
    .certificate-mask {
      @apply visible opacity-100;
    }
  }
}
</style>
