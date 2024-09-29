import { SetMetadata } from '@nestjs/common';

export const ANONYMOUS_KEY = 'isAnonymous';
export const AllowAnonymous = () => SetMetadata(ANONYMOUS_KEY, true);
