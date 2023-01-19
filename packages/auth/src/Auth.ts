import { ApiModule, Core, CoreProvider, ModuleType } from '@moralisweb3/common-core';
import { makeRequestMessage, RequestMessageOptions } from './methods/requestMessage';
import { makeVerify, VerifyEvmOptions, VerifyOptions, VerifySolOptions } from './methods/verify';
import {
  VerifyChallengeSolanaResponseAdapter,
  VerifyChallengeEvmResponseAdapter,
  RequestChallengeEvmResponseAdapter,
  requestChallengeEvmOperation,
  RequestChallengeEvmRequest,
  RequestChallengeSolanaResponseAdapter,
  requestChallengeSolanaOperation,
  RequestChallengeSolanaRequest,
} from '@moralisweb3/common-auth-utils';
import { OperationResolver } from '@moralisweb3/api-utils';

export const BASE_URL = 'https://authapi.moralis.io';

export class Auth implements ApiModule {
  public static moduleName = 'auth';

  public static create(core?: Core): Auth {
    return new Auth(core ?? CoreProvider.getDefault());
  }

  public readonly name = Auth.moduleName;
  public readonly type = ModuleType.API;
  public readonly baseUrl = BASE_URL;

  private constructor(private readonly core: Core) {}

  // Client-side compatible operation, structured in a predictable way as defined in the operation
  // TODO: generate in seperate package "client-evm-auth" (similar to client-evm-auth)
  public readonly evm = {
    requestChallengeEvm: (request: RequestChallengeEvmRequest): Promise<RequestChallengeEvmResponseAdapter> => {
      return new OperationResolver(requestChallengeEvmOperation, this.baseUrl, this.core).fetch(request);
    },
  };

  // Client-side compatible operation, structured in a predictable way as defined in the operation
  // TODO: generate in seperate package "client-evm-auth" (similar to client-evm-auth)
  public readonly solana = {
    requestChallengeSol: (request: RequestChallengeSolanaRequest): Promise<RequestChallengeSolanaResponseAdapter> => {
      return new OperationResolver(requestChallengeSolanaOperation, this.baseUrl, this.core).fetch(request);
    },
  };

  // Resolves to requestChallengeEvm/requestChallengeSol depending on provided options (defaults to evm)
  public requestMessage = (options: RequestMessageOptions) => makeRequestMessage(this.core)(options);

  // Function overloading to make typescript happy
  public verify(options: VerifyEvmOptions): Promise<VerifyChallengeEvmResponseAdapter>;
  public verify(options: VerifySolOptions): Promise<VerifyChallengeSolanaResponseAdapter>;
  public verify(options: VerifyOptions) {
    return makeVerify(this.core)(options);
  }
}
