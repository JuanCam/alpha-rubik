import {Axis} from '../classes/cube/axis.class';

export const AXIS_DEFINITION = [
    {
        place: 'right',
        axis: new Axis({
            x: [0, 1]
        })
    },
    {
        place: 'left',
        axis: new Axis({
            x: [-1, 0]
        })
    },
    {
        place: 'up',
        axis: new Axis({
            y: [0, 1]
        })
    },
    {
        place: 'down',
        axis: new Axis({
            y: [-1, 0]
        })
    },
    {
        place: 'back',
        axis: new Axis({
            z: [-1, 0]
        })
    },
    {
        place: 'front',
        axis: new Axis({
            z: [0, 1]
        })
    }
];

export const BORDERS_DEFINITION = {
    right: {
        center: 'orange',
        borders: [
            {
                color: 'yellow',
                reference: 3
            },
            {
                color: 'white',
                reference: 1
            },
            {
                color: 'blue',
                reference: 2
            },
            {
                color: 'green',
                reference: 4
            }
        ]
    },
    left: {
        center: 'red',
        borders: [
            {
                color: 'yellow',
                reference: 3
            },
            {
                color: 'white',
                reference: 1
            },
            {
                color: 'blue',
                reference: 4
            },
            {
                color: 'green',
                reference: 2
            }
        ]
    },
    up: {
        center: 'yellow',
        borders: [
            {
                color: 'blue',
                reference: 3
            },
            {
                color: 'green',
                reference: 1
            }
        ]
    },
    down: {
        center: 'white',
        borders: [
            {
                color: 'green',
                reference: 3
            },
            {
                color: 'blue',
                reference: 1
            }
        ]
    },
    front: {
        center: 'green',
        borders: []
    },
    back: {
        center: 'blue',
        borders: []
    }
};