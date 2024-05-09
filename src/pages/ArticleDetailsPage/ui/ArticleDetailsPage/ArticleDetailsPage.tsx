import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';
import { ArticleRating } from '@/features/articleRating';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');
    if (!id) {
        return null;
    }

    const articleRatingCard = toggleFeatures({
        name: 'isCounterEnabled',
        on: () => <ArticleRating articleId={id} />,
        off: () => <Card>{t('Оценка статей скоро появится!')}</Card>,
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {articleRatingCard}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
