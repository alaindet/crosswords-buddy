import { LinkDefinition } from 'src/app/core/models/link-definition.interface';

export const LINKS: LinkDefinition[] = [
  { url: '/search', label: 'Search', options: { exact: false } },
  { url: '/load', label: 'Load', options: { exact: false } },
];
