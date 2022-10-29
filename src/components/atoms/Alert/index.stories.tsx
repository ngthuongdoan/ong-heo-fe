import React from "react"

import { Story } from "@storybook/react"

import { Alert, AlertProps } from "./index"

export default {
  component: Alert,
  title: "Atoms/Alert",
}

const Template: Story<AlertProps> = (args) => <Alert {...args} />

export const Normal: Story<AlertProps> = Template.bind({})

Normal.args = {}
