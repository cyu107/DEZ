import { useMediaQuery } from 'react-responsive';

// constants
import { BREAK_POINTS } from '../constants';

export const useMediaSize = () => {
  const isTablet = useMediaQuery({ query: `(max-width: ${BREAK_POINTS.tablet_lg}px) and (min-width: ${BREAK_POINTS.mobile_lg + 1}px)` });
  const isMobile = useMediaQuery({ query: `(max-width: ${BREAK_POINTS.mobile_lg}px)` });

  return {
    isTablet,
    isMobile
  };
};
