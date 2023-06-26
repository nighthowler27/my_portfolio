import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "5g6o3yhu",
    dataset: 'production',
    title: "My Personal Website",
    apiVersion: "2023-06-23",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }

})


export default config;