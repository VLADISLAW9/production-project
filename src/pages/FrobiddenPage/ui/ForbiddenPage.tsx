import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Доступ к данному разделу запрещен')}
        </Page>
    );
};

export default ForbiddenPage;
