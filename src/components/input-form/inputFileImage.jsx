const InputFileImage = ({ nama, register, errMessage, errStyle }) => {
  return (
    <label className="flex flex-col text-white space-y-1">
      <span className="text-lg">
        {nama} <span className="text-red-500">*</span>
      </span>
      <input type="file" placeholder={`masukan ${nama}`} className="file-input file-input-bordered w-full text-black" {...register(nama)} />
      <span className={errStyle}>{errMessage}</span>
    </label>
    // {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}
  );
};

export default InputFileImage;
