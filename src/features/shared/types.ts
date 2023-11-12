export type Artist = {
  id: string;
  name: string;
  type: 'artist';
  uri: string;
  external_urls: {
    spotify: string;
  };
};

export type Owner = {
  display_name: string | null;
  external_urls: {
    spotify: string;
  };
  followers?: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
};
