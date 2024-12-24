import { Linter } from 'eslint';
import ezzePrettier from 'eslint-config-ezze-prettier';
import ezzeTypeScript from 'eslint-config-ezze-ts';

const config: Array<Linter.Config> = [...ezzeTypeScript, ...ezzePrettier];

export default config;
