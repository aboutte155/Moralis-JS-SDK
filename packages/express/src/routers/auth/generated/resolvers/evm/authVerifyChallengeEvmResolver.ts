import { VerifyChallengeEvmJSONRequest, verifyChallengeEvmOperation } from 'moralis/common-auth-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestBody = Pick<VerifyChallengeEvmJSONRequest, 'message' | 'signature'>;

export const authVerifyChallengeEvmResolver = async (
  req: Request<any, any, RequestBody, any>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(verifyChallengeEvmOperation, Moralis.Auth.baseUrl, Moralis.Core).fetch(
      verifyChallengeEvmOperation.deserializeRequest({ ...req.body }, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};
