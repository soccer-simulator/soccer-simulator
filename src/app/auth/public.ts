import { SetMetadata } from '@nestjs/common';

import { AUTH_PUBLIC_ROUTE } from './const';

export const Public = () => SetMetadata(AUTH_PUBLIC_ROUTE, true);
