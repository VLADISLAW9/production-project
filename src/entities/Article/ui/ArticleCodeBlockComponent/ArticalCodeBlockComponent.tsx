import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import cls from './ArticalCodeBlockComponent.module.scss';

interface ArticalCodeBlockComponentProps {
   className?: string
   block: ArticleCodeBlock;
}

export const ArticalCodeBlockComponent = memo((props: ArticalCodeBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation('');
    return (
        <div className={classNames(cls.ArticalCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
