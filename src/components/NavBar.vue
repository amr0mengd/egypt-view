<template>
  <div id="navbar" class="container mx-auto py-4.25 flex items-center justify-between">
    <div id="logo" class="flex items-center justify-center space-x-2">
      <router-link to="#">
        <img src="../assets/logo.png" class="w-14" />
      </router-link>
      <p class="text-[32px] font-bold text-primary pb-0.5">Egypt-View</p>
    </div>
    <div class="space-x-6 flex items-center">
      <div id="navigation" class="flex space-x-8">
        <nav-item text="Home" :is-active="true"></nav-item>
        <div>
          <nav-item text="Services"></nav-item>
        </div>
        <nav-item text="Gallery"></nav-item>
        <nav-item text="About"></nav-item>
        <nav-item text="Contact"></nav-item>
      </div>
      <div id="separator" class="w-px h-6 bg-[#D9D9D9] rounded-[5px]"></div>
      <LanguageSwitcher />
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
export default {
  components: { NavItem, LanguageSwitcher },
}
</script>
