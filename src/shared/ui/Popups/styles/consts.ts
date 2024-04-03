import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom right': cls.menuBottomRight,
    'bottom left': cls.menuBottomLeft,
    'top right': cls.menuTopRight,
    'top left': cls.menuTopLeft,
};
