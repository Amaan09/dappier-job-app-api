export const toSnakeCase = (obj: any): any => {
    if (Array.isArray(obj)) {
        return obj.map(item => toSnakeCase(item));
    }
    if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            const snakeKey = camelToSnake(key);
            acc[snakeKey] = toSnakeCase(obj[key]);
            return acc;
        }, {} as Record<string, any>);
    }
    return obj;
};

export const toCamelCase = (obj: any): any => {
    if (Array.isArray(obj)) {
        return obj.map(item => toCamelCase(item));
    }
    if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            const camelKey = snakeToCamel(key);
            acc[camelKey] = toCamelCase(obj[key]);
            return acc;
        }, {} as Record<string, any>);
    }
    return obj;
};

const camelToSnake = (str: string): string => {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};

const snakeToCamel = (str: string): string => {
    return str.replace(/(_\w)/g, matches => matches[1].toUpperCase());
};
