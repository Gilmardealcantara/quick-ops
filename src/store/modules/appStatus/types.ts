/**
 * Action types
 */
export enum AppStatusTypes {
  GET = '@AppStatus/GET',
  SET = '@AppStatus/SET',
  SET_ACTION = '@AppStatus/SET_ACTION',
}

export enum AppAction {
  READ,
  EDIT,
}

/**
 * State type
 */
export interface AppStatusState {
  readonly ok?: boolean;
  readonly status: AppAction;
  readonly loading: boolean;
}
