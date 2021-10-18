
export const GET_SPACE_X_LAUNCHES = 'GET_SPACE_X_LAUNCHES';
export const GET_ITUNE_RESULTS='GET_ITUNE_RESULTS';

export type ApplicationState = {
  ituneResults : ItuneResults;
};

export type ApplicationsActionTypes =
  |GetItuneResults;

  
  type GetItuneResults = {
    type: typeof GET_ITUNE_RESULTS;
    ituneResults: ItuneResults;
  };

export type ItuneResult = {
    key: string,
    amgArtistId?: number
    artistId: number
    artistName: string
    artistViewUrl?: string
    artworkUrl60: string
    artworkUrl100: string
    collectionCensoredName: string
    collectionExplicitness: string
    collectionId: number
    collectionName: string
    collectionPrice?: number
    collectionType?: string
    collectionViewUrl: string
    copyright?: string
    country: string
    currency: string
    primaryGenreName: string
    releaseDate: string
    trackCount: number
    wrapperType: string
    discCount?: number
    discNumber?: number
    isStreamable?: boolean
    kind?: string
    previewUrl?: string
    trackCensoredName?: string
    trackExplicitness?: string
    trackId?: number
    trackName?: string
    trackNumber?: number
    trackPrice?: number
    trackTimeMillis?: number
    trackViewUrl?: string
}

  export type ItuneResults = ItuneResult[];

  export type ituneResponse = {
    resultCount: number,
    results: ItuneResults
  }