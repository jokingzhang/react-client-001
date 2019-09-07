
import React from 'react';
import Home from './modules/Home';
import Blog from './modules/Blog';
import Demo from './modules/Demo';

export interface IRouteCfgProps {
    key: string;
    title: string;
    path: string;
    exact?: boolean;
    inMenu?: boolean;
    component: React.ComponentType<any>;
}

export const routeCfg: IRouteCfgProps[] = [{
    key: 'home',
    title: 'Home',
    exact: true,
    component: Home,
    inMenu: true,
    path: '/',
},{
    key: 'blog',
    title: 'Blog',
    path: '/blog',
    exact: true,
    component: Blog,
    inMenu: true,
},{
    key: 'demo',
    title: 'Demo',
    path: '/demo',
    exact: true,
    component: Demo,
    inMenu: true,
}]