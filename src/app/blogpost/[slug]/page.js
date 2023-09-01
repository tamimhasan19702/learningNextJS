"use client";

import { usePathname } from "next/navigation";

const Post = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  return <div>Post: {slug}</div>;
};

export default Post;