import { AppShell, Header, Navbar, Stack } from "@mantine/core"
import { IconLogout, IconSwitchHorizontal } from "@tabler/icons"
import { MenuItemLink } from "components/atoms/MenuItemLink"
import { MENU_ITEMS } from "config/constant"
import React, { useState } from "react"
import AuthWrapper from "../AuthWrapper"

export type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [active, setActive] = useState(2)

  return (
    <AuthWrapper>
      <AppShell
        padding="md"
        navbar={
          <Navbar height={750} width={{ base: 80 }} p="md" fixed>
            <Navbar.Section grow mt={50}>
              <Stack justify="center" spacing={0}>
                {MENU_ITEMS.map((link, index) => (
                  <MenuItemLink
                    {...link}
                    key={link.label}
                    active={index === active}
                    onClick={() => setActive(index)}
                  />
                ))}
              </Stack>
            </Navbar.Section>
            <Navbar.Section>
              <Stack justify="center" spacing={0}>
                <MenuItemLink icon={IconSwitchHorizontal} label="Change account" />
                <MenuItemLink icon={IconLogout} label="Logout" />
              </Stack>
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {/* Header content */}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </AuthWrapper>
  )
}

export { AppLayout }
