<script setup lang="ts">
const fileexplorerPluginDownloads = ref()
async function fetchFileexplorerPluginDownloads(): Promise<number> {
    const apiUrl = "https://mp-gateway.elgato.com/products/fcf4f735-1737-440c-a829-4e51578f58eb"
    const { download_count } = await $fetch<{ download_count: number }>(apiUrl)
    return download_count
}

onMounted(() => {
    fetchFileexplorerPluginDownloads()
        .then((downloads) => {
            fileexplorerPluginDownloads.value = downloads
        })
        .catch(() => {
            fileexplorerPluginDownloads.value = undefined
        })
})
</script>

<template>
    <AppSection
        id="projects"
        label="Showcase"
        title="Projects and Work Samples"
    >
        <div class="flex flex-col items-center gap-32">
            <AppSectionProjectsProject
                title="File Explorer Plugin for Elgato Streamdeck"
                description="Explore your files and folders without ever leaving your Stream Deck. The File Explorer Plugin lets you browse directories, preview images, open folders, and even run custom commands. All directly from your Stream Deck keys."
                image-path="https://github.com/ArtusLama/streamdeck-fileexplorer/raw/main/de.artus.fileexplorer.sdPlugin/imgs/other/Thumbnail.png"
                :tags="[
                    { name: `${fileexplorerPluginDownloads || '> 7500'} Downloads`, icon: 'lucide:download' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'StreamDeck SDK', icon: 'simple-icons:elgato' },
                ]"
                project-url="https://marketplace.elgato.com/product/fileexplorer-fcf4f735-1737-440c-a829-4e51578f58eb"
                github-url="https://github.com/ArtusLama/streamdeck-fileexplorer"
            />

            <!-- TODO: Finish the current beta site! AND add preview video / image gallery -->
            <AppSectionProjectsProject
                title="SmashMC Website"
                description="A website for the Minecraft Server Network SmashMC. "
                image-path="https://github.com/ArtusLama/streamdeck-fileexplorer/raw/main/de.artus.fileexplorer.sdPlugin/imgs/other/Thumbnail.png"
                :tags="[
                    { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'PocketBase CMS', icon: 'logos:pocket-base' },
                    { name: 'Three.js', icon: 'simple-icons:threedotjs' },
                ]"
                github-url="https://github.com/SmashMCeu/website"
                project-url="https://smashmc.eu"
            />

            <!-- TODO: Add preview video / image gallery -->
            <AppSectionProjectsProject
                title="Wachbereiche - Interactive Rescue Area Map"
                description="A specialized interactive map for rescue stations, designed for marking and color-coding guard areas, highlighting important locations, and attaching critical information to each marker. Built for a friend currently becoming a paramedic in Germany."
                image-path="https://github.com/ArtusLama/streamdeck-fileexplorer/raw/main/de.artus.fileexplorer.sdPlugin/imgs/other/Thumbnail.png"
                :tags="[
                    { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'Leaflet.js', icon: 'simple-icons:leaflet' },
                ]"
                github-url="https://github.com/ArtusLama/WachbereicheMap"
                project-url="https://artuslama.github.io/WachbereicheMap"
            />

            <AppSectionProjectsProject
                title="List of my Minecraft Java Plugins & Tools"
                description="A collection of Minecraft Java plugins I've developed over the years, showcasing my skills in Java programming and Minecraft server customization."
                image-path="https://github.com/ArtusLama/streamdeck-fileexplorer/raw/main/de.artus.fileexplorer.sdPlugin/imgs/other/Thumbnail.png"
                :tags="[
                    { name: 'Java', icon: 'logos:java' },
                    { name: 'Spigot', icon: 'simple-icons:spigotmc' },
                    { name: 'Docker', icon: 'logos:docker-icon' },
                    { name: 'Database', icon: 'lucide:database' },
                ]"
                :other-link="{ label: 'View Plugins', url: '/mc-java-repos', external: false }"
            />
        </div>
    </AppSection>
</template>
