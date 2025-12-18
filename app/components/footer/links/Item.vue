<script lang="ts" setup>
defineProps<{
    label: string
    link: string
    isExternal?: boolean
}>()
</script>

<template>
    <NuxtLink
        :to="link"
        :target="isExternal ? '_blank' : '_self'"
        :external="isExternal"
        class="flex items-center gap-2 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded
                underline-base hover:underline-expanded underline-thickness-thin underline-in-left underline-out-right"
    >
        {{ label }}
        <Icon
            v-if="isExternal"
            name="lucide:external-link"
            :size="18"
        />
    </NuxtLink>
</template>
