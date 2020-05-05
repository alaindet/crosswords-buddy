import { environment } from 'src/environments/environment';
import { LinkDefinition } from 'src/app/core/models/link-definition.interface';

const LINKS: LinkDefinition[] = [
  { url: '/search', label: 'Search', options: { exact: false } },
  { url: '/load', label: 'Load', options: { exact: false } },
];

if (!environment.production) {
  LINKS.push({
    url: '/test',
    label: 'Tests',
    options: {
      exact: true
    },
  });
}

export default LINKS;
