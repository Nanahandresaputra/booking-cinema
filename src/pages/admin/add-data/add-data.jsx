import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputText from "../../../components/input-form/inputText";
import InputTextArea from "../../../components/input-form/inputTextArea";
import InputFileImage from "../../../components/input-form/inputFileImage";
import { useState } from "react";
const AddData = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().required("Masukan judul film"),
    director: yup.string().required("Masukan nama director"),
    genre: yup.string().required("Masukan genre"),
    description: yup.string().required("Masukan deskripsi"),
    image: yup
      .mixed()
      .test("required", "masukan foto", (file) => {
        return file.length;
      })
      .test("type", "hanya masukan gambar", (file) => {
        let typeImage = ["image/png", "image/jpg", "image/jpeg"];
        if (file.length > 0) {
          return file && typeImage.includes(file[0].type);
        }
      }),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [base64Img, setBase64Img] = useState("");

  const convertToBase64 = (selectedFile) => {
    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      // console.log("called: ", reader);
      setBase64Img(reader.result);
    };
  };

  const onsubmit = (data) => {
    convertToBase64(data.image[0]);

    console.log({
      ...data,
      image: base64Img.replace(/^data:image\/[a-z]+;base64,/, ""),
    });
  };
  // console.log(base64);

  return (
    <div className="flex flex-col items-center justify-center max-w-[1536px] w-10/12 md:w-6/12 space-y-5">
      <h1 className="font-semibold text-white text-xl">Tambah Data</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-5 w-full border rounded-lg p-5">
        <InputText nama="title" type="text" register={register} errMessage={errors.title?.message} errStyle={errors.title ? "text-red-500" : "hidden"} />
        <InputText nama="director" type="text" register={register} errMessage={errors.director?.message} errStyle={errors.director ? "text-red-500" : "hidden"} />
        <InputText nama="genre" type="text" register={register} errMessage={errors.genre?.message} errStyle={errors.genre ? "text-red-500" : "hidden"} />
        <InputFileImage nama="image" register={register} errMessage={errors.image?.message} errStyle={errors.image ? "text-red-500" : "hidden"} />
        <InputTextArea nama="description" register={register} errMessage={errors.description?.message} errStyle={errors.description ? "text-red-500" : "hidden"} />
        <button className="btn btn-error bg-red-500 text-white w-full">Tambah +</button>
      </form>
    </div>
  );
};

export default AddData;
