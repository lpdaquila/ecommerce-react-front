import { Button, Flex, Strong, TextField, Text } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormData, authSchema } from "../../../app/schemas/authSchema";

type AuthFormProps = {
    // defaultValues?: Partial<AuthFormData>;
    onSubmit: (data: AuthFormData) => void;
};

export function AuthForm({
    onSubmit,
}: AuthFormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthFormData>({
        resolver: zodResolver(authSchema),
    });

    return (
        <Form.Root
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "300px" }}
        >
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
                        type="text"
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
                        placeholder="Enter your password"
                        type="password"
                    />
                </Form.Control>
            </Form.Field>

            <Form.Submit>
                <Button mt="5" mb="2" style={{ width: "300px" }} asChild>
                    <Text>Login</Text>
                </Button>
            </Form.Submit>
        </Form.Root>
    )
}