import {
  BannerAd as NativeBannerAd,
  BannerAdSize,
} from '@react-native-firebase/admob';
import React from 'react';
import useAdmob from './use-admob';

const BannerAd = () => {
  const {data: admobData} = useAdmob();

  return (
    <NativeBannerAd
      unitId={admobData.unitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default BannerAd;
