/* eslint-disable react-refresh/only-export-components */

import { RouteType } from './routes.types';
import { Suspense, lazy } from 'react';
import { urlMapping } from '../data/preLoad';


const AllNotes = lazy(() => import('../components/AlloNotes.Component'));
const MainPage = lazy(() => import('../components/MainPage.Component'));

const appRoutes: RouteType[] = [
    {
        id: 'n1',
        path: urlMapping['/'],
        element: (
            <Suspense fallback={'Loading content...'}>
                <MainPage />
            </Suspense>

        ),
        sidebarProps: {
            displayText: "",
            icon: ""
        },
       
    },
    {
        id: 'n2',
        path: urlMapping.allNotes,
        element: (
            <Suspense fallback={'Loading content...'}>
                <AllNotes />
            </Suspense>

        )
    }
]

export const unAuthAppRoutes: RouteType[] = [ 
    
]

export default appRoutes;