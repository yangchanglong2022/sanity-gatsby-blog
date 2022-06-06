module.exports = {
  sanity: {
    projectId:
      process.env.GATSBY_SANITY_PROJECT_ID || "mp50spec",
    dataset: process.env.GATSBY_SANITY_DATASET || "production",
  },
};
