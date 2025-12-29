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
            date-from="Aug 2018"
            date-to="Jul 2026 (expected)"
            icon-path="/imgs/logos/experience/school.svg"
            title="Abitur (A-levels)"
            subtitle="Gymnasium Grootmoor"
            location="Hamburg, Germany"
            description="Expected July 2026. Focus: Physics, Mathematics, Geography, Informatics. Placed 2nd in a Hamburg citywide school volleyball tournament. Completed three research papers (10–20 pages each) in physics and seminar, developing strong academic writing and research skills."
        />
        <AppSectionExperienceTimelineItem
            date-from="Apr 2024"
            date-to="Jul 2025"
            icon-path="/imgs/logos/experience/math_tutor.svg"
            title="Mathematics Tutor"
            subtitle="Gymnasium Grootmoor"
            location="Hamburg, Germany"
            description="Delivered regular mathematics tutoring sessions across multiple levels, focusing on core concepts and exam strategies. Co-led a 3.5-hour intensive crash course for 20+ students, presenting multiple topics, moderating interactive Q&A, and running guided practice sessions."
        />
        <AppSectionExperienceTimelineItem
            date-from="Jul 2024"
            date-to="Jul 2024"
            icon-path="/imgs/logos/experience/diakonie_hamburg.svg"
            title="Social Care Intern"
            subtitle="TAS Norderstedt (Diakonie Hamburg)"
            location="Norderstedt, Germany"
            description="Supported daily routines and a structured environment for clients facing homelessness or barriers to work. Assisted with group activities, helped organize daily schedules, and observed support meetings on job and housing issues."
        />
        <AppSectionExperienceTimelineItem
            date-from="Jun 2023"
            date-to="Jul 2023"
            icon-path="/imgs/logos/experience/mindmatters.svg"
            title="Full-Stack Development Intern"
            subtitle="Mindmatters"
            location="Hamburg, Germany"
            description="Developed a functional PWA prototype using NuxtJS, Supabase, and PostgreSQL, taking a product idea from user problem identification to implementation. Designed UI/UX flows in Figma, implemented core frontend and backend features, iteratively refined the solution in an agile environment, and presented the final prototype to the team on the last day of the internship."
        />
    </div>
</template>
