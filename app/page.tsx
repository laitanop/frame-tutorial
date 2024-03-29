import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";
import Image from "next/image";

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
      <p className="text-fuchsia-600">
        Whispers of Blossoms and Bytes: The Tale of Aiko and the Digital Deity
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="overflow-hidden">
          <Image
            src="https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/QmPaXA9nd5mh4QxQoSFoLduEogKvs47yP1wfx4AincGvZn"
            width={500}
            height={500}
            alt="Aiko under the cherry blossoms"
            className="w-full h-auto object-cover"
          />
          Aiko under the cherry blossoms
        </div>
        <div className="overflow-hidden">
          <Image
            src="https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/Qme9KcwBbobm9kYq95QXgCzGB2xQ9rDiXPp75h42iVDXa5"
            alt="Aiko sat beneath the blossoming tree, she was swept away on a cosmic
          journey, and she was never the same again"
            width={500}
            height={500}
          />
          Aiko sat beneath the blossoming tree, she was swept away on a cosmic
          journey, and she was never the same again.
        </div>
        <div className="overflow-hidden">
          <Image
            src="https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/QmcgTJdMZNukCuQQ3gz398WWtuCVuwfMPWaM4LT5NhkjRx"
            alt="Aiko back in her reality, she was a changed person, and she was"
            width={500}
            height={500}
          />
          Aiko back in her reality, she was a changed person, and she was.
        </div>
        <div className="overflow-hidden">
          <Image
            src="https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/QmVUXDaMvtZ2KnUCPySvReNqNjrTLxxHsKeKiriYyA4Aru"
            alt="Aiko's tale becomes a legend, and she is remembered for all time"
            width={500}
            height={500}
          />
          Aiko&apos;s tale becomes a legend, and she is remembered for all time.
        </div>
      </div>
    </>
  );
}
