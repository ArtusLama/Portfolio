<script setup lang="ts">
defineOgImageComponent("default")
useSeoMeta({
    description: "Hey, I'm Arthur, a designer and developer based in Hamburg, Germany. Explore my portfolio to see my projects, experience, and the tools I use. I mainly work with Java and modern web technologies like Nuxt.js. Feel free to get in touch if anything catches your eye!",
})
</script>

<template>
    <div>
        <Navigation />
        <main
            class="space-y-32"
            aria-label="Main Content"
        >
            <AppHeroSection />
            <AppSectionExperienceSection />
            <AppSectionSkillsSection />
            <AppSectionProjectsSection />
            <AppSectionContactSection />
        </main>
    </div>
</template>
