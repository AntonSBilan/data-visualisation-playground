export type RequestForm = {
    name: string;
    email: string;
    description: string;
    location: string;
    priority: 'low' | 'high';
    dueDate: string; // ISO date

    extraInformation: string;

    communicationChanel: 'email';

    notifications: Array<{
        name: string;
        email: string;
        event: 'on_complete' | 'on_status_change' | 'on_all_updates';
        uuid?: string; // for react child key
    }>
}
