import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';


import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
                            <Text title={feedbackTitle} />
                            <Input
                                data-testid="RatingCard.Input"
                                value={feedback}
                                onChange={setFeedback}
                                placeholder={t('Ваш отзыв')}
                            />
                        </>
    );

    const content = (
        <>
            <VStack align="center" gap="8" max>
                <Text
                                            title={starsCount ? t('Спасибо за оценку!') : title}
                                        />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                                                            <Button
                                                                data-testid="RatingCard.Close"
                                                                onClick={cancelHandle}
                                                            >
                                                                {t('Закрыть')}
                                                            </Button>
                                                            <Button
                                                                data-testid="RatingCard.Send"
                                                                onClick={acceptHandle}
                                                            >
                                                                {t('Отправить')}
                                                            </Button>
                                                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                                                            fullWidth
                                                            onClick={acceptHandle}
                                                            size="l"
                                                        >
                                                            {t('Отправить')}
                                                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <Card fullWidth border="round" padding="24">
                            {content}
                        </Card>
    );
});
