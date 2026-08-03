"use client"


import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/validations/auth";
import { loginAction } from "../_actions/authActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";



const LoginForm = () => {

   const searchParams = useSearchParams();

   const router = useRouter();

   const redirectTo = searchParams.get("redirectTo") ?? "";

   const [isPending, startTransition] = useTransition();


   const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
      resolver: zodResolver(loginSchema), defaultValues: { email: "", password: "" }
   });

   const onSubmit = (data: LoginFormData) => {

      const formData = new FormData();

      formData.append("email", data.email);

      formData.append("password", data.password);

      startTransition(async () => {

         const result = await loginAction(redirectTo, formData);


         if (!result?.success) {

            toast.error( result?.message || "Login failed");
            return;
         }

         toast.success("Login Successful");
         router.push(result.redirectTo ?? "/");
         router.refresh();
      });

   }

   return (

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
         <Card className="p-5 space-y-4">
            <input

               {...register("email")}

               type="email"

               placeholder="Enter your Email"

               className="border p-2 rounded w-full"
            />

            {
               errors.email &&
               <p className="text-red-500 text-sm">
                  {errors.email.message}
               </p>
            }

            <input

               {...register("password")}

               type="password"

               placeholder="Enter your Password"

               className="border p-2 rounded w-full"

            />


            {
               errors.password &&
               <p className="text-red-500 text-sm">
                  {errors.password.message}
               </p>
            }

            <Button disabled={isPending} type="submit">
               {
                  isPending ? "Submitting..." : "Login"
               }
            </Button>
         </Card>
      </form>

   )

}


export default LoginForm;