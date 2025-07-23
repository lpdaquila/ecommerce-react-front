import { Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { Profile } from "../../app/types/auth";
import { useRequests } from "../../app/hooks/useRequests";
import { ProfileFormData } from "../../app/schemas/profileSchema";
import { ProfileForm } from "../ui/forms/profile-form";
import { SuccessCallout } from "../ui/callouts/success-callout";
import { ErrorCallout } from "../ui/callouts/error-callout";

export function EditProfileHandler({ id, profile }: { id: number, profile: Profile }) {
    const [apiError, setApiError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const { editProfile } = useRequests();

    const handleSubmit = async (data: ProfileFormData) => {
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
        <Flex direction="column" align="center" mt="4" gap="2">
            <Heading>
                Edit Profile
            </Heading>
            {apiError && <ErrorCallout msg={apiError} />}
            {successMsg && <SuccessCallout msg={successMsg} />}
            <ProfileForm
                onFormChange={() => setSuccessMsg('')}
                defaultValues={profile}
                onSubmit={handleSubmit}
            />
        </Flex>
    )
}