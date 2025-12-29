<template>
    <AppSection
        id="experience"
        label="Education & Experience"
        title="Academic and Practical Experience"
    >
        <div class="text-muted-foreground space-y-2 max-w-md">
            <p>You can download my resume here for additional details about my background and experience:</p>
            <UiButton as-child>
                <NuxtLink
                    to="/files/Resume_ArthurPaucke.pdf"
                    target="_blank"
                    external
                >
                    <Icon name="lucide:download" />
                    Download Resume
                </NuxtLink>
            </UiButton>
        </div>
        <AppSectionExperienceTimeline class="text-left mt-12" />
    </AppSection>
</template>
