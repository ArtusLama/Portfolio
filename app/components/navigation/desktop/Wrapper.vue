<script setup lang="ts">
const { y } = useWindowScroll()

const connected = computed(() => y.value < 100)
</script>

<template>
    <header class="nav-wrapper fixed top-0 left-1/2 -translate-x-1/2 z-50 flex justify-center">
        <div
            class="navbar"
            :class="connected ? 'connected' : 'detached'"
        >
            <div class="nav-inner p-3">
                <slot />
            </div>
        </div>
    </header>
</template>

<style>
:root {
    /* Navbar color variables */
    --nav-background: var(--color-navbar-background);
    --nav-border-color: var(--color-navbar-border);
    --nav-border-width: 1px;

    /* Navbar size variables */
    --nav-height: 4rem;
    --nav-width: 48rem;
    --nav-connected-height: 4.5rem;
    --nav-connected-width: 55rem;
    --nav-radius: 16px;
    --nav-detached-distance: 1rem;

    /* Corner cutout variables */
    --nav-corner-height: 30px;
    --nav-corner-radius: var(--nav-corner-height);

    /* Animation timing variables */
    --nav-animation-duration: 0.5s;
    --nav-corner-animation-duration: 0.2s;
    --nav-animation-bounce: cubic-bezier(0.34, 1.8, 0.64, 1);

    /* Calculated durations */
    --nav-radius-duration: calc(var(--nav-animation-duration) - var(--nav-corner-animation-duration));
}

.navbar {
    width: var(--nav-width);
    background: var(--nav-background);
    border: var(--nav-border-width) solid var(--nav-border-color);
    border-bottom-left-radius: var(--nav-radius);
    border-bottom-right-radius: var(--nav-radius);
    transition:
        width var(--nav-animation-duration) var(--nav-animation-bounce),
        border-top-left-radius var(--nav-radius-duration) ease-out var(--nav-corner-animation-duration),
        border-top-right-radius var(--nav-radius-duration) ease-out var(--nav-corner-animation-duration),
        margin var(--nav-animation-duration) var(--nav-animation-bounce),
        border-color var(--nav-animation-duration) var(--nav-animation-bounce);
    position: relative;

    --nav-corner-width: 30px;
    --nav-corner-border-color: var(--nav-border-color);
}

.navbar.connected {
    width: var(--nav-connected-width);
    border-top: var(--nav-border-width) solid transparent;
    transition:
        width var(--nav-animation-duration) var(--nav-animation-bounce),
        border-top-left-radius var(--nav-radius-duration) ease-in 0s,
        border-top-right-radius var(--nav-radius-duration) ease-in 0s,
        margin var(--nav-animation-duration) var(--nav-animation-bounce),
        border-color var(--nav-animation-duration) var(--nav-animation-bounce);
}

.navbar.detached {
    margin-top: calc(var(--nav-detached-distance) + 1rem);
    border-radius: var(--nav-radius);

    --nav-corner-width: 0px;
    --nav-corner-border-color: transparent;
}

.nav-inner {
    height: var(--nav-height);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--nav-animation-duration) var(--nav-animation-bounce);
}

.navbar.connected .nav-inner {
    height: var(--nav-connected-height);
    transition: all var(--nav-animation-duration) var(--nav-animation-bounce);
}

/* Squares - on navbar */
.navbar::before,
.navbar::after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--nav-border-width));
    width: var(--nav-corner-width);
    height: var(--nav-corner-height);
    background: var(--nav-background);
    z-index: 1;
    transition: all var(--nav-corner-animation-duration) ease-in 0s;
}

.navbar::before {
    left: calc(-1 * var(--nav-corner-width));
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
}

.navbar::after {
    right: calc(-1 * var(--nav-corner-width));
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
}

.navbar.connected::before,
.navbar.connected::after {
    transition: all var(--nav-corner-animation-duration) ease-out var(--nav-radius-duration);
}

/* Circles - on inner element to create curve cutout */
.navbar .nav-inner::before,
.navbar .nav-inner::after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--nav-border-width));
    width: calc(2 * var(--nav-corner-width));
    height: calc(2 * var(--nav-corner-height));
    border-radius: 50%;
    border: var(--nav-border-width) solid var(--nav-corner-border-color);
    background: var(--color-background);
    z-index: 4;
    overflow: hidden;
    background-clip: padding-box;
    transition: all var(--nav-corner-animation-duration) ease-in 0s;
}

.navbar .nav-inner::before {
    left: calc(-2 * var(--nav-corner-width));
    clip-path: polygon(
        70% 25%,
        50% 0%,
        100% 0%,
        100% 50%
    );
}

.navbar .nav-inner::after {
    right: calc(-2 * var(--nav-corner-width));
    clip-path: polygon(
        30% 25%,
        50% 0%,
        0% 0%,
        0% 50%
    );
}

.navbar.connected .nav-inner::before,
.navbar.connected .nav-inner::after {
    transition: all var(--nav-corner-animation-duration) ease-out var(--nav-radius-duration);
}
</style>
