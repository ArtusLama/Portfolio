export default defineEventHandler(async (event) => {
    const path = getRouterParam(event, "path") || ""

    const siteUrl = getSiteConfig(event).url
    const allowedEndpointPaths = ["insights", "speed-insights"]

    for (const endpointPath of allowedEndpointPaths) {
        if (path === endpointPath || path.startsWith(`${endpointPath}/`)) {
            const targetPath = `/_vercel/${path}`

            return proxyRequest(event, `${siteUrl}${targetPath}`)
        }
    }

    return {
        statusCode: 404,
        statusMessage: "Not Found",
        body: "Endpoint not found",
    }
})
