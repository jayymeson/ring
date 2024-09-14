import { RingType } from 'src/ring/enum/ring.enum';

export interface Ring {
  id?: string;
  name: string;
  power: string;
  ringBearer: string;
  forger: string;
  type: RingType;
  image: string;
}
