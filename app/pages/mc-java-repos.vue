<script setup lang="ts">
useSeoMeta({
    title: "Minecraft Java Repositories",
    description: "A collection of my Minecraft Java plugins and tools that I've developed over the years.",
})
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="max-w-2xl mt-32 flex-col items-center text-center px-4">
            <UiButton
                as-child
                variant="link"
            >
                <NuxtLink
                    to="/"
                >
                    <Icon name="lucide:arrow-left" />
                    Back to Home
                </NuxtLink>
            </UiButton>

            <h1 class="mt-4 text-2xl font-bold">
                This is a collection of my Minecraft Java plugins and tools that I've developed over the years.
            </h1>

            <p class="mt-2 text-muted-foreground max-w-2xl">
                <b>Disclaimer:</b><br>
                This isn't a complete list. Most of the work related to SmashMC isn't open-source!
                If you're interested in any of these projects or want more information, just contact me.
            </p>

            <div class="mt-12 flex flex-col gap-4 w-full text-left">
                <McJavaReposItem
                    v-for="i in 5"
                    :key="i"
                    title="BonusSystem"
                    description="A comprehensive Minecraft plugin that introduces a versatile bonus system for players, allowing server administrators to create and manage various types of rewards and incentives."
                    :private="false"
                    github-url="https://github.com/ArtusLama/MC-Plugin-BonusSystem"
                />
            </div>
        </div>
    </div>
</template>
