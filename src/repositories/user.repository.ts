import { eq } from 'drizzle-orm';
import { users, userRoles } from '../db/schema';
import { User, UserResponse } from '../types/user.type';
import { db } from '../db/connection';

export class UserRepository {

    async findById(id: string): Promise<UserResponse | null> {
        const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
        return result.length > 0 ? this.mapToUser(result[0]) : null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
        return result.length > 0 ? result[0] : null;
    }

    async findRoleByDescription(description: string): Promise<string> {
        const result = await db.select().from(userRoles).where(eq(userRoles.description, description)).limit(1);
        return result[0].id;
    }

    async registerUser(user: User): Promise<UserResponse> {
            await db.insert(users).values(user);
            return this.mapToUser(user);
    }

    async connectUser(email: string, password: string): Promise<UserResponse> {
        const accountToConnect = await this.findByEmail(email);
        return this.mapToUser(accountToConnect);
    }

    private mapToUser(row: any): UserResponse {
        return {
            id: row.id,
            name: row.name,
            surname: row.surname,
            email: row.email,
            createdAt: row.createdAt,
            updatedAt: row.updatedAt
        };
    }
}