<script setup lang="ts">
const isDesktop = useMediaQuery("(min-width: 768px)")
const isMounted = ref(false)

onMounted(() => {
    isMounted.value = true
})
</script>

<template>
    <div
        class="opacity-0 transition-opacity duration-200"
        :class="{ 'opacity-100': isMounted }"
    >
        <NavigationDesktopNavigation v-if="isDesktop" />
        <NavigationMobileNavigation v-else />
    </div>
</template>
