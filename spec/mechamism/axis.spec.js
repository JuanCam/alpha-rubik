import {Axis} from '../../app/classes/cube/axis.class';
import {Center} from '../../app/classes/cube/center.class';

describe('Axis', () => {

    let rightXAxis;
    let upYAxis;
    let frontZAxis;
    let leftXAxis;
    let downYAxis;
    let backZAxis;
    let rightCenter;
    let leftCenter;
    let upCenter;
    let downCenter;
    let fronCenter;
    let backCenter;

    beforeEach(() => {
        rightXAxis = new Axis({
            x: [0, 1]
        });
        upYAxis = new Axis({
            y: [0, 1]
        });
        frontZAxis = new Axis({
            z: [0, 1]
        });
        leftXAxis = new Axis({
            x: [-1, 0]
        });
        downYAxis = new Axis({
            y: [-1, 0]
        });
        backZAxis = new Axis({
            z: [-1, 0]
        });
        rightCenter = new Center({
            axis: rightXAxis
        });
        leftCenter = new Center({
            axis: leftXAxis
        });
        upCenter = new Center({
            axis: upYAxis
        });
        downCenter = new Center({
            axis: downYAxis
        });
        fronCenter = new Center({
            axis: frontZAxis
        });
        backCenter = new Center({
            axis: backZAxis
        });
    });

    it('should get the correct x sign for right axis', () => {
        expect(rightXAxis.sign('x')).toBe('+');
    });
    it('should get the correct y sign for right axis', () => {
        expect(rightXAxis.sign('y')).toBe('');
    });
    it('should get the correct z sign for right axis', () => {
        expect(rightXAxis.sign('z')).toBe('');
    });

    it('should get the correct x sign for up axis', () => {
        expect(upYAxis.sign('x')).toBe('');
    });
    it('should get the correct y sign for up axis', () => {
        expect(upYAxis.sign('y')).toBe('+');
    });
    it('should get the correct z sign for up axis', () => {
        expect(upYAxis.sign('z')).toBe('');
    });
    
    it('should get the correct x sign for front axis', () => {
        expect(frontZAxis.sign('x')).toBe('');
    });
    it('should get the correct y sign for front axis', () => {
        expect(frontZAxis.sign('y')).toBe('');
    });
    it('should get the correct z sign for front axis', () => {
        expect(frontZAxis.sign('z')).toBe('+');
    });
    
    it('should get the correct x sign for left axis', () => {
        expect(leftXAxis.sign('x')).toBe('-');
    });
    it('should get the correct y sign for left axis', () => {
        expect(leftXAxis.sign('y')).toBe('');
    });
    it('should get the correct z sign for left axis', () => {
        expect(leftXAxis.sign('z')).toBe('');
    });
    
    it('should get the correct x sign for down axis', () => {
        expect(downYAxis.sign('x')).toBe('');
    });
    it('should get the correct y sign for down axis', () => {
        expect(downYAxis.sign('y')).toBe('-');
    });
    it('should get the correct z sign for down axis', () => {
        expect(downYAxis.sign('z')).toBe('');
    });
    
    it('should get the correct x sign for back axis', () => {
        expect(backZAxis.sign('x')).toBe('');
    });
    it('should get the correct y sign for back axis', () => {
        expect(backZAxis.sign('y')).toBe('');
    });
    it('should get the correct z sign for back axis', () => {
        expect(backZAxis.sign('z')).toBe('-');
    });


    it('should get the correct x size for right axis', () => {
        expect(rightXAxis.size('x')).toBe(1);
    });
    it('should get the correct y size for right axis', () => {
        expect(rightXAxis.size('y')).toBe(0);
    });
    it('should get the correct z size for right axis', () => {
        expect(rightXAxis.size('z')).toBe(0);
    });

    it('should get the correct x size for up axis', () => {
        expect(upYAxis.size('x')).toBe(0);
    });
    it('should get the correct y size for up axis', () => {
        expect(upYAxis.size('y')).toBe(1);
    });
    it('should get the correct z size for up axis', () => {
        expect(upYAxis.size('z')).toBe(0);
    });
    
    it('should get the correct y size for front axis', () => {
        expect(frontZAxis.size('x')).toBe(0);
    });
    it('should get the correct y size for front axis', () => {
        expect(frontZAxis.size('y')).toBe(0);
    });
    it('should get the correct y size for front axis', () => {
        expect(frontZAxis.size('z')).toBe(1);
    });

    it('should get the correct x size for left axis', () => {
        expect(leftXAxis.size('x')).toBe(1);
    });
    it('should get the correct y size for left axis', () => {
        expect(leftXAxis.size('y')).toBe(0);
    });
    it('should get the correct z size for left axis', () => {
        expect(leftXAxis.size('z')).toBe(0);
    });
    
    it('should get the correct z size for down axis', () => {
        expect(downYAxis.size('x')).toBe(0);
    });
    it('should get the correct y size for down axis', () => {
        expect(downYAxis.size('y')).toBe(1);
    });
    it('should get the correct z size for down axis', () => {
        expect(downYAxis.size('z')).toBe(0);
    });
    
    it('should get the correct x size for back axis', () => {
        expect(backZAxis.size('x')).toBe(0);
    });
    it('should get the correct y size for back axis', () => {
        expect(backZAxis.size('y')).toBe(0);
    });
    it('should get the correct z size for back axis', () => {
        expect(backZAxis.size('z')).toBe(1);
    });

    it('should get the correct sized axis for right axis', () => {
        expect(rightXAxis.sizedAxis).toEqual({size: 1, label: 'x'});
    });
    it('should get the correct sized axis for left axis', () => {
        expect(leftXAxis.sizedAxis).toEqual({size: 1, label: 'x'});
    });
    it('should get the correct sized axis for up axis', () => {
        expect(upYAxis.sizedAxis).toEqual({size: 1, label: 'y'});
    });
    it('should get the correct sized axis for down axis', () => {
        expect(downYAxis.sizedAxis).toEqual({size: 1, label: 'y'});
    });
    it('should get the correct sized axis for front axis', () => {
        expect(frontZAxis.sizedAxis).toEqual({size: 1, label: 'z'});
    });
    it('should get the correct sized axis for back axis', () => {
        expect(backZAxis.sizedAxis).toEqual({size: 1, label: 'z'});
    });
});