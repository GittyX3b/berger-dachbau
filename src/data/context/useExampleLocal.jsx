import { use } from 'react';

import { ExampleLocalCtx } from '@context/ExampleLocalProvider';

export const useExampleLocal = () => use(ExampleLocalCtx);
