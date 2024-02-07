import { render, screen } from '@testing-library/react';
import SearchUserRepository from '../components/SearchUserRepository/SearchUserRepository';
import '@testing-library/jest-dom';


describe('SearchUserRepository', () => {


  test('renders search input and language select', () => {
    render(<SearchUserRepository username="testuser" />);
    
    const searchInput = screen.getByLabelText('Search Repositories:');
    const languageSelect = screen.getByLabelText('Select Language:');
    
    expect(searchInput).toBeInTheDocument();
    expect(languageSelect).toBeInTheDocument();
  });

  

});