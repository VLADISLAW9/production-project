import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';

import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <Card
            className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
                className,
            ])}
            border="round"
        >
            <HStack gap="8">
                {viewTypes.map((viewType) => (
                    <Icon
                        key={viewType.view}
                        clickable
                        onClick={onClick(viewType.view)}
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                    />
                ))}
            </HStack>
        </Card>
    );
});
