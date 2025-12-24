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
    <div class="flex flex-col items-center">
        <section
            class="max-w-400 w-full flex flex-col gap-12 scroll-mt-32"
            :class="{
                'items-start': alignment === 'left',
                'items-center text-center': alignment === 'center',
                'items-end': alignment === 'right',
            }"
        >
            <div class="w-fit">
                <a
                    :href="`#${id}`"
                    class="flex flex-col rounded-lg outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                    :class="{
                        'text-left items-start': alignment === 'left',
                        'text-center items-center': alignment === 'center',
                        'text-right items-end': alignment === 'right',
                    }"
                    @click="useLenisScrollTo(id, false)"
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
            </div>
            <div
                class="w-full flex flex-col"
                :class="{
                    'items-start': alignment === 'left',
                    'items-center text-center': alignment === 'center',
                    'items-end': alignment === 'right',
                }"
            >
                <slot />
            </div>
        </section>
    </div>
</template>
