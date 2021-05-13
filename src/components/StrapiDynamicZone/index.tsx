import { parseDynamicZoneContent } from './componentParser';

interface Props {
  components: NonNullable<Array<StrapiDynamicZone>>;
}

const StrapiDynamicZone = ({ components }: Props): JSX.Element => {
  return parseDynamicZoneContent(components);
  // Add dynamic Zone Parser with optional Background Image
};

export default StrapiDynamicZone;
