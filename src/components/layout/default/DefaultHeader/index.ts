import dynamic from 'next/dynamic';

const DefaultHeader = dynamic(() => import("./DefaultHeader"));

export {
    DefaultHeader
}