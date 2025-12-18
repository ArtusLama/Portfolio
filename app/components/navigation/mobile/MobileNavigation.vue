<script setup lang="ts">
const isOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
    isOpen.value = false
})

const lockScroll = useScrollLock(document.body, isOpen.value)
syncRef(isOpen, lockScroll)

watch(isOpen, (newVal) => {
    if (newVal) {
        document.body.setAttribute("data-lenis-prevent", "true")
    } else {
        document.body.removeAttribute("data-lenis-prevent")
    }
})
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-40 p-2">
        <div
            class="border bg-card shadow rounded-lg p-4 pl-8 transition-[height] duration-300 ease-in-out overflow-hidden"
            :class="isOpen ? 'h-[calc(100dvh-1rem)]' : 'h-20'"
        >
            <div
                class="flex items-center justify-between"
            >
                <NuxtLink
                    to="/"
                    class="font-black text-2xl -mt-0.75"
                >
                    Arthur Paucke
                </NuxtLink>
                <div class="flex gap-2 items-center">
                    <NavigationMobileMenuButton v-model="isOpen" />
                </div>
            </div>
            <nav class="mt-18 flex flex-col gap-y-2 items-start">
                <p>a link</p>
                <p>another link</p>
            </nav>
        </div>
    </header>
</template>
