const TableSummary = ({ summary }) => {
  return (
    <section className="overflow-x-auto w-full">
      <table className="table text-white text-sm md:text-base lg:text-lg">
        <thead>
          <tr className="bg-gray-900 text-white text-sm md:text-base lg:text-lg">
            <th>Movie</th>
            <th>Studio</th>
            <th>Customers</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {summary?.map((index, i) => (
            <tr key={i}>
              <td>{index.movie}</td>
              <td> {index.studio}</td>
              <td> {index.customers}</td>
              <td> {index.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableSummary;
