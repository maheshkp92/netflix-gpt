export const USER_PROFILE_LOGO =
  "https://avatars.githubusercontent.com/u/11132951?v=4";

export const WEB_LOGO =
  "https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/AE-en-20260706-TRIFECTA-perspective_acc2cd22-8b4e-475f-aa64-750e88c62f5d_large.jpg";

export const USER_AVATAR =
  "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";
export const DEFAULT_MOVIE_POSTER =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToM9AfbMZ4vgkuJudiATcuW8j7U3q_U6zA2FPpx43HZg&s=10";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];
