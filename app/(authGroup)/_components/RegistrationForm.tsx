"use client"


import { useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { registrationSchema, RegistrationFormData }
    from "@/lib/validations/auth";


import { registrationAction }
    from "../_actions/authActions";


import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";




const RegistrationForm = () => {


    const searchParams = useSearchParams();

    const redirectTo =
        searchParams.get("redirectTo") ?? "";



    const [isPending, startTransition]
        =
        useTransition();



    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors
        }
    }
        =
        useForm<RegistrationFormData>({

            resolver: zodResolver(registrationSchema),

            defaultValues: {

                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                role: "CUSTOMER"

            }

        });





    const onSubmit = (data: RegistrationFormData) => {


        const formData = new FormData();


        formData.append(
            "name",
            data.name
        );


        formData.append(
            "email",
            data.email
        );


        formData.append(
            "password",
            data.password
        );


        formData.append(
            "role",
            data.role
        );



        startTransition(async () => {


            const result =
                await registrationAction(
                    redirectTo,
                    formData
                );



            if (!result.success) {

                toast.error(
                    result.message
                );

            }


        });


    }




    return (


        <form
            onSubmit={
                handleSubmit(onSubmit)
            }
            className="space-y-4"
        >


            <Card className="p-5 space-y-4">


                <input

                    {...register("name")}

                    placeholder="Enter your Name"

                    className="border p-2 rounded w-full"

                />


                {
                    errors.name &&
                    <p className="text-red-500 text-sm">
                        {errors.name.message}
                    </p>
                }





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







                <input

                    {...register("confirmPassword")}

                    type="password"

                    placeholder="Confirm Password"

                    className="border p-2 rounded w-full"

                />


                {
                    errors.confirmPassword &&
                    <p className="text-red-500 text-sm">
                        {errors.confirmPassword.message}
                    </p>
                }






                <div className="flex gap-5">


                    <label>

                        <input

                            {...register("role")}

                            type="radio"

                            value="CUSTOMER"

                        />

                        Customer

                    </label>



                    <label>

                        <input

                            {...register("role")}

                            type="radio"

                            value="TECHNICIAN"

                        />

                        Technician

                    </label>


                </div>


                {
                    errors.role &&
                    <p className="text-red-500 text-sm">
                        {errors.role.message}
                    </p>
                }





                <Button
                    disabled={isPending}
                    type="submit"
                >

                    {
                        isPending
                            ?
                            "Creating..."
                            :
                            "Register"
                    }


                </Button>



            </Card>


        </form>

    )

}


export default RegistrationForm;