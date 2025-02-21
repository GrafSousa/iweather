import { render, screen } from '@testing-library/react-native';

import clearDay from '@assets/clear_day.svg';

import { Day } from '@components/Day';

describe('Component: Day', () => {
  it('should be render day.', () => {
    render(
      <Day
        data={{
          day: '21/02',
          min: '30c',
          max: '40c',
          icon: clearDay,
          weather: 'Céu limpo',
        }}
      />
    );

    expect(screen.getByText('21/02')).toBeTruthy();
  });
});
