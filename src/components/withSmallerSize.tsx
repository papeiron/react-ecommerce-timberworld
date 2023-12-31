import { ComponentType, ReactElement } from 'react';

export const withSmallerSize = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const NewComponent = (props: P): ReactElement => {
    return (
      <div className='with-smaller-size'>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return NewComponent;
};
