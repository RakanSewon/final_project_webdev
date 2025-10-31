import Link from "next/link"
import Image from "next/image"

const about = () => {
    return (
            <>
            <div className="flex">
            <div className="mt-20 ml-10 mr-10 rounded-2xl">
                <Image className="rounded-2xl shadow-2xl" 
                src="/pasfoto.webp"
                alt="pasfoto hehe"
                width={500}
                height={800}
                />
            </div>
            <div className="w-200 font-bold rounded-2xl px-1 py-1 mt-20">
                <p1 className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p1>
                <br></br>
                <p1>these pages are mostly temporary placeholders (as you can probably tell) and will be further developed in the near future. </p1>
            </div>
            </div>
            </>
        )
}

export default about