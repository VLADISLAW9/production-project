import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';
import { useTranslation } from 'react-i18next';

const ForbiddenPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Доступ к данному разделу запрещен')}
        </Page>
    );
};

export default ForbiddenPage;
