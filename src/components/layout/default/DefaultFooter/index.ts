import dynamic from 'next/dynamic';

const DefaultFooter = dynamic(() => import("./DefaultFooter"));

export {
    DefaultFooter
}