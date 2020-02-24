import { redis } from './providers/redis';

export class Sessions {
    public static prefix = 'session:';

    public static async create(id: number) {
        await redis.set(`${Sessions.prefix}${id}`, '', 'EX', '2629800');
    }

    public static async verify(id: number) {
        const exists = await redis.exists(`${Sessions.prefix}${id}`);
        return Boolean(exists);
    }

    public static async remove(id: number) {
        await redis.del(`${Sessions.prefix}${id}`);
    }
}