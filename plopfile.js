/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setGenerator("snippet", {
    prompts: [
      {
        type: "input",
        name: "component",
        message: "Enter machine name (e.g. menu, popover):",
      },
    ],
    actions(answers) {
      const actions = []
      if (!answers) return actions
      const { component } = answers

      const frameworks = ["react", "vue", "solid"]
      frameworks.forEach((framework) => {
        actions.push({
          type: "addMany",
          templateFiles: `./plop/snippet/${framework}/**`,
          destination: `./data/snippets/${framework}/${component}`,
          base: `./plop/snippet/${framework}`,
          data: { component },
        })
      })

      return actions
    },
  })
}
