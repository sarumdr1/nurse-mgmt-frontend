export const FormatRole = (role: string) => {
    const roleArray = role.split('_')
    return roleArray.join().replace(',', ' ')
}