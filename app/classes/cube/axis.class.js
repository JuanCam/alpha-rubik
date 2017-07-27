import {AXIS_LABELS} from './constants';

let _getDistance = (valueOne, valueTwo) => {
    return Math.abs(valueOne - valueTwo);
}

let _getSign = (valueOne, valueTwo) => {
    return _getDistance(valueOne, valueTwo) / (valueTwo - valueOne);
}

export class Axis {
    constructor (props) {
        this.x = props.x || [0, 0];
        this.y = props.y || [0, 0];
        this.z = props.z || [0, 0];
    }

    get sizedAxis () {
        return AXIS_LABELS.map((label) => {
            return {
                size: this.size(label),
                label: label
            }
        }).filter((axis) => {
            return axis.size;
        })[0];
    }

    size (label) {
        if (this[label]) {
            return _getDistance(this[label][0], this[label][1]);
        }
    }

    sign (label) {
        if (this[label]) {
            let vectors = this[label].sort(value => Math.abs(value));
            let direction = (_getDistance(this[label][0], this[label][1]))
                ? _getSign(this[label][0], this[label][1])
                : 0;
            
            if (direction === 1) {
                return '+';
            } else if (direction === -1) {
                return '-';
            }
            
            return '';
        }
    }
}
