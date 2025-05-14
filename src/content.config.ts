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
          description: z.string(),
          certList: z.array(
            z.object({
              name: z.string(),
              img: z.string(),
              link: z.string(),
              valid: z.boolean(),
              inProgress: z.boolean(),
              status: z.string(),
            }),
          ),
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
    projects: z
      .object({
        pageTitle: z.string(),
        projectList: z.array(
          z.object({
            title: z.string(),
            image: z.string(),
            description: z.string(),
            github: z.string(),
            demo: z.string(),
            stack: z.array(z.string()),
          }),
        ),
      })
      .optional(),
  }),
});
