// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/count/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  
  //Simulate Click
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);

  //Should update to 3
  expect(countElement.textContent).toBe('3');


});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  
  //Simulate Click
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);

  //Should update to -3
  expect(countElement.textContent).toBe('-3');

});
