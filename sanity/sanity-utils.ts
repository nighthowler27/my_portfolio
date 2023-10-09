// import { bootcampCategory } from "@/types/BootcampCategory";
// import { bootcampPage } from "@/types/BootcampPage";
// import { freelanceCategory } from "@/types/FreelanceCategory";
// import { freelancePage } from "@/types/FreelancePage";
// import { kodegoCategory } from "@/types/KodegoCategory";
// import { kodegoPage } from "@/types/KodegoPage";
// import { previousProjectCategory } from "@/types/PreviousProjectCategory";
// import { previousProjectPage } from "@/types/PreviousProjectPage";
// import { portfolioKodegoProject } from "@/types/Project";
// import { specialProjectCategory } from "@/types/SpecialProjectCategory";
// import { specialProjectPage } from "@/types/SpecialProjectPage";

// import { createClient, groq } from "next-sanity";
// import clientConfig from "./config/client-config";

// export async function getbootcampCategories(): Promise<bootcampCategory[]> {
//   console.log("getbootcampCategories");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query);
// }

// export async function getbootcampCategory(slug: string): Promise<bootcampCategory> {
//   console.log("getbootcampCategory");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getbootcampPages(): Promise<bootcampPage[]> {
//   console.log("getbootcampPages");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query);
// }

// export async function getbootcampPage(slug: string): Promise<bootcampPage> {
//   console.log("getbootcampPage");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getfreelanceCategories(): Promise<freelanceCategory[]> {
//   console.log("getfreelanceCategories");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query);
// }

// export async function getfreelanceCategory(slug: string): Promise<freelanceCategory> {
//   console.log("getfreelanceCategory");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getfreelancePages(): Promise<freelancePage[]> {
//   console.log("getfreelancePages");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query);
// }

// export async function getfreelancePage(slug: string): Promise<freelancePage> {
//   console.log("getfreelancePage");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getkodegoCategories(): Promise<kodegoCategory[]> {
//   console.log("getkodegoCategories");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query);
// }

// export async function getkodegoCategory(slug: string): Promise<kodegoCategory> {
//   console.log("getkodegoCategory");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getkodegoPages(): Promise<kodegoPage[]> {
//   console.log("getkodegoPages");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query);
// }

// export async function getkodegoPage(slug: string): Promise<kodegoPage> {
//   console.log("getkodegoPage");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getpreviousProjectCategories(): Promise<previousProjectCategory[]> {
//   console.log("getpreviousProjectCategories");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query);
// }

// export async function getpreviousProjectCategory(slug: string): Promise<previousProjectCategory> {
//   console.log("getpreviousProjectCategory");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getpreviousProjectPages(): Promise<previousProjectPage[]> {
//   console.log("getpreviousProjectPages");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query);
// }

// export async function getpreviousProjectPage(slug: string): Promise<previousProjectPage> {
//   console.log("getpreviousProjectPage");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getportfolioKodegoProjects(): Promise<portfolioKodegoProject[]> {
//   console.log("getportfolioKodegoProjects");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "project"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     project_title,
//     group_name,
//     date_started,
//     date_completed,
//     git_repository,
//     live_link,
//     content
//   }`;

//   return client.fetch(query);
// }

// export async function getportfolioKodegoProject(slug: string): Promise<portfolioKodegoProject> {
//   console.log("getportfolioKodegoProject");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "project" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     project_title,
//     group_name,
//     date_started,
//     date_completed,
//     git_repository,
//     live_link,
//     content
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getspecialProjectCategories(): Promise<specialProjectCategory[]> {
//   console.log("getspecialProjectCategories");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query);
// }

// export async function getspecialProjectCategory(slug: string): Promise<specialProjectCategory> {
//   console.log("getspecialProjectCategory");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "feature_image1": feature_image1.asset->url,
//     "feature_image2": feature_image2.asset->url,
//     "feature_image3": feature_image3.asset->url
//   }`;

//   return client.fetch(query, { slug });
// }

// export async function getspecialProjectPages(): Promise<specialProjectPage[]> {
//   console.log("getspecialProjectPages");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query);
// }

// export async function getspecialProjectPage

// (slug: string): Promise<specialProjectPage> {
//   console.log("getspecialProjectPage");
//   const client = createClient(clientConfig);

//   const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     title,
//     description,
//     subtitle,
//     details
//   }`;

//   return client.fetch(query, { slug });
// }