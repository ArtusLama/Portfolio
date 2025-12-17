<script setup lang="ts">
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
</script>

<template>
    <div>
        <VueLenis
            root
            :options="{ duration: 0.75, autoToggle: true }"
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
