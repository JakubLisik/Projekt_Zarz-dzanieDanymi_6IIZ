import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    eventSummary(id: string): Promise<{
        event: import("../events/event.entity").Event | null;
        totalTickets: number;
        totalRevenue: number;
    }>;
}
