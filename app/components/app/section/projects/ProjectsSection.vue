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
                image-dir-path="/imgs/projects/streamdeck-fileexplorer"
                :images-count="5"
                :tags="[
                    { name: `${fileexplorerPluginDownloads || '> 10000'} Downloads`, icon: 'lucide:download' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'StreamDeck SDK', icon: 'simple-icons:elgato' },
                ]"
                project-url="https://marketplace.elgato.com/product/fileexplorer-fcf4f735-1737-440c-a829-4e51578f58eb"
                github-url="https://github.com/ArtusLama/streamdeck-fileexplorer"
            />

            <AppSectionProjectsProject
                title="List of Java repositories - mostly Minecraft plugins"
                description="A collection of Minecraft Java plugins and other tools I've developed over the years, showcasing my skills in Java programming and Minecraft server customization. I can't share everything publicly though. A majority of my work is related to SmashMC, which isn't open-source. If you're interested in any of these projects or want more information, just contact me."
                image-dir-path="/imgs/projects/mc-java-plugins"
                :images-count="1"
                :tags="[
                    { name: 'Java', icon: 'logos:java' },
                    { name: 'Spigot', icon: 'simple-icons:spigotmc' },
                    { name: 'Docker', icon: 'logos:docker-icon' },
                    { name: 'Database', icon: 'lucide:database' },
                ]"
                :other-link="{ label: 'View Plugins', url: '/mc-java-repos', external: false }"
            />

            <AppSectionProjectsProject
                title="SmashMC Website"
                description="A website for the Minecraft Server Network SmashMC which has thousands of registered players. The website was built using Nuxt.js and TypeScript, with a CMS powered by PocketBase to manage content easily. It also features interactive 3D elements created with Three.js to enhance the user experience. It is responsive and optimized for both desktop and mobile devices. Lately, I have been working on a complete redesign and rebuild of the website, which is currently in beta. The new version aims to maximize performance, accessibility, and overall user experience."
                image-dir-path="/imgs/projects/smashmc-website"
                :images-count="11"
                :tags="[
                    { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'PocketBase CMS', icon: 'logos:pocket-base' },
                    { name: 'Three.js', icon: 'simple-icons:threedotjs' },
                ]"
                github-url="https://github.com/SmashMCeu/website"
                project-url="https://smashmc.eu"
                :other-link="{ label: 'Beta Site', url: 'https://beta.smashmc.eu', external: true }"
            />

            <AppSectionProjectsProject
                title="Interactive Map to manage Areas for Rescue Stations"
                description="A specialized interactive map for rescue stations, designed for marking and color-coding guard areas, highlighting important locations, and attaching critical information to each marker. Built for a friend currently becoming a paramedic in Germany."
                image-dir-path="/imgs/projects/wachbereiche-map"
                :images-count="5"
                :tags="[
                    { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'Leaflet.js', icon: 'simple-icons:leaflet' },
                ]"
                github-url="https://github.com/ArtusLama/WachbereicheMap"
                project-url="https://artuslama.github.io/WachbereicheMap"
            />

            <AppSectionProjectsProject
                title="Studiolution - Inactive Clients Management Tool"
                description="A browser extension with backend in python that detects inactive clients in Studiolution, a hair salon management software. It highlights clients who haven't booked an appointment in their usual timeframe, helping salons re-engage with them through targeted marketing campaigns. Giftcards can also be sent with one click to encourage bookings."
                image-dir-path="/imgs/projects/studiolution-addon"
                :images-count="6"
                :tags="[
                    { name: 'Python', icon: 'logos:python' },
                    { name: 'SQLite', icon: 'lucide:database' },
                    { name: 'WXT', icon: 'lucide:blocks' },
                    { name: 'Vue.js', icon: 'logos:vue' },
                ]"
                github-url="https://github.com/ArtusLama/WachbereicheMap"
                project-url="https://artuslama.github.io/WachbereicheMap"
            />
        </div>
    </AppSection>
</template>
