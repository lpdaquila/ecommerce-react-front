import { Button, Flex, Strong, TextField, Text } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormData, profileSchema } from "../../../app/schemas/profileSchema";

type ProfileFormProps = {
    defaultValues?: Partial<ProfileFormData>;
    onSubmit: (data: ProfileFormData) => void;
    onFormChange?: () => void;
};

export function ProfileForm({
    defaultValues,
    onSubmit,
    onFormChange,
}: ProfileFormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues,
    });

    return (
        <Form.Root
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "300px" }}
        >
            <Form.Field style={{ marginBottom: "5%" }} name="address_name">
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
                        onChange={onFormChange}
                        placeholder="Enter your name"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="address_name">
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
                        onChange={onFormChange}
                        placeholder="Enter your email"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="address_name">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Document</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.document?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("document")}
                        onChange={onFormChange}
                        placeholder="XXX.XXX.XXX-XX"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="address_name">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Phone</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.phone?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("phone")}
                        onChange={onFormChange}
                        placeholder="(XX) XXXXX-XXXX"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>

            <Form.Submit>
                <Button mt="5" mb="2" style={{ width: "300px" }} asChild>
                    <Text>Submit</Text>
                </Button>
            </Form.Submit>
        </Form.Root>
    )
}