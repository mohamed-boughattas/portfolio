import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const hero = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/hero" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      description: z.string(),
      avatar: image(),
      location: z.string().optional(),
      socialLinks: z.array(
        z.object({
          url: z.string(),
          icon: z.enum([
            "GitHub",
            "LinkedIn",
            "Twitter",
            "Bluesky",
            "Instagram",
            "YouTube",
            "Email",
          ]),
          label: z.string(),
        })
      ),
    }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      location: z.string().optional(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      logo: image().optional(),
      link: z.string().url().optional(),
      skills: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      featured: z.boolean().optional().default(false),
      title: z.string(),
      description: z.string(),
      image: image(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      skills: z.array(z.string()),
      demoLink: z.string().url().optional(),
      sourceLink: z.string().url().optional(),
    }),
});

const about = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/about" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      photo: image().optional(),
      link: z.string().url().optional(),
    }),
});

const general = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/general" }),
  schema: z.object({
    extraLinksEnabled: z.boolean(),
    extraLinks: z.array(
      z.object({
        link: z.string(),
        icon: z.enum([
          "Flower2",
          "BookOpen",
          "FileText",
          "CodeXml",
          "Mail",
          "Home",
          "User",
          "Briefcase",
          "GraduationCap",
          "Link",
        ]),
        label: z.string(),
        displayOn: z.enum(["both", "dock", "fab"]).optional().default("both"),
      })
    ),
    showAboutSection: z.boolean(),
    showSkillsSection: z.boolean(),
    showProjectsSection: z.boolean(),
    showWorkSection: z.boolean(),
    showContactSection: z.boolean(),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/contact" }),
  schema: z.object({
    icon: z.enum(["MessageCircleCode", "Mail", "Phone", "LinkedIn"]),
    linkUrl: z.string().url(),
    linkText: z.string(),
  }),
});

export const collections = {
  hero,
  work,
  projects,
  about,
  general,
  contact,
};
