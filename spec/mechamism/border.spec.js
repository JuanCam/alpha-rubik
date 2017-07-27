import {Border} from '../../app/classes/cube/border.class';

describe('Border', () => {

    it('should show the correct id for the first border in the right side', () => {
        let border = new Border({
                        labels: ['orange', 'yellow'],
                        reference: 3
                    });
        expect(border.id).toBe('B-OY');
    });
    it('should show the correct id for the second border in the right side', () => {
        let border = new Border({
                        labels: ['orange', 'white'],
                        reference: 1
                    });
        expect(border.id).toBe('B-OW');
    });
    
    it('should show the correct id for the thrid border in the right side', () => {
        let border = new Border({
                        labels: ['orange', 'blue'],
                        reference: 2
                    });
        expect(border.id).toBe('B-OB');
    });
    
    it('should show the correct id for the 4th border in the right side', () => {
        let border = new Border({
                        labels: ['orange', 'green'],
                        reference: 4
                    });
        expect(border.id).toBe('B-OG');
    });
    
    it('should show the correct id for the 5th border in the left side', () => {
        let border = new Border({
                        labels: ['red', 'yellow'],
                        reference: 3
                    });
        expect(border.id).toBe('B-RY');
    });
    
    it('should show the correct id for the 6th border in the left side', () => {
        let border = new Border({
                        labels: ['red', 'white'],
                        reference: 1
                    });
        expect(border.id).toBe('B-RW');
    });
    
    it('should show the correct id for the 7th border in the left side', () => {
        let border = new Border({
                        labels: ['red', 'blue'],
                        reference: 4
                    });
        expect(border.id).toBe('B-RB');
    });
    
    it('should show the correct id for the 8th border in the left side', () => {
        let border = new Border({
                        labels: ['red', 'green'],
                        reference: 2
                    });
        expect(border.id).toBe('B-RG');
    });
                    
    it('should show the correct id for the 9th border in the up side', () => {
        let border = new Border({
                        labels: ['yellow', 'blue'],
                        reference: 3
                    });
        expect(border.id).toBe('B-YB');
    });
    
    it('should show the correct id for the 10th border in the up side', () => {
        let border = new Border({
                        labels: ['yellow', 'green'],
                        reference: 1
                    });
        expect(border.id).toBe('B-YG');
    });
    
    it('should show the correct id for the 11th border in the down side', () => {
        let border = new Border({
                        labels: ['white', 'green'],
                        reference: 3
                    });
        expect(border.id).toBe('B-WG');
    });
    
    it('should show the correct id for the 12th border in the down side', () => {
        let border = new Border({
                        labels: ['white', 'blue'],
                        reference: 1
                    });
        expect(border.id).toBe('B-WB');
    });
});
