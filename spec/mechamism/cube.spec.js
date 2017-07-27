import {Axis} from '../../app/classes/cube/axis.class';
import {Border} from '../../app/classes/cube/border.class';
import {Center} from '../../app/classes/cube/center.class';
import {Cube} from '../../app/classes/cube/cube.class';

describe('The cube:', () => {

    let backFace = 'back';
    let borders;
    let cube;
    let downFace = 'down';
    let frontFace = 'front';
    let getBordersReferences;
    let leftFace = 'left';
    let rightFace = 'right';
    let upperFace = 'up';

    beforeEach(() => {
        borders = [];
        cube = new Cube ();
        getBordersReferences = (borders) => {
            return borders.map((border) => {
                return border.reference;
            });
        }
    });
    
    it('should return face borders with the correct label borders - front face', () => {
        expect(cube.getFaceBordersIds(cube.getFace(frontFace))).toEqual(['B-OG', 'B-RG', 'B-YG', 'B-WG']);
    });

    it('should return face borders with the correct reference borders - front face', () => {
        borders = cube.getFaceBorders(cube.getFace(frontFace));
        expect(getBordersReferences(borders)).toEqual([4, 2, 1, 3]);
    });

    it('should return face borders with the correct label borders - upper face', () => {
        expect(cube.getFaceBordersIds(cube.getFace(upperFace))).toEqual(['B-OY', 'B-RY', 'B-YB', 'B-YG']);
    });

    it('should return face borders with the correct reference borders - upper face', () => {
        borders = cube.getFaceBorders(cube.getFace(upperFace));
        expect(getBordersReferences(borders)).toEqual([3, 3, 3, 1]);
    });
    
    it('should return face borders with the correct label borders - right face', () => {
        expect(cube.getFaceBordersIds(cube.getFace(rightFace))).toEqual(['B-OY', 'B-OW', 'B-OB', 'B-OG']);
    });

    it('should return face borders with the correct reference borders - right face', () => {
        borders = cube.getFaceBorders(cube.getFace(rightFace));
        expect(getBordersReferences(borders)).toEqual([3, 1, 2, 4]);
    });
    
    it('should return face borders with the correct label borders - left face', () => {
        expect(cube.getFaceBordersIds(cube.getFace(leftFace))).toEqual(['B-RY', 'B-RW', 'B-RB', 'B-RG']);
    });

    it('should return face borders with the correct reference borders - left face', () => {
        borders = cube.getFaceBorders(cube.getFace(leftFace));
        expect(getBordersReferences(borders)).toEqual([3, 1, 4, 2]);
    });

    it('should return face borders with the correct label borders - down face', () => {
        expect(cube.getFaceBordersIds(cube.getFace(downFace))).toEqual(['B-OW', 'B-RW', 'B-WB', 'B-WG']);
    });

    it('should return face borders with the correct reference borders - down face', () => {
        borders = cube.getFaceBorders(cube.getFace(downFace));
        expect(getBordersReferences(borders)).toEqual([1, 1, 1, 3]);
    });

    it('should return face borders with the correct label borders - back face', () => {
        expect(cube.getFaceBordersIds(cube.getFace(backFace))).toEqual(['B-OB', 'B-RB', 'B-YB', 'B-WB']);
    });

    it('should return face borders with the correct reference borders - back face', () => {
        borders = cube.getFaceBorders(cube.getFace(backFace));
        expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
    });

    describe('making one single negative turn in the upper face,',() => {

        it('should get upper face border ids', () => {
            cube.turn(upperFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(upperFace))).toEqual(['B-YB', 'B-YG', 'B-RY', 'B-OY']);
        });
        
        it('should get upper face border references', () => {
            cube.turn(upperFace, -1);
            borders = cube.getFaceBorders(cube.getFace(upperFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get right face border ids', () => {
            cube.turn(upperFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(rightFace))).toEqual(['B-YB', 'B-OW', 'B-OB', 'B-OG']);
        });
        
        it('should get right face border references', () => {
            cube.turn(upperFace, -1);
            borders = cube.getFaceBorders(cube.getFace(rightFace));
            expect(getBordersReferences(borders)).toEqual([2, 1, 2, 4]);
        });

        it('should get left face border ids', () => {
            cube.turn(upperFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(leftFace))).toEqual(['B-YG', 'B-RW', 'B-RB', 'B-RG']);
        });
        
        it('should get left face border references', () => {
            cube.turn(upperFace, -1);
            borders = cube.getFaceBorders(cube.getFace(leftFace));
            expect(getBordersReferences(borders)).toEqual([4, 1, 4, 2]);
        });

        it('should get back face border ids', () => {
            cube.turn(upperFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(backFace))).toEqual(['B-OB', 'B-RB', 'B-RY', 'B-WB']);
        });
        
        it('should get back face border references', () => {
            cube.turn(upperFace, -1);
            borders = cube.getFaceBorders(cube.getFace(backFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get down face border ids', () => {
            cube.turn(upperFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(downFace))).toEqual(['B-OW', 'B-RW', 'B-WB', 'B-WG']);
        });
        
        it('should get down face border references', () => {
            cube.turn(upperFace, -1);
            borders = cube.getFaceBorders(cube.getFace(downFace));
            expect(getBordersReferences(borders)).toEqual([1, 1, 1, 3]);
        });
    });

    describe('making one single positive turn in the upper face,',() => {

        it('should get upper face border ids', () => {
            cube.turn(upperFace, 1);
            expect(cube.getFaceBordersIds(cube.getFace(upperFace))).toEqual(['B-YG', 'B-YB', 'B-OY', 'B-RY']);
        });
        
        it('should get upper face border references', () => {
            cube.turn(upperFace, 1);
            borders = cube.getFaceBorders(cube.getFace(upperFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get right face border ids', () => {
            cube.turn(upperFace, 1);
            expect(cube.getFaceBordersIds(cube.getFace(rightFace))).toEqual(['B-YG', 'B-OW', 'B-OB', 'B-OG']);
        });
        
        it('should get right face border references', () => {
            cube.turn(upperFace, 1);
            borders = cube.getFaceBorders(cube.getFace(rightFace));
            expect(getBordersReferences(borders)).toEqual([2, 1, 2, 4]);
        });

        it('should get left face border ids', () => {
            cube.turn(upperFace, 1);
            expect(cube.getFaceBordersIds(cube.getFace(leftFace))).toEqual(['B-YB', 'B-RW', 'B-RB', 'B-RG']);
        });
        
        it('should get left face border references', () => {
            cube.turn(upperFace, 1);
            borders = cube.getFaceBorders(cube.getFace(leftFace));
            expect(getBordersReferences(borders)).toEqual([4, 1, 4, 2]);
        });

        it('should get back face border ids', () => {
            cube.turn(upperFace, 1);
            expect(cube.getFaceBordersIds(cube.getFace(backFace))).toEqual(['B-OB', 'B-RB', 'B-OY', 'B-WB']);
        });
        
        it('should get back face border references', () => {
            cube.turn(upperFace, 1);
            borders = cube.getFaceBorders(cube.getFace(backFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get down face border ids', () => {
            cube.turn(upperFace, 1);
            expect(cube.getFaceBordersIds(cube.getFace(downFace))).toEqual(['B-OW', 'B-RW', 'B-WB', 'B-WG']);
        });
        
        it('should get down face border references', () => {
            cube.turn(upperFace, 1);
            borders = cube.getFaceBorders(cube.getFace(downFace));
            expect(getBordersReferences(borders)).toEqual([1, 1, 1, 3]);
        });
    });
    describe('making two negative turns in the upper face,',() => {

        it('should get upper face border ids', () => {
            cube.turn(upperFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(upperFace))).toEqual(['B-RY', 'B-OY', 'B-YG', 'B-YB']);
        });
        
        it('should get upper face border references', () => {
            cube.turn(upperFace, -2);
            borders = cube.getFaceBorders(cube.getFace(upperFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get right face border ids', () => {
            cube.turn(upperFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(rightFace))).toEqual(['B-RY', 'B-OW', 'B-OB', 'B-OG']);
        });
        
        it('should get right face border references', () => {
            cube.turn(upperFace, -2);
            borders = cube.getFaceBorders(cube.getFace(rightFace));
            expect(getBordersReferences(borders)).toEqual([2, 1, 2, 4]);
        });

        it('should get left face border ids', () => {
            cube.turn(upperFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(leftFace))).toEqual(['B-OY', 'B-RW', 'B-RB', 'B-RG']);
        });
        
        it('should get left face border references', () => {
            cube.turn(upperFace, -2);
            borders = cube.getFaceBorders(cube.getFace(leftFace));
            expect(getBordersReferences(borders)).toEqual([4, 1, 4, 2]);
        });

        it('should get back face border ids', () => {
            cube.turn(upperFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(backFace))).toEqual(['B-OB', 'B-RB', 'B-YG', 'B-WB']);
        });
        
        it('should get back face border references', () => {
            cube.turn(upperFace, -2);
            borders = cube.getFaceBorders(cube.getFace(backFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get down face border ids', () => {
            cube.turn(upperFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(downFace))).toEqual(['B-OW', 'B-RW', 'B-WB', 'B-WG']);
        });
        
        it('should get down face border references', () => {
            cube.turn(upperFace, -2);
            borders = cube.getFaceBorders(cube.getFace(downFace));
            expect(getBordersReferences(borders)).toEqual([1, 1, 1, 3]);
        });
    });

    describe('making one single negative turn in the upper face and in the right face,',() => {
        
        it('should get front face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(frontFace))).toEqual(['B-OW', 'B-RG', 'B-OY', 'B-WG']);
        });

        it('should get front face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            borders = cube.getFaceBorders(cube.getFace(frontFace));
            expect(getBordersReferences(borders)).toEqual([4, 2, 1, 3]);
        });
        
        it('should get front face border ids', () => {
            cube.turn(rightFace, -1);
            cube.turn(upperFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(frontFace))).toEqual(['B-OW', 'B-RG', 'B-OG', 'B-WG']);
        });

        it('should get front face border references', () => {
            cube.turn(rightFace, -1);
            cube.turn(upperFace, -1);
            borders = cube.getFaceBorders(cube.getFace(frontFace));
            expect(getBordersReferences(borders)).toEqual([4, 2, 1, 3]);
        });

        it('should get back face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(backFace))).toEqual(['B-YB', 'B-RB', 'B-RY', 'B-WB']);
        });

        it('should get back face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            borders = cube.getFaceBorders(cube.getFace(backFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });
    });

    describe('making one single negative turn in the upper face, in the right face and in the down face,',() => {
        
        it('should get front face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(frontFace))).toEqual(['B-OW', 'B-RG', 'B-OY', 'B-RW']);
        });

        it('should get front face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            borders = cube.getFaceBorders(cube.getFace(frontFace));
            expect(getBordersReferences(borders)).toEqual([4, 2, 1, 3]);
        });
        
        it('should get back face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(backFace))).toEqual(['B-YB', 'B-RB', 'B-RY', 'B-OB']);
        });

        it('should get back face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            borders = cube.getFaceBorders(cube.getFace(backFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get right face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(rightFace))).toEqual(['B-OG', 'B-WG', 'B-YB', 'B-OW']);
        });

        it('should get right face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            borders = cube.getFaceBorders(cube.getFace(rightFace));
            expect(getBordersReferences(borders)).toEqual([3, 2, 2, 4]);
        });

        it('should get left face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(leftFace))).toEqual(['B-YG', 'B-WB', 'B-RB', 'B-RG']);
        });

        it('should get left face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            borders = cube.getFaceBorders(cube.getFace(leftFace));
            expect(getBordersReferences(borders)).toEqual([4, 4, 4, 2]);
        });

        it('should get down face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(downFace))).toEqual(['B-WG', 'B-WB', 'B-OB', 'B-RW']);
        });

        it('should get down face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            borders = cube.getFaceBorders(cube.getFace(downFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 1, 3]);
        });
    });

    describe('making one single negative turn in the upper face, in the right face, in the down face and in the left face',() => {
        
        it('should get front face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(frontFace))).toEqual(['B-OW', 'B-YG', 'B-OY', 'B-RW']);
        });

        it('should get front face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            borders = cube.getFaceBorders(cube.getFace(frontFace));
            expect(getBordersReferences(borders)).toEqual([4, 2, 1, 3]);
        });

        it('should get back face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(backFace))).toEqual(['B-YB', 'B-WB', 'B-RY', 'B-OB']);
        });

        it('should get back face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            borders = cube.getFaceBorders(cube.getFace(backFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get upper face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(upperFace))).toEqual(['B-OG', 'B-RB', 'B-RY', 'B-OY']);
        });

        it('should get upper face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            borders = cube.getFaceBorders(cube.getFace(upperFace));
            expect(getBordersReferences(borders)).toEqual([3, 3, 3, 1]);
        });

        it('should get right face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(rightFace))).toEqual(['B-OG', 'B-WG', 'B-YB', 'B-OW']);
        });

        it('should get right face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            borders = cube.getFaceBorders(cube.getFace(rightFace));
            expect(getBordersReferences(borders)).toEqual([3, 2, 2, 4]);
        });

        it('should get left face border ids', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            expect(cube.getFaceBordersIds(cube.getFace(leftFace))).toEqual(['B-RB', 'B-RG', 'B-WB', 'B-YG']);
        });

        it('should get left face border references', () => {
            cube.turn(upperFace, -1);
            cube.turn(rightFace, -1);
            cube.turn(downFace, -1);
            cube.turn(leftFace, -1);
            borders = cube.getFaceBorders(cube.getFace(leftFace));
            expect(getBordersReferences(borders)).toEqual([3, 1, 4, 2]);
        });
    });

    describe('making one two negative turn in the upper face and in the right face',() => {

        it('should get front face border ids', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(frontFace))).toEqual(['B-OB', 'B-RG', 'B-YB', 'B-WG']);
        });

        it('should get front face border references', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            borders = cube.getFaceBorders(cube.getFace(frontFace));
            expect(getBordersReferences(borders)).toEqual([4, 2, 1, 3]);
        });

        it('should get back face border ids', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(backFace))).toEqual(['B-OG', 'B-RB', 'B-YG', 'B-WB']);
        });

        it('should get back face border references', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            borders = cube.getFaceBorders(cube.getFace(backFace));
            expect(getBordersReferences(borders)).toEqual([2, 4, 3, 1]);
        });

        it('should get upper face border ids', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(upperFace))).toEqual(['B-OW', 'B-OY', 'B-YG', 'B-YB']);
        });

        it('should get upper face border references', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            borders = cube.getFaceBorders(cube.getFace(upperFace));
            expect(getBordersReferences(borders)).toEqual([3, 4, 3, 1]);
        });

        it('should get down face border ids', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(downFace))).toEqual(['B-RY', 'B-RW', 'B-WB', 'B-WG']);
        });

        it('should get down face border references', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            borders = cube.getFaceBorders(cube.getFace(downFace));
            expect(getBordersReferences(borders)).toEqual([1, 1, 1, 3]);
        });

        it('should get left face border ids', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(leftFace))).toEqual(['B-OY', 'B-RW', 'B-RB', 'B-RG']);
        });

        it('should get left face border references', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            borders = cube.getFaceBorders(cube.getFace(leftFace));
            expect(getBordersReferences(borders)).toEqual([4, 1, 4, 2]);
        });

        it('should get right face border ids', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            expect(cube.getFaceBordersIds(cube.getFace(rightFace))).toEqual(['B-OW', 'B-RY', 'B-OG', 'B-OB']);
        });

        it('should get right face border references', () => {
            cube.turn(upperFace, -2);
            cube.turn(rightFace, -2);
            borders = cube.getFaceBorders(cube.getFace(rightFace));
            expect(getBordersReferences(borders)).toEqual([3, 1, 2, 4]);
        });
    });

    describe('making one two positive turn in the right face and in the down face, and two positive turns in the left face',() => {

        it('should get left face border ids', () => {
            cube.turn(rightFace, 2);
            cube.turn(downFace, 2);
            cube.turn(leftFace, 2);
            expect(cube.getFaceBordersIds(cube.getFace(leftFace))).toEqual(['B-OY', 'B-RY', 'B-RG', 'B-RB']);
        });

        it('should get left face border references', () => {
            cube.turn(rightFace, 2);
            cube.turn(downFace, 2);
            cube.turn(leftFace, 2);
            borders = cube.getFaceBorders(cube.getFace(leftFace));
            expect(getBordersReferences(borders)).toEqual([3, 1, 4, 2]);
        });

    });
    
});