/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LicenseInfoDto = {
    /**
     * If cancelled, will represent cancellation date. If not, will represent repayment date
     */
    expirationDate?: string;
    /**
     * If cancelled or not
     */
    isActive?: boolean;
    /**
     * If will be or is cancelled
     */
    isCancelled?: boolean;
    /**
     * Is the installed version valid for Kavita+ (aka within 3 releases)
     */
    isValidVersion?: boolean;
    /**
     * The email on file
     */
    registeredEmail?: string | null;
    /**
     * Number of months user has been subscribed
     */
    totalMonthsSubbed?: number;
    /**
     * A license is stored within Kavita
     */
    hasLicense?: boolean;
};

