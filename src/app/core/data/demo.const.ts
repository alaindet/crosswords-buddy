import { Direction } from 'src/app/core/models/direction.enum';
import { DefinitionsMap } from 'src/app/core/models/definitions-map.interface';

const DEMO: DefinitionsMap = {

  [Direction.Horizontal]: {
    1: 'First horizontal definition',
    2: 'Second horizontal definition',
    3: 'Third horizontal definition',
  },

  [Direction.Vertical]: {
    1: 'First vertical definition',
    2: 'Second vertical definition',
    3: 'Third vertical definition',
    4: 'Fourth vertical definition',
  }

};

export default DEMO;
