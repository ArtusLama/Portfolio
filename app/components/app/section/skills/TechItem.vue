<script setup lang="ts">
defineProps<{
    title: string
    description: string
    color: string
    link: string
}>()
</script>

<template>
    <NuxtLink
        ref="element"
        :to="link"
        external
        target="_blank"
        class="group relative w-60 h-20 p-2 pr-4 border bg-accent/50 hover:bg-accent/70 transition-all duration-200 flex gap-4 rounded-2xl
                outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
    >

        <div
            class="rounded-lg aspect-square flex items-center justify-center"
            :style="`background-color: ${color}`"
        >
            <slot />
        </div>
        <div>
            <h3 class="text-lg font-semibold flex items-center gap-1">
                <span class="underline-base underline-thickness-thin -underline-offset-4 underline-in-left underline-out-right group-hover:underline-expanded group-focus-within:underline-expanded">
                    {{ title }}
                </span>

                <Icon
                    name="lucide:arrow-up-right"
                    :size="18"
                    class="opacity-0 scale-0 group-hover:opacity-80 group-focus-within:opacity-80 group-hover:scale-100 group-focus-within:scale-100 transition-all duration-200"
                />
            </h3>
            <p class="text-xs text-muted-foreground">
                {{ description }}
            </p>
        </div>

    </NuxtLink>
</template>
