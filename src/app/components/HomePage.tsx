import Link from "next/link"
import Image from 'next/image';

function HomePage() {
    return(
        <>
            <section className="">
            <div className=" lg:flex-1 lg:flex">
                <div className="h-[100vh] w-full md:w-[45%] bg-first_Bc text-text_one">
                    <div className="lg:grid lg:h-full lg:place-items-center">
                        <div className="px-4 py-3 text-wrap font-normal md:px-10   md:py-5 md:font-medium">
                            <p className="text-2xl font-semibold  mt-5">Hello there, I'm </p>
                            <p className="mt-5 text-xl  font-semibold text-second_Bc">KOFOWOROLA SHONUYI</p>
                            <p className="border-2 mt-5 w-fit px-2 py-1 text-xl mb-4 flex items-center rounded-full border-second_Bc"> Frontend Developer </p>
                            <p className="mt-5 text-xl ">A dedicated Front-End developer with a passion for open-source development. I see the potential in ideas and bring them to life through clean, efficient code. </p>
                            <p className="mt-5 text-xl "> I'm committed to building collaborative and inclusive projects that make a positive impact.</p>
                            <div className="flex mb-4">
                                {/* <Link href={}> </Link>
                                <Link href={}> </Link>
                                <Link href={}></Link> */}
                            </div>
                        <div className="flex justify-between">
                            <button className='mt-6 bg-second_Bc text-white px-5 py-2 rounded-md' >View Resume</button>
                            
      </div>
    </div>
  </div>

</div>

<div className="w-[55%] bg-second_Bc right pl-24">

  <div className="grid h-full place-items-center">

    <Image src='/kofo.webp' width={400} height={400} className="max-md:hidden"  alt=""  loading="lazy"/>

  </div>
</div>
</div>
            </section>
        </>
    )
}
export default HomePage