<template>
  <section>
    <div class="content y-distance relative bg-white">
      <h1
        class="heading-primary mx-auto mb-5 max-w-sm text-center text-brand-dark md:max-w-md"
      >
        Выберите свой браслет
      </h1>
      <div class="choose-bracelet">
        <div class="choose-bracelet-image">
          <img :src="require(`~/assets/img/bracelets/${selectedColor.src}`)" />
        </div>
        <div class="choose-bracelet-data">
          <h2 class="heading-secondary uppercase">Ampli синий</h2>
          <div class="cost-wrapper">
            <div class="cost-new">48 000₸</div>
            <div class="cost-old">52 000₸</div>
          </div>
          <div class="description">
            Egestas amet erat vitae ultricies purus, nullam. Sem risus
            scelerisque sed odio amet, sit gravida risus. Diam tristique nibh
            lobortis bibendum vitae. Scelerisque dis fermentum, vel lacus
            suscipit turpis orci. Tristique eget commodo scelerisque amet,
            fermentum sit id.
          </div>
          <h2 class="font-bold text-brand-dark opacity-80">Цвет браслета:</h2>
          <div class="colors-wrapper">
            <button
              v-for="(item, index) in images"
              :key="index"
              class="colors-wrapper-item"
              :style="'background-color:' + item.color + ';'"
              :class="[{ active: selectedColor.color == item.color }]"
              @click="switchBracelet(item)"
            ></button>
          </div>
          <h2 class="font-bold text-brand-dark opacity-80">Размер браслета</h2>
          <div class="flex">
            <PartsSelect
              :options="options"
              @select="optionSelect"
              :selected="selected"
            >
            </PartsSelect>
          </div>

          <PartsUIButton :styles="'btn-primary'"
            >Добавить в корзину</PartsUIButton
          >
        </div>
      </div>
      <div class="absolute left-1/2 top-0 -translate-x-1/2">
        <img src="~/assets/img/icons/vector-block-2.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    options: [
      { name: "xs - 18см", value: 1 },
      { name: "sm - 22см", value: 2 },
      { name: "md - 26см", value: 3 },
      { name: "lg - 30см", value: 4 },
    ],
    images: [
      {
        color: "blue",
        src: "blue-bracelet.png",
        alt: "Natural Grove Green Trees Path",
      },
      {
        color: "green",
        src: "green-bracelet.png",
        alt: "stockafbeelding cascades in nationaal park plitvice",
      },
    ],
    selectedColor: null,
    selected: "Выберите размер",
  }),
  created() {
    this.selectedColor = this.images[0];
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
    switchBracelet(color) {
      this.selectedColor = color;
    },
  },
};
</script>

<style></style>
