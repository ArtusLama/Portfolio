<script setup lang="ts">
defineProps<{
    to: string
    icon: string
}>()
</script>

<template>
    <UiButton
        variant="ghost"
        size="lg"
        class="border-0! text-muted-foreground active:scale-95"
    >
        <Icon :name="icon" />
        <slot />
    </UiButton>
</template>
