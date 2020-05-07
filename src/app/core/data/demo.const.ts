import { Direction } from 'src/app/core/models/direction.enum';
import { CluesMap } from 'src/app/core/models/clues-map.interface';

const DEMO: CluesMap = {

  [Direction.Across]: {
    '1': 'A very lengthy first across clue just to make it overflow',
    '2': 'Second across clue',
    '3': 'Third across clue',
    '11': 'Eleventh across clue',
  },

  [Direction.Down]: {
    '1': 'First down clue',
    '2': 'Second down clue',
    '3': 'Third down clue',
    '4': 'Fourth down clue',
    '22': 'Twenty-second down clue',
  }

};

export default DEMO;
