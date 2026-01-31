<script lang="ts" setup>
import SplitText from "gsap/SplitText"

const props = withDefaults(defineProps<{
    label: string
    title: string
    alignment?: "left" | "center" | "right"
    id: string
}>(), {
    alignment: "center",
})

const dotId = computed(() => `${props.id}-section-dot`)
const subtitleId = computed(() => `${props.id}-section-subtitle`)
const titleId = computed(() => `${props.id}-section-title`)

onMounted(() => {
    const gsap = useGSAP()

    gsap.from(`#${dotId.value}`, {
        y: 20,
        opacity: 0,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: `#${dotId.value}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    })

    const splitSubtitle = SplitText.create(`#${subtitleId.value}`, {
        type: "chars, words",
    })

    gsap.from(splitSubtitle.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
            trigger: `#${subtitleId.value}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
        onComplete: () => {
            splitSubtitle.revert()
        },
    })

    const splitTitle = SplitText.create(`#${titleId.value}`, {
        type: "words",
        mask: "words",
    })

    gsap.from(splitTitle.words, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: `#${titleId.value}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
        onComplete: () => {
            splitTitle.revert()
        },
    })
})
</script>

<template>
    <div class="flex flex-col items-center">
        <section
            :id="id"
            class="max-w-400 w-full flex flex-col gap-12 scroll-mt-32"
            :class="{
                'items-start': alignment === 'left',
                'items-center text-center': alignment === 'center',
                'items-end': alignment === 'right',
            }"
        >
            <div class="w-fit">
                <a
                    :id="dotId"
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
                        <p
                            :id="subtitleId"
                            class="section-subtitle-text uppercase leading-tight tracking-widest font-mono text-muted-foreground text-sm"
                        >
                            {{ label }}
                        </p>
                    </div>

                    <h2
                        :id="titleId"
                        class="tracking-tight text-3xl font-semibold"
                    >
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
