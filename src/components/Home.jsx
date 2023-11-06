import { Suspense } from 'react';

const { Link, Outlet } = require('react-router-dom');

const Home = ({ data }) => {
  return (
    <div>
      <header className='bg-amber-200 pl-4 py-4'>
        <Link className='text-xl font-bold' to="/">Home</Link>
      </header>
      <ul className='flex gap-10 pl-4 pt-5 animate-PopUp'>
        {data.map(item => {
          return (
            <Link className='group text-2xl font-medium p-3 border-4 border-amber-400 rounded-xl bg-amber-100 hover:bg-amber-200 hover:scale-105 trans' key={item.order} to={item.id}>
              <p className='opacity-80 group-hover:opacity-100 trans'>{item.title}</p>
            </Link>
          );
        })}
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Home;
