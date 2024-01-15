import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Hello',
            user: {
                id: '1',
                username: 'Alex',
                avatar: 'https://img.championat.com/s/735x490/news/big/e/t/poyavilis-pervye-kadry-seriala-avatar-legenda-ob-aange-premera-v-2024-godu_1687041545980927004.jpg',
            },
        },
        {
            id: '2',
            text: 'Very cool!!!',
            user: {
                id: '2',
                username: 'Bob',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLOfcZGKYf2ANMtwuJbSiJN6kHOruEff0eA&usqp=CAU',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};

export const NotFoundComment = Template.bind({});
NotFoundComment.args = {
    comments: [],
};
