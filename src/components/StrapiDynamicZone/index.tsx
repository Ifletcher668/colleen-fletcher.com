import { DynamicZone } from '../../typings/strapi';
import { parseDynamicZoneContent } from './componentParser';

interface Props {
  components: NonNullable<Array<DynamicZone>>;
}

const StrapiDynamicZone = ({ components }: Props): JSX.Element => {
  return parseDynamicZoneContent(components);
  // Add dynamic Zone Parser with optional Background Image
};

export default StrapiDynamicZone;
