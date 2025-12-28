<script setup lang="ts">
const progressBar = useTemplateRef<HTMLElement>("progressBar")
const timelineContainer = useTemplateRef<HTMLElement>("timelineContainer")

onMounted(() => {
    const gsap = useGSAP()
    if (!progressBar.value || !timelineContainer.value) return

    gsap.to(progressBar.value, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: timelineContainer.value,
            start: "top center",
            end: "bottom center",
            scrub: 1,
        },
    })

    // Dot Animation is in the TimelineItem Component
})
</script>

<template>
    <div
        ref="timelineContainer"
        class="relative"
    >
        <div class="absolute left-0 md:left-36 w-1 top-0 bottom-0 pointer-events-none">
            <div class="bg-muted absolute w-full top-0 h-full" />
            <div
                ref="progressBar"
                class="bg-white absolute w-full top-0 h-0"
            />
        </div>

        <AppSectionExperienceTimelineItem
            date-from="Jun 2013"
            date-to="Present (est. Jul 2026)"
            icon-path="/imgs/logos/experience/school.svg"
            title="Abitur (A-levels)"
            subtitle="Gymnasium Grootmoor"
            location="Hamburg, Germany"
            description="General qualification for university entrance with a focus on  mathematics, physics, and computer science."
        />
        <AppSectionExperienceTimelineItem
            date-from="Apr 2024"
            date-to="Jul 2025"
            icon-path="/imgs/logos/experience/math_tutor.svg"
            title="Math Tutor"
            subtitle="Gymnasium Grootmoor"
            location="Hamburg, Germany"
            description="Provided weekly tutoring sessions in Mathematics. Co-led a 3.5-hour Mathematics crash course for approximately 20 participants."
        />
        <AppSectionExperienceTimelineItem
            date-from="Jul 2024"
            date-to="Jul 2024"
            icon-path="/imgs/logos/experience/diakonie_hamburg.svg"
            title="Student Internship - Social Care"
            subtitle="TAS Norderstedt - Diakonie Hamburg"
            location="Norderstedt, Germany"
            description="Supported care and daily structure planning for individuals with special needs."
        />
        <AppSectionExperienceTimelineItem
            date-from="Jun 2023"
            date-to="Jul 2023"
            icon-path="/imgs/logos/experience/mindmatters.svg"
            title="Student Internship - Fullstack Development"
            subtitle="Mindmatters"
            location="Hamburg, Germany"
            description="Developed a product from concept to prototype using agile methodology. Identified user problems, designed UI/UX in Figma, and built a web app using NuxtJS, PWA, and Supabase/PostgreSQL. Iteratively refined based on feedback."
        />
    </div>
</template>
