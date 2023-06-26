import { bootcampPage } from "@/types/BootcampPage";
import { freelancePage } from "@/types/FreelancePage";
import { kodegoCategory } from "@/types/KodegoCategory";
import { kodegoPage } from "@/types/KodegoPage";
import { previousProjectPage } from "@/types/PreviousProjectPage";
import { portfolioKodegoProject } from "@/types/Project";
import { specialProjectPage } from "@/types/specialProjectPage";

import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

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