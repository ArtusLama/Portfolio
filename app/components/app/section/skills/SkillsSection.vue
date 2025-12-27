<script setup lang="ts">
const techStack: Array<{
    category: "frontend" | "backend" | "design" | "other"
    title: string
    description: string
    logoPath: string
    color: string
    link: string
}> = [
    {
        category: "frontend",
        title: "Nuxt.js",
        description: "Full-Stack Vue Applications",
        logoPath: "/imgs/logos/tech/nuxt.svg",
        color: "#00c58e26",
        link: "https://nuxt.com/",
    },
    {
        category: "frontend",
        title: "Vue.js",
        description: "Building Interactive User Interfaces",
        logoPath: "/imgs/logos/tech/vue.svg",
        color: "#41b88326",
        link: "https://vuejs.org/",
    },
    {
        category: "frontend",
        title: "TypeScript",
        description: "Type-Safe JavaScript Development",
        logoPath: "/imgs/logos/tech/typescript.svg",
        color: "#3178c626",
        link: "https://www.typescriptlang.org/",
    },
    {
        category: "frontend",
        title: "TailwindCSS",
        description: "UI Styling and Responsive Design",
        logoPath: "/imgs/logos/tech/tailwindcss.svg",
        color: "#38bdf826",
        link: "https://tailwindcss.com/",
    },
    {
        category: "backend",
        title: "Java",
        description: "Backend Development and API Integration",
        logoPath: "/imgs/logos/tech/java.svg",
        color: "#f8981c26",
        link: "https://www.java.com/",
    },
    {
        category: "backend",
        title: "Python",
        description: "Scripting, Backend Services and more",
        logoPath: "/imgs/logos/tech/python.svg",
        color: "#3776ab26",
        link: "https://www.python.org/",
    },
    {
        category: "design",
        title: "Figma",
        description: "UI/UX Design and general Graphic Design",
        logoPath: "/imgs/logos/tech/figma.svg",
        color: "#f24e1e26",
        link: "https://www.figma.com/",
    },
    {
        category: "design",
        title: "Blender",
        description: "3D Modeling, Animation and Rendering",
        logoPath: "/imgs/logos/tech/blender.svg",
        color: "#f5792a26",
        link: "https://www.blender.org/",
    },
    {
        category: "other",
        title: "Docker",
        description: "Containerization and Deployment",
        logoPath: "/imgs/logos/tech/docker.svg",
        color: "#2496ed26",
        link: "https://www.docker.com/",
    },
    {
        category: "other",
        title: "Git",
        description: "Version Control System",
        logoPath: "/imgs/logos/tech/git.svg",
        color: "#f34f2926",
        link: "https://git-scm.com/",
    },
    {
        category: "other",
        title: "GitHub",
        description: "Code Hosting and Collaboration",
        logoPath: "/imgs/logos/tech/github.svg",
        color: "#b5b1b126",
        link: "https://github.com/",
    },
]
</script>

<template>
    <AppSection
        id="skills"
        label="Technical Skills"
        title="Skills and Technologies"
    >
        <p class="max-w-xl text-muted-foreground mb-6">
            <Icon
                name="lucide:badge-info"
                :size="18"
                class="mr-1 -mb-0.5"
            />
            This is a <b>brief overview</b> of the technologies and tools I have much experience with. There are of course <b>many more technologies</b> I have worked with, but these are the <b>main ones</b> I use on a regular basis.
        </p>
        <AppSectionSkillsAccordion :tech-stack="techStack" />
    </AppSection>
</template>
