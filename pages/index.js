import Head from "next/head";
import Image from "next/image";
import bigg from "./Assets/g.png";
import Navbar from "./Components/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="w-full h-[100vh] bg-yellow-600 flex justify-center items-center">
        <Image src={bigg} width="150px" height="100px" />
      </div>
    </div>
  );
}
