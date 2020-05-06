import { Direction } from 'src/app/core/models/direction.enum';
import { CluesMap } from 'src/app/core/models/clues-map.interface';

const DEMO: CluesMap = {

  [Direction.Horizontal]: {
    1: 'First horizontal clue',
    2: 'Second horizontal clue',
    3: 'Third horizontal clue',
    11: 'Eleventh horizontal clue',
  },

  [Direction.Vertical]: {
    1: 'First vertical clue',
    2: 'Second vertical clue',
    3: 'Third vertical clue',
    4: 'Fourth vertical clue',
    22: 'Twenty-second vertical clue',
  }

};

export default DEMO;
