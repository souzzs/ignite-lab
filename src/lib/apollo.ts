import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4of3ksi21ez01xr85hv7inv/master',
    cache: new InMemoryCache()
});