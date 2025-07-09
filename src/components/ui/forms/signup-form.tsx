import { Button, Flex, Strong, TextField, Text } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormData, signupSchema } from "../../../app/schemas/signupSchema";

type SignUpFormProps = {
    onSubmit: (data: SignUpFormData) => void;
};

export function SignUpForm({
    onSubmit,
}: SignUpFormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signupSchema),
    });

    return (
        <Form.Root
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "300px" }}
        >
            <Form.Field style={{ marginBottom: "5%" }} name="name">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Name</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.name?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("name")}
                        placeholder="Enter your name"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="email">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Email</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.email?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("email")}
                        placeholder="Enter your email"
                        type="email"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="password">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Password</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.password?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("password")}
                        placeholder="Give a password"
                        type="password"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="confirm">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Confirm Password</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.confirm?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("confirm")}
                        placeholder="Confirm password"
                        type="password"
                    />
                </Form.Control>
            </Form.Field>

            <Form.Submit>
                <Button mt="5" mb="2" style={{ width: "300px" }} asChild>
                    <Text>Create Account</Text>
                </Button>
            </Form.Submit>
        </Form.Root>
    )
}