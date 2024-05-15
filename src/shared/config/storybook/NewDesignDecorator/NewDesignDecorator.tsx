import { Story } from '@storybook/react';
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    );
};
