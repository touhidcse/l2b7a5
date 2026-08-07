import { Button } from "@/components/ui/button";
import { IUser } from "@/lib/types";
import { getMe } from "@/service/getMe";

export default async function HomePage() {
  console.log("Root Route");

  const user = await getMe() as IUser;
  console.log("From homepage which is in publicGroup",user);
  return (
   <div>
    Hellow Next JS
    <Button size={"xs"}
      variant={"destructive"}>
      Click me
      </Button>
   </div>
   
  );
}
