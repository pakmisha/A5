<template>
  <section>
    <div class="questions relative bg-cover bg-center bg-no-repeat">
      <div class="content y-distance">
        <h1
          class="heading-primary mx-auto mb-5 max-w-sm text-white lg:max-w-md"
        >
          Ответы на вопросы
        </h1>
        <div class="faq-wrapper">
          <div
            class="faq-wrapper-item"
            v-for="(item, index) in items"
            :key="index"
            :class="{ isActive: item.id == selected }"
          >
            <div class="faq-title" @click="selected = item.id">
              <div class="w-[90%]">{{ item.title }}</div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0.5C9.5 0.223857 9.72386 0 10 0C10.2761 0 10.5 0.223858 10.5 0.5V19.5C10.5 19.7761 10.2761 20 10 20C9.72386 20 9.5 19.7761 9.5 19.5V0.5Z"
                    fill=""
                  />
                  <path
                    d="M0.5 10.5C0.223857 10.5 3.39263e-08 10.2761 2.18557e-08 10C9.78513e-09 9.72386 0.223858 9.5 0.5 9.5L19.5 9.5C19.7761 9.5 20 9.72386 20 10C20 10.2761 19.7761 10.5 19.5 10.5L0.5 10.5Z"
                    fill=""
                  />
                </svg>
              </div>
            </div>

            <div class="faq-description">
              {{ item.description }}
            </div>
          </div>
        </div>
        <div
          class="mt-5 flex flex-col justify-between lg:flex-row lg:items-center"
        >
          <div class="mb-5 text-white lg:mb-0">
            <span class="heading-secondary block"
              >Не нашли ответ на свой вопрос?</span
            >
            <span class="block text-xl opacity-80">
              Вы можете задать его тут
            </span>
          </div>
          <PartsUIButton class="flex" :link="'/about'" :styles="'btn-primary'"
            >Задать вопрос</PartsUIButton
          >
        </div>
      </div>
      <div class="absolute left-1/2 -top-[20px] -translate-x-1/2">
        <img src="~/assets/img/icons/vector-top-block-7.png" alt="" />
      </div>
      <div class="absolute left-1/2 -bottom-[20px] -translate-x-1/2">
        <img src="~/assets/img/icons/vector-bottom-block-7.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    selected: false,
    items: [
      {
        id: "1",
        title: "Браслеты Ampli5 являются лекарственным средством?",
        description:
          "Браслеты Ampli5 НЕ ЯВЛЯЮТСЯ лекарственным средством или медицинским устройством",
      },
      {
        id: "2",
        title: "Браслеты Ampli5 дают дополнительную силу?",
        description:
          "Браслеты Ampli5 НЕ ЯВЛЯЮТСЯ лекарственным средством или медицинским устройством",
      },
      {
        id: "3",
        title: "Как работает технология BZI?",
        description:
          "Браслеты Ampli5 НЕ ЯВЛЯЮТСЯ лекарственным средством или медицинским устройством",
      },
      {
        id: "4",
        title: "Браслеты Ampli5 нормализуют давление?",
        description:
          "Браслеты Ampli5 НЕ ЯВЛЯЮТСЯ лекарственным средством или медицинским устройством",
      },
      {
        id: "5",
        title:
          "Существуют ли противопоказания или возрастные ограничения на ношение браслетов Ampli5",
        description:
          "Браслеты Ampli5 НЕ ЯВЛЯЮТСЯ лекарственным средством или медицинским устройством",
      },
    ],
  }),
  methods: {
    toggle(item) {
      console.log(item);
      selected = item.id;
    },
  },
};
</script>

<style lang="scss">
.faq-wrapper {
  .faq-wrapper-item {
    @apply border-t border-white border-opacity-30 px-5 py-5;
    .faq-title {
      @apply flex cursor-pointer items-center justify-between text-lg text-white md:text-xl lg:text-2xl;
    }
    .faq-description {
      @apply invisible h-0 overflow-hidden font-secondary text-white opacity-80 transition-all duration-500 ease-in-out;
    }
    svg {
      @apply transition-all duration-500 ease-in-out;
      fill: white;
    }
    &.isActive {
      .faq-description {
        @apply visible mt-3 h-max overflow-auto transition-all duration-500 ease-in-out;
      }
      svg {
        @apply rotate-45 transform;
        fill: #ee9611;
      }
    }
    &:last-child {
      @apply border-b border-white border-opacity-30;
    }
  }
}
</style>
