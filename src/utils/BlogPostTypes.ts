export type Image = {
  node: {
    [key: string]: any;
    name: string;
  };
};

export type Post = {
  frontmatter: {
    path: string;
    title: string;
    summary: string;
    featured_image: string;
    date: Date;
    tags: string[];
    lastUpdated?: Date;
  };
  timeToRead: number;
};
