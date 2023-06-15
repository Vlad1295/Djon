 export type PhotosType = {
  small: string;
  large: string;
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
export type PosType = {
  id: number;
  message: string;
  like: number;
};
export type DialogDataType = {
  id: number;
  name: string;
};