import {
  Anchor,
  Button,
  Checkbox,
  createStyles,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { GoogleButton } from "components/atoms/GoogleButton"
import AuthLayout from "components/templates/AuthLayout"
import { DatePicker } from "@mantine/dates"

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

const SignUp = () => {
  const { classes } = useStyles()

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      birthday: new Date(),
      password: "",
      terms: true,
    },

    validate: {
      name: (val) => (/d+$/.test(val) ? null : "Invalid name"),
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
            label="Name"
            placeholder="What's your name?"
            size="md"
            value={form.values.name}
            onChange={(event) => form.setFieldValue("name", event.currentTarget.value)}
            error={form.errors.name && "Invalid name"}
          />
          <DatePicker placeholder="Pick date" label="Birthday" size="md" withAsterisk />
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
          <PasswordInput
            required
            label="Confirm password"
            placeholder="Confirm password"
            size="md"
            value={form.values.password}
            onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
            error={form.errors.password && "Password should include at least 6 characters"}
          />
          <Checkbox
            required
            label="By checking this box, you are agreeing to our terms of service."
            size="sm"
            checked={form.values.terms}
            onChange={(event) => form.setFieldValue("terms", event.currentTarget.checked)}
            error={form.errors.terms && "Must check this to continue"}
          />
        </Stack>

        <Group position="apart">
          <Text align="center" mt="md" size="sm">
            Already have an account? <Anchor<"a"> href="/auth/log-in">Login</Anchor>
          </Text>
        </Group>
        <Button fullWidth mt="xl" size="md">
          Create An Account
        </Button>
        <Text align="center" mt="md" size="sm">
          <Anchor<"a"> href="/auth/forgot-password" align="center">
            Forgot your password?
          </Anchor>
        </Text>
      </form>
      <Divider label="Or continue with" labelPosition="center" my="lg" />
      <Group grow>
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>
    </AuthLayout>
  )
}

export { SignUp }
