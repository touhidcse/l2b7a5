import { TechnicianProfileProps } from "@/lib/types";

export function TechnicianSkills({
  technician,
}: TechnicianProfileProps) {
  const skills = [
    ...new Set(
      technician.services
        ?.map((service) => service.category?.type)
        .filter(Boolean)
    ),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}