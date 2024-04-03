import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

const people = [
    { value: '1', content: 'Person 1' },
    { value: '2', content: 'Person 2' },
    { value: '3', content: 'Person 3' },
];

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 200 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

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

export const topLeft = Template.bind({});
topLeft.args = {
    items: people,
    direction: 'top left',
    defaultValue: 'Выберите пользователя',
};

export const topRight = Template.bind({});
topRight.args = {
    items: people,
    direction: 'top right',
    defaultValue: 'Выберите пользователя',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    items: people,
    direction: 'bottom left',
    defaultValue: 'Выберите пользователя',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    items: people,
    direction: 'bottom right',
    defaultValue: 'Выберите пользователя',
};
