import { useState } from "react";
import { Profile } from "../../app/types/auth";
import { ProfileInfoHandler } from "./profile-info-handler";
import { EditProfileHandler } from "./edit-profile-hadler";
import { TurnBackBtn } from "../ui/buttons/turn-back-button";
import PrimaryButton from "../ui/buttons/primary-button";
import { Flex } from "@radix-ui/themes";
import { Pencil1Icon } from "@radix-ui/react-icons";

type View = 'view' | 'edit'

export function ManageProfileHandler({ id, profile }: { id: number, profile: Profile }) {
    const [activeView, setActiveView] = useState<View>('view');

    return (
        <>
            {activeView === 'view' && profile &&
                <>
                    <ProfileInfoHandler
                        id={id}
                        profile={profile}
                    />
                    <Flex mt="2">
                        <PrimaryButton
                            // style={{ width: "100%" }}
                            onClick={() => setActiveView('edit')}
                        >
                            <Pencil1Icon />Edit Profile
                        </PrimaryButton>
                    </Flex>
                </>}
            {activeView === 'edit' && profile &&
                <>
                    <TurnBackBtn onClick={() => setActiveView('view')} />
                    <EditProfileHandler
                        id={id}
                        profile={profile}
                    />
                </>}
        </>
    )
}