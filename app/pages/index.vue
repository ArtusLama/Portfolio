<script setup lang="ts">
defineOgImageComponent("default")
useSeoMeta({
    description: "Welcome to my portfolio website!",
})
</script>

<template>
    <div>
        <Navigation />
        <main class="space-y-24">
            <AppHeroSection />
            <AppSectionExperienceSection />
            <AppSectionSkillsSection />
            <AppSectionProjectsSection />
            <AppSectionContactSection />
        </main>
    </div>
</template>
