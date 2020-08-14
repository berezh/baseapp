import * as React from 'react';
import { ProfileLinks, UserInfo } from '../../components';

const ProfileMobileScreenComponent = () => {
    const mainLinks = [
        { titleKey: 'page.mobile.profileLinks.main.2fa' },
        { titleKey: 'page.mobile.profileLinks.main.changePassword' },
        { titleKey: 'page.mobile.profileLinks.main.activity' },
        { titleKey: 'page.mobile.profileLinks.main.apiKeys' },
    ];

    return (
        <div className="pg-mobile-profile-screen">
            <UserInfo />
            <ProfileLinks links={mainLinks} />
        </div>
    );
};

export const ProfileMobileScreen = React.memo(ProfileMobileScreenComponent);
