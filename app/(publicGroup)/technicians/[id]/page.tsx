import TechnicianHeader from "./_components/TechnicianHeader";
import TechnicianAbout from "./_components/TechnicianAbout";
import TechnicianServices from "./_components/TechnicianServices";
import TechnicianReviews from "./_components/TechnicianReviews";
import BookingSection from "./_components/BookingSection";


export default async function TechnicianProfilePage({
    params
}:{
    params: Promise<{id:string}>
}){

    const {id}=await params;


    // fetch technician
    const technician = await getTechnician(id);



    return (

    <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">


        <TechnicianHeader technician={technician}/>


        <div className="grid lg:grid-cols-3 gap-8">


            <div className="lg:col-span-2 space-y-8">


                <TechnicianAbout 
                    technician={technician}
                />


                <TechnicianServices
                    services={technician.services}
                />


                <TechnicianReviews
                    reviews={technician.reviews}
                />


            </div>



            <BookingSection
                technician={technician}
            />


        </div>


    </main>

    )
}