<script setup lang="ts">
defineProps<{
    githubUrl?: string
    title: string
    description: string
    private: boolean
}>()
</script>

<template>
    <UiButton
        as-child
        variant="outline"
        class="flex gap-8 px-8 py-6 h-fit whitespace-normal rounded-xl relative"
    >
        <NuxtLink
            :to="githubUrl"
            external
            target="_blank"
        >
            <Icon
                name="lucide:folder-git-2"
                :size="40"
                class="shrink-0"
            />
            <div>
                <div class="flex items-center gap-2">
                    <h2 class="font-semibold text-lg">
                        {{ title }}
                    </h2>
                    <p
                        v-if="private"
                        class="font-normal text-xs text-muted-foreground bg-accent/50 border rounded-full px-2 py-0.5"
                    >
                        Private
                    </p>
                </div>
                <p class="text-sm text-muted-foreground max-w-lg">
                    {{ description }}
                </p>
            </div>

            <Icon
                v-if="githubUrl && !private"
                name="lucide:external-link"
                :size="20"
                class="absolute top-4 right-4 text-muted-foreground"
            />
        </NuxtLink>
    </UiButton>
</template>
