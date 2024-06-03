/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Route } from 'react-router-dom';
import appRoutes, { unAuthAppRoutes } from './routes';
import { RouteType } from './routes.types';

const generateRoute = (routes: RouteType[]): ReactNode => {
    const appRoutesArray: RouteType[] = [];

    const hasChildRoutes = (route: RouteType) => {
        if (route.child) {
            route.child.forEach(item => {
                hasChildRoutes(item);
            });
        } else {
            appRoutesArray.push(route);
        }
    };

    routes.forEach(route => hasChildRoutes(route));

    return (
        <>
            {appRoutesArray.map((route) => (
                <Route path={route.path} element={route.element} key={route.id} />
            ))}
        </>
    );
};

export const routes: ReactNode = generateRoute(appRoutes);
export const unAuthRoutes: ReactNode = generateRoute(unAuthAppRoutes);
