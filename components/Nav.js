import Link from "next/link";
import { LogoIcon } from "@/components/Icons";
import Button from "@/components/Button";

export default function Nav() {
  return (
    <nav className="px-12 fixed inset-x-0 top-0 z-40 bg-white h-16 shadow-sm">
      <div className="max-w-screen-xl mx-auto w-full h-full flex items-center justify-between">
        <LogoIcon />

        <div className="flex flex-1 h-full">
          <div className="grid grid-flow-col auto-cols-auto gap-8 items-center ml-8">
            <div className="text-black place-items-center hover:text-accent cursor-pointer">
              Features
            </div>
            <div className="text-black place-items-center hover:text-accent cursor-pointer">
              Solutions
            </div>
            <div className="text-black place-items-center hover:text-accent cursor-pointer">
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </div>
            <div className="text-black place-items-center hover:text-accent cursor-pointer">
              <Link href="/pricing">
                <a>Customers</a>
              </Link>
            </div>
          </div>

          <div className="grid grid-flow-col auto-cols-auto gap-8 items-center ml-auto">
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
            <Button title="Talk to an Expert" />
          </div>
        </div>
      </div>
    </nav>
  );
}
