"use client";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link"
import Image from "next/image"


export default function More() {
  // data akan menyimpan array dari post
  const [data, setData] = useState(null); 

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get("https://final-project-webdev-six.vercel.app/api/edu");
        // Simpan hanya array data konten
        setData(response.data.docs); 
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        // Anda mungkin ingin mengatur state error di sini
      }
    };
    init();
  }, []); // Berjalan hanya sekali saat komponen dimuat

  return (
    <div className="flex">
    <div className="w-fit lg:w-175 h-screen p-8 mx-3">
      <h1 className="font-bold text-2xl">Education</h1>
      
      {!data && <div>Loading...</div>}

      {data && data.length > 0 ? (
        <div className="space-y-4 flex flex-col-reverse">
          {data.map((post) => (
            <div key={post.id} className="border p-4 rounded shadow flex-col-reverse mb-2 bg-white/50">
              <h2 className="text-xl font-bold">{post.name}</h2> 
              <p className="text-sm text-gray-700">
                <h2 className="text-xl font-bold">{post.year}</h2> 
              </p>
            </div>
          ))}
        </div>
      ) : (
        data && <div>Tidak ada data yang ditemukan.</div>
      )}
    </div>
    <div className="mt-8">
      <h1 className="font-bold text-2xl">Competence: </h1>
      <div className="border w-fit lg:w-175 h-fit p-4 mt-0.5 rounded shadow mb-2 bg-white/50 pl-9 text-2xl">
        <ul className="list-disc">
        <li>basic web development</li>
        <li>basic data science</li>
        <li>microsoft office</li>
        <li>arduino (still learning)</li>
        <li>swimming</li>
        <li>more to come insyaAllah</li>
      </ul>
      </div>
    </div>
    </div>
  );
}
// const more = () => {
//     return (
//         <>
//         <div className="flex">
//         <div className="mt-20 ml-10 mr-10 rounded-2xl">
//             <Image className="rounded-2xl shadow-2xl" 
//             src="/pasfoto.webp"
//             alt="pasfoto hehe"
//             width={500}
//             height={800}
//             />
//         </div>
//         <div className="w-200 font-bold rounded-2xl px-1 py-1 mt-20">
//             <p1 className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p1>
//         </div>
//         </div>
//         </>
//     )
// }

// export default more