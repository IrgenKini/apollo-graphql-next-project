module.exports = {
  client: {
    includes: ["./pages/*.{js,tsx}"],
    service: {
      name: "graphql-jobs",
      localSchemaFile: "./graphql-jobs.json",
    },
  },
};
