import Image from "next/image";
import {Button, Link} from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Button>
        <Link href="/login">Login</Link>
      </Button>
      <Button>
        <Link href="/signup">Signup</Link>
      </Button>
    </div>
  );
}
