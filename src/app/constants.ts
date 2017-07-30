export class Constants {
    public static baseApiUrl = 'https://api.themoviedb.org/3';
    public static apiKey = '0640d4d11a01991c0113b2ac4d04276f';
    public static bgImg= 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';

    // Api's for Movies
    public static movieSearch = '/search/movie?api_key=';
    public static moviePopular = '/movie/popular?api_key=';
    public static upComingMovies = '/movie/upcoming?api_key=';
    public static topRatedMovies = '/movie/top_rated?api_key=';
    public static nowPlayingMovies = '/movie/now_playing?api_key=';
    public static movieDetails = '/movie/{movie_id}?api_key=';
    public static movieKeywords = '/movie/{movie_id}/keywords?api_key=';
    public static movieVideos= '/movie/{movie_id}/videos?api_key=';
    public static similarMovies = '/movie/{movie_id}/similar?api_key=';
    public static movieCredits = '/movie/{movie_id}/credits?api_key=';
    public static genre = '/genre/movie/list?api_key=';


    // Api's for people
    public static personSearch = '/search/person?api_key=';
    public static personinfo = '/person/{person_id}?api_key=';
    public static personMovieCredits = '/person/{person_id}/movie_credits?api_key=';
    public static personExtraId= '/person/{person_id}/external_ids?api_key=';

    // Api urls for TV
    public static tvSearch = '/search/tv?api_key=';
    public static showInfo = '/tv/{tv_id}?api_key=';
    public static popularShows = '/tv/popular?api_key=';
    public static topRatedShows = '/tv/top_rated?api_key=';
    public static showsOnAir = '/tv/on_the_air?api_key=';
    public static todayShows = '/tv/airing_today?api_key=';
    public static latestShows = '/tv/latest?api_key=';
    public static tvGenres = '/genre/tv/list?api_key=';
    public static showVideos = '/tv/{tv_id}/videos?api_key=';
    public static showRecomm = '/tv/{tv_id}/recommendations?api_key=';
    public static similarShows = '/tv/{tv_id}/similar?api_key=';
    public static showKeywords = '/tv/{tv_id}/keywords?api_key=';
    public static showImages = '/tv/{tv_id}/images?api_key=';
    public static showIds = '/tv/{tv_id}/external_ids?api_key=';
    public static showCredits = '/tv/{tv_id}/credits?api_key=';
    public static showRatings = '/tv/{tv_id}/content_ratings?api_key=';
    public static showAltTitles = '/tv/{tv_id}/alternative_titles?api_key=';
    public static showAcc = '/tv/{tv_id}/account_states?api_key=';

    // Apis for companies
    public static companyIfo = '/company/{company_id}?api_key=';
    public static companyMovies = '/company/{company_id}/movies?api_key=';

// tslint:disable-next-line:eofline
}