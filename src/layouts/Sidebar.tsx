import SidebarSection from '../components/SidebarSection';
import SidebarItem from '../components/SidebarItem';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <SidebarSection id='text' title='Category'>
        <SidebarItem text='Living room' />
        <SidebarItem text='Bedroom' />
        <SidebarItem text='Kitchen' />
        <SidebarItem text='Office Furniture' />
        <SidebarItem text='Lighting' />
        <SidebarItem text='Bathroom' />
      </SidebarSection>

      <SidebarSection id='price' title='Shop by price'>
        <SidebarItem text='$0 - $100' />
        <SidebarItem text='$100 - $200' />
        <SidebarItem text='$200 - $500' />
        <SidebarItem text='Over $500' />
      </SidebarSection>

      <SidebarSection id='brand' title='Brands'>
        <SidebarItem text='IKEA' />
        <SidebarItem text='Ashley Furniture' />
        <SidebarItem text='La-Z-Boy' />
        <SidebarItem text='Crate & Barrel' />
        <SidebarItem text='Contempo Designs' />

        <SidebarItem text='Modern Home' />
        <SidebarItem text='Italian Elegance' />
        <SidebarItem text='Artisan Woodcraft' />
        <SidebarItem text='Luxury Comfort' />
      </SidebarSection>
    </aside>
  );
}
