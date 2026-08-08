import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnicianProfileProps } from "@/lib/types";

// It is used in technician profile page
export function TechnicianAbout({ technician }: TechnicianProfileProps) {
    return (
        <Card>

            <CardHeader>
                <CardTitle>
                    About
                </CardTitle>
            </CardHeader>


            <CardContent>

                <p>
                    {technician.bio}
                </p>

            </CardContent>

        </Card>
    )
}