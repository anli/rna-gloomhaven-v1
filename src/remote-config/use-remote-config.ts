import {useEffect, useState} from 'react';
import RemoteConfigService from './service';

const useRemoteConfig = (
  developerMode: boolean = false,
  defaults: {[key: string]: string},
) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getInit$ = async () => {
      await RemoteConfigService.init$(developerMode, defaults);
      setLoading(false);
    };

    getInit$();
  }, [developerMode, defaults]);

  const data = {loading};

  return {data};
};

export default useRemoteConfig;
