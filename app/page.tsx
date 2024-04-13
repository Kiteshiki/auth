import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-items-center  h-[calc(100vh_-_64px)]">
      <div className="grid gap-3 place-items-center text-center w-80">
        <h1 className="text-2xl font-bold">Next JS auth template</h1>
        <p className="font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero
          aliquid id adipisci.
        </p>
        <div className="mt-5">
          <Button as={Link} href="/login" color="primary" variant="shadow">
            Sign In
          </Button>
        </div>
        {/* <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        /> */}
      </div>
    </main>
  );
}
