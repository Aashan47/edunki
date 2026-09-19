import Image from "next/image";
import Link from "next/link";
import { team } from "@/lib/team";

export default function TeamGrid() {
  return (
    <ul className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
      {team.map((member) => (
        <li key={member.slug}>
          <Link href={`/team/${member.slug}`} className="group block">
            <div className="relative aspect-[7/8] overflow-hidden rounded-2xl bg-paper-soft">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-ink">
              {member.name}
            </h3>
            <p className="mt-1 text-sm leading-snug text-ink-500">
              {member.role}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
