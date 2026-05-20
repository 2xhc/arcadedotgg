import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AddBalanceRequest, AdminUserResponse, AuthCredentials, DepositRequest, ErrorResponse, HealthStatus, SuccessResponse, TransactionResponse, UserResponse, WalletResponse, WithdrawRequest } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getRegisterUrl: () => string;
/**
 * @summary Register a new user
 */
export declare const register: (authCredentials: AuthCredentials, options?: RequestInit) => Promise<UserResponse>;
export declare const getRegisterMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<AuthCredentials>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<AuthCredentials>;
}, TContext>;
export type RegisterMutationResult = NonNullable<Awaited<ReturnType<typeof register>>>;
export type RegisterMutationBody = BodyType<AuthCredentials>;
export type RegisterMutationError = ErrorType<ErrorResponse>;
/**
* @summary Register a new user
*/
export declare const useRegister: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<AuthCredentials>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<AuthCredentials>;
}, TContext>;
export declare const getLoginUrl: () => string;
/**
 * @summary Login
 */
export declare const login: (authCredentials: AuthCredentials, options?: RequestInit) => Promise<UserResponse>;
export declare const getLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<AuthCredentials>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<AuthCredentials>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<AuthCredentials>;
export type LoginMutationError = ErrorType<ErrorResponse>;
/**
* @summary Login
*/
export declare const useLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<AuthCredentials>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<AuthCredentials>;
}, TContext>;
export declare const getLogoutUrl: () => string;
/**
 * @summary Logout
 */
export declare const logout: (options?: RequestInit) => Promise<SuccessResponse>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
* @summary Logout
*/
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export declare const getGetMeUrl: () => string;
/**
 * @summary Get current user
 */
export declare const getMe: (options?: RequestInit) => Promise<UserResponse>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetWalletUrl: () => string;
/**
 * @summary Get current user's wallet
 */
export declare const getWallet: (options?: RequestInit) => Promise<WalletResponse>;
export declare const getGetWalletQueryKey: () => readonly ["/api/wallet"];
export declare const getGetWalletQueryOptions: <TData = Awaited<ReturnType<typeof getWallet>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWallet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getWallet>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetWalletQueryResult = NonNullable<Awaited<ReturnType<typeof getWallet>>>;
export type GetWalletQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current user's wallet
 */
export declare function useGetWallet<TData = Awaited<ReturnType<typeof getWallet>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWallet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDepositUrl: () => string;
/**
 * @summary Deposit funds
 */
export declare const deposit: (depositRequest: DepositRequest, options?: RequestInit) => Promise<TransactionResponse>;
export declare const getDepositMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deposit>>, TError, {
        data: BodyType<DepositRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deposit>>, TError, {
    data: BodyType<DepositRequest>;
}, TContext>;
export type DepositMutationResult = NonNullable<Awaited<ReturnType<typeof deposit>>>;
export type DepositMutationBody = BodyType<DepositRequest>;
export type DepositMutationError = ErrorType<ErrorResponse>;
/**
* @summary Deposit funds
*/
export declare const useDeposit: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deposit>>, TError, {
        data: BodyType<DepositRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deposit>>, TError, {
    data: BodyType<DepositRequest>;
}, TContext>;
export declare const getWithdrawUrl: () => string;
/**
 * @summary Withdraw funds
 */
export declare const withdraw: (withdrawRequest: WithdrawRequest, options?: RequestInit) => Promise<TransactionResponse>;
export declare const getWithdrawMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof withdraw>>, TError, {
        data: BodyType<WithdrawRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof withdraw>>, TError, {
    data: BodyType<WithdrawRequest>;
}, TContext>;
export type WithdrawMutationResult = NonNullable<Awaited<ReturnType<typeof withdraw>>>;
export type WithdrawMutationBody = BodyType<WithdrawRequest>;
export type WithdrawMutationError = ErrorType<ErrorResponse>;
/**
* @summary Withdraw funds
*/
export declare const useWithdraw: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof withdraw>>, TError, {
        data: BodyType<WithdrawRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof withdraw>>, TError, {
    data: BodyType<WithdrawRequest>;
}, TContext>;
export declare const getGetTransactionsUrl: () => string;
/**
 * @summary Get transaction history
 */
export declare const getTransactions: (options?: RequestInit) => Promise<TransactionResponse[]>;
export declare const getGetTransactionsQueryKey: () => readonly ["/api/wallet/transactions"];
export declare const getGetTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getTransactions>>>;
export type GetTransactionsQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get transaction history
 */
export declare function useGetTransactions<TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getAdminGetUsersUrl: () => string;
/**
 * @summary List all users (admin only)
 */
export declare const adminGetUsers: (options?: RequestInit) => Promise<AdminUserResponse[]>;
export declare const getAdminGetUsersQueryKey: () => readonly ["/api/admin/users"];
export declare const getAdminGetUsersQueryOptions: <TData = Awaited<ReturnType<typeof adminGetUsers>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type AdminGetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetUsers>>>;
export type AdminGetUsersQueryError = ErrorType<ErrorResponse>;
/**
 * @summary List all users (admin only)
 */
export declare function useAdminGetUsers<TData = Awaited<ReturnType<typeof adminGetUsers>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getAdminAddBalanceUrl: (userId: number) => string;
/**
 * @summary Add balance to a user (admin only)
 */
export declare const adminAddBalance: (userId: number, addBalanceRequest: AddBalanceRequest, options?: RequestInit) => Promise<AdminUserResponse>;
export declare const getAdminAddBalanceMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminAddBalance>>, TError, {
        userId: number;
        data: BodyType<AddBalanceRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminAddBalance>>, TError, {
    userId: number;
    data: BodyType<AddBalanceRequest>;
}, TContext>;
export type AdminAddBalanceMutationResult = NonNullable<Awaited<ReturnType<typeof adminAddBalance>>>;
export type AdminAddBalanceMutationBody = BodyType<AddBalanceRequest>;
export type AdminAddBalanceMutationError = ErrorType<ErrorResponse>;
/**
* @summary Add balance to a user (admin only)
*/
export declare const useAdminAddBalance: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminAddBalance>>, TError, {
        userId: number;
        data: BodyType<AddBalanceRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminAddBalance>>, TError, {
    userId: number;
    data: BodyType<AddBalanceRequest>;
}, TContext>;
export declare const getAdminGetTransactionsUrl: () => string;
/**
 * @summary List all transactions (admin only)
 */
export declare const adminGetTransactions: (options?: RequestInit) => Promise<TransactionResponse[]>;
export declare const getAdminGetTransactionsQueryKey: () => readonly ["/api/admin/transactions"];
export declare const getAdminGetTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof adminGetTransactions>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof adminGetTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type AdminGetTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetTransactions>>>;
export type AdminGetTransactionsQueryError = ErrorType<ErrorResponse>;
/**
 * @summary List all transactions (admin only)
 */
export declare function useAdminGetTransactions<TData = Awaited<ReturnType<typeof adminGetTransactions>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminGetTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map