import { OpenAPIClientAxios } from 'openapi-client-axios';
import { Client } from './types/index.js';

import * as OpenApiClientType from './types/openapi.js';

const api = new OpenAPIClientAxios({ definition: 'https://example.com/api/openapi.json' });
api.initSync();

export default class TochkaBankApi {
  async getClient() {
    const client: Client = await api.getClient();
    return client;
  }
}

export type ClientType = {
  Client: OpenApiClientType.Client;
  OperationMethods: OpenApiClientType.OperationMethods;
  PathsDictionary: OpenApiClientType.PathsDictionary;
};
