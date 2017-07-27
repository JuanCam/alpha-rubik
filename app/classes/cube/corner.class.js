
export class Corner {

    constructor (props) {
        this.labels = props.labels;
        this.references = props.references;
    }

    get id () {
        let _capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        let labelRefs = this.labels.map((color) => {
            return _capitalize(color).charAt(0);
        });

        return `C-${labelRefs.join('')}`;
    }

}
