import { render, screen, fireEvent } from '@testing-library/react';
import AuthPage from './AuthPage';
import { useForm } from '../../hooks/useForm';

describe('Se prueba que el componente authpage carge correctamente dependiendo de estado onRegistre', () => {
  
  test('Se debe observar el texto Registrate cuando onRegister es verdadero', () => {

    useForm.mockReturnValue({
        onRegister: true ,
      });
    render(<AuthPage />);
    
    expect(screen.getByText('Registrate')).toBeInTheDocument();
  });

  test('Debe cambiar de texto cuando onRegister sea falso a Inicia Sesion ', () => {
    useForm.mockReturnValue({
        onRegister: false ,
      });
    render(<AuthPage />);
    
    expect(screen.getByText('Inicia Sesion')).toBeInTheDocument();
  });

  
});