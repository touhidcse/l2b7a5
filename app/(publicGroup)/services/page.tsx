import { IService } from "@/lib/types";

async function getServices() {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  return res.json();
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div>
      {services.data.map((service: IService) => (
        <div key={service.id}>{service.title}</div>
      ))}
    </div>
  );
}