<script setup lang="ts">
const modelValue = defineModel<boolean>({})
const toggleOpen = () => {
    modelValue.value = !modelValue.value
}
</script>

<template>
    <UiButton
        variant="ghost"
        size="icon"
        class="size-12 text-muted-foreground"
        @click="toggleOpen"
    >
        <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            class="size-20"
        >
            <path
                class="line line-1"
                :class="{ 'line-active': modelValue }"
                d="M0 40h62c13 0 6 28-4 18L35 35"
            />
            <path
                class="line line-2"
                :class="{ 'line-active': modelValue }"
                d="M0 50h70"
            />
            <path
                class="line line-3"
                :class="{ 'line-active': modelValue }"
                d="M0 60h62c13 0 6-28-4-18L35 65"
            />
        </svg>
    </UiButton>
</template>

<style scoped>
.line {
    fill: none;
    stroke: hsl(var(--foreground));
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.line-1,
.line-3 {
    --length: 24;
    --total-length: 126.6418;
    --offset: -38;
}

.line-2 {
    --length: 24;
    --total-length: 70;
    --offset: -38;
}

.line-1.line-active,
.line-3.line-active {
    --length: 22.6274;
    --offset: -94.1149;
}

.line-2.line-active {
    --length: 0;
    --offset: -50;
}
</style>
