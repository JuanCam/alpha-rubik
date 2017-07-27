import {Axis} from '../../app/classes/cube/axis.class';
import {Center} from '../../app/classes/cube/center.class';

describe('Center', () => {

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
    let frontCenter;
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
        frontCenter = new Center({
            axis: frontZAxis
        });
        backCenter = new Center({
            axis: backZAxis
        });
    });

    it('should get the right raw x axis', () => {
        expect(rightCenter.axisRawLabel).toBe('x');
    });

    it('should get the left raw x axis', () => {
        expect(leftCenter.axisRawLabel).toBe('x');
    });
    
    it('should get the up raw y axis', () => {
        expect(upCenter.axisRawLabel).toBe('y');
    });
    
    it('should get the down raw y axis', () => {
        expect(downCenter.axisRawLabel).toBe('y');
    });
    
    it('should get the front raw z axis', () => {
        expect(frontCenter.axisRawLabel).toBe('z');
    });
    
    it('should get the back raw z axis', () => {
        expect(backCenter.axisRawLabel).toBe('z');
    });
    

    it('should get the x axis positive', () => {
        expect(rightCenter.axisLabel).toBe('+x');
    });

    it('should get the x axis negative', () => {
        expect(leftCenter.axisLabel).toBe('-x');
    });
    
    it('should get the y axis positive', () => {
        expect(upCenter.axisLabel).toBe('+y');
    });
    
    it('should get the y axis negative', () => {
        expect(downCenter.axisLabel).toBe('-y');
    });
    
    it('should get the z axis positive', () => {
        expect(frontCenter.axisLabel).toBe('+z');
    });
    
    it('should get the z axis negative', () => {
        expect(backCenter.axisLabel).toBe('-z');
    });

    
    it('should rotate the upper center to the left (short move) 1 step', () => {
        expect(upCenter.rotate(-1)).toEqual([2, 3, 4, 1]);
    });
    
    it('should rotate the upper center to the left (short move) 2 step', () => {
        expect(upCenter.rotate(-2)).toEqual([3, 4, 1, 2]);
    });
    
    it('should rotate the upper center to the left (short move) 3 step', () => {
        ;
        expect(upCenter.rotate(-3)).toEqual([4, 1, 2, 3]);
    });
    
    it('should rotate the upper center to the left (short move) 4 step', () => {
        ;
        expect(upCenter.rotate(-4)).toEqual([1, 2, 3, 4]);
    });
    
    it('should rotate the upper center to the right (short move) 1 step', () => {
        expect(upCenter.rotate(1)).toEqual([4, 1, 2, 3]);
    });
    
    it('should rotate the upper center to the right (short move) 2 step', () => {
        expect(upCenter.rotate(2)).toEqual([3, 4, 1, 2]);
    });
    
    it('should rotate the upper center to the right (short move) 3 step', () => {
        expect(upCenter.rotate(3)).toEqual([2, 3, 4, 1]);
    });
    
    it('should rotate the upper center to the right (short move) 4 step', () => {
        expect(upCenter.rotate(4)).toEqual([1, 2, 3, 4]);
    });

    // Connected references zero moves
    
    it('should get connected references properly for -x', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '-x')).toEqual([4, 4, 4, 2]);
    });
    
    it('should get connected references properly for +x', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '+x')).toEqual([2, 4, 2, 2]);
    });
    
    it('should get connected references properly for -y', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '-y')).toEqual([1, 1, 1, 1]);
    });
    
    it('should get connected references properly for -z', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '-z')).toEqual([1, 4, 3, 2]);
    });
    
    it('should get connected references properly for +y', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '+y')).toEqual([3, 3, 3, 3]);
    });
    
    it('should get connected references properly for +z', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '+z')).toEqual([3, 4, 1, 2]);
    });

    // Connected references more than zero moves

    it('should place references in the proper way 0 steps (left face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '-x')).toEqual([4, 4, 4, 2]);
    });
    // backward -x

    it('should place references in the proper way 1 back step (left face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-1), '-x')).toEqual([2, 4, 4, 4]);
    });

    it('should place references in the proper way 2 back steps (left face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-2), '-x')).toEqual([4, 2, 4, 4]);
    });

    it('should place references in the proper way 3 back steps (left face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-3), '-x')).toEqual([4, 4, 2, 4]);
    });

    // forward -x

    it('should place references in the proper way 1 step (left face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(1), '-x')).toEqual([4, 4, 2, 4]);
    });

    it('should place references in the proper way 2 steps (left face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(2), '-x')).toEqual([4, 2, 4, 4]);
    });

    it('should place references in the proper way 3 steps (left face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(3), '-x')).toEqual([2, 4, 4, 4]);
    });

    // backward +x
    
    it('should place references in the proper way 0 step (right face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '+x')).toEqual([2, 4, 2, 2]);
    });

    it('should place references in the proper way 1 back step (right face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-1), '+x')).toEqual([2, 2, 4, 2]);
    });
    
    it('should place references in the proper way 2 back step (right face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-2), '+x')).toEqual([2, 2, 2, 4]);
    });

    it('should place references in the proper way 3 back step (right face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-3), '+x')).toEqual([4, 2, 2, 2]);
    });

    // fordward +x
    
    it('should place references in the proper way 1 step (right face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(1), '+x')).toEqual([4, 2, 2, 2]);
    });
    
    it('should place references in the proper way 2 step (right face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(2), '+x')).toEqual([2, 2, 2, 4]);
    });

    it('should place references in the proper way 3 step (right face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(3), '+x')).toEqual([2, 2, 4, 2]);
    });
    
    // backward -y

    it('should place references in the proper way 1 back step (down face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-1), '-y')).toEqual([1, 1, 1, 1]);
    });

    it('should place references in the proper way 2 back steps (down face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-2), '-y')).toEqual([1, 1, 1, 1]);
    });

    it('should place references in the proper way 3 back steps (down face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-3), '-y')).toEqual([1, 1, 1, 1]);
    });

    // forward -y

    it('should place references in the proper way 0 (down face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '-y')).toEqual([1, 1, 1, 1]);
    });

    it('should place references in the proper way 1 step (down face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(1), '-y')).toEqual([1, 1, 1, 1]);
    });

    it('should place references in the proper way 2 steps (down face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(2), '-y')).toEqual([1, 1, 1, 1]);
    });

    it('should place references in the proper way 3 steps (down face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(3), '-y')).toEqual([1, 1, 1, 1]);
    });

    // backward +y
    
    it('should place references in the proper way 0 step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '+y')).toEqual([3, 3, 3, 3]);
    });

    it('should place references in the proper way 1 back step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-1), '+y')).toEqual([3, 3, 3, 3]);
    });
    
    it('should place references in the proper way 2 back step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-2), '+y')).toEqual([3, 3, 3, 3]);
    });

    it('should place references in the proper way 3 back step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-3), '+y')).toEqual([3, 3, 3, 3]);
    });

    // fordward +y
    
    it('should place references in the proper way 1 step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(1), '+y')).toEqual([3, 3, 3, 3]);
    });
    
    it('should place references in the proper way 2 step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(2), '+y')).toEqual([3, 3, 3, 3]);
    });

    it('should place references in the proper way 3 step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(3), '+y')).toEqual([3, 3, 3, 3]);
    });
    
    // backward -z

    it('should place references in the proper way 0 (back face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '-z')).toEqual([1, 4, 3, 2]);
    });

    it('should place references in the proper way 1 back step (back face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-1), '-z')).toEqual([2, 1, 4, 3]);
    });

    it('should place references in the proper way 2 back steps (back face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-2), '-z')).toEqual([3, 2, 1, 4]);
    });

    it('should place references in the proper way 3 back steps (back face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-3), '-z')).toEqual([4, 3, 2, 1]);
    });

    // forward -z

    it('should place references in the proper way 1 step (back face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(1), '-z')).toEqual([4, 3, 2, 1]);
    });

    it('should place references in the proper way 2 steps (back face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(2), '-z')).toEqual([3, 2, 1, 4]);
    });

    it('should place references in the proper way 3 steps (back face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(3), '-z')).toEqual([2, 1, 4, 3]);
    });

    // backward +z
    
    it('should place references in the proper way 0 step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(0), '+z')).toEqual([3, 4, 1, 2]);
    });

    it('should place references in the proper way 1 back step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-1), '+z')).toEqual([2, 3, 4, 1]);
    });
    
    it('should place references in the proper way 2 back step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-2), '+z')).toEqual([1, 2, 3, 4]);
    });

    it('should place references in the proper way 3 back step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(-3), '+z')).toEqual([4, 1, 2, 3]);
    });

    // fordward +z
    
    it('should place references in the proper way 1 step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(1), '+z')).toEqual([4, 1, 2, 3]);
    });
    
    it('should place references in the proper way 2 step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(2), '+z')).toEqual([1, 2, 3, 4]);
    });

    it('should place references in the proper way 3 step (upper face)', () => {
        expect(upCenter.getConnectedReferences(upCenter.rotate(3), '+z')).toEqual([2, 3, 4, 1]);
    });
    
// focus: front
// ref: 1 - down ref-3 
// ref: 2 - right ref-4
// ref: 3 - up ref-1
// ref: 4 - left ref-2

// focus: up
// ref: 1 - front ref-3
// ref: 2 - right ref-3
// ref: 3 - back ref-3
// ref: 4 - left ref-3

// focus: back
// ref: 1 - down ref-1
// ref: 2 - right ref-4
// ref: 3 - up ref-3
// ref: 4 - left ref-2

// focus: down
// ref: 1 - back ref-1
// ref: 2 - right ref-1
// ref: 3 - front ref-1
// ref: 4 - left ref-1

// focus: right
// ref: 1 - down ref-2
// ref: 2 - back ref-4
// ref: 3 - up ref-2
// ref: 4 - front ref-2

// focus: left
// ref: 1 - down ref-4
// ref: 2 - front ref-4
// ref: 3 - up ref-4
// ref: 4 - back ref-2
});