<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{
    error: NuxtError
}>()

const handleError = () => clearError({ redirect: "/" })
</script>

<template>
    <div class="flex items-center justify-center min-h-screen flex-col gap-4 px-8">
        <h1 class="text-7xl font-black">
            {{ error?.statusCode }}
        </h1>
        <h2 class="text-3xl font-semibold font-mono bg-accent border rounded-xl px-4 py-2 text-center">
            {{ error?.message }}
        </h2>

        <p class="max-w-120 text-center text-muted-foreground">
            It seems you've encountered an error. Don't worry, you can return to the homepage by clicking the button below.
        </p>

        <UiButton
            variant="outline"
            size="lg"
            @click="handleError"
        >
            <Icon name="lucide:home" />
            Go to Home
        </UiButton>
    </div>
</template>
