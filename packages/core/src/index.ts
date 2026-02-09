export type Maybe<T> = T | null | undefined;

export const isDefined = <T>(value: Maybe<T>): value is T => {
    return value !== null && value !== undefined;
};
