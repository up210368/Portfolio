import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string(),
        github: z.string().url(),
        demo: z.string().url()
    })
})

const courses = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string(),
        url: z.string().url().optional(),
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
    })
})

export const collectionsProjects = { projects };
export const collectionsCourses = { courses };