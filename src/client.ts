import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.REACT_APP_CLIENT_ID,
  dataset: 'production',
  apiVersion: '2024-10-25',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source);