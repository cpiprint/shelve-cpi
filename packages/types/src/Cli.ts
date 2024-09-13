export const SHELVE_JSON_SCHEMA = 'https://raw.githubusercontent.com/HugoRCD/shelve/main/packages/types/shelveConfigSchema.json'

export type ShelveConfig = {
  /**
   * The project name
   * */
  project: string
  /**
   * The token to authenticate with Shelve created using the app (https://shelve.hrcd.fr/app/tokens) or your own Shelve instance
   *
   * @default process.env.SHELVE_TOKEN
   * */
  token: string
  /**
   * The URL of the Shelve instance can be overridden with the `SHELVE_URL` environment variable
   *
   * @default https://shelve.hrcd.fr
   * @fallback process.env.SHELVE_URL
   * */
  url: string
  /**
   * Whether to confirm changes before pushing them to Shelve
   *
   * @default false
   * */
  confirmChanges: boolean
  /**
   * Push method to use for .env file (overwrite or append)
   * Overwrite will replace all existing variables in Shelve app with the ones in the .env file
   * Merge will append the .env file to the existing variables in Shelve app
   *
   * @default 'overwrite'
   * */
  pushMethod: 'overwrite' | 'merge'
  /**
   * Pull method to use for .env file (overwrite or append)
   * Overwrite will replace the .env file with the variables in Shelve app
   * Merge will append the variables in Shelve app to the .env file
   *
   * @default 'overwrite'
   * */
  pullMethod: 'overwrite' | 'merge'
  /**
   * Name of your env file
   *
   * @default '.env'
   * */
  envFileName: string
}