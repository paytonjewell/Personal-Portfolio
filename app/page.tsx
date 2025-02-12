import Image from "next/image";
import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/paytonjewell/",
    label: "GitHub"
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/payton-pierce/",
    label: "LinkedIn"
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/paytonpiercedev",
    label: "Twitter"
  }
];

const bulletPoints = [
  { icon: "🧀", text: "based in wisconsin" },
  { 
    icon: "📧", 
    text: "let's get in touch!", 
    href: "mailto:paytontaylor96@gmail.com" 
  },
  { 
    icon: "📝", 
    text: "download my resume", 
    href: "/PaytonPierceResume.pdf", 
    download: "PaytonPierceResume" 
  }
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* Profile Picture */}
     <div className="relative w-[350px] md:w-2/5">
     <Image 
        src="/self.png" 
        alt="Profile picture of Payton" 
        width={350}
        height={350}
        className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full p-3 w-full h-auto"
      />
     </div>

      {/* Bio Section */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">Payton</span> 
            <span className="animate-wave inline-block">🤚🏻</span>
          </h1>
          <h2 className="text-3xl">
            I'm a frontend engineer at 
            <Link className="text-indigo-500" href="https://www.lingoapp.com/" target="_blank"> Lingo</Link>.
          </h2>
        </div>

        {/* Bullet Points */}
        <ul className="space-y-1 text-xl text-center md:text-left">
          {bulletPoints.map(({ icon, text, href, download }, index) => (
            <li key={index}>
              <span className="mr-2">{icon}</span>
              {href ? (
                <a href={href} download={download} className="link link-primary">{text}</a>
              ) : (
                text
              )}
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <ul className="flex justify-center text-3xl gap-10 mt-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <li key={label} className="hover:scale-125 hover:text-white transition-all ease-in-out">
              <Link href={href} target="_blank" aria-label={label}>
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
