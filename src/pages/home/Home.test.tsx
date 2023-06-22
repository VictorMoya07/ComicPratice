
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { useConfig } from '../../hooks/useConfig';

jest.mock('../../hooks/useConfig');

describe('Home component', () => {
 
  test('Se debe renderizar el componente CharacterComponent cuando config.characters es verdadero', () => {
    useConfig.mockReturnValue({
      config: { characters: true },
      setCheckConfig: jest.fn(),
      isLoading: false,
    });

    render(<Home />);

    expect(screen.getByTestId('charactercomponent')).toBeInTheDocument();
  });

  test('Se debe renderizar el componente EventsComponent cuando config.events es verdadero' , () => {
    useConfig.mockReturnValue({
      config: { events: true },
      setCheckConfig: jest.fn(),
      isLoading: false,
    });

    render(<Home />);

    expect(screen.getByTestId('eventscomponent')).toBeInTheDocument();
  });

  test('Se debe renderizar el componente ComicComponent cuando config.comics es verdadero', () => {
    useConfig.mockReturnValue({
      config: { comics: true },
      setCheckConfig: jest.fn(),
      isLoading: false,
    });

    render(<Home />);

    expect(screen.getByTestId('comiccomponent')).toBeInTheDocument();
  });

  test('Se debe renderizar el componente SeriesComponent cuando config.series es verdadero', () => {
    useConfig.mockReturnValue({
      config: { series: true },
      setCheckConfig: jest.fn(),
      isLoading: false,
    });

    render(<Home />);

    expect(screen.getByTestId('series-component')).toBeInTheDocument();
  });
});