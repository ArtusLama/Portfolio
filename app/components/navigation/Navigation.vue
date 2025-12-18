<script setup lang="ts">
const isDesktop = useMediaQuery("(min-width: 768px)")
</script>

<template>
    <NavigationDesktopNavigation v-if="isDesktop" />
    <NavigationMobileNavigation v-else />
</template>
