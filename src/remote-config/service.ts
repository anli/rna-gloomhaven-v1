import {default as _remoteConfig} from './remote-config';

/* istanbul ignore next */
const init$ = async (
  developerMode: boolean = false,
  defaults: {[key: string]: string},
) => {
  await _remoteConfig().setConfigSettings({
    isDeveloperModeEnabled: developerMode,
  });

  await _remoteConfig().setDefaults(defaults);

  await _remoteConfig().fetchAndActivate();

  return true;
};

const value = <T>(key: string) => {
  const config: any = _remoteConfig().getValue(key)?.value;
  const mapConfig: T = config;
  return mapConfig;
};

export default class RemoteConfigService {
  static init$ = init$;
  static remoteConfig = _remoteConfig;
  static value = value;
}
