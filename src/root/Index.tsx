import * as React from 'react';
import { Outlet } from 'react-router-dom';

export interface IRootProps {
}

export function Root(props: IRootProps) {
    return (
        <div>
            nav
            <Outlet />
            footer
        </div>
    );
}
