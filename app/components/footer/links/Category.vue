<script lang="ts" setup>
defineProps<{
    title: string
}>()
</script>

<template>
    <div
        class="flex flex-col gap-2
                items-center
                lg:items-start"
    >
        <p class="text-sm text-muted-foreground/80 tracking-widest uppercase">
            {{ title }}
        </p>
        <div
            class="flex flex-col gap-1
                    items-center
                    lg:items-start"
        >
            <slot />
        </div>
    </div>
</template>
