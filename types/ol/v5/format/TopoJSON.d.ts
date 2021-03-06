import { GeometryCollection, GeometryObject, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon, Topology } from 'topojson-specification';
import { Coordinate } from '../coordinate';
import Feature from '../Feature';
import LineString_1 from '../geom/LineString';
import MultiLineString_1 from '../geom/MultiLineString';
import MultiPoint_1 from '../geom/MultiPoint';
import MultiPolygon_1 from '../geom/MultiPolygon';
import Point_1 from '../geom/Point';
import Polygon_1 from '../geom/Polygon';
import { ProjectionLike } from '../proj';
import { ReadOptions } from './Feature';
import JSONFeature from './JSONFeature';

export interface Options {
    dataProjection?: ProjectionLike | undefined;
    layerName?: string | undefined;
    layers?: string[] | undefined;
}
export type TopoJSONGeometry = GeometryObject;
export type TopoJSONGeometryCollection = GeometryCollection;
export type TopoJSONLineString = LineString;
export type TopoJSONMultiLineString = MultiLineString;
export type TopoJSONMultiPoint = MultiPoint;
export type TopoJSONMultiPolygon = MultiPolygon;
export type TopoJSONPoint = Point;
export type TopoJSONPolygon = Polygon;
export type TopoJSONTopology = Topology;
export default class TopoJSON extends JSONFeature {
    constructor(opt_options?: Options);
}
