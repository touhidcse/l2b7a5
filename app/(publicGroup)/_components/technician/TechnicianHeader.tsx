import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TechnicianProfileProps } from "@/lib/types";
import Image from "next/image";

export function TechnicianHeader({technician}:TechnicianProfileProps) {
    return (
        <Card className="p-6">

            <div className="flex gap-6">


                <Image
                    src={technician.profilePhoto}
                    width={150}
                    height={150}
                    alt="technician.users.name"
                    className="rounded-full"
                />


                <div>

                    <h1>
                        {technician.user.name}
                    </h1>


                    <div>
                        ⭐ {technician.rating}
                    </div>


                    <p>
                        📍 {technician.location}
                    </p>


                    <Button>
                        Book Now
                    </Button>


                </div>


            </div>

        </Card>
    )
}