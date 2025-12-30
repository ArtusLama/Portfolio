<script setup lang="ts">
defineProps<{
    tag: string
    icon?: string
}>()
</script>

<template>
    <div class="border bg-accent/50 rounded-lg flex items-center gap-2 h-fit px-2 py-1 text-sm">
        <Icon
            v-if="icon"
            :name="icon"
        />
        <p>{{ tag }}</p>
    </div>
</template>
