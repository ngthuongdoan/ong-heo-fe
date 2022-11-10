import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  createStyles,
  Divider,
  Group,
  Stack,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { showNotification, updateNotification } from "@mantine/notifications"
import { IconX } from "@tabler/icons"
import { GoogleButton } from "components/atoms/GoogleButton"
import AuthLayout from "components/templates/AuthLayout"
import { useProvideAuth } from "hooks/useAuth"
import { useRouter } from "next/router"
import { useState } from "react"

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: "'Press Start 2P', cursive",
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

type UserFormType = {
  email: string
  password: string
}

const Login = () => {
  const { classes } = useStyles()
  const { signIn } = useProvideAuth()
  const [isSending, setIsSending] = useState(false)

  const router = useRouter()
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) => (val.length <= 6 ? "Password should include at least 6 characters" : null),
    },
  })

  const onLogin = async (values: UserFormType) => {
    try {
      setIsSending(true)
      showNotification({
        id: "login",
        disallowClose: true,
        message: "Wait for it",
        loading: true,
      })
      await signIn(values.email, values.password)

      updateNotification({
        id: "login",
        title: "Tada!",
        message: "Welcome to the gangs",
        autoClose: 5000,
        color: "green",
        onClose() {
          router.replace("/")
        },
      })
    } catch (error: any) {
      updateNotification({
        id: "login",
        title: "Something went wrong",
        message: error?.message,
        autoClose: 5000,
        color: "red",
        icon: <IconX />,
      })
    }
    setIsSending(false)
  }

  return (
    <AuthLayout>
      <Title
        className={classes.title}
        order={2}
        align="center"
        mb="xl"
        variant="text"
        transform="uppercase"
      >
        Welcome back ╰(*°▽°*)╯
      </Title>

      <form onSubmit={form.onSubmit(onLogin)}>
        <Stack>
          <TextInput
            required
            label="Email"
            placeholder="hello@gmail.com"
            size="md"
            value={form.values.email}
            onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
            error={form.errors.email && "Invalid email"}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            size="md"
            value={form.values.password}
            onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
            error={form.errors.password && "Password should include at least 6 characters"}
          />
        </Stack>

        <Group position="apart">
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Text align="center" mt="md">
            Don&apos;t have an account?{" "}
            <Anchor<"a"> href="/auth/sign-up" weight={700}>
              Register
            </Anchor>
          </Text>
        </Group>
        <Button fullWidth mt="xl" size="md" type="submit" loading={isSending}>
          Login
        </Button>
      </form>
      <Divider label="Or continue with" labelPosition="center" my="lg" />
      <Group grow>
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>
    </AuthLayout>
  )
}

export default Login
