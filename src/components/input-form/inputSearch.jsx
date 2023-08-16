const InputSearch = () => {
  return (
    <div className="form-control">
      <div className="input-group w-full flex justify-center">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered 
          border border-white bg-transparent text-white md:w-7/12"
        />
        <button className="btn btn-square bg-red-500 border-none text-white w-20 lg:w-32">
          Cari
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
