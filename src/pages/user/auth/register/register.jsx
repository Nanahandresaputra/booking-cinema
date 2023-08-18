import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputText from "../../../../components/input-form/inputText";
import phoneBanner from "../../../../assets/phone-banner.jpg";

const Register = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Masukan username"),
    email: yup
      .string()
      .email()
      .matches(/@[^.]*\./, "masukan email yang valid")
      .required("Masukan username"),
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
    <section className="w-screen lg:border grid grid-cols-1 items-center lg:grid-cols-2 lg:w-[900px] h-[63vh] md:h-[75vh] lg:h-[65vh] max-w-[1536px] mt-5 lg:my-0">
      <img
        src={phoneBanner}
        alt="login banner"
        className="hidden object-cover lg:block h-full"
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-white text-xl">Register</h1>
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
          <InputText
            nama="username"
            type="text"
            register={register}
            errMessage={errors.username?.message}
            errStyle={errors.username ? "text-red-500" : "hidden"}
          />
          <InputText
            nama="email"
            type="email"
            register={register}
            errMessage={errors.email?.message}
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
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
