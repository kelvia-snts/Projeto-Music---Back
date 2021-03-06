export class Music {
  constructor(
    private id: string,
    private title: string,
    private author_id: string,
    private date: Date,
    private file: string,
    private genre_id: string[],
    private album_id: string
  ) {}

  public getId(): string {
    return this.id;
  }
  public getTitle(): string {
    return this.title;
  }
  public getAuthorId(): string {
    return this.author_id;
  }
  public getDate(): Date {
    return this.date;
  }
  public getFile(): string {
    return this.file;
  }
  public getGenreId(): string[] {
    return this.genre_id;
  }
  public getAlbumId(): string {
    return this.album_id;
  }

  public static toMusicModel(music: any): Music | undefined {
    return new Music(
      music.id,
      music.title,
      music.author_id,
      music.date,
      music.file,
      music.genre_id,
      music.album_id
    );
  }
}

export interface MusicCreationDTO {
  title: string;
  file: string;
  genre_id: string[];
  album_id: string;
}
