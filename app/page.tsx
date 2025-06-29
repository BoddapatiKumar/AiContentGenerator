import {  User} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <Image src={'/logo.svg'} alt="logo" width={150} height={150} />
        </div>
        <div className="flex items-center justify-center">
          <User className="m-3"/>
          <Link href="/dashboard">
          <button className="text-lg text-gray-600 hover:text-blue-600 cursor-pointer">Get Started</button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-4 py-20">
        {/* <div className="mb-4">
          <span className="text-xs font-medium bg-gray-200 px-3 py-1 rounded-full inline-block">
            TUBEGURUJI Membership – Join Now
          </span>
        </div> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          AI Content <span className="text-blue-600">Generator</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <Link href="/dashboard">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition cursor-pointer">
          Get started →
        </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 pb-20 mt-10">
        {[
          {
            title: '25+ templates',
            desc: 'Responsive, and mobile-first project on the web',
          },
          {
            title: 'Customizable',
            desc: 'Components are easily customized and extendable',
          },
          {
            title: 'Free to Use',
            desc: 'Every component and plugin is well documented',
          },
          {
            title: '24/7 Support',
            desc: 'Contact us 24 hours a day, 7 days a week',
          },
        ].map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="text-blue-600 text-2xl font-semibold mb-2">{feature.title}</div>
            <p className="text-gray-600 text-sm mb-2">{feature.desc}</p>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Learn more →
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
