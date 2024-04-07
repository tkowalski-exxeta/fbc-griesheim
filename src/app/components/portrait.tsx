import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

interface PortraitProps {
  name: string;
  role: string;
  email: string;
  img: StaticImport;
}
export function Portrait({ name, role, email, img }: PortraitProps) {
  return (
    <div>
      <div style={{ height: 300, width: 240, position: "relative" }}>
        <Image
          src={img}
          fill
          alt={`${role} - ${name}`}
          className="object-cover"
        />
      </div>
      <div className="text-xl">{name}</div>
      <div className="text-slate-600 border-b-2 border-orange-700">{role}</div>
      <div>
        <a href={"mailto:" + email}>
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
