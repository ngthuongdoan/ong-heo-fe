import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  Divider,
  Stack,
  createStyles,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { GoogleButton } from "components/atoms/GoogleButton"
import AuthLayout from "components/templates/AuthLayout"

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

const Login = () => {
  const { classes } = useStyles()

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

  const onLogin = () => null

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
        <Button fullWidth mt="xl" size="md">
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
