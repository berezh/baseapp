import * as React from 'react';
import { useIntl } from 'react-intl';

const ProfileLinksComponent = props => {
    const intl = useIntl();
    const links = props.links || [];

    const renderLinksItem = (link, index) => {
        return (
            <div key={index} className="pg-mobile-profile-links__item">
                <span>{intl.formatMessage({id: link.titleKey})}</span>
            </div>
        );
    };

    return (
        <div className="pg-mobile-profile-links">
            {links.length ? links.map(renderLinksItem) : null}
        </div>
    );
};

export const ProfileLinks = React.memo(ProfileLinksComponent);
