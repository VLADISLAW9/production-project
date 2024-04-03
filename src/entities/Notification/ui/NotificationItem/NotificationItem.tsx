import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text
                size={TextSize.S}
                title={item.title}
                text={item.description}
            />
        </Card>
    );

    if (item.href) {
        return (
            <AppLink
                target="_blank"
                to={item.href}
                className={cls.link}
            >
                {content}
            </AppLink>
        );
    }

    return content;
});
