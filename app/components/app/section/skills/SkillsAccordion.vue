<script setup lang="ts">
type categoryType = "frontend" | "backend" | "design" | "other"
const props = defineProps<{
    techStack: Array<{
        category: categoryType
        title: string
        description: string
        logoPath: string
        color: string
        link: string
    }>
}>()

const categories: Record<categoryType, string> = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    design: "Design Tools",
    other: "Other Technologies",
}
</script>

<template>
    <UiAccordion
        collapsible
        :default-value="Object.keys(categories)"
        type="multiple"
        class="w-full text-left"
    >
        <UiAccordionItem
            v-for="(categoryKey, index) in Object.keys(categories)"
            :key="index"
            :value="categoryKey"
        >
            <UiAccordionTrigger>
                {{ categories[categoryKey as categoryType] }}
            </UiAccordionTrigger>
            <UiAccordionContent>
                <div class="flex flex-wrap gap-4">
                    <AppSectionSkillsTechItem
                        v-for="techItem in props.techStack.filter(tech => tech.category === categoryKey)"
                        :key="techItem.title"
                        :title="techItem.title"
                        :description="techItem.description"
                        :color="techItem.color"
                        :link="techItem.link"
                    >
                        <NuxtImg
                            :src="techItem.logoPath"
                            alt=""
                            width="32"
                            height="32"
                            class="w-8 h-8 object-contain"
                        />
                    </AppSectionSkillsTechItem>
                </div>
            </UiAccordionContent>
        </UiAccordionItem>
    </UiAccordion>
</template>
