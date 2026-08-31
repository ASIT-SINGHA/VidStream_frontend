import { z } from 'zod';

// user validation schema zod
export const signUpSchema = z.object({
  fullName: z.string().min(3, 'Full name must be atleast 3 charactor'),
  username: z.string().min(3, 'user name must be atleast 3 charator'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'password must be atleast 6 character'),
  avatar: z
    .instanceof(FileList, { message: 'Please upload a file' })
    .refine((files) => files?.length > 0, 'Avatar is required')
    .refine((files) => files[0]?.size <= 5000000, 'avatar must be less then 5 MB')
    .refine((files) => files[0]?.type.startsWith('image/'), 'Avatar must be a image'),

  coverImage: z
    .instanceof(FileList, { message: 'Please upload a file' })
    .refine(
      (files) => files.length === 0 || files[0]?.size <= 5000000,
      'cover image must be less then 5 MB',
    )
    .refine(
      (files) => files.length === 0 || files[0]?.type.startsWith('image/'),
      'cover image must be a image',
    ),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address '),
  password: z.string().min(6, 'password must be atleast 6 character'),
});

export const updateCoverImageSchema = z.object({
  coverImage: z
    .instanceof(FileList, { message: 'Please upload a file' })
    .refine((files) => files[0]?.size <= 5000000, 'cover Image must be less then 5 MB')
    .refine((files) => files[0]?.type.startsWith('image/'), 'cover Image must be a image'),
});
export const updateAvatarSchema = z.object({
  avatar: z
    .instanceof(FileList, { message: 'Please upload a file' })
    .refine((files) => files[0]?.size <= 5000000, 'avatar must be less then 5 MB')
    .refine((files) => files[0]?.type.startsWith('image/'), 'avatar must be a image'),
});

export const updateAccoundDetailsSchema = z.object({
  fullName: z.string().min(3, 'Full name must be atleast 3 charactor'),
  email: z.string().email('Invalid email address'),
});
