<script setup lang="ts">
function goToTop() {
    if (useRoute().path === "/") {
        useLenis().value?.scrollTo(0)
    }
}
</script>

<template>
    <nav class="flex items-center justify-evenly origin-center w-full">
        <NavigationDesktopLink
            to="/"
            icon="lucide:house"
            @click="goToTop"
        >
            Home
        </NavigationDesktopLink>
        <NavigationDesktopLink
            to="#experience"
            icon="lucide:graduation-cap"
        >
            Experience
        </NavigationDesktopLink>
        <NavigationDesktopLink
            to="#skills"
            icon="lucide:sparkles"
        >
            Skills
        </NavigationDesktopLink>
        <NavigationDesktopLink
            to="#projects"
            icon="lucide:layout-grid"
        >
            Projects
        </NavigationDesktopLink>
        <NavigationDesktopLink
            to="#contact"
            icon="lucide:phone"
        >
            Contact
        </NavigationDesktopLink>
    </nav>
</template>
