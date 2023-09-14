export const setUser = (args: { name: string, value: string }) => {
    localStorage.setItem(args.name, args.value);
};