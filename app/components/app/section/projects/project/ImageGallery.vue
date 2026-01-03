<script setup lang="ts">
const props = defineProps<{
    imageDirPath: string
    imagesCount: number
}>()

const imagePaths = computed(() => {
    const paths = []
    for (let i = 1; i <= props.imagesCount; i++) {
        const indexString = i.toString().padStart(2, "0")
        paths.push(`${props.imageDirPath}/${indexString}.png`)
    }
    return paths
})
</script>

<template>
    <div class="bg-accent rounded-3xl border p-2 shrink-0 h-fit w-120">
        <NuxtImg
            v-if="imagePaths.length == 1"
            class="carousel__item w-full rounded-xl aspect-video select-none"
            :draggable="false"
            :src="imagePaths[0]"
            :alt="`Project image 1`"
        />

        <CarouselCarousel
            v-else
            :gap="12"
            prevent-excessive-dragging
            class="rounded-xl overflow-hidden"
        >
            <CarouselSlide
                v-for="(imagePath, index) in imagePaths"
                :key="index"
            >
                <NuxtImg
                    class="carousel__item w-full rounded-xl aspect-video select-none"
                    :draggable="false"
                    :src="imagePath"
                    :alt="`Project image ${index + 1}`"
                />
            </CarouselSlide>

            <template #addons>
                <CarouselNavigation />
                <CarouselPagination />
            </template>
        </CarouselCarousel>
    </div>
</template>

<style>
:root {
    --vc-nav-color: var(--color-muted-foreground);
    --vc-nav-color-hover: var(--color-foreground);
    --vc-pgn-background-color: var(--color-muted-foreground);
    --vc-pgn-active-color: var(--color-foreground);
    --vc-pgn-border-radius: 100rem;
    --vc-pgn-gap: 0.5rem;
    --vc-pgn-height: 0.4rem;
    --vc-pgn-width: 1rem;
}

.carousel__pagination-button {
    transition: width 0.3s ease-in-out;
    opacity: 0.5;
}

.carousel__pagination-button--active {
    width: 2rem !important;
}
</style>
