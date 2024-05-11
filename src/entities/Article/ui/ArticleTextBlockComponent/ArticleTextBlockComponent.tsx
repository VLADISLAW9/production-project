import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(
                            cls.ArticleTextBlockComponent,
                            {},
                            [className],
                        )}
                    >
                        {block.title && (
                            <Text title={block.title} className={cls.title} />
                        )}
                        {block.paragraphs.map((paragraph, index) => (
                            <Text
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        ))}
                    </div>
                }
                off={
                    <div
                        className={classNames(
                            cls.ArticleTextBlockComponent,
                            {},
                            [className],
                        )}
                    >
                        {block.title && (
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        )}
                        {block.paragraphs.map((paragraph, index) => (
                            <TextDeprecated
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        ))}
                    </div>
                }
            />
        );
    },
);
