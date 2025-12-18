<script lang="ts" setup>
defineProps<{
    title: string
}>()
</script>

<template>
    <div
        class="flex flex-col
                items-center        gap-2
                lg:items-start lg:gap-4"
    >
        <p class="text-sm text-muted-foreground/80 tracking-widest uppercase">
            {{ title }}
        </p>
        <div
            class="flex flex-col gap-1"
        >
            <slot />
        </div>
    </div>
</template>
