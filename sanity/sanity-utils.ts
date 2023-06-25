import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import  clientConfig  from "./config/client-config";

export async function getProjects() : Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
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
        }`
    );

}

export async function getProject() : Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
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
        }`,
        { slug : "slug" }
    );

}