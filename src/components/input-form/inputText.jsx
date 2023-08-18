const InputText = ({ nama, register, errMessage, errStyle, type }) => {
  return (
    <label className="flex flex-col text-white space-y-1">
      <span className="text-lg">
        {nama} <span className="text-red-500">*</span>
      </span>
      <input
        type={type}
        placeholder={`masukan ${nama}`}
        className="input input-bordered 
          border border-white bg-transparent text-white w-full max-w-xs"
        {...register(nama)}
      />
      <span className={errStyle}>{errMessage}</span>
    </label>
  );
};

export default InputText;
