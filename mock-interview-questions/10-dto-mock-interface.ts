{
    interface Student {
        id: number;
        name: string;
        email: string;
        status: 'Active' | 'Inactive';
        residency: 'Resident' | 'NonResident' | 'NeedsReview';
    }

    interface PaginatedResult<T> {
        data: T[];
        total: number;
        page: number;
        limit: number;
    }
}