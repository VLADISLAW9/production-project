import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
                            className={classNames(cls.NotificationItem, {}, [
                                className,
                            ])}
                        >
                            <Text title={item.title} text={item.description} />
                        </Card>
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
