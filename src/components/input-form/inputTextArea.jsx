const InputTextArea = ({
  nama,
  register,
  errStyle,
  errMessage,
  defaultValue,
  required,
}) => {
  return (
    <label className="flex flex-col text-white space-y-1">
      <span className="text-lg">
        {nama}{" "}
        <span className={required === true ? "block text-red-500" : "hidden"}>
          *
        </span>
      </span>

      <textarea
        defaultValue={defaultValue || ""}
        className="textarea textarea-bordered border-white bg-transparent text-white w-full"
        placeholder={`masukan ${nama}`}
        {...register(nama)}></textarea>
      <span className={errStyle}>{errMessage}</span>
    </label>
  );
};

export default InputTextArea;
