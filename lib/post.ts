import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts/blog");

export function getSortedPostsData() {
  // /posts/blog 파일 이름 잡아주기
  const fileNames = fs.readdirSync(postsDirectory);
  // console.log(fileNames);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // md삭제
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8"); // 인코딩

    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  // sorting
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
