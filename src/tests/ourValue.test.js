import React from 'react';
import { render } from '@testing-library/react';
import { FaHeart, FaStar, FaThumbsUp } from 'react-icons/fa';

import OurValue from '../components/OurValue';

describe('OurValue', () => {
    it('should render three value items', () => {
        const { getAllByTestId } = render(<OurValue />);
        const valueItems = getAllByTestId('value-item');
        expect(valueItems.length).toBe(3);
    });

    // it('should render a heart icon for the first item', () => {
    //     const { getAllByTestId } = render(<OurValue />);
    //     const icon = getAllByTestId('value-icon')[0];
    //     expect(icon.classList.contains('text-red-500')).toBe(true);
    // });

    // it('should render a star icon for the second item', () => {
    //     const { getAllByTestId } = render(<OurValue />);
    //     const icon = getAllByTestId('value-icon')[1];
    //     expect(icon.classList.contains('text-yellow-500')).toBe(true);
    // });

    // it('should render a thumbs up icon for the third item', () => {
    //     const { getAllByTestId } = render(<OurValue />);
    //     const icon = getAllByTestId('value-icon')[2];
    //     expect(icon.classList.contains('text-green-500')).toBe(true);
    // });

    // it('should render the correct title for each item', () => {
    //     const { getByText } = render(<OurValue />);
    //     expect(getByText('Co-construction')).toBeInTheDocument();
    //     expect(getByText('Engagement')).toBeInTheDocument();
    //     expect(getByText('Performance')).toBeInTheDocument();
    // });

    // it('should render the correct content for each item', () => {
    //     const { getByText } = render(<OurValue />);
    //     expect(getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    // });
});


