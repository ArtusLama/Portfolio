<script setup lang="ts">
const { y } = useWindowScroll()

const connected = computed(() => y.value < 100)
</script>

<template>
    <div class="nav-wrapper fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl z-50">
        <div
            class="navbar bg-accent"
            :class="connected ? 'connected' : 'detached'"
        >
            <div class="nav-inner py-4 px-12">
                <p>test content | {{ y }}</p>
            </div>
        </div>
    </div>
</template>

<style>
:root {
    /* Navbar color variables */
    --nav-background: var(--color-accent);
    --nav-border-color: var(--color-border);
    --nav-border-width: 1px;

    /* Navbar size variables */
    --nav-height: 3.5rem;
    --nav-connected-height: 4rem;
    --nav-radius: 16px;
    --nav-detached-distance: 1rem;

    /* Corner cutout variables */
    --nav-corner-width: 30px;
    --nav-corner-height: 30px;
    --nav-corner-radius: var(--nav-corner-height);
}

.navbar {
    border: var(--nav-border-width) solid var(--nav-border-color);
    border-bottom-left-radius: var(--nav-radius);
    border-bottom-right-radius: var(--nav-radius);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
}

.navbar.connected {
    border-top: var(--nav-border-width) solid transparent;
}

.navbar.detached {
    margin-top: calc(var(--nav-detached-distance) + 1rem);
    border-radius: var(--nav-radius);
}

.nav-inner {
    height: var(--nav-height);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.navbar.connected .nav-inner {
    height: var(--nav-connected-height);
}

/* Squares - on navbar */
.navbar.connected::before,
.navbar.connected::after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--nav-border-width));
    width: var(--nav-corner-size);
    height: var(--nav-corner-size);
    background: var(--nav-background);
    z-index: 1;
}

.navbar.connected::before {
    left: calc(-1 * var(--nav-corner-size));
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
}

.navbar.connected::after {
    right: calc(-1 * var(--nav-corner-size));
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
}

/* Circles - on inner element to create curve cutout */
.navbar.connected .nav-inner::before,
.navbar.connected .nav-inner::after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--nav-border-width));
    width: calc(2 * var(--nav-corner-size));
    height: calc(2 * var(--nav-corner-size));
    border-radius: 50%;
    border: var(--nav-border-width) solid var(--nav-border-color);
    background: var(--color-background);
    z-index: 2;
    overflow: hidden;
    background-clip: padding-box;
}

.navbar.connected .nav-inner::before {
    left: calc(-2 * var(--nav-corner-size));
    clip-path: polygon(
        50% 50%,
        50% 0%,
        100% 0%,
        100% 50%
    );
}

.navbar.connected .nav-inner::after {
    right: calc(-2 * var(--nav-corner-size));
    clip-path: polygon(
        50% 50%,
        50% 0%,
        0% 0%,
        0% 50%
    );
}
</style>
