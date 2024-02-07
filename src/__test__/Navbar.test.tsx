
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';
import '@testing-library/jest-dom';

test('renders brand name', () => {
    const {getByText} = render(<Navbar />);

    const brandElement = getByText(/GitFinder/i);
    expect(brandElement).toBeInTheDocument();
});