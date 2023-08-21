const InputTextArea = ({ nama, register, errStyle, errMessage }) => {
  return (
    <label className="flex flex-col text-white space-y-1">
      <span className="text-lg">
        {nama} <span className="text-red-500">*</span>
      </span>

      <textarea
        className="textarea textarea-bordered border-white bg-transparent text-white w-full"
        placeholder={`masukan ${nama}`}
        {...register(nama)}></textarea>

      {/* <input
        type={type}
        placeholder={`masukan ${nama}`}
        className="input input-bordered 
          border border-white bg-transparent text-white w-full"
        {...register(nama)}
      /> */}
      <span className={errStyle}>{errMessage}</span>
    </label>
  );
};

export default InputTextArea;
