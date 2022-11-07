import React from "react"

import { Story } from "@storybook/react"

import { AppLayout, AppLayoutProps } from "./index"

export default {
  component: AppLayout,
  title: "Templates/AppLayout",
}

const Template: Story<AppLayoutProps> = (args) => <AppLayout {...args} />

export const Normal: Story<AppLayoutProps> = Template.bind({})

Normal.args = {}
