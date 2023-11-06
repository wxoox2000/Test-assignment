import { lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import data from '../tabs.json';
import Home from './Home';

const tabs = [...data].sort((a, b) => a.order - b.order);
console.log(data);

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`${tabs[0].id}`);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home data={tabs} />}>
            {tabs.map(elem => {
              const Component = lazy(() => import(`./${elem.path}`));
              return (
                <Route
                  key={elem.order}
                  path={`${elem.id}/*`}
                  element={<Component />}
                />
              );
            })}
          </Route>
        </Routes>
    </div>
  );
};
