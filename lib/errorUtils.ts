// lib/errorUtils.ts - Helper functions (NOT in _actions folder)


// lib/errorUtils.ts

export interface ApiError {
    message: string;
    statusCode?: number;
    success?: boolean;
    errorDetails?: {
        code?: string;
        field?: string;
        errors?: Array<{ field: string; message: string }>;
    };
}


// For API responses
export interface ApiResponse<T = unknown> {
    success: boolean;
    statusCode: number;
    message: string;
    data?: T;
    meta?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// lib/errorUtils.ts

import { ZodError } from 'zod';

export interface ApiError {
    message: string;
    statusCode?: number;
    success?: boolean;
    errorDetails?: {
        code?: string;
        field?: string;
        errors?: Array<{ field: string; message: string }>;
    };
}

// ✅ Proper ZodError type guard
export function isZodError(error: unknown): error is ZodError {
    return (
        error instanceof Error &&
        'issues' in error &&
        Array.isArray((error as ZodError).issues) &&
        typeof (error as ZodError).issues[0]?.path !== 'undefined'
    );
}

export function isErrorWithMessage(error: unknown): error is { message: string } {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as { message: string }).message === 'string'
    );
}

export function isApiError(error: unknown): error is ApiError {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as ApiError).message === 'string'
    );
}

export function getErrorMessage(error: unknown): string {
    if (isZodError(error)) {
        // Get first error message from Zod
        const firstIssue = error.issues[0];
        if (firstIssue) {
            const path = firstIssue.path.join('.');
            return `${path}: ${firstIssue.message}`;
        }
        return error.message || 'Validation failed';
    }
    if (isApiError(error)) {
        return error.message;
    }
    if (isErrorWithMessage(error)) {
        return error.message;
    }
    if (typeof error === 'string') {
        return error;
    }
    return 'An unexpected error occurred';
}

// ✅ Helper to format Zod errors for forms
export function formatZodErrors(error: unknown): Record<string, string[]> {
    if (isZodError(error)) {
        const errors: Record<string, string[]> = {};
        error.issues.forEach((err) => {
            const path = err.path.join('.');
            if (!errors[path]) errors[path] = [];
            errors[path].push(err.message);
        });
        return errors;
    }
    return {};
}

// For API responses
export interface ApiResponse<T = unknown> {
    success: boolean;
    statusCode: number;
    message: string;
    data?: T;
    meta?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}