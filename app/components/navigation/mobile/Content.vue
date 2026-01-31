<script setup lang="ts">
const isOpen = defineModel<boolean>({})

function goToTop() {
    if (useRoute().path === "/") {
        useLenis().value?.scrollTo(0)
    }
    isOpen.value = false
}

function closeMenu() {
    isOpen.value = false
}
</script>

<template>
    <nav
        class="flex flex-col gap-y-4 items-start mt-8 *:w-full"
        aria-label="Mobile Navigation"
    >
        <NavigationMobileLink
            to="/"
            icon="lucide:house"
            @click="goToTop"
        >
            Home
        </NavigationMobileLink>
        <NavigationMobileLink
            to="#experience"
            icon="lucide:graduation-cap"
            @click="closeMenu"
        >
            Experience
        </NavigationMobileLink>
        <NavigationMobileLink
            to="#skills"
            icon="lucide:sparkles"
            @click="closeMenu"
        >
            Skills
        </NavigationMobileLink>
        <NavigationMobileLink
            to="#projects"
            icon="lucide:layout-grid"
            @click="closeMenu"
        >
            Projects
        </NavigationMobileLink>
        <NavigationMobileLink
            to="#contact"
            icon="lucide:phone"
            @click="closeMenu"
        >
            Contact
        </NavigationMobileLink>
    </nav>
</template>
