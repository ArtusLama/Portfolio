<script setup lang="ts">
const { to } = defineProps<{
    to: string
    icon: string
}>()

const target = computed(() => {
    if (to.startsWith("#")) {
        return { path: useRoute().path, hash: to }
    } else {
        return { path: to, hash: "" }
    }
})
function onClick() {
    if (to.startsWith("#")) {
        useLenisScrollTo(to.slice(1), false)
    }
}
</script>

<template>
    <UiButton
        variant="ghost"
        size="lg"
        as-child
        class="border-0! text-muted-foreground active:scale-95"
    >
        <NuxtLink
            :to="target"
            class="flex items-center gap-2"
            @click="onClick"
        >
            <Icon :name="icon" />
            <slot />
        </NuxtLink>
    </UiButton>
</template>
