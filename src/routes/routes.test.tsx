import { waitFor, screen, act } from '@testing-library/react-native';

import { api } from '@services/api';
import { Routes } from '@routes/index';
import { render } from '@__tests__/utils/customRender';
import { saveStorageCity } from '@libs/asyncStorage/cityStorage';
import { mockWeatherAPIResponse } from '@__tests__/__mocks__/api/mockWeatherAPIResponse';

describe('Routes', () => {
  it('should be render Search screen when not city selected', async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it('should be render Dashboard screen when has city selected', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: '1',
      name: 'BH',
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    await waitFor(() => render(<Routes />));

    const title = await waitFor(() => screen.getByText(city.name));

    expect(title).toBeTruthy();
  });
});
