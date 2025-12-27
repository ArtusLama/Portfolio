<template>
    <div>
        <AppSectionExperienceTimelineItem
            v-for="i in 4"
            :key="i"
            date-from="Sep 2020"
            date-to="Jun 2024"
            icon-path="/imgs/logos/tech/vue.svg"
            title="Fullstack Developer - Intern"
            subtitle="Mindmatters"
            location="Hamburg, Germany"
            description="This responsive analytics dashboard translates complex business data into a  clear and intuitive interface. By blending powerful data visualization  with a user-centric design, the application is built to empower teams to monitor performance, i"
        />
    </div>
</template>
