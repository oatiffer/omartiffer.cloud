import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "@content/pages" }),
  schema: z.object({
    home: z
      .object({
        pageTitle: z.string(),
        greeting: z.string().optional(),
        title: z.string(),
        subTitle: z.string(),
        content: z.string(),
        cta: z.string(),
        link: z.string(),
        connect: z.string(),
      })
      .optional(),
    about: z
      .object({
        pageTitle: z.string(),
        intro: z.object({
          title: z.string(),
          content: z.string(),
        }),
        timeline: z.object({
          title: z.string(),
          items: z.array(
            z.object({
              date: z.string(),
              role: z.string(),
              summary: z.string(),
              stack: z.array(z.string()),
            }),
          ),
        }),
        certs: z.object({
          title: z.string(),
        }),
        cta: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            button: z.string(),
          }),
        ),
        closing: z.array(
          z.object({
            title: z.string(),
            bullets: z.array(z.string()),
          }),
        ),
      })
      .optional(),
  }),
});
