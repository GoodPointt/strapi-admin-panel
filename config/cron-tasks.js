module.exports = {
  myJob: {
    task: ({ strapi }) => {
      console.log("🐇 Wake up, Neo!");
    },
    options: {
      rule: "*/1 * * * *",
    },
  },
};
