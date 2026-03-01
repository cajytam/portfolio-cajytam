import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        posts: collection({
            label: 'Articles de blog',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({
                    name: { label: "Titre" },
                    slug: {
                        label: "Slug URL",
                        description: "Identifiant dans l'URL (ex: micro-frontends-2024)",
                    },
                }),

                publishedAt: fields.date({
                    label: "Date de publication",
                    validation: { isRequired: true },
                }),

                excerpt: fields.text({
                    label: "Résumé",
                    multiline: true,
                    validation: { isRequired: true, length: { max: 200 } },
                }),

                category: fields.select({
                    label: "Catégorie",
                    options: [
                        { label: "Symfony", value: "symfony" },
                        { label: "Parcours", value: "journey" },
                    ],
                    defaultValue: "symfony",
                }),

                tags: fields.array(fields.text({ label: "Tag" }), {
                    label: "Tags",
                    itemLabel: (props) => props.value,
                }),

                coverImage: fields.image({
                    label: "Image de couverture",
                    directory: "src/assets/images/covers",
                    publicPath: "~/assets/images/covers/",
                }),

                featured: fields.checkbox({
                    label: "Article mis en avant",
                    defaultValue: false,
                }),

                content: fields.mdx({
                    label: "Contenu",
                    options: {
                        image: {
                            directory: "src/assets/images/blog",
                            publicPath: "~/assets/images/blog/",
                        },
                    },
                }),
            },
        }),
    },
});