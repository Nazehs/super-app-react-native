import {
  headerDashboardLeftMargin,
  headerDashboardRightMargin,
  headerInJourneyBg,
  headerInJourneyFontColour,
} from '@/style-dictionary-dist/momoStyle';
import { gpsw } from '@/utils/parseTokenStyle';
import { Icon } from '@atom';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import TopHeaderContent from './TopHeaderContent';
import Header from './Header';

type BackHeadingXType = {
  title: string;
};

const BackHeadingX = ({ title }: BackHeadingXType) => {
  const { goBack } = useNavigation();
  return (
    <Header
      zIndex={1}
      py={'vm'}
      style={{
        backgroundColor: headerInJourneyBg,
      }}>
      <TopHeaderContent
        right={{
          rightComp: (
            <Icon
              name="HeaderXIcon"
              onPress={() => goBack()}
              size={16}
              color={headerInJourneyFontColour}
            />
          ),
        }}
        left={{
          leftComp: (
            <Icon
              name="MainBackIcon"
              onPress={() => goBack()}
              color={headerInJourneyFontColour}
              size={16}
            />
          ),
        }}
        title={title}
        containerStyle={{
          paddingLeft: gpsw(headerDashboardLeftMargin),
          paddingRight: gpsw(headerDashboardRightMargin),
        }}
      />
    </Header>
  );
};

export default BackHeadingX;
