import { Button, Code } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="grid place-items-center  h-[calc(100vh_-_64px)]">
      <div className="grid gap-3 px-2 place-items-center text-center max-w-96">
        <h1 className="text-2xl font-bold">
          Welcome to <Code size="lg">supabase & NextJS</Code> Auth&nbsp;template
        </h1>
        <p className="font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero
          aliquid id adipisci.
        </p>
        <div className="mt-5">
          <Button as={Link} href="/" color="primary" variant="shadow">
            Get started
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
