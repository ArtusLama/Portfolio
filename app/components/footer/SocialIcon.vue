<script setup lang="ts">
defineProps<{
    icon: string
    link: string
    label: string
}>()
</script>

<template>
    <UiButton
        as-child
        variant="ghost"
        size="icon-lg"
    >
        <NuxtLink
            :to="link"
            :aria-label="label"
            :title="label"
            external
            target="_blank"
        >
            <Icon
                :name="icon"
                :size="22"
            />
        </NuxtLink>
    </UiButton>
</template>
