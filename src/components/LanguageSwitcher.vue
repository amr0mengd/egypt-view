<template>
  <div class="w-10 h-6 rounded-sm text-[8px]">
    <router-link
      to="#"
      :class="{ 'bg-primary text-white underline': isActive, 'bg-white text-primary': !isActive }"
      >EN</router-link
    >
    <router-link
      to="#"
      :class="{ 'bg-primary text-white underline': isActive, 'bg-white text-primary': !isActive }"
      >JP</router-link
    >
  </div>
</template>

<script>
export default {
  props: ['isActive'],
}
</script>
