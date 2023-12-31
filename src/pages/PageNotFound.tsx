import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className='page-not-found'>
      <section className='flex mt-36'>
        <div className='container flex flex-col items-center '>
          <div className='flex flex-col gap-6 max-w-md text-center'>
            <h2 className='font-extrabold text-[10rem] text-black'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='text-2xl md:text-3xl dark:text-gray-400'>
              Sorry, we couldn't find this page.
            </p>
            <Link to='/' className='btn'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
