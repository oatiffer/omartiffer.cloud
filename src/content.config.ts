import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const pages = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "@content/pages" }),
    schema: z.discriminatedUnion("pageType", [
        z.object({
            pageType: z.literal("home"),
            pageTitle: z.string(),
            greeting: z.string().optional(),
            title: z.string(),
            subTitle: z.string(),
            content: z.string()
        }),
        z.object({
            pageType: z.literal("about"),
        })
    ])
});