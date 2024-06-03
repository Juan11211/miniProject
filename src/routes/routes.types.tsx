import { ReactNode } from "react";

export type RouteType = { 
    id: string;
    //state: string;
    path?: string; 
    element?: ReactNode;
    child?: RouteType[];
    sidebarProps?: {
        displayText: string;
        icon?: ReactNode;
        //hidden?: boolean;
    };
};





