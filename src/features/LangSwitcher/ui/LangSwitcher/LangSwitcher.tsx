import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';


import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={toggle} variant="clear">
                            {t(short ? 'Короткий язык' : 'Язык')}
                        </Button>
    );
});
