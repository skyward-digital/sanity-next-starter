const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        {
          type: "hero",
          title: "Hero",
        },
        {
          type: "callToAction",
        },
      ],
    },
  ],
};

export default page;
