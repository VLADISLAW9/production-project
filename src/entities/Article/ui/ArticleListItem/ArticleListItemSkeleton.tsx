import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const mainClass = cls.ArticleListItemRedesigned;

        const Skeleton = SkeletonRedesigned;

        if (view === ArticleView.BIG) {
            const cardContent = (
                <>
                    <div className={cls.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </>
            );
            return (
                <div
                    className={classNames(mainClass, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <CardRedesigned border="round" className={cls.card}>
                                                    {cardContent}
                                                </CardRedesigned>
                </div>
            );
        }

        const cardContent = (
            <>
                <Skeleton
                                            width="100%"
                                            height={150}
                                            border="32px"
                                            className={cls.img}
                                        />
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </>
        );

        return (
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
                <CardRedesigned border="round" className={cls.card}>
                                            {cardContent}
                                        </CardRedesigned>
            </div>
        );
    },
);
