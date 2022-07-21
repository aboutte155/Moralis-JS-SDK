import { MoralisApi } from '@moralisweb3/api';
import { MoralisCoreProvider } from '@moralisweb3/core';
import { MoralisEvmApi } from '@moralisweb3/evm-api';
import { MoralisEvmUtils } from '@moralisweb3/evm-utils';
import { MOCK_API_KEY } from '../../mockRequests/config';
import { mockServer } from '../../mockRequests/mockRequests';

export function setupEvmApi(): MoralisEvmApi {
  const core = MoralisCoreProvider.getDefault();
  const api = MoralisApi.create(core);
  const evmUtils = MoralisEvmUtils.create(core);
  const envApi = MoralisEvmApi.create(core);

  core.registerModules([api, evmUtils, envApi]);
  core.start({
    apiKey: MOCK_API_KEY,
  });

  mockServer.listen({
    onUnhandledRequest: 'warn',
  });

  return envApi;
}

export function cleanEnvApi() {
  mockServer.close();
}
