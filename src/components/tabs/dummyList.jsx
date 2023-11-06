import { Suspense, lazy } from 'react';
import {
    Link,
    Routes,
    Route,
    useLocation,
    Outlet,
  } from 'react-router-dom';
const ListItem = lazy(() => import("../listItem"));

const DummyList = () => {
  const location = useLocation();
  let pseudoData = [1, 2, 3, 4, 5];
  return (
    <>
      <ul className="flex gap-5 pl-4 pt-5 animate-PopUp">
        {pseudoData.map(item => (
          <li
            key={item}
            className="group w-52 h-60 border-4 border-amber-400 rounded-xl hover:scale-105 trans"
          >
            <Link
              to={`${item}`}
              state={{ from: location }}
              className="w-full h-full flex items-center justify-center flex-wrap group-hover:bg-amber-100 trans"
            >
              <img
                src="https://placehold.jp/24/cccccc/ffffff/160x140.png?text=sample_image"
                alt="placeholder"
                className="rounded-xl"
              />
              <h2 className="text-3xl text-center">{`Card ${item}`}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
      <Routes>
        <Route path=":id" element={<ListItem />} />
      </Routes>
    </>
  );
};

export default DummyList;
