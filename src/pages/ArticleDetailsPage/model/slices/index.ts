import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsPageCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
