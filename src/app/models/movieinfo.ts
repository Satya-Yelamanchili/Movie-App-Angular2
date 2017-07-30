import { Genre } from './genre';
import { Companies } from './companies';
export class MovieInfo {
    public adult: boolean;
    public genres: Genre[];
    public backdrop_path: string;
    public budget: number;
    public homepage: string;
    public id: number;
    public imdb_id: string;
    public original_language: string;
    public original_title: string;
    public overview: string;
    public popularity: number;
    public poster_path: string;
    public release_date: Date;
    public revenue: number;
    public runtime: number;
    public status: string;
    public tagline: string;
    public title: string;
    public video: boolean;
    public vote_average: number;
    public vote_count: number;
    public production_companies: Companies[];
// tslint:disable-next-line:eofline
}