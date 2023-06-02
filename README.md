# Introduction

Hey 👋 thanks for taking the time to look through our resources!

Welcome to our Page Builder Starter Project, a simple and effective tool powered by Next.js and Sanity.

With this setup, you can create web pages, add and customise components, and reorder them to your liking, all directly in Sanity Studio. What's more, you get to see your changes in real time with the live preview feature, all without needing to write any code.

# Getting Started

To use our starter project, you'll need to clone this GitHub repository locally and open it up in your favourite code editor.

## Install dependencies

We use npm to install our dependencies

`npm install`

## Sanity set up

You will need a Sanity account and Sanity project for the project to work.

If you don't have one already, [create a Sanity account](https://www.sanity.io/get-started/create-project?ref=navbar&originUrl=https%3A%2F%2Fwww.sanity.io%2F). A Sanity project is automatically created during the account set up.

Navigate to [https://www.sanity.io/manage](https://www.sanity.io/manage) and click on the Sanity project that you'd like to use, or create a new one.

Click the **API** tab and locate the **CORS Origin** heading. Here, add http://localhost:3000 to the CORS Origin, tick the 'Allow credentials' box, then hit Save. This step ensures that our Next.js project can access Sanity Studio. Remember to revisit this page when you deploy your project, so you can add your production URL.

Make a note of the **Project Id** on the homepage for the Sanity project.

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
npm run dev
```

Navigate to http://localhost:3000 to view the website. For now it will be a blank page.

## Using Sanity Studio

Navigate to http://localhost:3000/studio to view the Sanity Studio.

Log into Sanity using the same login method as the account you used in your set up.

Here, you can add pages and components and preview the changes before publishing.
