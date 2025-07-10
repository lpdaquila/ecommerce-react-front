import { Button, Flex, Strong, TextField, Text } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { addressSchema, AddressFormData } from "../../../app/schemas/addressSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type AddressFormProps = {
    defaultValues?: Partial<AddressFormData>;
    onSubmit: (data: AddressFormData) => void;
    onFormChange?: () => void;
};

export function AddressForm({
    defaultValues,
    onSubmit,
    onFormChange,
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
                <Flex justify="between" direction="column">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Name*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.address_name?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("address_name")}
                        onChange={onFormChange}
                        placeholder="Give a name to this address"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Flex gap="2">
                <Form.Field style={{ marginBottom: "5%" }} name="address">
                    <Flex justify="between" direction="column">
                        <Form.Label >
                            <Text size="2">
                                <Strong>Street*</Strong>
                            </Text>
                        </Form.Label>
                        <Form.Message
                            style={{ color: "var(--red-10)" }}
                        >
                            <Text size="1">{errors.address?.message}</Text>
                        </Form.Message>
                    </Flex>
                    <Form.Control asChild>
                        <TextField.Root
                            {...register("address")}
                            style={{ width: "180px" }}
                            onChange={onFormChange}
                            placeholder="Ex: Flawless St."
                            type="text"
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field style={{ marginBottom: "5%" }} name="number">
                    <Flex justify="between" direction="column">
                        <Form.Label >
                            <Text size="2">
                                <Strong>Number*</Strong>
                            </Text>
                        </Form.Label>
                        <Form.Message
                            style={{ color: "var(--red-10)" }}
                        >
                            <Text size="1">{errors.number?.message}</Text>
                        </Form.Message>
                    </Flex>
                    <Form.Control asChild>
                        <TextField.Root
                            style={{ maxWidth: "100px" }}
                            {...register("number")}
                            onChange={onFormChange}
                            placeholder="Ex: 234"
                            type="text"
                        />
                    </Form.Control>
                </Form.Field>
            </Flex>
            <Form.Field style={{ marginBottom: "5%" }} name="complement">
                <Flex justify="between" direction="column">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Complement</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.complement?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("complement")}
                        onChange={onFormChange}
                        placeholder="Enter your address complement (Optional)"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="district">
                <Flex justify="between" direction="column">
                    <Form.Label >
                        <Text size="2">
                            <Strong>District*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.district?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("district")}
                        onChange={onFormChange}
                        placeholder="Ex: CDB"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="city">
                <Flex justify="between" direction="column">
                    <Form.Label >
                        <Text size="2">
                            <Strong>City*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.city?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("city")}
                        onChange={onFormChange}
                        placeholder="Ex: Perth"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="state">
                <Flex justify="between" direction="column">
                    <Form.Label >
                        <Text size="2">
                            <Strong>State*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.state?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("state")}
                        onChange={onFormChange}
                        placeholder="Ex: WA"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field style={{ marginBottom: "5%" }} name="zip_code">
                <Flex justify="between" direction="column">
                    <Form.Label >
                        <Text size="2">
                            <Strong>Zip code*</Strong>
                        </Text>
                    </Form.Label>
                    <Form.Message
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1">{errors.zip_code?.message}</Text>
                    </Form.Message>
                </Flex>
                <Form.Control asChild>
                    <TextField.Root
                        {...register("zip_code")}
                        onChange={onFormChange}
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