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
        class="hover:scale-105 transition-transform ease-spring group"
    >
        <NuxtLink
            :to="link"
            :aria-label="label"
            :title="label"
            external
            target="_blank"
        >
            <Icon
                class="mt-1 group-hover:mt-0 group-hover:scale-105 transition-all ease-spring"
                :name="icon"
                :size="22"
            />
        </NuxtLink>
    </UiButton>
</template>
