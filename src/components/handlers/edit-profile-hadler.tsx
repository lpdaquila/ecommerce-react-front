import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { Profile } from "../../app/types/auth";
import { useRequests } from "../../app/hooks/useRequests";
import { ProfileFormData } from "../../app/schemas/profileSchema";
import { ProfileForm } from "../ui/forms/profile-form";

export function EditProfileHandler({ id, profile }: { id: number, profile: Profile }) {
    const [apiError, setApiError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const { editProfile } = useRequests();

    async function handleSubmit(data: ProfileFormData) {
        setApiError('');

        const response = await editProfile(
            id, {
            name: data.name,
            email: data.email,
            document: data.document,
            phone: data.phone,
        })

        if (response.detail) {
            setApiError(response.detail);
            return;
        }
        setSuccessMsg("Changes saved successfully");
    }

    return (
        <Flex direction="column" align="center">
            <Heading
                style={{
                    marginTop: "5%",
                    marginBottom: "10%"
                }}
            >
                Edit Profile
            </Heading>
            {apiError &&
                <Callout.Root mb="3" color="red">
                    <Callout.Icon><CrossCircledIcon /></Callout.Icon>
                    <Callout.Text>{apiError}</Callout.Text>
                </Callout.Root>
            }
            {successMsg &&
                <Callout.Root mb="3" color="green">
                    <Callout.Icon><CheckCircledIcon /></Callout.Icon>
                    <Callout.Text>{successMsg}</Callout.Text>
                </Callout.Root>
            }
            <ProfileForm
                onFormChange={() => setSuccessMsg('')}
                defaultValues={profile}
                onSubmit={handleSubmit}
            />
        </Flex>
    )
}