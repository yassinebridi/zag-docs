import nodePlop, { ActionType } from "node-plop"
import _ from "lodash"

const basePlop = nodePlop("plop/index.hbs")

interface Answers {
  component: string
}

async function handler() {
  const plop = await basePlop
  plop.setGenerator("snippet", {
    prompts: [
      {
        type: "input",
        name: "component",
        message: "Enter machine name (e.g. menu, popover):",
      },
    ],
    actions(answers: any) {
      const actions: ActionType[] = []
      if (!answers) return actions
      const { component } = answers as Answers

      const frameworks = ["react", "vue", "solid"]
      frameworks.forEach((framework) => {
        actions.push({
          type: "addMany",
          templateFiles: `snippet/${framework}`,
          destination: `../data/snippets/${framework}/${component}`,
          data: { component },
        })
      })

      return actions
    },
  })

  const { runPrompts, runActions } = plop.getGenerator("machine")

  const answers = await runPrompts()
  await runActions(answers)
}

async function main() {
  await handler()
}

main()
