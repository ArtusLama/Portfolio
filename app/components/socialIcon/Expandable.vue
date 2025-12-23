<script setup lang="ts">
const props = defineProps<{
    icon: string
    link: string
    label: string
    expandText: string
    expandedWidth: number
}>()

const emit = defineEmits<{
    (e: "onMobileClick"): void
}>()

const buttonRef = ref<HTMLElement>()
const isHovered = useElementHover(buttonRef)
const { focused } = useFocusWithin(buttonRef)
const isDesktop = useMediaQuery("(min-width: 768px)") // md breakpoint

const buttonWidth = computed(() =>
    (isHovered.value || focused.value) && isDesktop.value ? `${props.expandedWidth}px` : "2.5rem", // 2.5rem = size-10 of icon-lg
)

function onClick() {
    if (!isDesktop.value) {
        emit("onMobileClick")
    }
}
</script>

<template>
    <UiButton
        ref="buttonRef"
        variant="ghost"
        size="icon-lg"
        class="group overflow-hidden border border-transparent hover:border-border px-2 h-10 justify-start transition-all duration-500"
        :style="{ width: buttonWidth }"
        as-child
    >
        <div>
            <NuxtLink
                :to="link"
                :aria-label="label"
                :title="label"
                external
                target="_blank"
                class="flex items-center justify-center"
                @click="onClick"
            >
                <Icon
                    class="mt-1 group-hover:mt-0 group-hover:scale-105 transition-all ease-spring"
                    :name="icon"
                    :size="22"
                />
            </NuxtLink>
            <div class="min-w-0 flex items-center pl-2">
                <p
                    class="font-mono text-xs text-muted-foreground text-nowrap select-text"
                >
                    {{ expandText }}
                </p>
            </div>
        </div>
    </UiButton>
</template>
