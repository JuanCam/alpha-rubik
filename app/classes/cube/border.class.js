import {REFERENCES} from './constants';
export class Border {

    constructor (props) {
        this.labels = props.labels;
        this.reference = props.reference;
    }

    get id () {
        let _capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        let labelRefs = this.labels.map((color) => {
            return _capitalize(color).charAt(0);
        });

        return `B-${labelRefs.join('')}`;
    }

}
