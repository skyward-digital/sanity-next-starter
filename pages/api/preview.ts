import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  const slug = req?.query?.slug || "";
  const path = slug && slug != "/" ? `/${slug}` : "/";
  res.setPreviewData({});
  res.writeHead(307, {
    Location: path,
  });

  res.end();
}
