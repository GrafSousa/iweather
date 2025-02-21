import { render, screen } from '@testing-library/react-native';

import clearDay from '@assets/clear_day.svg';

import { NextDays } from '@components/NextDays';

describe('Component: NextDays', () => {
  it('should be render day.', () => {
    render(
      <NextDays
        data={[
          {
            day: '21/02',
            min: '30c',
            max: '40c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '22/02',
            min: '30c',
            max: '40c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '23/02',
            min: '30c',
            max: '40c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '24/02',
            min: '30c',
            max: '40c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '25/02',
            min: '30c',
            max: '40c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '26/02',
            min: '30c',
            max: '40c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
        ]}
      />
    );

    expect(screen.getByText('25/02')).toBeTruthy();
  });
});
