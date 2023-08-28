const InputText = ({
  nama,
  register,
  errMessage,
  errStyle,
  type,
  defaultValue,
}) => {
  return (
    <label className="flex flex-col text-white space-y-1">
      <span className="text-lg">
        {nama} <span className="text-red-500">*</span>
      </span>
      <input
        type={type}
        defaultValue={defaultValue || ""}
        placeholder={`masukan ${nama}`}
        className={`input input-bordered 
          border border-white bg-transparent text-white w-full`}
        {...register(nama)}
      />
      <span className={errStyle || ""}>{errMessage || ""}</span>
    </label>
  );
};

export default InputText;
