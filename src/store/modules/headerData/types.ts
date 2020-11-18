/**
 * Action types
 */
export enum HeaderDataTypes {
  LOAD = '@HeaderData/LOAD',
  SET_DATA = '@HeaderData/SET_DATA',
  SET_ERROR = '@HeaderData/SET_ERROR',
}

/**
 * DataType type
 */

interface Person {
  id: number;
  name: string;
  email: string;
}

interface Project {
  id: number;
  title: string;
}

interface AccountabilityExtraInfo {
  departureOn?: Date;
  arrivalOn?: Date;
  budgetForBreakfast?: boolean;
  eventDate: number;
  amountOfPeople: number;
  requestedCurrency: string;
  amountRequested: string;
  destination: string;
}

export interface CostCenter {
  id: number;
  percentage: number;
  name: string;
  manager: Person;
  reviser: Person;
  talentPartner: Person;
}

export interface HeaderData {
  id: number;
  createdOn: number;
  title: string;
  type: string;
  collaborator: Person;
  purpose: string;
  project: Project;
  justification: string;
  deadline?: Date;
  fraternizationEducationBudget: boolean;
  analyst: Person;
  status: string;
  canceled: boolean;
  submittedOn?: Date;
  evaluatedOn?: Date;
  accountabilityExtraInfo: AccountabilityExtraInfo;
  costCenters: CostCenter[];
}

/**
 * State type
 */
export interface HeaderDataState {
  readonly data?: HeaderData;
  readonly loading: boolean;
  readonly error?: { status: string };
}
