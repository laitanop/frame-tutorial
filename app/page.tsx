import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPaXA9nd5mh4QxQoSFoLduEogKvs47yP1wfx4AincGvZn`,
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Sakura frame test",
  description: "Sakura frame test",
  openGraph: {
    title: "Sakura frame test",
    description: "Sakura frame test",

    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPaXA9nd5mh4QxQoSFoLduEogKvs47yP1wfx4AincGvZn`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>SakuraFrame</h1>
    </>
  );
}
