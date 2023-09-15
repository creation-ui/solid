import { getShortUUID } from '@creation-ui/core';

function useId(providedId?: string) {
  return providedId || getShortUUID();
}

export default useId;
