<!-- <template>
  <div>
    <input
      :type="customType"
      :class="styles"
      :placeholder="customPlaceholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    customPlaceholder: {
      type: String,
      default: null,
    },
    customType: {
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
.input {
  &-primary {
    @apply w-full rounded-full bg-brand-gray px-5 py-4 text-center outline-none;
    &:focus {
      @apply bg-white outline-brand-accent-first;
    }
  }
  &-auth {
    @apply w-full bg-brand-gray px-1 outline-none;
    &:focus {
      .input-auth-wrapper {
        @apply bg-white outline-brand-accent-first;
      }
    }
  }
  &-auth-password {
    @apply w-full rounded-full bg-brand-gray px-7 py-5 outline-none;
  }
}
</style> -->
