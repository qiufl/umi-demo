const cache: Map<string, string> = new Map<string, string>();
const JWT_KEY: string = "__JWT__";
export function get(): string | null {
    let val: string | null | undefined = cache.get(JWT_KEY)
    if (!val) {
        if ((val = sessionStorage.getItem(JWT_KEY)) != null) {
            cache.set(JWT_KEY, val);
            return val;
        } else {
            return null;
        }
    }
    return val;
}
export function set(value: string) {
    sessionStorage.setItem(JWT_KEY, value);
    cache.set(JWT_KEY, value);
}