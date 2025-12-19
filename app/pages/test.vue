<script setup lang="ts">
const { y } = useWindowScroll()

const connected = computed(() => y.value < 100)
</script>

<template>
    <div class="nav-wrapper fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl z-50">
        <div
            class="navbar bg-accent py-4 px-12 rounded-b-2xl"
            :class="connected ? 'connected' : 'detached'"
        >
            <p>test content | {{ y }}</p>
        </div>
    </div>
</template>

<style>
:root {
    --nav-corner-size: 30px;
    --navbar-top-distance: 2rem;
}

.navbar {
    border: 1px solid var(--color-border);
    transition: all 0.3s var(--ease-spring);
    position: relative;
}

.navbar.connected {
    border-top: 1px solid transparent;
    padding-top: var(--navbar-top-distance);
}

.navbar.navbar.detached {
    margin-top: var(--navbar-top-distance);
}

.navbar::before, .navbar::after {
    content: '';
    width: var(--nav-corner-size);
    height: var(--nav-corner-size);
    position: absolute;
    top: -1px;
    background: var(--color-accent);
    overflow: hidden;
    background-clip: padding-box;
}

.navbar::before {
    left: calc(-1 * var(--nav-corner-size) + 1px);
}

.navbar::after {
    right: calc(-1 * var(--nav-corner-size) + 1px);
}

.navbar.detached {
    border-radius: 16px;
}
</style>
