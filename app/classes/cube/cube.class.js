import {Border} from './border.class';
import {Center} from './center.class';
import {Corner} from './corner.class';
import {REFERENCES} from './constants';
import {AXIS_DEFINITION, BORDERS_DEFINITION} from '../../definitions/cube-definition';

let _newBorder = (info, centerColor) => {
    return new Border({
        labels: [centerColor, info.color],
        reference: info.reference
    });
};

let _createBorders =  (bordersInfo) => {
    return bordersInfo.borders.map((borderInfo) => {
        return _newBorder(borderInfo, bordersInfo.center);
    });
};

let _createBorderLinks = (faces) => {
    let links = [];
    let foundLinks = [];
    faces.forEach((face) => {
        foundLinks = face.center.borders.map((border) => {
            return {
                bridge: border.labels,
                fixedRef: border.reference
            };
        });
        links = links.concat(foundLinks);
    });
    return links;
}

let _createFaces = () => {
    return AXIS_DEFINITION.map((axisInfo) => {
        return {
            place: axisInfo.place,
            center: new Center({
                axis: axisInfo.axis,
                borders: _createBorders(BORDERS_DEFINITION[axisInfo.place]),
                label: BORDERS_DEFINITION[axisInfo.place].center
            })
        };
    });
};

let _getCloseFaces = (faces, center) => {
    return faces.filter((face) => {
        return face.center.axisRawLabel !== center.axisRawLabel;
    });
};

let _findBorderLink = (links, firstCenter, secondCenter) => {
    return links.filter((link) => {
        let bridge = link.bridge;
        return bridge.indexOf(firstCenter.label) !== -1 && bridge.indexOf(secondCenter.label) !== -1;
    })[0];
}

let _findBorderByReference = (borders, reference) => {
    return borders.filter((border) => {
        return border.reference === reference;
    })[0];
}

let _getFaceByCenterLabel = (faces, label) => {
    return faces.filter((face) => {
        return face.center.label === label;
    })[0];
}

let _findConnectedFaces = (faces, link) => {
    return link.bridge.map((centerLabel) => {
        return _getFaceByCenterLabel(faces, centerLabel);
    });
}

let _extractFaceBorders = (faces, center, links) => {
    return _getCloseFaces(faces, center).map((face) => {
        let link = _findBorderLink(links, face.center, center);
        let foundFaces = _findConnectedFaces(faces, link);
        let connectedRefs = foundFaces[0].center.getConnectedReferences(REFERENCES);
        let borderFound = _findBorderByReference(foundFaces[0].center.borders, link.fixedRef);
        let connectedRef = connectedRefs[link.fixedRef - 1];
        return borderFound || _findBorderByReference(foundFaces[1].center.borders, connectedRef);
    });
}

let _getNewReferences = (border, newRefs) => {
    return newRefs[border.reference - 1];
}

let _getBorderFace = (border, faces) => {
    return faces.filter((face) => {
        return face.center.borders.indexOf(border) !== -1;
    })[0];
}

let _appendBorder = (borders, border) => {
    borders.push(border);
}

let _removeBorder = (borders, border) => {
    let borderIndex = borders.indexOf(border);
    borders.splice(borderIndex, 1);
}

let _moveBorders = (faces, focusBorders, focusCenter, references) => {
    let closeFaces = _getCloseFaces(faces, focusCenter);
    focusBorders.map((focusBorder) => {
        let containedBorders = focusCenter.borders;
        let reference = focusBorder.reference;
        if (_getBordersIds(containedBorders).indexOf(focusBorder.id) === -1) {
            let face = _getBorderFace(focusBorder, faces);
            let connectedRefs = face.center.getConnectedReferences(REFERENCES);
            reference = _getNewReferences(focusBorder, connectedRefs);
            _removeBorder(face.center.borders, focusBorder);
            _appendBorder(focusCenter.borders, focusBorder);
        }
        focusBorder.reference = references.indexOf(reference) + 1;
    });
}

let _getBordersIds = (borders) => {
    return borders.map((border) => {
        return border.id;
    });
}

let viewBorderFace = (faces) => {
    /*TODO: remove this, is only for debbug*/
    var viewObj = {}
    return faces.map((face) => {
        console.log(face.center.label, face.center.borders)
        viewObj[face.center.label] = face.center.borders
        return viewObj;
    })
}

export class Cube {

    constructor () {
        this.faces = _createFaces();
        this.borderLinks = _createBorderLinks(this.faces);
    }

    turn(place, steps) {
        let face = this.getFace(place);
        let newRefs = face.center.rotate(steps);
        let faceBorders = this.getFaceBorders(face);
        _moveBorders(this.faces, faceBorders, face.center, newRefs);
        //viewBorderFace(this.faces)
    }

    getFace (place) {
        return this.faces.filter((face) => {
            return face.place === place;
        })[0];
    }

    getFaceBorders (face) {
        return _extractFaceBorders(this.faces, face.center, this.borderLinks);
    }
    
    getFaceBordersIds (face) {
        return _getBordersIds(this.getFaceBorders(face));
    }

    getBorderFace (border) {
        return _getBorderFace(border, this.faces);
    }

}
