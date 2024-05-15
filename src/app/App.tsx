import React, { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserInited, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useAppToolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

const App = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <div
                                    id="app"
                                    className={classNames('app_redesigned', {}, [theme])}
                                >
                                    <AppLoaderLayout />
                                </div>
        );
    }

    return (
        <div
                            id="app"
                            className={classNames('app_redesigned', {}, [theme])}
                        >
                            <Suspense fallback="">
                                <MainLayout
                                    header={<Navbar />}
                                    content={<AppRouter />}
                                    sidebar={<Sidebar />}
                                    toolbar={toolbar}
                                />
                            </Suspense>
                        </div>
    );
});

export default withTheme(App);
