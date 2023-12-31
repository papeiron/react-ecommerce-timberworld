import React, { ReactElement } from 'react';
import { ReactNode } from 'react';

type SidebarSectionProps = {
  children: ReactNode;
  title: string;
  id: string;
};

export default function SidebarSection({ children, title, id }: SidebarSectionProps) {
  return (
    <div className='sidebar-section'>
      <h2 className='sidebar-section__title'>{title}</h2>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // `title` prop'unu her bir çocuk bileşene ekleyin
          return React.cloneElement(child as ReactElement, { id, title });
        }
        return child;
      })}
    </div>
  );
}
