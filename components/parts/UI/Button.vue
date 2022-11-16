<template>
  <div>
    <NuxtLink v-if="link" :to="link" :class="styles">
      <slot></slot>
    </NuxtLink>
    <button v-else :class="styles" @click.prevent="$emit('click')">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: null,
    },
    styles: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.btn {
  &-primary {
    @apply flex items-center justify-center rounded-full bg-gradient px-7 py-5 font-secondary font-bold uppercase text-white shadow-xl transition-all duration-300 ease-in-out;
    border-bottom: 4px solid #14836e;
    &:hover {
    }
  }
  &-play {
    @apply flex h-10 w-10 items-center justify-center rounded-full bg-gradient text-2xl text-white lg:h-16 lg:w-16;
    svg {
      @apply h-[20px] w-[20px] lg:h-[30px] lg:w-[30px];
    }
  }
  &-social {
    @apply flex h-10 w-10 items-center justify-center rounded-full bg-gradient;
  }
}
</style>
