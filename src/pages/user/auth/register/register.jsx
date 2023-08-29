import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputText from "../../../../components/input-form/inputText";
import phoneBanner from "../../../../assets/phone-banner.jpg";
import { registerApi } from "../../../../app/api/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Masukan username"),
    email: yup
      .string()
      .email("masukan email yang valid")
      .matches(/@[^.]*\./, "masukan email yang valid")
      .required("Masukan email"),
    password: yup
      .string()
      .matches(
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
        "Minimal enam karakter, setidaknya satu huruf besar, satu huruf kecil, satu angka, satu karakter khusus"
      )
      .required("Masukan password"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const navigate = useNavigate();

  const onsubmit = async (formData) => {
    const { data } = await registerApi(formData);
    if (!data) {
      setError("email", {
        type: "invalidCredentials",
        message: "Email sudah terdaftar",
      });
    } else {
      Swal.fire({
        icon: "success",
        text: "Berhasil sudah terdaftar silakan login untuk booking tiket",
        showConfirmButton: false,
        timer: 2500,
      });
      navigate("/login");
    }
  };

  return (
    <section className="w-screen lg:border grid grid-cols-1 items-center lg:grid-cols-2 lg:w-[900px] h-[63vh] md:h-[75vh] lg:h-[65vh] max-w-[1536px] mt-5 lg:my-0">
      <img
        src={phoneBanner}
        alt="login banner"
        className="hidden object-cover lg:block h-full"
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-white text-xl">Register</h1>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="space-y-5
       w-auto mx-3 lg:mx-0 lg:w-96">
          <InputText
            nama="username"
            type="text"
            register={register}
            errMessage={errors.username?.message}
            errStyle={errors.username ? "text-red-500" : "hidden"}
          />
          <InputText
            nama="email"
            type="text"
            register={register}
            errMessage={errors.email?.message}
            errStyle={errors.email ? "text-red-500" : "hidden"}
          />
          <InputText
            nama="password"
            type="password"
            register={register}
            errMessage={errors.password?.message}
            errStyle={errors.password ? "text-red-500" : "hidden"}
          />
          <button className="btn btn-error bg-red-500 text-white w-full">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
