<template>
  <div class="select">
    <div
      class="navbar-backdrop fixed inset-0"
      v-if="optionsVisible"
      @click="optionsVisible = false"
    ></div>
    <div
      class="selected-name"
      :class="{ active: optionsVisible }"
      @click="optionsVisible = !optionsVisible"
    >
      <div class="mr-10">
        {{ selected }}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <div class="options" :class="{ active: optionsVisible }">
        <div
          class="options-item"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    optionsVisible: false,
  }),
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.optionsVisible = false;
    },
  },
};
</script>

<style lang="scss">
.select {
  @apply relative z-30 w-[300px] font-secondary;
  .selected-name {
    @apply relative flex cursor-pointer items-center justify-between rounded-md border border-brand-primary border-opacity-30 bg-white px-5 py-2 font-semibold;
    svg {
      @apply transition-all duration-300 ease-in-out;
    }
    &.active {
      @apply border border-brand-gold;
      svg {
        @apply rotate-180;
      }
    }
  }
  .options {
    @apply invisible absolute left-0 top-[115%] w-full border-collapse  scale-90 rounded-md border border-brand-primary border-opacity-30 bg-white opacity-0 transition-all duration-500 ease-in-out;

    &-item {
      @apply cursor-pointer border-b border-brand-primary border-opacity-30 px-5 py-2 transition-all duration-300 ease-in-out;
      &:hover {
      }
      &:last-child {
        @apply border-none;
      }
    }
    &.active {
      @apply visible scale-100 opacity-100;
    }
  }
}
</style>
