<script setup lang="ts">
defineProps<{
    dateFrom: string
    dateTo: string
    iconPath: string
    title: string
    subtitle: string
    location?: string
    remote?: boolean
    description: string
}>()

const isDesktop = useMediaQuery("(min-width: 768px)")

const timelineDot = useTemplateRef<HTMLElement>("timelineDotFiller")
onMounted(() => {
    const gsap = useGSAP()
    if (!timelineDot.value) return

    gsap.to(timelineDot.value, {
        width: "100%",
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: timelineDot.value,
            start: "top center",
            end: "bottom center",
            scrub: 1,
        },
    },
    )
})
</script>

<template>
    <div class="flex gap-8">
        <div
            v-if="isDesktop"
            class="text-right h-fit w-28 mt-4 shrink-0"
        >
            {{ dateFrom }} -<br>
            {{ dateTo }}
        </div>
        <div class="min-h-full w-1 relative shrink-0">
            <div class="rounded-full overflow-hidden bg-muted size-4 absolute top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div
                    ref="timelineDotFiller"
                    class="absolute bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-0"
                />
                <div class="bg-background rounded-full size-2 z-10" />
            </div>
        </div>
        <div class="max-w-200 w-full">
            <div
                v-if="!isDesktop"
                class="pt-4"
            >
                {{ dateFrom }} - {{ dateTo }}
            </div>
            <div class="border rounded-2xl bg-accent/25 px-6 pt-6 pb-4 mt-2 mb-8">
                <div class="flex gap-4 items-center">
                    <NuxtImg
                        :src="iconPath"
                        alt="Icon"
                        class="max-h-7 min-w-7"
                    />
                    <div>
                        <h3 class="font-semibold text-lg leading-4">
                            {{ title }}
                        </h3>
                        <div class="flex items-center gap-x-4 flex-wrap">
                            <h4 class="text-muted-foreground">
                                {{ subtitle }}
                            </h4>
                            <div
                                v-if="location"
                                class="text-sm text-muted-foreground/75"
                            >
                                <Icon
                                    name="lucide:map-pin"
                                    :size="14"
                                    class="mr-0.5 -mb-0.5"
                                />
                                {{ location }}
                            </div>
                            <div
                                v-if="remote"
                                class="text-sm text-muted-foreground/75"
                            >
                                <Icon
                                    name="lucide:map-pin-house"
                                    :size="14"
                                    class="mr-0.5 -mb-0.5"
                                />
                                Remote
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-muted-foreground mt-2">
                    {{ description }}
                </div>
            </div>
        </div>
    </div>
</template>
