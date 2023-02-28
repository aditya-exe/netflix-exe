"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { m } from "@/lib/magic-client";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email(),
});

type formInput = z.infer<typeof schema>

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<formInput>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async (formValues) => {
    setEmail(formValues.email);
    try {
      const didToken = await m?.auth.loginWithMagicLink({
        email
      });
      if (didToken) {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${didToken}`,
            "Content-Type": "application/json",
          }
        });
        const loggedInResponse = await response.json();
        if (loggedInResponse.done) {
          router.push("/");
        }
      }
    } catch (err) {
      console.error(err);
    }
  })

  return (
    <div className="flex flex-col items-center justify-start min-h-[100vh] bg-black container">
      <header className="flex justify-between w-full py-8">
        <div className="px-4 flex flex-row">
          <Link className={"flex font-[500] text-[16px] items-center mb-4"} href="/">
            <div className={"text-red-600 w-32"}>
              <Image src="/static/netflix.svg" alt="Netflix logo" width="128" height="34" />
            </div>
          </Link>
        </div>
      </header>

      <form onSubmit={onSubmit} className="w-full h-full relative flex z-10 justify-center">
        <div className="flex flex-col min-w-[240px] rounded-[0.375px] px-12 min-h-[300px] bg-[#00000099] ">
          <h1 className="text-white font-bold text-[2rem] mb-8 mt-8">
            Log In
          </h1>
          <input type="text" placeholder="Email" {...register("email")} className="py-2 px-2 text-black w-full pb-4 h-[3rem] min-w-[240px] text-[1.2rem]" />
          {errors.email && (
            <p className="my-1 text-white">Enter a valid email address</p>
          )}
          <button typeof="submit" className="bg-red-700 mt-6 rounded-[0.375px] w-full text-white leading-[1.75rem] text-[1.25rem] py-2 px-12">            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;