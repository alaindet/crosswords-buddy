import { Direction } from 'src/app/core/models/direction.enum';
import { CluesMap } from 'src/app/core/models/clues-map.interface';

const DEMO: CluesMap = {

  [Direction.Across]: {
    '1': 'Legendary stories',
    '6': 'Uno',
    '9': 'Pig\s pad',
    '12': 'Box',
    '13': 'Business VIP',
    '15': 'Church walkway',
    '16': 'Burst of bad temper',
    '18': 'California wine valley',
    '19': 'Make lace',
    '20': 'Epochs',
    '24': 'The time past',
  },

  [Direction.Down]: {
    '1': 'Skim over',
    '2': 'Opera solo',
    '3': 'Struggle for breath',
    '4': 'Books of maps',
    '5': 'Behold',
    '6': 'Gasoline classification',
    '7': 'Tidy up',
    '8': 'Chunk of eternity',
    '9': 'Military rank',
    '10':' Faithful',
    '11': 'Sweet potatoes',
  }

};

export default DEMO;
