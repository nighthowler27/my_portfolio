import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient ({
    projectId: "hhhefoj3",
    dataset: "production",
    apiVersion: "2023-06-23",
    useCdn: true,
    ignoreBrowserTokenWarning: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN  

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);