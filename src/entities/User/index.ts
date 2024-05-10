export { initAuthData } from './model/services/initAuthData';

export { saveJsonSetting } from './model/services/saveJsonSettings';

export { useJsonSetting } from './model/selectors/jsonSettings';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';

export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/consts/userConsts';
