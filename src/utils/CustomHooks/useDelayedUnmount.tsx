import { useEffect, useState } from 'react';

/**
 * Use to apply animations or transitions to components
 * Sets a timeout value on onmount to show styles before leaving the DOM
 * @param isMounted A boolean value indicating that the component is mounted
 * @param delayTime The duration the component should wait before unmounting
 */
const useDelayedUnmount = (isMounted: boolean, delayTime: number): boolean => {
  const [shouldRenderComponent, setShouldRenderComponent] = useState<boolean>(
    false,
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !shouldRenderComponent) {
      setShouldRenderComponent(true);
    } else if (!isMounted && shouldRenderComponent) {
      timeoutId = setTimeout(() => setShouldRenderComponent(false), delayTime);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRenderComponent]);

  return shouldRenderComponent;
};

export default useDelayedUnmount;
