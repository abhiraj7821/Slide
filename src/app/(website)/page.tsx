import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen ">

      <div className="section text-white bg-gradient-to-b from-black from-10% via-black via-30% to-emerald-500 to-90%">

        <nav className="flex justify-between p-[3vw]">
          <div className="log">Slide</div>
          <div className="nav_items flex gap-[3vw]">
            <h4>Features</h4>
            <h4>Pricing</h4>
            <h4>About</h4>
          </div>
          <button className="border-white border-[2px] px-2 py-1 rounded-sm bg-white text-black">
            <Link href="/dashboard" >Login</Link>
          </button>
        </nav>

        <div className="header px-[20vw] felx flex-col justify-center items-center">
          <h1 className="text-[4vw] font-bold text-center">Transform Your <br/> Instagram Engagement <br /> with slide</h1>
          <p className="text-center pt-[5px] px-[7vw]">Slide is your go-to SaaS solution for seamless Instagram automation, designed to elevate your business customer connections. Experience effortless engagement and watch your brand thrive.</p>
          <div className="ctas flex gap-[3vw] justify-center pt-10">
            <button className="border-white border-[2px] px-2 py-1 rounded-sm">Get Started</button>
            <button className="border-white border-[2px] px-2 py-1 rounded-sm bg-white text-black">Learn more</button>
          </div>
          <div className="flex flex-wrap justify-center gap-[5vw] max-w-4xl mt-[3vw]">
            <img src="https://images.unsplash.com/photo-1749222013825-fe2025dcf0cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="User 1" className="w-36 h-48 object-cover rounded-[30%/20%] shadow-lg" />
            <img src="https://images.unsplash.com/photo-1747491681738-d0ed9a30fed3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="User 2" className="w-36 h-48 object-cover rounded-[30%/20%] shadow-lg" />
            <img src="https://images.unsplash.com/photo-1728443433557-3fc9e37b58c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="User 3" className="w-36 h-48 object-cover rounded-[30%/20%] shadow-lg" />
            <img src="https://images.unsplash.com/photo-1748565630787-ab2532bfba54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="User 4" className="w-36 h-48 object-cover rounded-[30%/20%] shadow-lg" />
          </div>
        </div>
      </div>


      <div className="bg-emerald-500 px-[20vw] py-[10vw] text-black">

        <div className="priceDisc flex justify-center flex-col text-center mb-[4vw] gap-[10px]">
          <h4 className="">Affordable</h4>
          <h1 className="text-[3vw] font-bold">Pricing Plans</h1>
          <p className="">Choose the plan that fits your business needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
          <div className="border border-black rounded-md p-6 flex flex-col items-center bg-white py-[5vw]">
            <h3 className="text-lg font-semibold mb-2">Free Plan</h3>
            <p className="text-3xl font-bold mb-1">$0<span className="text-base font-medium">/mo</span></p>
            <p className="text-sm text-gray-500 mb-6"><br /></p>
            <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Automated customer engagement</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Easy setup process</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 customer support</li>
            </ul>
            <button className="w-full bg-black text-white py-2 mt-auto">Get started</button>
          </div>

          <div className="border border-black rounded-md p-6 flex flex-col items-center bg-white py-[5vw]">
            <h3 className="text-lg font-semibold mb-2">Business Plan</h3>
            <p className="text-3xl font-bold mb-1">$29<span className="text-base font-medium">/mo</span></p>
            <p className="text-sm text-gray-500 mb-6"><br /></p>
            <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics tools</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Customizable automation options</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support access</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Team collaboration features</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> In-depth performance reports</li>
            </ul>
            <button className="w-full bg-black text-white py-2 mt-auto">Get started</button>
          </div>

        </div>
      </div>

      

    </main>
  );
}
