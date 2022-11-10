import React from "react"

import { Story } from "@storybook/react"

import { MenuItemLink, MenuItemLinkProps } from "./index"

export default {
  component: MenuItemLink,
  title: "Atoms/MenuItemLink",
}

const Template: Story<MenuItemLinkProps> = (args) => <MenuItemLink {...args} />

export const Normal: Story<MenuItemLinkProps> = Template.bind({})

Normal.args = {}
