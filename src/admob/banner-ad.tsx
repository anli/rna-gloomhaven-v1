import {
  BannerAd as NativeBannerAdUnstyled,
  BannerAdSize,
} from '@react-native-firebase/admob';
import React from 'react';
import useAdmob from './use-admob';

const BannerAd = () => {
  const {data: admobData} = useAdmob();

  return (
    <NativeBannerAdUnstyled
      unitId={admobData.unitId}
      size={BannerAdSize.SMART_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default BannerAd;
