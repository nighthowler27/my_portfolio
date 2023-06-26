import { PortableTextBlock } from "sanity";

export type freelancePage = {
    _id: string;
    _createdAt: Date;
    name: string,
    slug: string;
    image: string;
    title: string;
    description: PortableTextBlock[];
    subtitle: string;
    details: PortableTextBlock[];
   
}