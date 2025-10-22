import { ComponentType } from 'react';
import { Loader } from './Loader';

type WithLoadingProps = {
  isLoading: boolean;
};

export function withLoading<P extends object>(
  Component: ComponentType<P>
) {
  return function WithLoadingComponent(props: P & WithLoadingProps) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Loader />;
    }

    return <Component {...(restProps as P)} />;
  };
};
