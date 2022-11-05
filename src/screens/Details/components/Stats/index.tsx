import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Progress from 'react-native-progress';

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
} from './styles';

export function Stats() {

  function colorPercentageProgress(value: number) {
    if (value > .0 && value < .5) {
      return '#E63950'
    } else if (value >= .5 && value <= .65) {
      return '#45C0A3'
    } else {
      return '#53E37E'
    }
  }

  function colorPercentageProgressTotal(value: number) {
    const total = value / 600 * 100 / 100;

    if (total > .0 && total < .5) {
      return '#E63950'
    } else if (total >= .5 && total <= .65) {
      return '#45C0A3'
    } else {
      return '#53E37E'
    }
  }
  
  return (
    <Container>
      <StatsHeader>
        <GenderTitle>Gender</GenderTitle>

        <GenderPercent>
          <Gender>
            <Ionicons
              name='male-sharp'
              size={RFValue(15)}
              color={'#2D5BC6'}
            />
            <PercentText>87%</PercentText>
          </Gender>

          <Gender>
            <Ionicons
              name='female-sharp'
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
          <Progress.Bar
            progress={45 / 100}
            width={105}
            borderWidth={0}
            unfilledColor='#B7B7B8'
            color={colorPercentageProgress(45 / 100)}
          />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Attack</TitleStats>

        <ValueStats>
          <Value>49</Value>
          <Progress.Bar
            progress={49 / 100}
            width={105}
            borderWidth={0}
            unfilledColor='#B7B7B8'
            color={colorPercentageProgress(49 / 100)}
          />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Defense</TitleStats>

        <ValueStats>
          <Value>49</Value>
          <Progress.Bar
            progress={49 / 100}
            width={105}
            borderWidth={0}
            unfilledColor='#B7B7B8'
            color={colorPercentageProgress(49 / 100)}
          />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Spaecial Attack</TitleStats>

        <ValueStats>
          <Value>65</Value>
          <Progress.Bar
            progress={65 / 100}
            width={105}
            borderWidth={0}
            unfilledColor='#B7B7B8'
            color={colorPercentageProgress(65 / 100)}
          />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Special Defense</TitleStats>

        <ValueStats>
          <Value>65</Value>
          <Progress.Bar
            progress={.65}
            width={105}
            borderWidth={0}
            unfilledColor='#B7B7B8'
            color={colorPercentageProgress(65 / 100)}
          />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Speed</TitleStats>

        <ValueStats>
          <Value>45</Value>
          <Progress.Bar
            progress={.45}
            width={105}
            borderWidth={0}
            unfilledColor='#B7B7B8'
            color={colorPercentageProgress(45 / 100)}
          />
        </ValueStats>
      </ContentStats>

      <ContentStats>
        <TitleStats>Total</TitleStats>

        <ValueStats>
          <Value>318</Value>
          <Progress.Bar
            progress={318 / 600 * 100 / 100}
            width={105}
            borderWidth={0}
            unfilledColor='#B7B7B8'
            color={colorPercentageProgressTotal(318)}
          />
        </ValueStats>
      </ContentStats>

    </Container>
  );
}