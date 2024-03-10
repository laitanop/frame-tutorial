import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber = parseInt(id);
  const nextId = idAsNumber + 1;

  if (idAsNumber === 3) {
    return new NextResponse(`<DOCTYPE html><html><head>
    <title>This is a frame 3</title>
    <meta name="fc:frame" content="vNext" />
    <meta name="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmVUXDaMvtZ2KnUCPySvReNqNjrTLxxHsKeKiriYyA4Aru" />
    <meta name="fc:frame:button:1" content="Visit sakura.cloud" />
    <meta name="fc:frame:button:1:action" content="post_redirect" />
    <meta name="fc:frame:button:2" content="How I learn frame " />
    <meta name="fc:frame:button:2:action" content="post_redirect" />
    <meta name="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
    </head>/html>`);
  }
  if (idAsNumber === 1) {
    return new NextResponse(`<DOCTYPE html><html><head>
    <title>This is a frame ${id} </title>
    <meta name="fc:frame" content="vNext" />
    <meta name="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QQmPaXA9nd5mh4QxQoSFoLduEogKvs47yP1wfx4AincGvZn" />
    <meta name="fc:frame:button:1" content="Next Page" />
    <meta name="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head>/html>`);
  }
  if (idAsNumber === 2) {
    return new NextResponse(`<DOCTYPE html><html><head>
    <title>This is a frame ${id} </title>
    <meta name="fc:frame" content="vNext" />
    <meta name="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmcgTJdMZNukCuQQ3gz398WWtuCVuwfMPWaM4LT5NhkjRx" />
    <meta name="fc:frame:button:1" content="Next Page" />
    <meta name="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head>/html>`);
  }
}

export async function POST(req: NextRequest) {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
