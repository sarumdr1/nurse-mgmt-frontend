export const getToken = (args: { name: string }) => {
    try {
        return { token: JSON.parse(localStorage.getItem(args.name) || '{}') };
    } catch (err) {
        return null;
    }
};

export const setToken = (args: { name: string, value: string }) => {
    localStorage.setItem(args.name, args.value);
};

export const removeToken = (args: { name: string }) => {
    localStorage.removeItem(args.name);
};
