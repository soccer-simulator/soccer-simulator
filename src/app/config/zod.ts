import z from 'zod';

export const AppConfigDbZod = z.object({
  host: z.string(),
  port: z.number(),
  name: z.string(),
  user: z.string(),
  password: z.string(),
  passwordSalt: z.string().optional()
});

export const AppConfigZod = z.object({
  db: AppConfigDbZod
});
