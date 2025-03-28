import {
  Core,
  Camelize,
  PaginatedOperation,
  PaginatedResponseAdapter,
  maybe,
  toCamelCase,
} from '@moralisweb3/common-core';
import { EvmChain, EvmChainish, EvmAddress, EvmAddressish } from '../../dataTypes';
import { Erc20Approval } from '../../dataTypes/Erc20Approval';
import { EvmChainResolver } from '../../EvmChainResolver';
import { operations } from '../openapi';

type OperationId = 'getErc20Approvals';

type QueryParams = operations[OperationId]['parameters']['query'];
type RequestParams = QueryParams;

type SuccessResponse = operations[OperationId]['responses']['200']['content']['application/json'];

// Exports

export interface GetErc20ApprovalsRequest
  extends Camelize<
    Omit<RequestParams, 'chain' | 'contract_addresses' | 'exclude_contracts' | 'wallet_addresses' | 'exclude_wallets'>
  > {
  chain?: EvmChainish;
  contractAddresses?: EvmAddressish[];
  excludeContracts?: EvmAddressish[];
  walletAddresses?: EvmAddressish[];
  excludeWallets?: EvmAddressish[];
}

export type GetErc20ApprovalsJSONRequest = ReturnType<typeof serializeRequest>;

export type GetErc20ApprovalsJSONResponse = SuccessResponse;

export type GetErc20ApprovalsResponse = ReturnType<typeof deserializeResponse>;

export interface GetErc20ApprovalsResponseAdapter
  extends PaginatedResponseAdapter<GetErc20ApprovalsResponse, GetErc20ApprovalsJSONResponse['result']> {}

/** Get the amount which the spender is allowed to withdraw on behalf of the owner. */
export const getErc20ApprovalsOperation: PaginatedOperation<
  GetErc20ApprovalsRequest,
  GetErc20ApprovalsJSONRequest,
  GetErc20ApprovalsResponse,
  GetErc20ApprovalsJSONResponse['result']
> = {
  method: 'GET',
  name: 'getErc20Approvals',
  id: 'getErc20Approvals',
  groupName: 'token',
  urlPathPattern: '/erc20/approvals',
  urlSearchParamNames: [
    'chain',
    'fromBlock',
    'toBlock',
    'limit',
    'cursor',
    'contractAddresses',
    'excludeContracts',
    'walletAddresses',
    'excludeWallets',
  ],
  firstPageIndex: 0,

  getRequestUrlParams,
  serializeRequest,
  deserializeRequest,
  deserializeResponse,
};

// Methods

function getRequestUrlParams(request: GetErc20ApprovalsRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    from_block: maybe(request.fromBlock, String),
    to_block: maybe(request.toBlock, String),
    limit: maybe(request.limit, String),
    cursor: request.cursor,

    contract_addresses: request.contractAddresses?.map((address) => EvmAddress.create(address, core).lowercase),
    exclude_contracts: request.excludeContracts?.map((address) => EvmAddress.create(address, core).lowercase),
    wallet_addresses: request.walletAddresses?.map((address) => EvmAddress.create(address, core).lowercase),
    exclude_wallets: request.excludeWallets?.map((address) => EvmAddress.create(address, core).lowercase),
  };
}

function deserializeResponse(
  jsonResponse: GetErc20ApprovalsJSONResponse,
  request: GetErc20ApprovalsRequest,
  core: Core,
) {
  return (jsonResponse.result ?? []).map((approval) =>
    Erc20Approval.create(
      {
        ...toCamelCase(approval),
        chain: EvmChainResolver.resolve(request.chain, core),
      },
      core,
    ),
  );
}

function serializeRequest(request: GetErc20ApprovalsRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    limit: request.limit,
    cursor: request.cursor,
    fromBlock: request.fromBlock,
    toBlock: request.toBlock,

    contractAddresses: request.contractAddresses?.map((address) => EvmAddress.create(address, core).lowercase),
    excludeContracts: request.excludeContracts?.map((address) => EvmAddress.create(address, core).lowercase),
    walletAddresses: request.walletAddresses?.map((address) => EvmAddress.create(address, core).lowercase),
    excludeWallets: request.excludeWallets?.map((address) => EvmAddress.create(address, core).lowercase),
  };
}

function deserializeRequest(jsonRequest: GetErc20ApprovalsJSONRequest, core: Core): GetErc20ApprovalsRequest {
  return {
    chain: EvmChain.create(jsonRequest.chain, core),
    limit: jsonRequest.limit,
    cursor: jsonRequest.cursor,
    fromBlock: jsonRequest.fromBlock,
    toBlock: jsonRequest.toBlock,

    contractAddresses: jsonRequest.contractAddresses?.map((address) => EvmAddress.create(address, core)),
    excludeContracts: jsonRequest.excludeContracts?.map((address) => EvmAddress.create(address, core)),
    walletAddresses: jsonRequest.walletAddresses?.map((address) => EvmAddress.create(address, core)),
    excludeWallets: jsonRequest.excludeWallets?.map((address) => EvmAddress.create(address, core)),
  };
}
