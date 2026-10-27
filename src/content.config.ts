import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const ICON = z.enum(["email", "telegram", "github", "linkedin"]);

const profile = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/profile" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    experienceTitle: z.string(),
    contactsTitle: z.string(),
    contacts: z.array(
      z.object({
        icon: ICON,
        href: z.string(),
        text: z.string(),
        printText: z.string().optional(),
      }),
    ),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/skills" }),
  schema: z.object({
    title: z.string(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    start: z.string(),
    startLabel: z.string(),
    end: z.string(),
    endLabel: z.string(),
    employer: z.string(),
    employerHref: z.url().optional(),
    tagline: z.string().optional(),
    duration: z.string(),
    href: z.url(),
    hrefLabel: z.string(),
    note: z.string().optional(),
    lang: z.enum(["en", "ru"]).optional(),
    bodyLang: z.enum(["en", "ru"]).optional(),
    order: z.number(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
  }),
});

const languages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/languages" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  profile,
  about,
  skills,
  experience,
  education,
  languages,
};
