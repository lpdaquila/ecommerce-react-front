import { useState } from "react";
import { Profile } from "../../app/types/auth";
import { ProfileInfoHandler } from "./profile-info-handler";
import { EditProfileHandler } from "./edit-profile-hadler";
import { TurnBackBtn } from "../ui/buttons/turn-back-button";

type View = 'view' | 'edit'

export function ManageProfileHandler({ id, profile }: { id: number, profile: Profile }) {
    const [activeView, setActiveView] = useState<View>('view');

    return (
        <>
            {activeView === 'view' && profile &&
                <ProfileInfoHandler
                    id={id}
                    profile={profile}
                    onEditProfile={() => setActiveView('edit')}
                />}
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