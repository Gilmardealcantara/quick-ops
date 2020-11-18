/**
 * Action types
 */
export enum TimelineTypes {
    LOAD = '@Timeline/LOAD',
    ADD_EXPENSE = '@Timeline/ADD_EXPENSE',
    SET_DATA = '@Timeline/SET_DATA',
    SET_ERROR = '@Timeline/SET_ERROR'
}

/**
 * Data type
 */

export interface TimelineItem {
    id: number,
    cardDate: number,
    cardType: 'EXPENSE' | 'EVALUATION' | 'ACCOUNTABILITY_SUBMITTED' | 'ACCOUNTABILITY_CREATED',
    expenseId: number,
    invoiceDate: number,
    expenseTypeId: number,
    expenseTypeCode: 'hotel-fee' | 'food' | 'transport',
    expenseTypeIcon: string,
    currencyId: number,
    currencyCode: 'BRL' | 'USD' | 'MXN',
    currencySymbol: string,
    resourceUrl: string,
    contentType: string,
    amountSpent: number,
    amountTotal: number,
    notes: string,
    status: string,
    updatedOn: string,
    expenseEvaluation: string
}


/**
 * State type
 */
export interface TimelineState {
    readonly data: TimelineItem[];
    readonly loading: boolean;
    readonly error?: { status: string };
}
