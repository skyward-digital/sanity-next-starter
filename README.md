# Introduction

Hey 👋 thanks for taking the time to look through our resources!

Welcome to our Page Builder Starter Project, a simple and effective tool powered by Next.js and Sanity.

With this setup, you can create web pages, add and customise components, and reorder them to your liking, all directly in Sanity Studio. What's more, you get to see your changes in real time with the live preview feature, all without needing to write any code.

**Note:** This application uses the `/pages` directory in Next.js.

# Getting Started

To use our starter project, you'll need to clone this GitHub repository locally and open it up in your favourite code editor.

## Install dependencies

We use pnpm to install our dependencies

`pnpm install`

## Sanity set up

To run this project, you'll need a Sanity account and project. If you haven't got an account, [create one here](<(https://www.sanity.io/get-started/)>) - the process will also automatically generate your first Sanity project.

Go to [Sanity's management page](https://www.sanity.io/manage), select your project, and navigate to the **API** tab. Under **CORS Origin**, add http://localhost:3000, check "Allow Credentials", and click Save. This permits our Next.js project to access Sanity Studio. Don't forget to come back here later and add your production URL when you deploy your project.

Lastly, note down the **Project Id** from the Sanity project homepage.

## Environment settings

We use environment variables to set things up.

Create `.env.local` file at the root of the project and paste the following into it, replacing `your-project-id` with the Project Id of your Sanity project and `todays-date` with today's date in the format YYYY-MM-DD:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=todays-date
```

**Note:** You'll also need to use these for any deployment, including on GitHub.

## Running your code

Once you're set up, you can run your code through the development server

```
pnpm run dev
```

Navigate to http://localhost:3000 to view the website. For now it will be a blank page.

## Using Sanity Studio

Navigate to http://localhost:3000/studio to view Sanity Studio.

Log into Sanity using the same login method as the account you used in your set up.

Here, you can add pages and components and preview the changes before publishing.

# How the project works

Sanity is a content platform used to build, manage, and distribute structured content. It stores your content centrally in the "Content Lake", ready to be utilised in various contexts. To interact with this Content Lake, Sanity provides Sanity Studio, a customisable interface for creating, managing and publishing content.

The structure of your content is determined by schemas, defining what types of content can be created and how they interrelate. In this project, we define schemas for each page component and they live in the `/sanity/schemas` folder.

We use Sanity's powerful GROQ (Graph-Relational Object Queries) language to fetch the structured data on our pages. This fetched data is then rendered by corresponding components residing in our project's `/components` directory.

One of the key features of Sanity implemented into this project is Live Preview, which allows you to visualise changes to your content in real-time in Sanity Studio. As the data changes in the Content Lake, our components dynamically update to reflect these changes.

## Important files and folders

| File(s)                          | Description                                                                                    |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| `sanity.config.ts`               | Config file for Sanity Studio                                                                  |
| `/pages/index.tsx`               | Landing page for `/` (homepage)                                                                |
| `/pages/studio/[[...index]].tsx` | Where Sanity Studio is mounted                                                                 |
| `/pages/api/preview.ts`          | Serverless route for triggering Preview mode (handles page slugs)                              |
| `/pages/api/exit-preview.ts`     | Serverless route for exiting Preview mode                                                      |
| `/sanity/env.ts`                 | Configuration for the Sanity project and dataset                                               |
| `/sanity/schemas`                | Where Sanity Studio gets its content types from                                                |
| `/sanity/structure.ts`           | Defines the setup for Sanity Studio's document editor view, adding an iFrame preview for pages |
| `/sanity/lib/sanity.client.ts`   | Sanity client configured based on `env.ts`                                                     |
| `/sanity/lib/sanity.preview.ts`  | Configures the Preview functionality                                                           |

## Adding new components

If you want to create more components, add additional files to the `/sanity/schemas` folder.

After creating a new schema, ensure to import it and include it in the `/sanity/schemas/index.ts` file. This step is necessary for the schema to be recognised and used within Sanity Studio.

Your new component must also be added to the `pageBuilder` array in the `/sanity/schema/page-schema.ts` file, like so:

```
const page = {
  //...existing code
  name: "pageBuilder",
  type: "array",
  title: "Page builder",
  of: [
    //...existing components
    {
      type: "yourNewComponent",
    },
  ],
};
```

Replace `yourNewComponent` with the actual type of your new schema. This allows the new component to be used in the page building process within Sanity Studio.

## Live Preview

This project is configured with Live Preview where you can see your changes in real-time within Sanity Studio. This is part of `next-sanity` and you can read more about how it works in [their documentation](https://github.com/sanity-io/next-sanity#next-sanitypreview-live-real-time-preview).

We're using the Built-in Sanity authentication. Please follow the instructions in [their docs](https://github.com/sanity-io/next-sanity#next-sanitypreview-live-real-time-preview) if you'd like to set up custom token authentication.
