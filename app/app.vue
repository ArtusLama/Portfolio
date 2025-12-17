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
