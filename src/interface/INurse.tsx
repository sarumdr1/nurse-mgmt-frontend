export interface INurse {
    ID: number,
    CreatedAt: string,
    UpdatedAt: string,
    DeletedAt: string | null,
    full_name: string,
    email: string,
    contact_number: number,
    working_days: string,
    working_shift: string,
    duty_start_time: string,
    duty_end_time: string,
    address: string,
    gender: string
}