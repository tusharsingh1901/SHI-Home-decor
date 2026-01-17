export type FabricType = 'sheer' | 'blackout' | 'semi-sheer' | 'thermal' | 'decorative';
export type RoomType = 'living room' | 'bedroom' | 'dining room' | 'kitchen' | 'bathroom' | 'office' | 'nursery';
export type ColorTone = 'warm' | 'cool' | 'neutral';
export type TextureFeel = 'smooth' | 'textured' | 'velvety' | 'linen' | 'silk' | 'cotton';

export interface Fabric {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  type: FabricType;
  roomTypes: RoomType[];
  opacity: 'sheer' | 'semi-sheer' | 'blackout';
  colorTone: ColorTone;
  textureFeel: TextureFeel;
  price?: string;
  featured?: boolean;
  stylingSuggestions?: string[];
}
