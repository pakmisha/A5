<template>
  <article class="tabs">
    <header class="tabs__nav mb-6">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div
            class="nav-item"
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>

<style lang="scss">
.tabs {
  &__nav {
    @apply flex justify-center;
    ul {
      @apply flex rounded-full bg-brand-accent-first p-1 md:p-1.5;
      li {
        .nav-item {
          @apply cursor-pointer py-3 px-5 font-semibold text-white md:py-4 md:px-10 lg:px-14;
          &.is-active {
            @apply rounded-full bg-white text-black;
          }
        }
      }
    }
  }
}
</style>
