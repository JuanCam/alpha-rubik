import {REFERENCES, CONNECTION_DIFFERENCES, AXIS_LABELS} from './constants';

let _getConnectedReference = (reference, currentAxis) => {
    let referenceIndex = reference - 1;
    return CONNECTION_DIFFERENCES[currentAxis][referenceIndex];
}

let _getAxisLabel = (labels, axis) => {
    return labels.filter((label) => {
        return axis.size(label) > 0;
    })[0];
}

export class Center {

    constructor (props) {
        this.axis = props.axis;
        this.borders = props.borders || [];
        this.label = props.label;
    }

    rotate (steps) {
        let newRefs = REFERENCES.slice();
        let sliceInd = steps * -1;
        let slicedRefs = newRefs.slice(0, sliceInd);
        return newRefs.slice(sliceInd).concat(slicedRefs);
    }

    getConnectedReferences (references, axisLabel) {
        let label = axisLabel || this.axisLabel;
        let connectedReferences = REFERENCES.map((reference) => {
            return reference + _getConnectedReference(reference, label);
        });
        return REFERENCES.map((reference, index) => {
            let indexRef = references.indexOf(reference);
            return connectedReferences[indexRef];
        });
    }

    get axisLabel () {
        let label = _getAxisLabel(AXIS_LABELS, this.axis);
        return this.axis.sign(label) + label;
    }

    get axisRawLabel () {
        return _getAxisLabel(AXIS_LABELS, this.axis);
    }
}
