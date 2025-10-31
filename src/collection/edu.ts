import type { CollectionConfig } from "payload";

export const Edu: CollectionConfig = {
    slug: "edu",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "year",
            type: "text",
            required: true,
        },
    ],
};