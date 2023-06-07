"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  
  return (
    <div>
      <Image
        alt="logo"
        className="hidden cursor-pointer md:block"
        height="100"
        width="100"
        src="/images/logo.png"
      />
    </div>
  );
};

export default Logo;
