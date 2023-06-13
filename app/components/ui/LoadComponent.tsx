import React from 'react';
import ReactLoading from 'react-loading';

const LoadComponent = (): React.ReactNode => (
  <ReactLoading height={50} width={50} key='suspense-loading' color='#1F618D' type='spin' />
);

export { LoadComponent };
