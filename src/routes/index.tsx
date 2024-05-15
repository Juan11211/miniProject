import { ReactNode } from "react";
import { Route } from 'react-router-dom';
import appRoutes from './routes';
import { RouteType } from './routes.types';

const generateRoute = (routes: RouteType[]): ReactNode => {
    let appRoutesArray = [...routes, ...routes.flatMap((item) => item.child).filter(Boolean)];

    return appRoutesArray.map((route: any) => (
        <Route path={route.path} element={route.element} key={route.id}>

        </Route>
    ));
};

export const routes: ReactNode = generateRoute(appRoutes);