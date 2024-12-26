import Image from "next/image";
import React from "react";

import { Pet } from "@/lib/types";

type Props = {
  pets: Pet[];
};

export default function PetList({ pets }: Props) {
  return (
    <ul className="border-b border-black/[0.08] bg-white">
      {pets.map((pet) => (
        <li key={pet.id}>
          <button className="flex h-[70px] w-full cursor-pointer items-center gap-3 px-5 text-base transition hover:bg-[#eff1f2] focus:bg-[#eff1f2]">
            <Image
              src={pet.imageUrl}
              alt={pet.name}
              width={45}
              height={45}
              className="size-[45px] rounded-full object-cover"
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
