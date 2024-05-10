import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSetting, getJsonSettings] = buildSelector(
    (state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
