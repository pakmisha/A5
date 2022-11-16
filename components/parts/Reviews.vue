<template>
  <section>
    <div class="content y-distance bg-white">
      <h1 class="heading-primary mx-auto mb-6 max-w-lg text-center">
        Что говорят о наших браслетах Ampli5
        <span class="font-light">довольные клиенты?</span>
      </h1>
      <PartsTabsWrapper>
        <PartsTab name="Отзывы" selected="true">
          <div
            class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:gap-10"
          >
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="reviews"
            >
              <div class="reviews__image">
                <img :src="require(`~/assets/img/bg/${review.image}`)" alt="" />
              </div>
              <div class="px-3 py-5 2xl:px-5">
                <div class="font-secondary text-brand-dark">
                  {{ review.description }}
                </div>
                <div class="mt-6 text-brand-dark">
                  <div class="text-lg font-semibold">{{ review.name }}</div>
                  <div class="opacity-80">12.12.2022</div>
                </div>
              </div>
            </div>
          </div>
          <PartsUIButton
            class="mt-6 flex justify-center"
            :styles="'btn-primary'"
            >показать еще</PartsUIButton
          >
        </PartsTab>
        <PartsTab name="Видео отзывы">
          <div class="grid grid-cols-2 gap-3 md:gap-5 lg:gap-10">
            <div
              class="video dark-mask"
              v-for="(video, index) in videos"
              :key="index"
            >
              <img :src="require(`~/assets/img/bg/${video.poster}`)" alt="" />
              <PartsUIButton
                :styles="'btn-play'"
                class="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  />
                </svg>
              </PartsUIButton>
            </div>
          </div>
          <PartsUIButton
            :styles="'btn-primary'"
            class="mt-6 flex justify-center"
            >показать еще</PartsUIButton
          >
        </PartsTab>
      </PartsTabsWrapper>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    reviews: [
      {
        image: "card-about-1.png",
        description:
          " Уже давно ношу браслет, несколько лет. Качество супер, не изнашивается. Самое главное – всегда бодрость, выносливость улучшилась. Несмотря на занятость стараюсь заниматься спортом и останавливаться не собираюсь. Чувствую себя гораздо моложе, хочется бегать, шутить и смеяться, с самого утра и до вечера",
        name: "Эдуард А.С",
      },
      {
        image: "card-about-1.png",
        description:
          " Уже давно ношу браслет, несколько лет. Качество супер, не изнашивается. Самое главное – всегда бодрость, выносливость улучшилась. Несмотря на занятость стараюсь заниматься спортом и останавливаться не собираюсь. Чувствую себя гораздо моложе, хочется бегать, шутить и смеяться, с самого утра и до вечера",
        name: "Эдуард А.С",
      },
      {
        image: "card-about-1.png",
        description:
          " Уже давно ношу браслет, несколько лет. Качество супер, не изнашивается. Самое главное – всегда бодрость, выносливость улучшилась. Несмотря на занятость стараюсь заниматься спортом и останавливаться не собираюсь. Чувствую себя гораздо моложе, хочется бегать, шутить и смеяться, с самого утра и до вечера",
        name: "Эдуард А.С",
      },
      {
        image: "card-about-1.png",
        description:
          " Уже давно ношу браслет, несколько лет. Качество супер, не изнашивается. Самое главное – всегда бодрость, выносливость улучшилась. Несмотря на занятость стараюсь заниматься спортом и останавливаться не собираюсь. Чувствую себя гораздо моложе, хочется бегать, шутить и смеяться, с самого утра и до вечера",
        name: "Эдуард А.С",
      },
    ],
    videos: [
      {
        poster: "card-about-1.png",
      },
      {
        poster: "card-about-1.png",
      },
      {
        poster: "card-about-1.png",
      },
      {
        poster: "card-about-1.png",
      },
    ],
  }),
};
</script>

<style lang="scss">
.reviews {
  @apply rounded-3xl shadow-lg;
  &__image {
    @apply h-[250px];
    img {
      @apply h-full w-full rounded-3xl object-cover;
    }
  }
}
.video {
  @apply relative cursor-pointer overflow-hidden rounded-2xl lg:rounded-3xl;
  img {
    @apply w-full;
  }
}
</style>
