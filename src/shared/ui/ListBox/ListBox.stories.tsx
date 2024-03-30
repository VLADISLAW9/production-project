import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const people = [
    { value: '1', content: 'Person 1' },
    { value: '2', content: 'Person 2' },
    { value: '3', content: 'Person 3' },
    { value: '4', content: 'Person 4' },
    { value: '5', content: 'Person 5' },
];

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: people,
    defaultValue: 'Выберите пользователя',
};

export const Readonly = Template.bind({});
Readonly.args = {
    items: people,
    defaultValue: 'Выберите пользователя',
    readonly: true,
};
