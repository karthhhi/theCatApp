import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';
import '@testing-library/jest-dom';

jest.mock('../../src/components/Loader/cat-loader.jpg', () => ({
    src: '/cat-loader.jpg', 
}));
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    expect(screen.getByTestId('breed-heading')).toBeInTheDocument();
  });
});