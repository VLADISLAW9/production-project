import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <h1>{t('ArticlesPage')}</h1>
        </div>
    );
};

export default memo(ArticlesPage);
