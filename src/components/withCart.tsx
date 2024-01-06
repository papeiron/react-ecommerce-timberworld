import { ComponentType, ReactElement } from 'react';

export const withCart = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const NewComponent = (props: P): ReactElement => {
    return (
      <div className='with-cart'>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return NewComponent;
};
