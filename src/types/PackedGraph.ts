import type { PackedGraphFeature } from "../modules/features";
import type { River } from "../modules/river-generator";
import type { Zone } from "../modules/zones-generator";

type TypedArray =
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Float32Array
  | Float64Array;

export interface PackedGraph {
  cells: {
    i: number[]; // cell indices
    c: number[][]; // neighboring cells
    v: number[][]; // neighboring vertices
    p: [number, number][]; // cell polygon points
    b: boolean[]; // cell is on border
    h: TypedArray; // cell heights
    /** Terrain type */
    t: TypedArray; // cell terrain types
    r: TypedArray; // river id passing through cell
    f: TypedArray; // feature id occupying cell
    fl: TypedArray; // flux presence in cell
    s: TypedArray; // cell suitability
    pop: TypedArray; // cell population
    conf: TypedArray; // cell water confidence
    haven: TypedArray; // cell is a haven
    g: number[]; // cell ground type
    culture: number[]; // cell culture id (legacy, not used)
    biome: TypedArray; // cell biome id
    harbor: TypedArray; // cell harbour presence (legacy, not used)
    burg: TypedArray; // cell burg id (legacy, not used)
    religion: TypedArray; // cell religion id (legacy, not used)
    state: number[]; // cell state id (legacy, not used)
    area: TypedArray; // cell area
    province: TypedArray; // cell province id (legacy, not used)
    routes: Record<number, Record<number, number>>;
  };
  vertices: {
    i: number[]; // vertex indices
    c: [number, number, number][]; // neighboring cells
    v: number[][]; // neighboring vertices
    x: number[]; // x coordinates
    y: number[]; // y coordinates
    p: [number, number][]; // vertex points
  };
  rivers: River[];
  features: PackedGraphFeature[];
  burgs: any[]; // legacy, not used
  states: any[]; // legacy, not used
  cultures: any[]; // legacy, not used
  routes: any[]; // legacy, not used
  religions: any[]; // legacy, not used
  zones: Zone[];
  markers: any[];
  ice: any[];
  provinces: any[]; // legacy, not used
}
