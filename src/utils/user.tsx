export const setUser = (args: { name: string, value: string }) => {
    localStorage.setItem(args.name, args.value);
};

export const getUser = (args: { name: string }) => {
    try {
        return { user: JSON.parse(localStorage.getItem(args.name) || '{}') };
    } catch (err) {
        return null;
    }
};

export const removeUser = (args: { name: string }) => {
    localStorage.removeItem(args.name);
};
