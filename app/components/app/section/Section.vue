<script lang="ts" setup>
withDefaults(defineProps<{
    label: string
    title: string
    alignment?: "left" | "center" | "right"
    id: string
}>(), {
    alignment: "center",
})
</script>

<template>
    <section
        :id="id"
        class="space-y-12 flex flex-col"
        :class="{
            'items-start': alignment === 'left',
            'items-center text-center': alignment === 'center',
            'items-end': alignment === 'right',
        }"
    >
        <a
            :href="`#${id}`"
            class="flex flex-col"
            :class="{
                'text-left items-start': alignment === 'left',
                'text-center items-center': alignment === 'center',
                'text-right items-end': alignment === 'right',
            }"
        >
            <div class="flex items-center gap-3">
                <div class="size-2 bg-foreground rounded-full animate-pulse" />
                <p class="uppercase leading-tight tracking-widest font-mono text-muted-foreground text-sm">
                    {{ label }}
                </p>
            </div>

            <h2 class="tracking-tight text-3xl font-semibold">
                {{ title }}
            </h2>
        </a>
        <slot />
    </section>
</template>
