import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container,
  StatsHeader,
  GenderTitle,
  GenderPercent,
  Gender,
  PercentText,
  ContentStats,
  TitleStats,
  ValueStats,
  Value,
  Percent,
} from './styles';

export function Stats() {
  return (
    <Container>
      <StatsHeader>
        <GenderTitle>Gender</GenderTitle>

        <GenderPercent>
          <Gender>
            <Ionicons
              name='male-outline'
              size={RFValue(15)}
              color={'#2D5BC6'}
            />
            <PercentText>87%</PercentText>
          </Gender>

          <Gender>
            <Ionicons
              name='female-outline'
              size={RFValue(15)}
              color={'#FF386F'}
            />
            <PercentText>13%</PercentText>
          </Gender>
        </GenderPercent>
      </StatsHeader>


      <ContentStats>
        <TitleStats>HP</TitleStats>

        <ValueStats>
          <Value>45</Value>
          <Percent />
        </ValueStats>
      </ContentStats>
      <ContentStats>
        <TitleStats>Attack</TitleStats>

        <ValueStats>
          <Value>49</Value>
          <Percent />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Sefense</TitleStats>

        <ValueStats>
          <Value>49</Value>
          <Percent />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Spaecial Attack</TitleStats>

        <ValueStats>
          <Value>65</Value>
          <Percent />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Special Defense</TitleStats>

        <ValueStats>
          <Value>65</Value>
          <Percent />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Speed</TitleStats>

        <ValueStats>
          <Value>45</Value>
          <Percent />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Total</TitleStats>

        <ValueStats>
          <Value>318</Value>
          <Percent />
        </ValueStats>
      </ContentStats>

    </Container>
  );
}