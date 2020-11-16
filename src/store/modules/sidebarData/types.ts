/**
 * Action types
 */
export enum SideBarDataTypes {
    LOAD = '@SideBarData/LOAD',
    SET_DATA = '@SideBarData/SET_DATA',
    SET_ERROR = '@SideBarData/SET_ERROR'
}

/**
 * DataType type
 */

interface Currency {
    id: number,
    name: string,
    code: string,
    symbol: string
}

export interface SideBarData {
    accountabilityId: number,
    accountabilityStatus: string,
    currency: Currency,
    declared: number,
    approved: number,
    received: number,
    returned: number,
    balance: number,
    updatedOn: number
}

/**
 * State type
 */
export interface SideBarDataState {
    readonly data: SideBarData[];
    readonly loading: boolean;
    readonly error?: { status: string };
}
