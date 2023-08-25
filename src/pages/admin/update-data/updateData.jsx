import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputText from "../../../components/input-form/inputText";
import InputTextArea from "../../../components/input-form/inputTextArea";
import InputFileImage from "../../../components/input-form/inputFileImage";
import { useEffect } from "react";
import { getListMovies } from "../../../app/redux/movies/action";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesApi } from "../../../app/api/api";
import Swal from "sweetalert2";
const UpdateData = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().required("Masukan judul film"),
    director: yup.string().required("Masukan nama director"),
    genre: yup.string().required("Masukan genre"),
    description: yup.string().required("Masukan deskripsi"),
    image: yup.mixed().test("type", "hanya masukan gambar", (file) => {
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

  let { listMovies } = useSelector((state) => state.movies);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovies());
  }, [dispatch]);

  const navigate = useNavigate();

  let getDetail = listMovies?.find((data) => data.id === parseInt(id));

  const onsubmit = (data) => {
    let { title, description, director, genre, studioId, image, id } = data;

    const reader = new FileReader();

    reader.readAsDataURL(image[0]);

    reader.onload = () => {
      addMoviesApi({
        title,
        description,
        studioId,
        genre,
        director,
        id,
        image: reader.result.replace(/^data:image\/[a-z]+;base64,/, ""),
      });

      Swal.fire({
        title: "Apakah perubahan akan disimpan?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Simpan perubahan",
        denyButtonText: `Jangan simpan perubahan`,
      }).then((result) => {
        if (getDetail.Studio.status === "active") {
          Swal.fire({
            icon: "error",
            title: "Gagal.",
            text: "Tidak bisa mengupdate movie yang statusnya aktif!",
          });
        } else if (result.isConfirmed) {
          Swal.fire("Data movie berhasil diupdate!", "", "success");
          navigate("/admin");
          setTimeout(() => {
            window.location.reload(true);
          }, 1500);
        } else if (result.isDenied) {
          Swal.fire("Perubahan tidak disimpan", "", "info");
        }
      });
    };
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[1536px] w-10/12 md:w-6/12 space-y-5">
      <h1 className="font-semibold text-white text-xl">Update Data</h1>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="space-y-5 w-full border rounded-lg p-5">
        <InputText
          defaultValue={getDetail?.title}
          nama="title"
          type="text"
          register={register}
          errMessage={errors.title?.message}
          errStyle={errors.title ? "text-red-500" : "hidden"}
        />
        <InputText
          defaultValue={getDetail?.director}
          nama="director"
          type="text"
          register={register}
          errMessage={errors.director?.message}
          errStyle={errors.director ? "text-red-500" : "hidden"}
        />
        <InputText
          defaultValue={getDetail?.genre}
          nama="genre"
          type="text"
          register={register}
          errMessage={errors.genre?.message}
          errStyle={errors.genre ? "text-red-500" : "hidden"}
        />
        <InputFileImage
          nama="image"
          register={register}
          errMessage={errors.image?.message}
          errStyle={errors.image ? "text-red-500" : "hidden"}
        />
        <InputTextArea
          defaultValue={getDetail?.description}
          nama="description"
          register={register}
          errMessage={errors.description?.message}
          errStyle={errors.description ? "text-red-500" : "hidden"}
        />
        <InputText
          defaultValue={getDetail?.id}
          nama="id"
          type="text"
          register={register}
        />
        <button className="btn btn-error bg-red-500 text-white w-full">
          Update Data
        </button>
      </form>
    </div>
  );
};

export default UpdateData;
