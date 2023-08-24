import { useNavigate } from "react-router-dom";

const Table = ({ listMovies }) => {
  const navigate = useNavigate();

  return (
    <section className="overflow-x-auto w-full">
      <table className="table text-white text-sm md:text-base lg:text-lg">
        <thead>
          <tr className="bg-gray-900 text-white text-sm md:text-base lg:text-lg">
            <th>Judul Film</th>
            <th>Studio</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listMovies?.map((index, i) => (
            <tr key={i}>
              <td className=" flex items-center space-x-3 ">
                <img
                  src={`data:image/jpeg;base64,${index.image}`}
                  alt={index.title}
                  className="w-10 h-16 md:w-14 md:h-20 lg:w-24 lg:h-32 object-cover"
                />
                <span className="truncate w-20 md:w-auto">{index.title}</span>
              </td>
              <td>Studio {index.StudioId}</td>
              <td>
                <button
                  className="btn btn-info  btn-xs md:btn-sm text-white"
                  onClick={() => navigate(`detail-film/${index.id}`)}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
