import { Linter } from 'eslint';
import ezzeTypeScript from 'eslint-config-ezze-ts';

const config: Array<Linter.Config> = [...ezzeTypeScript];

export default config;
