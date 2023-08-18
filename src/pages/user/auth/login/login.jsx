import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputText from "../../../../components/input-form/inputText";
import phoneBanner from "../../../../assets/phone-banner.jpg";

const Login = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Masukan username"),
    password: yup.string().required("Masukan password"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="w-screen lg:border grid grid-cols-1 items-center lg:grid-cols-2 lg:w-[900px] h-[63vh] md:h-[75vh] lg:h-[45vh] max-w-[1536px] mt-5 lg:my-0 2xl:my-10">
      <img
        src={phoneBanner}
        alt="login banner"
        className="hidden object-cover lg:block h-full"
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-white text-xl">Login</h1>
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
          <InputText
            nama="username"
            type="text"
            register={register}
            errMessage={errors.username?.message}
            errStyle={errors.username ? "text-red-500" : "hidden"}
          />
          <InputText
            nama="password"
            type="password"
            register={register}
            errMessage={errors.password?.message}
            errStyle={errors.password ? "text-red-500" : "hidden"}
          />
          <button className="btn btn-error bg-red-500 text-white w-full">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
