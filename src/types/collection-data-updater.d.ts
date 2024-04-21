// src/types/collection-data-updater.d.ts
declare module "@hashlips-lab/collection-data-updater" {
  import { BigNumber } from "ethers";

  export interface S3ConfigurationInterface {
    accessKey: string;
    secretKey: string;
    endpoint: string;
    bucketName: string;
    pathPrefix: string;
  }

  export class CollectionDataUpdater {
    constructor(
      statusProvider: ERC721CollectionStatusProvider,
      fileDataUpdaters: S3BasicFileDataUpdater[],
      runtimes: any[]
    );
    start(): void;
  }

  export class ERC721Contract {
    constructor(address: string, provider: string);
  }

  export class ERC721CollectionStatusProvider {
    constructor(contract: ERC721Contract, startTokenId: BigNumber);
  }

  export class S3BasicFileDataUpdater {
    constructor(
      label: string,
      config: S3ConfigurationInterface,
      privatePath: string,
      publicPath: string,
      extension: string
    );
  }

  export class S3BasicNftMetadataDataUpdater {
    constructor(
      label: string,
      config: S3ConfigurationInterface,
      privatePath: string,
      publicPath: string,
      transformMetadata: (tokenId: BigNumber, metadata: any) => any
    );
  }

  export class UpdateAllTokensEveryNSecondsRuntime {
    constructor(seconds: number);
  }

  export class UpdateTokenOnMintRuntime {
    constructor(contract: ERC721Contract);
  }
}
