<script setup lang="ts">
useSeoMeta({
    title: "Minecraft Java Repositories",
    description: "A collection of my Minecraft Java plugins and tools that I've developed over the years.",
})

const repos: Array<{ title: string, description: string, githubUrl?: string, private: boolean }> = [
    {
        title: "Clan System (SmashMC)",
        description: "Quarkus, Quarkus Hibernate, Spigot, BungeeCord. A complex clan management plugin for the SmashMC Minecraft server network. Quarkus-based backend with a Spigot plugin frontend, featuring clan creation, invitations, roles, permissions, chat integration, and much more.",
        private: true,
    },
    {
        title: "Dynamic Inventory Library (SmashMC)",
        description: "An abstract inventory management library for Spigot plugins, simplifying the creation and handling of dynamic inventories with features like pagination, custom actions and concurrency support.",
        private: true,
    },
    {
        title: "Bonussystem Plugin",
        description: "A plugin to buy and sell ingame items. Customizable layouts and designs. Supporting ingame currency and transaction tracking in a database.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/MC-Plugin-BonusSystem",
    },
    {
        title: "A Modded Minecraft 1.8.9 Client (Experimental)",
        description: "An experimental Minecraft client for version 1.8.9, featuring various quality-of-life improvements and a custom UI library built with OpenGL.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/ArtusClient-1.8.9",
    },
    {
        title: "A custom Proxy for Minecraft Servers (Experimental)",
        description: "An man-in-the-middle proxy for Minecraft servers, allowing inspection and modification of network traffic between the client and server. Built for educational purposes and experimenting with the Minecraft protocol.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/MITMProxyMinecraft",
    },
    {
        title: "Advanced Hoppers Plugin",
        description: "A Spigot plugin that enhances the functionality of hoppers in Minecraft, adding features like filtering and nearby items pickup.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/AdvancedHoppersPlugin",
    },
    {
        title: "Door Locks Plugin",
        description: "A simple spigot plugin that allows players to lock and unlock doors using guis and custom key-items.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/DoorLocks",
    },
    {
        title: "Learning how to make a custom programming language",
        description: "A experimental programming language concept designed for educational purposes as a personal project. Its focused on building a custom programming language from the ground up. It explores key aspects of language design, lexing, parsing, and interpretation.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/OwnCodeLang",
    },
]
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
                    v-for="(repo, i) in repos"
                    :key="i"
                    :title="repo.title"
                    :description="repo.description"
                    :private="repo.private"
                    :github-url="repo.githubUrl"
                />
            </div>
        </div>
    </div>
</template>
