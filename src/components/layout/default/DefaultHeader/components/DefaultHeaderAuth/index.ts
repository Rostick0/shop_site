import dynamic from 'next/dynamic';

const DefaultHeaderAuth = dynamic(() => import("./DefaultHeaderAuth"));

export {
    DefaultHeaderAuth
}