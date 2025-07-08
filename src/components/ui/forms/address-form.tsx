import { Button, Flex, Strong, TextField, Text } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { addressSchema, AddressFormData } from "../../../app/schemas/addressSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type AddressFormProps = {
    defaultValues?: Partial<AddressFormData>;
    onSubmit: (data: AddressFormData) => void;
};

export function AddressForm({
    defaultValues,
    onSubmit,
}: AddressFormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddressFormData>({
        resolver: zodResolver(addressSchema),
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
                            <Strong>Name*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        // match={() => !!errors.address_name}
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.address_name?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("address_name")}
                        placeholder="Give a name to this address"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="address">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Address*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        // match={() => !!errors.address}
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.address?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("address")}
                        placeholder="Enter your address"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="number">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Number*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        // match={() => !!errors.number}
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.number?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("number")}
                        placeholder="Enter your address number"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="complement">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Complement</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        // match={() => !!errors.complement}
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.complement?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("complement")}
                        placeholder="Enter your address complement (Optional)"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="district">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>District*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        // match={() => !!errors.district}
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.district?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("district")}
                        placeholder="Ex: Centro"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="city">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>City*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        // match={() => !!errors.city}
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.city?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("city")}
                        placeholder="Ex: São Paulo"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="state">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>State*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        // match={() => !!errors.state}
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.state?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("state")}
                        placeholder="Ex: SP"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="zip_code">
                <Flex gap="5" justify="between">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Zip code*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        // match={() => !!errors.zip_code}
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.zip_code?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("zip_code")}
                        placeholder="Ex: XXXXX-XXX"
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