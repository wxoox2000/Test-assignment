import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const ListItem = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  const exit = () => {
    navigate(`${location.state?.from.pathname || "/"}`);
  };

  return (
    <div
      className="fixed w-full h-full top-0 left-0 bg-slate-400 bg-opacity-70 backdrop-blur-sm animate-PopUp"
      onClick={exit}
    >
      <div className="absolute top-[calc(50%-350px)] left-[calc(50%-250px)] px-4 py-6 border-4 border-amber-400 rounded-xl w-[500px] h-[700px] flex flex-col justify-center gap-5 bg-amber-100 trans">
        <img
          src={`https://placehold.jp/24/cccccc/ffffff/400x350.png?text=sample_image${id}`}
          alt="placeholder"
          className="rounded-xl"
        />
        <h2 className="text-3xl text-center">{`Card ${id}`}</h2>
        <p className="text-lg text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          deleniti dolore doloremque sed distinctio consectetur numquam fuga,
          corrupti minima nostrum omnis minus! Iure sunt magnam ad repellat
          pariatur fugiat enim?
        </p>
        <Link
          to={location.state?.from || "/"}
          className="absolute top-1 right-1 w-8 h-8 pb-2 flex items-center justify-center bg-amber-400 rounded-full text-2xl font-bold hover:bg-red-600 trans"
        >
          <p>x</p>
        </Link>
      </div>
    </div>
  );
};
export default ListItem;
