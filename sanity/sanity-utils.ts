import { bootcampCategory } from "@/types/BootcampCategory";
import { bootcampPage } from "@/types/BootcampPage";
import { freelanceCategory } from "@/types/FreelanceCategory";
import { freelancePage } from "@/types/FreelancePage";
import { kodegoCategory } from "@/types/KodegoCategory";
import { kodegoPage } from "@/types/KodegoPage";
import { previousProjectCategory } from "@/types/PreviousProjectCategory";
import { previousProjectPage } from "@/types/PreviousProjectPage";
import { portfolioKodegoProject } from "@/types/Project";
import { specialProjectCategory } from "@/types/SpecialProjectCategory";
import { specialProjectPage } from "@/types/SpecialProjectPage";

import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getbootcampCategories(): Promise<bootcampCategory[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectCategory"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "feature_image1": feature_image1.asset->url,
      "feature_image2": feature_image2.asset->url,
      "feature_image3": feature_image3.asset->url
    }`;
  
    return client.fetch(query);
  }
  
  export async function getbootcampCategory(slug: string): Promise<bootcampCategory> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "feature_image1": feature_image1.asset->url,
      "feature_image2": feature_image2.asset->url,
      "feature_image3": feature_image3.asset->url
    }`;
  
    return client.fetch(query, { slug });
  }

export async function getbootcampPages(): Promise<bootcampPage[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query);
  }
  
  export async function getbootcampPage(slug: string): Promise<bootcampPage> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query, { slug });
  }

  export async function getfreelanceCategories(): Promise<freelanceCategory[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectCategory"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "feature_image1": feature_image1.asset->url,
      "feature_image2": feature_image2.asset->url,
      "feature_image3": feature_image3.asset->url
    }`;
  
    return client.fetch(query);
  }
  
  export async function getfreelanceCategory(slug: string): Promise<freelanceCategory> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "feature_image1": feature_image1.asset->url,
      "feature_image2": feature_image2.asset->url,
      "feature_image3": feature_image3.asset->url
    }`;
  
    return client.fetch(query, { slug });
  }

  export async function getfreelancePages(): Promise<freelancePage[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query);
  }
  
  export async function getfreelancePage(slug: string): Promise<freelancePage> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query, { slug });
  }

export async function getkodegoCategories(): Promise<kodegoCategory[]> {
  const client = createClient(clientConfig);

  const query = groq`*[_type == "projectCategory"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "feature_image1": feature_image1.asset->url,
    "feature_image2": feature_image2.asset->url,
    "feature_image3": feature_image3.asset->url
  }`;

  return client.fetch(query);
}

export async function getkodegoCategory(slug: string): Promise<kodegoCategory> {
  const client = createClient(clientConfig);

  const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "feature_image1": feature_image1.asset->url,
    "feature_image2": feature_image2.asset->url,
    "feature_image3": feature_image3.asset->url
  }`;

  return client.fetch(query, { slug });
}

export async function getkodegoPages(): Promise<kodegoPage[]> {
  const client = createClient(clientConfig);

  const query = groq`*[_type == "projectFeature"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    title,
    description,
    subtitle,
    details
  }`;

  return client.fetch(query);
}

export async function getkodegoPage(slug: string): Promise<kodegoPage> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query, { slug });
  }

  export async function getpreviousProjectCategories(): Promise<previousProjectCategory[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectCategory"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "feature_image1": feature_image1.asset->url,
      "feature_image2": feature_image2.asset->url,
      "feature_image3": feature_image3.asset->url
    }`;
  
    return client.fetch(query);
  }
  
  export async function getpreviousProjectCategory(slug: string): Promise<previousProjectCategory> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "feature_image1": feature_image1.asset->url,
      "feature_image2": feature_image2.asset->url,
      "feature_image3": feature_image3.asset->url
    }`;
  
    return client.fetch(query, { slug });
  }

export async function getpreviousProjectPages(): Promise<previousProjectPage[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query);
  }
  
  export async function getpreviousProjectPage(slug: string): Promise<previousProjectPage> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query, { slug });
  }

export async function getportfolioKodegoProjects(): Promise<portfolioKodegoProject[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      project_title,
      group_name,
      date_started,
      date_completed,
      git_repository,
      live_link,
      content
    }`;
  
    return client.fetch(query);
  }
  
  export async function getportfolioKodegoProject(slug: string): Promise<portfolioKodegoProject> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      project_title,
      group_name,
      date_started,
      date_completed,
      git_repository,
      live_link,
      content
    }`;
  
    return client.fetch(query, { slug });
  }

  export async function getspecialProjectCategories(): Promise<specialProjectCategory[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectCategory"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "feature_image1": feature_image1.asset->url,
      "feature_image2": feature_image2.asset->url,
      "feature_image3": feature_image3.asset->url
    }`;
  
    return client.fetch(query);
  }
  
  export async function getspecialProjectCategory(slug: string): Promise<specialProjectCategory> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectCategory" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "feature_image1": feature_image1.asset->url,
      "feature_image2": feature_image2.asset->url,
      "feature_image3": feature_image3.asset->url
    }`;
  
    return client.fetch(query, { slug });
  }  

  export async function getspecialProjectPages(): Promise<specialProjectPage[]> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query);
  }
  
  export async function getspecialProjectPage(slug: string): Promise<specialProjectPage> {
    const client = createClient(clientConfig);
  
    const query = groq`*[_type == "projectFeature" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      description,
      subtitle,
      details
    }`;
  
    return client.fetch(query, { slug });
  }