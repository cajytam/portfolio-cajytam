import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    blog: collection({
      label: "Articles",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Titre" },
        }),
        excerpt: fields.text({
          label: "Résumé",
          multiline: true,
        }),
        publishedAt: fields.date({
          label: "Date de publication",
          defaultValue: { kind: "today" },
        }),
        category: fields.select({
          label: "Catégorie",
          options: [
            { label: "Parcours", value: "journey" },
            { label: "Autre", value: "autre" },
          ],
          defaultValue: "autre",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value ?? "Tag",
        }),
        published: fields.checkbox({
          label: "En ligne",
          defaultValue: true,
        }),
        coverImage: fields.image({
          label: "Image de couverture",
          directory: "src/assets/images/blog",
          publicPath: "/src/assets/images/blog/",
        }),
        content: fields.mdx({
          label: "Contenu",
          options: {
            image: {
              directory: "src/assets/images/blog",
              publicPath: "/src/assets/images/blog/",
            },
          },
        }),
      },
    }),

    projects: collection({
      label: "Projets",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Titre" },
        }),
        description: fields.text({
          label: "Description courte",
          multiline: true,
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Technologies",
          itemLabel: (props) => props.value ?? "Tag",
        }),
        type: fields.text({
          label: "Type de projet",
          validation: { isRequired: false },
        }),
        published: fields.checkbox({
          label: "En ligne",
          defaultValue: true,
        }),
        coverImage: fields.image({
          label: "Image du projet",
          directory: "src/assets/images/projects",
          publicPath: "/src/assets/images/projects/",
        }),
        url: fields.url({
          label: "Lien du projet",
          validation: { isRequired: false },
        }),
        githubUrl: fields.url({
          label: "Lien GitHub",
          validation: { isRequired: false },
        }),
        publishedAt: fields.date({
          label: "Date",
          defaultValue: { kind: "today" },
        }),
        content: fields.mdx({
          label: "Description complète",
          options: {
            image: {
              directory: "src/assets/images/projects",
              publicPath: "/src/assets/images/projects/",
            },
          },
        }),
      },
    }),
  },
});
