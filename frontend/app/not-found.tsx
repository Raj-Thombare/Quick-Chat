import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <Image width={500} height={500} alt='404' src='/images/404.svg' />
      <Link href='/'>
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
