<script setup lang="ts">
import SplitText from "gsap/SplitText"

const topTextId = "hero-top-text"
const nameTextId = "hero-name-text"
const roleTextId = "hero-role-text"
const locationTextId = "hero-location-text"
const locationIconId = "hero-location-icon"

onMounted(() => {
    const gsap = useGSAP()

    const splitTopText = SplitText.create(`#${topTextId}`, {
        type: "words,chars",
    })

    const splitNameText = SplitText.create(`#${nameTextId}`, {
        type: "chars,words",
    })

    const splitLocationText = SplitText.create(`#${locationTextId}`, {
        type: "words,chars",
    })

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: `#${topTextId}`,
            start: "top 95%",
            toggleActions: "play none none none",
        },
        delay: 0.2,
    })

    timeline
        .from(splitTopText.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.03,
            ease: "power2.out",
        })
        .from(splitNameText.chars, {
            opacity: 0,
            scale: 0.8,
            x: "random(-50, 50)",
            y: "random(-50, 50)",
            filter: "blur(4px)",
            stagger: 0.1,
            ease: "power2.out",
        }, "-=0.3")
        .from(`#${roleTextId} > span`, {
            opacity: 0,
            y: -20,
            scale: 1.4,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
        }, "-=0.5")
        .from(splitLocationText.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.03,
            ease: "power2.out",
        }, "-=0.5")
        .from(`#${locationIconId}`, {
            opacity: 0,
            scale: 0,
            rotate: -180,
            ease: "back.out(1.7)",
        }, "<")
})
</script>

<template>
    <div class="flex items-center justify-center h-dvh max-h-200 mt-12">
        <div class="flex flex-col items-center">
            <p
                :id="topTextId"
                class="font-semibold text-3xl"
            >
                Hey, I'm
            </p>
            <h1
                :id="nameTextId"
                class="font-black text-7xl text-center"
            >
                Arthur Paucke
            </h1>
            <h2
                :id="roleTextId"
                class="font-bold text-5xl text-center *:inline-block space-x-2 leading-14"
            >
                <span
                    class="bg-linear-to-b from-fuchsia-300 to-fuchsia-700 bg-clip-text text-transparent"
                    :style="{ WebkitTextFillColor: 'transparent' }"
                >
                    Designer
                </span>
                <span>&</span>
                <span
                    class="bg-linear-to-b from-sky-300 to-blue-700 bg-clip-text text-transparent"
                    :style="{ WebkitTextFillColor: 'transparent' }"
                >
                    Developer
                </span>
            </h2>
            <p
                :id="locationTextId"
                class="sm:text-xl text-lg mt-4 text-center"
            >
                <Icon
                    :id="locationIconId"
                    name="lucide:map-pin"
                    class="mr-1 -mb-0.5"
                />
                Based in Hamburg, Germany
            </p>
            <SocialIconList class="mt-8" />
        </div>
    </div>
</template>
