export interface DatabaseConnection {
    connect(): void;
    close(): void;
}