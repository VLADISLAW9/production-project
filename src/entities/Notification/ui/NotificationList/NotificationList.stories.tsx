import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';

export default {
    title: 'component/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
