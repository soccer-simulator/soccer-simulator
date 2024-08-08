export class AppConfigDb {
  host: string;
  port: number;
  name: string;
  user: string;
  password: string;
  passwordSalt?: string;
}

export class AppConfigAuth {
  secret: string;
}

export class AppConfig {
  db: AppConfigDb;
  auth: AppConfigAuth;
}
