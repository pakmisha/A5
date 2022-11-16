<template>
  <div class="space-y-4 rounded-2xl bg-brand-primary px-7 py-7 font-secondary">
    <h1 class="heading-primary text-white">Детали заказа</h1>
    <div class="space-y-1">
      <div class="flex items-center justify-between">
        <div class="payment-property">Количество единиц:</div>
        <div class="payment-value">3</div>
      </div>
      <div class="flex items-center justify-between">
        <div class="payment-property">Сумма без скидки:</div>
        <div class="payment-value">156 000т</div>
      </div>
      <div class="flex items-center justify-between">
        <div class="payment-property">Скидка:</div>
        <div class="payment-value">4 000т</div>
      </div>
    </div>
    <div>
      <div class="payment-property mb-1">Итоговая стоимость:</div>
      <div class="text-2xl font-semibold text-white">144 000₸</div>
    </div>
    <form action="" class="block space-y-3">
      <div>
        <input
          class="input-primary"
          type="text"
          placeholder="'Ivanov Ivan Ivanovich'"
        />
      </div>
      <div>
        <input
          class="input-primary"
          :customType="'number'"
          placeholder="'0000   0000   0000   0000'"
        />
      </div>
      <div class="flex justify-between">
        <div class="mr-3 w-1/2">
          <input class="input-primary" type="number" placeholder="'00/00'" />
        </div>
        <div class="w-1/2">
          <input class="input-primary" type="number" placeholder="'CVV'" />
        </div>
      </div>
      <PartsUIButton :styles="'btn-primary w-full'"
        >Оформить заказ</PartsUIButton
      >
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.payment-property {
  @apply text-white opacity-80;
}
.payment-value {
  @apply font-semibold text-white;
}
</style>
