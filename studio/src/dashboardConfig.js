export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629d730e66630843d238c376",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-18yvg3cx",
                  apiId: "32f62eb6-d4ea-4e02-9de6-dc8b42416c10",
                },
                {
                  buildHookId: "629d730f4717ce466b561f99",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9rn4cbkt",
                  apiId: "b9ca0fed-eb9a-41a7-acae-c8e4fcd485c6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/yangchanglong2022/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9rn4cbkt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
