# @moralisweb3/client-firebase-evm-auth

## 2.18.4

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.18.4

## 2.18.3

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.18.3

## 2.18.2

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.18.2

## 2.18.1

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.18.1

## 2.18.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.18.0

## 2.17.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.17.0

## 2.16.1

### Patch Changes

- [`8981730d6`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/8981730d65da048fbd0abd7e48b3fc7fc6084ddc) Thanks [@ErnoW](https://github.com/ErnoW)! - Bump version for release

- Updated dependencies [[`8981730d6`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/8981730d65da048fbd0abd7e48b3fc7fc6084ddc)]:
  - @moralisweb3/client-firebase-auth-utils@2.16.1

## 2.16.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.16.0

## 2.15.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.15.0

## 2.14.3

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.14.3

## 2.14.2

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.14.2

## 2.14.1

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.14.1

## 2.14.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.14.0

## 2.13.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.13.0

## 2.12.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.12.0

## 2.11.1

### Patch Changes

- [#941](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/941) [`11b751d98`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/11b751d983adea43b3d9ce2513b3148aca4afa32) Thanks [@b4rtaz](https://github.com/b4rtaz)! - Replaced Firebase dependencies to single root dependency (`firebase`).

- Updated dependencies [[`11b751d98`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/11b751d983adea43b3d9ce2513b3148aca4afa32)]:
  - @moralisweb3/client-firebase-auth-utils@2.11.1

## 2.11.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.11.0

## 2.10.3

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.10.3

## 2.10.2

### Patch Changes

- [#912](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/912) [`26848dc2d`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/26848dc2d5c836e3d2cbbc171b4b247d2222869b) Thanks [@ErnoW](https://github.com/ErnoW)! - Update api types to include latest features and fixes of evmApi and streams. This includes:

  - removal of deprecated `subdomain` and `providerUrl` params
  - evm endpooint for `getMultipleNFTs`
  - evm endpoint updated for `getNFTContractTransfers` to include `fromBlock`, `toBlock`, `fromDate` and `toDate` params
  - streams support for `getNativeBalances`

- Updated dependencies [[`26848dc2d`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/26848dc2d5c836e3d2cbbc171b4b247d2222869b)]:
  - @moralisweb3/client-firebase-auth-utils@2.10.2

## 2.10.1

### Patch Changes

- Updated dependencies [[`05770cd1c`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/05770cd1ce6ef5b26bdcc12d7f9ba5f00fa55026)]:
  - @moralisweb3/client-firebase-auth-utils@2.10.1

## 2.10.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.10.0

## 2.9.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.9.0

## 2.8.2

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.8.2

## 2.8.1

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.8.1

## 2.8.0

### Minor Changes

- [#777](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/777) [`f1336a35`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/f1336a35fc2df2d9c7f4c1c376d0b38eb57de702) Thanks [@ErnoW](https://github.com/ErnoW)! - Move `@moralisweb3/core` package to `@moralisweb3/common-core`

* [#846](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/846) [`1374573d`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/1374573d183d3aba0b92e313855bde7a15542f46) Thanks [@ErnoW](https://github.com/ErnoW)! - # Api responses (breaking change)

  For any api call, you get a resultAdapter response. The value of the `toJSON()` value has changed. Now it is the same value as `.raw`. Previously this caused a lot of confusion, and as both return a json. The value of this method has changed. So if you used `.toJSON()` on an api result you can:

  - Use `.result`, this will probably contain dataTypes with lots of utility functions. If you only care about the data, you can call `.format()` or `.toJSON()` on this datatype. This is the prefered way as it provides you wilt additional utilites and extra properties. We suggest you to use Typescript, to easily see the available properties/methods on these datatypes.
  - Or. use the new values (or values from `.raw`), these values are identical as they are provided by the internal api, without any data transformation. The types might be different than before, so please check this (we suggest to use Typescript, as all responses are typed, otherwise you can log the output and see any differences)

  # Package name changes (deprecated, upcomming breaking change)

  If you're using some of our internal packages @moralisweb3/core for example then these names have been changed to differentiate between server-side packages, and packages that are compatible with client-side and server-side. We name these common-\*. This is a first step to provide better client-side support:

  ## Migration guide

  - `@moralisweb3/core` -> `@moralisweb3/common-core`
  - `@moralisweb3/evm-utils` -> `@moralisweb3/common-evm-utils`
  - `@moralisweb3/sol-utils` -> `@moralisweb3/common-sol-utils`

  Change your dependencies in package.json and the corresponding imports in your code to the new names.

  For the time being, the old packages will remain, and we use them to forward to the common-\* package, this will be removed in a future version, so please update to the new package name.

  # NextJs package

  For easy integration we created a nextJs package. See `packages/next`. This contains:

  - hooks to all api endpoints
  - adapter to integrate into NextJs authentication via Moralis Auth

  For a demo check out `demos/nextjs`

  # Operation types

  The parameters and return types are now exported for every api operation. These are exported from

  - `moralis/common-evm-utils` for evm api methods
  - `moralis/common-sol-utils` for sol api methods
  - `moralis/common-auth-utils` for auth methods
  - `moralis/common-streams-utils` for streams methods

  For example:

  ```typescript
  import Moralis from 'moralis';
  import { GetContractNFTsRequest, EvmChain, GetContractNFTsResponse } from 'moralis/common-evm-utils';

  const getBlockOptions: GetContractNFTsRequest = {
    address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
    chain: EvmChain.ETHEREUM,
  };

  let result: GetContractNFTsResponse;

  const response = await Moralis.EvmApi.nft.getContractNFTs(getBlockOptions);
  result = response.result;
  ```

  # Dataytypes support in client-side projects

  As a first step to provide better client-side support, all datatypes are now usable in server-side and client-side.

### Patch Changes

- Updated dependencies [[`f1336a35`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/f1336a35fc2df2d9c7f4c1c376d0b38eb57de702), [`1374573d`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/1374573d183d3aba0b92e313855bde7a15542f46)]:
  - @moralisweb3/client-firebase-auth-utils@2.8.0

## 2.7.4

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.7.4

## 2.7.3

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.7.3

## 2.7.2

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.7.2

## 2.7.1

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.7.1

## 2.7.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.7.0

## 2.6.7

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.6.7

## 2.6.6

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.6.6

## 2.6.5

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.6.5

## 2.6.4

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.6.4

## 2.6.3

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.6.3

## 2.6.2

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.6.2

## 2.6.1

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.6.1

## 2.6.0

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.6.0

## 2.5.8

### Patch Changes

- [#708](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/708) [`870c790f`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/870c790fb9e9807566fda28840b1fe3cb75efc03) Thanks [@b4rtaz](https://github.com/b4rtaz)! - Fixed problem with connection to MetaMask.

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.5.8

## 2.5.7

### Patch Changes

- [#704](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/704) [`e0cd475d`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/e0cd475dc6ae81943eef4c10058bf35aeaa8f1c5) Thanks [@b4rtaz](https://github.com/b4rtaz)! - Change the approach to reading an address of an EVM wallet.

- Updated dependencies []:
  - @moralisweb3/client-firebase-auth-utils@2.5.7

## 2.5.6

### Patch Changes

- [#702](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/702) [`97425b54`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/97425b54140f2e2779057fbba30c62fa6151fc22) Thanks [@b4rtaz](https://github.com/b4rtaz)! - Add client package for Firebase authentication.

- Updated dependencies [[`97425b54`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/97425b54140f2e2779057fbba30c62fa6151fc22)]:
  - @moralisweb3/client-firebase-auth-utils@2.5.6
