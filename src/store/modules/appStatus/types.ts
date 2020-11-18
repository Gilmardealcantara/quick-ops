/**
 * Action types
 */
export enum AppStatusTypes {
  GET = '@AppStatus/GET',
  SET = '@AppStatus/SET',
}

/**
 * State type
 */
export interface AppStatusState {
  readonly ok?: boolean;
  readonly loading: boolean;
}
