<template>
    <header class="fixed top-0 left-0 right-0 p-4 z-40 flex justify-center">
        <nav
            class="p-4 rounded-xl group"
            aria-label="Main navigation"
        >
            <div class="bg-accent/50 p-2 rounded-xl shadow-lg border flex gap-2 items-center justify-center">
                <NavigationDesktopLink
                    to="/"
                    icon="lucide:house"
                >
                    Home
                </NavigationDesktopLink>
                <NavigationDesktopLink
                    to="/"
                    icon="lucide:user"
                >
                    About
                </NavigationDesktopLink>
                <NavigationDesktopLink
                    to="/"
                    icon="lucide:graduation-cap"
                >
                    Experience
                </NavigationDesktopLink>
                <NavigationDesktopLink
                    to="/"
                    icon="lucide:sparkles"
                >
                    Skills
                </NavigationDesktopLink>
                <NavigationDesktopLink
                    to="/"
                    icon="lucide:layout-grid"
                >
                    Projects
                </NavigationDesktopLink>
                <NavigationDesktopLink
                    to="/"
                    icon="lucide:phone"
                >
                    Contact
                </NavigationDesktopLink>
            </div>
        </nav>
    </header>
</template>
