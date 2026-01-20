<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"
import ScrollTrigger from "gsap/ScrollTrigger"

useSeoMeta({
    titleTemplate: title => title ? `${title} | Arthur Paucke` : "Arthur Paucke",
})

useSchemaOrg([
    definePerson({
        name: "Arthur Paucke",
        email: "mailto:contact@arthur-paucke.de",
        nationality: "German",
        url: "https://arthur-paucke.de",
        sameAs: [
            "https://www.linkedin.com/in/arthur-paucke/",
            "https://github.com/ArtusLama",
        ],
    }),
])

const lenisRef = useTemplateRef("lenis")

watchEffect((onInvalidate) => {
    if (!lenisRef.value?.lenis) return
    const lenis = lenisRef.value.lenis

    lenis.on("scroll", ScrollTrigger.update)

    function update(time: number) {
        lenis.raf(time * 1000)
    }
    useGSAP().ticker.add(update)

    useGSAP().ticker.lagSmoothing(0)

    onInvalidate(() => {
        lenis.off("scroll", ScrollTrigger.update)
        useGSAP().ticker.remove(update)
    })
})
</script>

<template>
    <div>
        <Analytics />
        <VueLenis
            ref="lenis"
            root
            :options="{
                duration: 0.75,
                autoToggle: true,
                autoRaf: false,
            }"
        />

        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator
            color="var(--color-primary)"
        />

        <UiToaster />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
