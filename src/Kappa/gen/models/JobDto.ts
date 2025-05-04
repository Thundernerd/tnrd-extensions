/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

export type JobDto = {
    /**
     * Job Id
     */
    id?: string | null;
    /**
     * Human Readable title for the Job
     */
    title?: string | null;
    /**
     * When the job was created
     */
    createdAtUtc?: string | null;
    /**
     * Last time the job was run
     */
    lastExecutionUtc?: string | null;
    cron?: string | null;
};
