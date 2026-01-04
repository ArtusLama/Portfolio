<script setup lang="ts">
defineProps<{
    title: string
    description: string
    imageDirPath: string
    imagesCount: number
    projectUrl?: string
    githubUrl?: string
    otherLink?: { label: string, url: string, external?: boolean }
    tags: { name: string, icon?: string }[]
}>()
</script>

<template>
    <div
        class="flex gap-8 text-left
                lg:flex-row
                flex-col"
    >
        <AppSectionProjectsProjectImageGallery
            :image-dir-path="imageDirPath"
            :images-count="imagesCount"
            class="xl:w-150 lg:w-100 md:w-150 w-full shrink-0"
        />

        <div>
            <h3 class="text-2xl font-semibold">
                {{ title }}
            </h3>

            <div class="flex gap-x-2 gap-y-1 flex-wrap mt-2">
                <AppSectionProjectsProjectTag
                    v-for="(tag, index) in tags"
                    :key="index"
                    :tag="tag.name"
                    :icon="tag.icon"
                />
            </div>

            <p class="text-muted-foreground mt-4 max-w-lg">
                {{ description }}
            </p>

            <div class="mt-4 flex gap-2">
                <UiButton
                    v-if="projectUrl"
                    as-child
                >
                    <NuxtLink
                        :to="projectUrl"
                        external
                        target="_blank"
                    >
                        <Icon name="lucide:external-link" />
                        View Project
                    </NuxtLink>
                </UiButton>
                <UiButton
                    v-if="githubUrl"
                    as-child
                    variant="outline"
                >
                    <NuxtLink
                        :to="githubUrl"
                        external
                        target="_blank"
                    >
                        <Icon name="lucide:github" />
                        View Source
                    </NuxtLink>
                </UiButton>
                <UiButton
                    v-if="otherLink"
                    as-child
                    variant="outline"
                >
                    <NuxtLink
                        :to="otherLink.url"
                        :external="otherLink.external || true"
                        :target="otherLink.external ? '_blank' : '_self'"
                    >
                        <Icon name="lucide:external-link" />
                        {{ otherLink.label }}
                    </NuxtLink>
                </UiButton>
            </div>
        </div>
    </div>
</template>
