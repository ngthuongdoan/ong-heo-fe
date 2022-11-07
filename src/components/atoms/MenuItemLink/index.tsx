import { createStyles, Tooltip, UnstyledButton } from "@mantine/core"
import { TablerIcon } from "@tabler/icons"
import React from "react"

export type MenuItemLinkProps = {
  icon: TablerIcon
  label: string
  active?: boolean
  onClick?: VoidFunction
}

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
  },
}))

const MenuItemLink = ({ icon: Icon, label, active, onClick }: MenuItemLinkProps) => {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

export { MenuItemLink }
