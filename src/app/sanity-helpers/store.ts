import * as queryStore from "@sanity/react-loader";

import { client } from "./client";
import { token } from "./token";
import { SanityDocument } from "next-sanity";

queryStore.setServerClient(client.withConfig({ token }));

const { loadQuery } = queryStore;

export async function queryCMS<T>(q: string): Promise<T> {
  const queryResult = await loadQuery<SanityDocument[]>(q);
  return queryResult.data as unknown as T;
}
