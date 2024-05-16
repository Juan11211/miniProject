import {Navigate} from 'react-router-dom';
import { RouteType } from './routes.types';
import { Suspense, lazy } from 'react';
import { urlMapping } from '../data/preLoad';


const AllNotes = lazy(() => import('../components/AllNotes.Component'));

const appRoutes: RouteType[] = [
    {
        id: 'n1',
        path: urlMapping.allNotes,
        element: (
            <Suspense fallback={'Loading content...'}>
                <AllNotes />
            </Suspense>

        )
    }
]

export default appRoutes;