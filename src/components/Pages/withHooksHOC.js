import React from 'react';
import { useParams } from 'react-router-dom';

export const withHooksHOC = (Component: any) => {
  return (props: any) => {
    const params = useParams();

    return <Component id={params} {...props} />;
  };
};