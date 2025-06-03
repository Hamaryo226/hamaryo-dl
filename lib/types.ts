export interface Software {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  version: string;
  releaseDate: string;
  category: string;
  tags: string[];
  downloadUrl: string;
  imageUrl: string;
  screenshots: string[];
  requirements: {
    os: string[];
    memory: string;
    storage: string;
    other?: string[];
  };
  changelog: {
    version: string;
    date: string;
    changes: string[];
  }[];
  downloads: number;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
