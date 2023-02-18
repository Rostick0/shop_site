import dynamic from 'next/dynamic';

const DefaultHeaderNavigation = dynamic(() => import("./DefaultHeaderNavigation"));

export {
    DefaultHeaderNavigation
}