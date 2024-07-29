import * as queryStore from "@sanity/react-loader";

import { client } from "./client";
import { token } from "./token";
import { SanityDocument } from "next-sanity";

queryStore.setServerClient(client.withConfig({ token }));

const { loadQuery } = queryStore;

export const queryCMS = async (q: string) =>
  await loadQuery<SanityDocument[]>(q);
