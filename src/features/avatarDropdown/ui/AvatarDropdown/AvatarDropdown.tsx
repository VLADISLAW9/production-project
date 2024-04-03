import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Dropdown } from 'shared/ui/Popups';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('Профиль'),
                    href: `${RoutePath.profile}/${authData.id}`,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={32} src={authData?.avatar} />}
        />
    );
});
