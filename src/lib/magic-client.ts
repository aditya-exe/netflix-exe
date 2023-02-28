import { Magic } from "magic-sdk";

function createMagic() {
  if (typeof window !== undefined) return new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY!);
}

const m = createMagic();

export { m };