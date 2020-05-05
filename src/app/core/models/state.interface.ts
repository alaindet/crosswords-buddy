import { Direction } from './direction.enum';
import { Definition } from './definition.interface';
import { DefinitionsMap } from './definitions-map.interface';
import { SolvedDefinitionsMap } from './solved-definitions-map.interface';

export interface State {
  definitions: DefinitionsMap;
  recent: Definition[];
  solved: SolvedDefinitionsMap;
}
