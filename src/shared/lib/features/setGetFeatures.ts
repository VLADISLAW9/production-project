import { FeatureFlags } from '@/shared/types/featureFlags';

// Фичи не меняются в ходе сессии, их необязательно делать реактивными
let featuresFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featuresFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featuresFlags?.[flag];
}
