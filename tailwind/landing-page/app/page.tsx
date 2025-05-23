import Link from "next/link";

export default function Home() {
  return (
    <>

    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Link href="/landing-page-1" className="bg-blue-500 p-4 rounded-sm font-bold" target="_blank">Landing Page 1</Link>
      <br />      
      <Link href="/landing-page-2" className="bg-blue-500 p-4 rounded-sm font-bold" target="_blank">Landing Page 2</Link>
      <br />
      <Link href="/landing-page-3" className="bg-blue-500 p-4 rounded-sm font-bold" target="_blank">Landing Page 3</Link>
      <br />
      <Link href="/landing-page-4" className="bg-blue-500 p-4 rounded-sm font-bold" target="_blank">Landing Page 4</Link>
      <br />
      <Link href="/landing-page-5" className="bg-blue-500 p-4 rounded-sm font-bold" target="_blank">Landing Page 5</Link>

    </div>
      
    </>
  );
}
