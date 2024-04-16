import {
    ImgHTMLAttributes, ReactElement, memo, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: ReactElement
  errorFallback?: ReactElement
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        width,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            src={src}
            width={width}
            className={className}
            alt={alt}
            {...otherProps}
        />
    );
});
