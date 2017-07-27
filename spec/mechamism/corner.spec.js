import {Corner} from '../../app/classes/cube/corner.class';

describe('Corners', () => {
    it('should return correct id for rgw labels', () => {
        let corner = new Corner({
            labels: ['red', 'green', 'white']
        });
        expect(corner.id).toBe('C-RGW');
    });
    it('should return correct id for rbw labels', () => {
        let corner = new Corner({
            labels: ['red', 'blue', 'white']
        });
        expect(corner.id).toBe('C-RBW');
    });
    it('should return correct id for rby labels', () => {
        let corner = new Corner({
            labels: ['red', 'blue', 'yellow']
        });
        expect(corner.id).toBe('C-RBY');
    });
    it('should return correct id for rgy labels', () => {
        let corner = new Corner({
            labels: ['red', 'green', 'yellow']
        });
        expect(corner.id).toBe('C-RGY');
    });
    it('should return correct id for ogy labels', () => {
        let corner = new Corner({
            labels: ['orange', 'green', 'yellow']
        });
        expect(corner.id).toBe('C-OGY');
    });
    it('should return correct id for ogw labels', () => {
        let corner = new Corner({
            labels: ['orange', 'green', 'white']
        });
        expect(corner.id).toBe('C-OGW');
    });
    it('should return correct id for obw labels', () => {
        let corner = new Corner({
            labels: ['orange', 'blue', 'white']
        });
        expect(corner.id).toBe('C-OBW');
    });
    it('should return correct id for oby labels', () => {
        let corner = new Corner({
            labels: ['orange', 'blue', 'yellow']
        });
        expect(corner.id).toBe('C-OBY');
    });
});